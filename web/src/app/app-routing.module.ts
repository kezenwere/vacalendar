import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppConstantsService} from './shared/service/app-constants/app-constants.service';
import {AuthGuard} from './shared/guards/auth.guard';
import {PageNotFoundErrorComponent} from './error-pages/page-not-found-error/page-not-found-error.component';
import {ShouldLoginGuard} from './shared/guards/should-login.guard';

const appRoutes: Routes = [
  {
    path: AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED,
    canActivate: [AuthGuard],
    loadChildren: './authenticated/authenticated.module#AuthenticatedModule'
  },
  {
    path: AppConstantsService.FRONTEND_ROUTE_AUTH,
    canActivate: [ShouldLoginGuard],
    loadChildren: './auth/auth.module#AuthModule'
  },
  {path: AppConstantsService.FRONTEND_ROUTE_ERROR, loadChildren: './error-pages/error-pages.module#ErrorPagesModule'},
  {path: '', redirectTo: AppConstantsService.FRONTEND_ROUTE_AUTH, pathMatch: 'full'},
  {path: '**', component: PageNotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes, { enableTracing: true } /* TODO: <-- debugging purposes only */)],
  exports: [RouterModule],
  declarations: [
    PageNotFoundErrorComponent
  ]
})
export class AppRoutingModule { }
