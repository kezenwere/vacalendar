import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs/index';
import {ServerResponse} from '../../shared/service/abstract-http-client/server-response';
import {AbstractHttpClientService} from '../../shared/service/abstract-http-client/abstract-http-client.service';
import {AppWideService} from '../../shared/service/app-wide-service/app-wide.service';
import {HttpClient} from '@angular/common/http';
import {AuthUtilService} from './auth-util.service';
import {AppConstantsService} from '../../shared/service/app-constants/app-constants.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends AbstractHttpClientService<ServerResponse> {

  userReplaySubject: ReplaySubject<any> = new ReplaySubject(1);

  constructor(http: HttpClient,
              appWideService: AppWideService,
              authUtilService: AuthUtilService,
              appConstantsService: AppConstantsService) {
    super('v1/users', 'application/x-www-form-urlencoded', http, appWideService, authUtilService, appConstantsService);
  }

  public createUser(payload: Object): Observable<ServerResponse> {
    return super.post(payload);
  }

  public getUserById(userId: string): Observable<ServerResponse> {
    return super.get(userId);
  }

  public getAllUsers(): Observable<ServerResponse> {
    return super.get();
  }

  public updateUser(payload: Object, userId: string): Observable<ServerResponse> {
    return super.put(payload, userId);
  }

  public deleteUser(userId: string): Observable<ServerResponse> {
    return super.delete(userId);
  }

  onUserModified(userService: UserService) {

    AppWideService.webSocketConnect((stompClient: any) => {
      stompClient.subscribe('/topic/users/modified', (serverResponse) => {
          this.userReplaySubject.next(serverResponse);
          return this.userReplaySubject;
        },
        error => console.log('Websocket Error: Can\'t subscribe... ', error));
    }, () => {
      userService.onUserModified(userService);
    });
  }

}
