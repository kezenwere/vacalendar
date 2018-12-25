import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPagesComponent} from './error-pages.component';
import {FatalErrorComponent} from './fatal-error/fatal-error.component';
import {AppConstantsService} from '../shared/service/app-constants/app-constants.service';


const errorPagesRoutes: Routes = [
  {
    path: '', component: ErrorPagesComponent,
    children: [
      {path: AppConstantsService.FRONTEND_ROUTE_ERROR_FATAL, component: FatalErrorComponent},
      {path: '', redirectTo: AppConstantsService.FRONTEND_ROUTE_ERROR_FATAL, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(errorPagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorPagesRoutingModule {
}
