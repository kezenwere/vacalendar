// export enum ConnectionStatus {
//   Online,
//   Offline
// }
//
//
// import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs/';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class NetworkConnectionService {
//
//   public static status: ConnectionStatus = ConnectionStatus.Online;
//   private static online$: Observable<any>;
//   private static offline$: Observable<any>;
//
//   constructor() {
//     NetworkConnectionService.init();
//   }
//
//   public static init() {
//     NetworkConnectionService.online$ = Observable.fromEvent(window, 'online');
//     NetworkConnectionService.offline$ = Observable.fromEvent(window, 'offline');
//
//     NetworkConnectionService.online$.subscribe(e => {
//       console.log('Online');
//       NetworkConnectionService.status = ConnectionStatus.Online;
//     });
//
//     NetworkConnectionService.offline$.subscribe(e => {
//       console.log('Offline');
//       NetworkConnectionService.status = ConnectionStatus.Offline;
//     });
//   }
// }
