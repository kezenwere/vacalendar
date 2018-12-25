import {HttpHeaders, HttpParams} from '@angular/common/http';

export class HttpRequestOptions {
  public headers?: HttpHeaders | {
                [header: string]: string | string[];
              };
              public observe: string = 'response';
              public params?: HttpParams | {
                [param: string]: string | string[];
              };
              public reportProgress?: boolean;
              public responseType: string = 'json';
              public withCredentials?: boolean;
}
