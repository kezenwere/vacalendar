import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {ErrorPagesModule} from './error-pages/error-pages.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppConstantsService} from './shared/service/app-constants/app-constants.service';
import {AuthUtilService} from './auth/service/auth-util.service';
import {AuthGuard} from './shared/guards/auth.guard';
import {HttpRegularInterceptorService} from './shared/service/abstract-http-client/http-interceptors/http-regular-interceptor/http-regular-interceptor.service';
import {AppWideServiceModule} from './shared/service/app-wide-service/app-wide-service.module';
import {LocalStorageModule} from './shared/service/local-storage/local-storage.module';
import {CustomCookieModule} from './shared/service/cookie/custom-cookie.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AppWideServiceModule,
    LocalStorageModule,
    CustomCookieModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRegularInterceptorService,
      multi: true,
    },
    AppConstantsService,
    // DeviceService,
    AuthUtilService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
