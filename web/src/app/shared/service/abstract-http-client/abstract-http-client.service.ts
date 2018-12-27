///<reference path='../../../../../node_modules/@angular/common/http/src/interceptor.d.ts'/>
import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
// import { map, filter } from 'rxjs/operators';
import {ServerResponse} from './server-response';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthUtilService} from '../../../auth/service/auth-util.service';
import {AppConstantsService} from '../app-constants/app-constants.service';
import {AppWideService} from '../app-wide-service/app-wide.service';
// import {UploadFile} from '../../../authenticated/people/members/models';
import {Observable} from 'rxjs/index';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable()
export class AbstractHttpClientService<T> {

  baseUrl: string;
  payload: any;

  constructor(public resource: string = '',
              public ContentType: string = '',
              public http: HttpClient,
              public appWideService: AppWideService,
              public authUtilService: AuthUtilService,
              public appConstantsService: AppConstantsService) {
    this.baseUrl = this.appConstantsService.getAppApiRootPath();
  }

  /////////////    GET /////////////////////////////////
  public get(node: string = '',
             params?: HttpParams,
             headers?: HttpHeaders): Observable<T> {

    const url = this.buildRelativeUrl(this.resource, node);
    console.log('GET URL: ', url);

    return this.http.get<T>(url, this.buildRequestOptions(params, headers));
  }

  /////////////    PUT /////////////////////////////////
  public put(payload: Object,
             node: string = '',
             params?: HttpParams,
             headers?: HttpHeaders): Observable<T> {

    const url = this.buildRelativeUrl(this.resource, node);
    console.log('PUT URL', url);
    console.log('Raw Payload: ', payload);

    return this.http.put<T>(url, payload, this.buildRequestOptions());

  }

  /////////////    PATCH /////////////////////////////////
  public patch(payload: Object,
               node: string = '',
               params?: HttpParams,
               headers?: HttpHeaders): Observable<T> {

    const url = this.buildRelativeUrl(this.resource, node);
    console.log('PATCH URL', url);
    console.log('Raw Payload: ', this.payload);

    return this.http.patch <T>(url, payload, this.buildRequestOptions());

  }

  /////////////    DELETE /////////////////////////////////
  public delete(node: string,
                params?: HttpParams,
                headers?: HttpHeaders): Observable<T> {

    const url = this.buildRelativeUrl(this.resource, node);
    console.log('Delete URL', url);

    return this.http.delete<T>(url, this.buildRequestOptions());

  }


  /////////////    POST /////////////////////////////////

  public post(payload: Object,
              node: string = '',
              params?: HttpParams,
              headers?: HttpHeaders,
              reportProgress: boolean = false): Observable<T> { // HttpResponse

    const url = this.buildRelativeUrl(this.resource, node);

    console.log('POST URL: ', url);

    console.log('Raw payload: ', payload);

    return this.http.post<T>(url, payload, this.buildRequestOptions());
  }

  /////////////    POST WITH PROGRESS/////////////////////////////////
  public postWithProgress(node: string = '', payload: Object): Observable<T> {
    return this.post(payload, node, null, null, true);
  }

  //////////////////////////////////  UPLOAD FILE     ////////////////////////////////
  // public uploadFile(file: UploadFile, node: string = ''): Observable<T> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', file.file, file.file.name);
  //
  //   return this.postWithProgress(node, formData);
  // }

  ////////////////////////////////////////////////////////////////////////////////////
  testRequest() {
    this.http.get('/')
      .pipe(
        retry(3),
        catchError(this.handleError),
      )
      .subscribe(
        data => {
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('An error occurred:', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        },
      );
  }

  /*{
    observe: 'response', responseType: 'text'
    headers: new HttpHeaders().setObj('Authorization', 'my-auth-token'),
    params: new HttpParams().setObj('id', '3'),
  }*/

// ERROR HANDLING
//   private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: ${error.error}`);
//     }
//     // return an ErrorObservable with a user-facing error message
//     return new ErrorObservable(
//       'Something bad happened; please try again later.');
//   }

  ////////////////////////////////// HELPER METHODS /////////////////////////////////
  private buildRequestOptions(params?: HttpParams, headers?: HttpHeaders): Object {
    const httpOptions = {
      params: params,
      headers: headers,
    };
    console.log('httpOptions: ', httpOptions);
    return httpOptions;
  }

  private buildFullUrl(base: string, resource: string, node?: string): string {
    return base
      + (resource ? '/' + resource : '')
      + (node ? '/' + node : '');
  }

  private buildRelativeUrl(resource: string, node?: string): string {
    return this.baseUrl + (resource ? resource : '') + (node ? '/' + node : '');
  }

  private payloadEncode(obj: Object): string {
    if (this.ContentType === AppConstantsService.REQUEST_HEADER_CONTENT_TYPE_FORM_URLENCODED) {
      const urlSearchParams = new URLSearchParams();
      for (const key in obj) {
        if (key) {
          urlSearchParams.append(key, obj[key]);
        }
      }
      return urlSearchParams.toString();
    }

    return JSON.stringify(obj);
  }
  //
  // private extractData(res: Response) {
  //   console.log('Server response: ', res)
  //   const jwtToken = res.headers.get(AppConstantsService.JWT_HEADER_NAME);
  //   console.log('token: ', jwtToken)
  //   saveJwtToken(jwtToken);
  //   saveLastActiveTime();
  //   const body = res.json() || {};
  //   const response: ServerResponse = new ServerResponse();
  //   response.data = body;
  //   return response;
  //
  //   function saveJwtToken(token: string) {
  //     if (token && token.startsWith(AppConstantsService.JWT_PREFIX)) {
  //       localStorage.setItem(AppConstantsService.JWT_HEADER_NAME, JSON.stringify(token));
  //     }
  //   }
  //
  //   function saveLastActiveTime() {
  //     const date = new Date().getTime();
  //     localStorage.setItem(AppConstantsService.LAST_ACTIVE_TIME, JSON.stringify(date));
  //   }
  // }

  private handleError(error: Response | any) {
    console.log('Error response: ', error)
    let errorMessage: string;
    let errorStatusCode: number;
    try {
      errorStatusCode = +error.status;

      if (error instanceof Response) {
        const body = error.json() || '';
        console.error('errorMessageBody: ', body)
        // errorMessage = body.message || body.data.message || body.data || JSON.stringify(body);
      } else {
        errorMessage = error.message || error.toString();
        console.error('errorMessage: ', errorMessage);
      }
    } catch (err) {
      console.error('FATAL ERROR: ', err);
    }

    const response: ServerResponse = new ServerResponse();
    // const newError = new Error(errorStatusCode, errorMessage);
    // response.error = newError;
    console.log('errorMessageResponse: ', response)
    actOnServerStatusCode(errorStatusCode);
    return Observable.throw(response); // response.error.message;


    function actOnServerStatusCode(statusCode: number) {
      console.error('statusCode: ', statusCode)
      switch (+statusCode) {
        case 401: // Access Denied
        case 405: // Method Not Allowed
                  // AbstractBackendService._router.navigate(['/']); // AppConstants.ROUTE_LOGOUT
          break;
        case 404: // Not Found
                  // setTimeout(() => { // Wait for 1 sec
        // AbstractBackendService._router.navigate(['/']);
        // }, 1000);

      }
    }
  }

}
