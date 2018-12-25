import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {AngularMaterialModule} from '../../shared/template/angular-material/angular-material.module';
import {LoginRoutingModule} from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    LoginRoutingModule,
  ],
  declarations: [LoginComponent],
})
export class LoginModule {
}
