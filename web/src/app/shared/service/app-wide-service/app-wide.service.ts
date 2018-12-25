import {Injectable, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {StatusModalComponent} from './modals/status-modal/status-modal.component';
import {ConfirmModalComponent} from './modals/confirm-modal/confirm-modal.component';
import Sha from 'sha.js';
import {AppConstantsService} from '../app-constants/app-constants.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, of, ReplaySubject} from 'rxjs/index';
import {RowNode} from 'ag-grid-community';

// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';

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
    // // const that = this;
    // const socket = new SockJS(AppWideService.wbs);
    // const stompClient = Stomp.over(socket);
    // stompClient.connect({}, (frame) => {
    //   console.log('Connected: ' + frame);
    //
    //   clearInterval(this.webSocketReconnectionInterval);
    //   this.webSocketReconnectionInterval = null;
    //   onSuccessCallback(stompClient);
    //
    // }, () => {
    //   if (this.webSocketReconnectionInterval === null) {
    //     this.webSocketReconnectionInterval = setInterval(() => {
    //       // location.reload();
    //       onFailureCallback();
    //       console.log('Connection lost!: ' + this.webSocketReconnectionInterval.runCount);
    //       if (this.webSocketReconnectionInterval.runCount >= 100) {
    //         clearInterval(this.webSocketReconnectionInterval);
    //       }
    //     }, 5000);
    //   }
    // });
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
    // Open dialog to add add message
    // 1. createMember dialog config
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;

    dialogConfig.viewContainerRef = vcr;
    // 2. open dialog
    const dialog = this.mdDialog.open(StatusModalComponent, dialogConfig);
    // 3. pass selected model to dialog
    (<any>dialog.componentInstance).message = message;
    (<any>dialog.componentInstance).status = status;

    return dialog;
  }

  openConfirmModal(message: string, iconClass: string, vcr: ViewContainerRef): Observable<any> {
    // Open dialog to add add message
    // 1. createMember dialog config
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;

    dialogConfig.viewContainerRef = vcr;
    // 2. open dialog
    const dialog = this.mdDialog.open(ConfirmModalComponent, dialogConfig);
    // 3. pass selected model to dialog
    (<any>dialog.componentInstance).message = message;
    (<any>dialog.componentInstance).iconClass = iconClass;

    // Return an observable
    return dialog.afterClosed();
  }

  sendToLocalStore(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  closeAllGlobalModals() {
    this.globalModalList.forEach((globalModal) => {
      globalModal.close();
    });
  }

  public sha256(value: any): string {
    return new Sha.sha256('').update(value).digest('hex');
  }

  public sha512(value: any): string {
    return new Sha.sha512('').update(value).digest('hex');
  }

  public patternDigitsNonEmpty(): string {
    return '[0-9]+';
  }

  public navigateTo(node: string) {
    const curUrl = this.router.routerState.snapshot.url;
    this.router.navigate([curUrl + '/' + node]);
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
