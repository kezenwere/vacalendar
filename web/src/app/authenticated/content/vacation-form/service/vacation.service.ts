import { Injectable } from '@angular/core';
import {ServerResponse} from '../../../../shared/service/abstract-http-client/server-response';
import {AbstractHttpClientService} from '../../../../shared/service/abstract-http-client/abstract-http-client.service';
import {Observable, ReplaySubject} from 'rxjs/index';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppWideService} from '../../../../shared/service/app-wide-service/app-wide.service';
import {AuthUtilService} from '../../../../auth/service/auth-util.service';
import {AppConstantsService} from '../../../../shared/service/app-constants/app-constants.service';

@Injectable({
  providedIn: 'root'
})
export class VacationService extends AbstractHttpClientService<ServerResponse> {

  static RESOURCE_PATH = 'v1/vacations';
  static CONTENT_TYPE = 'application/x-www-form-urlencoded';
  vacationReplaySubject: ReplaySubject<any> = new ReplaySubject(1);

  constructor(http: HttpClient,
              appWideService: AppWideService,
              authUtilService: AuthUtilService,
              appConstantsService: AppConstantsService) {
    super(VacationService.RESOURCE_PATH, VacationService.CONTENT_TYPE, http, appWideService, authUtilService, appConstantsService);
  }


  public createVacation(payload: Object): Observable<ServerResponse> {
    return super.post(payload);
  }

  public getVacationById(vacationId: string): Observable<ServerResponse> {
    return super.get(vacationId);
  }

  public getAllVacations(): Observable<ServerResponse> {
    return super.get();
  }

  public updateVacation(payload: Object, vacationId: string): Observable<ServerResponse> {
    return super.put(payload, vacationId);
  }

  public approveVacation(vacationId: string): Observable<ServerResponse> {
    return super.put(null, vacationId + '/approve');
  }

  public rejectVacation(vacationId: string): Observable<ServerResponse> {
    return super.put(null, vacationId + '/reject');
  }

  public deleteVacation(vacationId: string): Observable<ServerResponse> {
    return super.delete(vacationId);
  }

  onVacationModified(vacationService: VacationService) {

    AppWideService.webSocketConnect((stompClient: any) => {
      stompClient.subscribe('/topic/vacations/modified', (serverResponse) => {
          this.vacationReplaySubject.next(serverResponse);
          return this.vacationReplaySubject;
        },
        error => console.log('Websocket Error: Can\'t subscribe... ', error));
    }, () => {
      vacationService.onVacationModified(vacationService);
    });
  }
}
