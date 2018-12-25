import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CookieService} from 'ngx-cookie-service';
import {CustomCookieService} from './custom-cookie.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CustomCookieService,
    CookieService,
  ]
})
export class CustomCookieModule { }
