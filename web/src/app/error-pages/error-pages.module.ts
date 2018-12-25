import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorPagesComponent} from './error-pages.component';
import {FatalErrorComponent} from './fatal-error/fatal-error.component';
import {ErrorPagesRoutingModule} from './error-pages.routing';

@NgModule({
  imports: [
    CommonModule,
    ErrorPagesRoutingModule,
  ],
  declarations: [
    ErrorPagesComponent,
    FatalErrorComponent,
  ],
})
export class ErrorPagesModule {
}
