import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {AuthUtilService} from '../../../../../auth/service/auth-util.service';
import {AuthSuccessToken} from '../../../../../auth/models';
import {BehaviorSubject, Observable, throwError} from 'rxjs/index';
import {filter, switchMap, take, tap} from 'rxjs/operators';
import {AppConstantsService} from '../../../app-constants/app-constants.service';

@Injectable()
export class HttpRegularInterceptorService implements HttpInterceptor {
  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<AuthSuccessToken> = new BehaviorSubject<AuthSuccessToken>(null);

  constructor(private authUtilService: AuthUtilService,
              private appConstantsService: AppConstantsService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = this.addHeaders(req, this.authUtilService.getAuthSuccessToken());
    const started = Date.now();

    console.log('REQUEST: ', clonedReq);

    const networkResponse = next.handle(clonedReq)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
          }
        }, (error: any) => {
          if (error instanceof HttpErrorResponse) {
            console.error('vaCalendar: ', error);
            switch ((<HttpErrorResponse>error).status) {
              case 400:
                return this.handle400Error(error);
              case 401:
                return this.handle401Error(req, next);
              default:
                return throwError(error);
            }
          } else {
            console.error('UNKNOWN ERROR OCCURRED!');
            return throwError(error);
          }
        }),
      );

    return networkResponse;
  }

  private addHeaders(req: HttpRequest<any>, authSuccessToken: AuthSuccessToken): HttpRequest<any> {
    const header: any = {};

    // Authorization Token
    if (req.url.indexOf('auth') === -1) { // Not login
      if (authSuccessToken !== null && authSuccessToken.jwtToken) {
        header.Authorization = this.appConstantsService.getJwtPrefix() + authSuccessToken.jwtToken;
      }
    }

    return req.clone({setHeaders: header});
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler) {
    console.error('handle401Error: ', req);
    // TODO: Fix this, make to work with Google Api
    return this.authUtilService.logoutUser();

    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);

      return this.authUtilService.refreshAuthToken()
        .pipe(
          switchMap(
            (newAuthToken: AuthSuccessToken) => {
              if (newAuthToken !== null && newAuthToken.jwtToken) {
                this.tokenSubject.next(newAuthToken);
                return next.handle(this.addHeaders(req, newAuthToken));
              }

              // If we don't get a new token, we are in trouble so logout.
              return this.authUtilService.logoutUser();
            }),
        ).subscribe(
          () => {
          },
          error => {
            // If there is an exception calling 'refreshToken', bad news; so logout.
            console.error('handle401Error: ', error);

            return this.authUtilService.logoutUser();
          }, () => {
            this.isRefreshingToken = false;
          });
    } else {
      return this.tokenSubject
        .pipe(
          filter(token => token != null),
          take(1),
          switchMap(token => {
            return next.handle(this.addHeaders(req, token));
          }));
    }
  }

  private handle400Error(error) {
    console.error('handle400Error: ', error);

    if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
      // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
      return this.authUtilService.logoutUser();
    }

    return throwError(error);
  }
}
