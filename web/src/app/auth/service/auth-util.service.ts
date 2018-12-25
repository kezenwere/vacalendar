import {Injectable, Injector} from '@angular/core';
import {AppWideService} from '../../shared/service/app-wide-service/app-wide.service';
import {AppConstantsService} from '../../shared/service/app-constants/app-constants.service';
import {AuthRequest, AuthSuccessToken, AuthTokenDetails} from '../models';
import {HttpClient} from '@angular/common/http';
import {ServerResponse} from '../../shared/service/abstract-http-client/server-response';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../shared/service/local-storage/local-storage.service';
import * as jwt_decode from 'jwt-decode';
import {Observable, of, throwError} from 'rxjs/index';
import {CustomCookieService} from '../../shared/service/cookie/custom-cookie.service';

@Injectable()
export class AuthUtilService {

  USER_COOKIE_EXPIRES = 60 * 24; // 1 day

  authSuccessToken: AuthSuccessToken = new AuthSuccessToken();
  public redirectUrl: string
  private http: HttpClient;

  constructor(private appWideService: AppWideService,
              private localStorageService: LocalStorageService,
              // private http: HttpClient,
              private router: Router,
              private appConstantsService: AppConstantsService,
              private injector: Injector,
              private cookieService: CustomCookieService) {

    // Just to avoid circular dependency on HttpClient
    setTimeout(() => { // Removing timer would cause MaxCallStack Exception
      this.http = this.injector.get(HttpClient);
    }, 1);

  }

  getAuthTokenDetails(): AuthTokenDetails {
    try {
      return <AuthTokenDetails> jwt_decode(this.getAuthSuccessToken().jwtToken);
    } catch (err) {
      console.error(err);
    }
  }

  public setAuthSuccessToken(authSuccessToken: AuthSuccessToken) {
    console.log('setAuthSuccessToken authSuccessToken: ', authSuccessToken);
    this.authSuccessToken = authSuccessToken;
    this.localStorageService.setObj(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN, authSuccessToken);
    // this.cookieService.setObj(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN, authSuccessToken, this.USER_COOKIE_EXPIRES);
    // Set ActiveOrganizationId
    // this.setActiveOrganizationId(this.getAuthTokenDetails().organizationId);
    //
    // // Set HasRecentlyLogged
    // this.setHasRecentlyLogged();

  }

  public removeAuthSuccessToken() {
    // this.cookieService.delete(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN)
    this.localStorageService.remove(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN);
  }

  public isLoggedIn(): boolean {
    return !!this.getAuthSuccessToken();
  }

  public getAuthSuccessToken(): AuthSuccessToken {
    // if (!this.authSuccessToken.access_token) {
    // this.authSuccessToken = <AuthSuccessToken> this.cookieService.getObj(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN);
    this.authSuccessToken = <AuthSuccessToken> this.localStorageService.getObj(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN);

    // if (!this.authSuccessToken) {
    //   this.logoutUser();
    // }

    console.log('getAuthSuccessToken authSuccessToken: ', this.authSuccessToken);

    return this.authSuccessToken;
  }

  public refreshAuthToken(): Observable<AuthSuccessToken> {
    const authRequest: AuthRequest = new AuthRequest(AppConstantsService.BACKEND_OAUTH2_GRANT_TYPE_REFRESH_TOKEN);
    const authSuccessToken = this.getAuthSuccessToken();
    authRequest.refresh_token = authSuccessToken.jwtToken;

    setTimeout(() => { // Just a lil delay since we injected 'HttpClient'
      this.http.post<ServerResponse>('v1/auth/refresh', authRequest).subscribe(
        (serverResponse: ServerResponse) => {
          const refreshedAuthSuccessToken = <AuthSuccessToken> serverResponse.data;
          this.authSuccessToken = refreshedAuthSuccessToken;
          console.log('refreshAuthToken authSuccessToken: ', authSuccessToken);
          this.setAuthSuccessToken(refreshedAuthSuccessToken);
        },
        (error) => {
          console.error(error);
        },
      );
    }, 0);

    return of(this.authSuccessToken);
  }

  // public setActiveOrganizationId(organizationId: string) {
  //   this.localStorageService.setStr(AppConstantsService.COOKIE_ORGANIZATION_ID, organizationId);
  // }
  //
  // public getActiveOrganizationId(notNull: boolean): string {
  //   const orgId = this.localStorageService.getStr(AppConstantsService.COOKIE_ORGANIZATION_ID);
  //
  //
  //   if (window.location.toString().indexOf('localhost:4200') === -1) { // Not Dev
  //     if (notNull && (!orgId || orgId.length < 30)) {
  //       this.logoutUser();
  //     }
  //   }
  //
  //   return orgId;
  // }

  public logoutUser() {
    this.redirectUrl = null;

    this.removeAuthSuccessToken();
    this.router.navigate([this.appConstantsService.getLoginRouterLink()]);

    return throwError('User logged out!!');
  }
}
