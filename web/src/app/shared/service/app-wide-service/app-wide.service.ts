import {Injectable, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {StatusModalComponent} from './modals/status-modal/status-modal.component';
import {ConfirmModalComponent} from './modals/confirm-modal/confirm-modal.component';
import Sha from 'sha.js';
import {AppConstantsService} from '../app-constants/app-constants.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs/index';
import {RowNode} from 'ag-grid-community';

import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable()
export class AppWideService {

  static webSocketReconnectionInterval = null;
  static wbs: string;
  globalModalList: MatDialogRef<any>[] = [];
  private selectedVacationRows: RowNode[] = [];
  public searchFilterObservable: ReplaySubject<string> = new ReplaySubject<string>(1);

  constructor(private mdDialog: MatDialog,
              private appConstantsService: AppConstantsService,
              private router: Router) {
    AppWideService.wbs = this.appConstantsService.getWebsocketApiRootPath();
  }

  static webSocketConnect(onSuccessCallback, onFailureCallback) {
    // const that = this;
    const socket = new SockJS(AppWideService.wbs);
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, (frame) => {
      console.log('WebS Connected: ' + frame);

      clearInterval(this.webSocketReconnectionInterval);
      this.webSocketReconnectionInterval = null;
      onSuccessCallback(stompClient);

    }, () => {
      if (this.webSocketReconnectionInterval === null) {
        this.webSocketReconnectionInterval = setInterval(() => {
          // location.reload();
          onFailureCallback();
          console.log('Connection lost!: ' + this.webSocketReconnectionInterval.runCount);
          if (this.webSocketReconnectionInterval.runCount >= 100) {
            clearInterval(this.webSocketReconnectionInterval);
          }
        }, 5000);
      }
    });
  }

  setSearchFilterValue(searchFilter: string) {
    this.searchFilterObservable.next(searchFilter);
  }

  getSelectedVacationRows() {
    return this.selectedVacationRows;
  }

  setSelectedVacationRows(selectedVacationRows: RowNode[]) {
    this.selectedVacationRows = selectedVacationRows;
  }


  openStatusModal(message: string, status: string, vcr: ViewContainerRef): MatDialogRef<any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.viewContainerRef = vcr;
    const dialog = this.mdDialog.open(StatusModalComponent, dialogConfig);
    (<any>dialog.componentInstance).message = message;
    (<any>dialog.componentInstance).status = status;

    return dialog;
  }

  openConfirmModal(message: string, iconClass: string, vcr: ViewContainerRef): Observable<any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.viewContainerRef = vcr;
    const dialog = this.mdDialog.open(ConfirmModalComponent, dialogConfig);
    (<any>dialog.componentInstance).message = message;
    (<any>dialog.componentInstance).iconClass = iconClass;

    return dialog.afterClosed();
  }

  public sha256(value: any): string {
    return new Sha.sha256('').update(value).digest('hex');
  }

  public getErrorMessage(serverError: HttpErrorResponse): string {
    let errorMessages = '';

    try {
      errorMessages = serverError.error.data.message;
    } catch (err) {
      errorMessages = 'Unknown error (Check your internet connection)';
      console.error('Unknown serverError: ', serverError);
    }

    return errorMessages;
  }
}
