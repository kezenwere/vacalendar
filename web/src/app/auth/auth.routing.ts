import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from './logout/logout.component';
import {AuthComponent} from './auth.component';
import {AppConstantsService} from '../shared/service/app-constants/app-constants.service';


const authRoutes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      {path: AppConstantsService.FRONTEND_ROUTE_AUTH_LOGIN, loadChildren: './login/login.module#LoginModule'},
      {path: AppConstantsService.FRONTEND_ROUTE_AUTH_LOGOUT, component: LogoutComponent},
      {path: '', redirectTo: AppConstantsService.FRONTEND_ROUTE_AUTH_LOGIN, pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutingModule {
}
