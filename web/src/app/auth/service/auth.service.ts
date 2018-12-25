import {Injectable} from '@angular/core';
import {AppConstantsService} from '../../shared/service/app-constants/app-constants.service';
import {AbstractHttpClientService} from '../../shared/service/abstract-http-client/abstract-http-client.service';
import {ServerResponse} from '../../shared/service/abstract-http-client/server-response';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppWideService} from '../../shared/service/app-wide-service/app-wide.service';
import {AuthUtilService} from './auth-util.service';
import {Observable, ReplaySubject} from 'rxjs/index';

@Injectable()
export class AuthService extends AbstractHttpClientService<ServerResponse> {

  constructor(http: HttpClient,
              appWideService: AppWideService,
              authUtilService: AuthUtilService,
              appConstantsService: AppConstantsService) {
    super('v1/auth', 'application/x-www-form-urlencoded', http, appWideService, authUtilService, appConstantsService);
  }

  public login(payload: Object): Observable<ServerResponse> {
    return super.post(payload, 'login');
  }

  public authRequest(): Observable<ServerResponse> {
    return super.get('google');
  }

  public authCode2Jwt(authCode: string): Observable<ServerResponse> {
    const params = new HttpParams().set('authCode', authCode);
    return super.get('auth-code', params);
  }
}
