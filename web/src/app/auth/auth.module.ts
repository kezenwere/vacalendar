import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth.routing';
import {AuthService} from './service/auth.service';
import {LoginModule} from './login/login.module';
import {LogoutModule} from './logout/logout.module';

@NgModule({
  imports: [
    CommonModule,
    LogoutModule,
    AuthRoutingModule,
  ],
  declarations: [AuthComponent],
  providers: [
    AuthService
  ]
})
export class AuthModule {
}
