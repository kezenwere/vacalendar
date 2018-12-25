import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticatedComponent } from './authenticated.component';
import {ContentModule} from './content/content.module';
import {HeaderModule} from './header/header.module';
import {AuthenticatedRoutingModule} from './authenticated.routing';

@NgModule({
  declarations: [
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    ContentModule,
    HeaderModule,
  ]
})
export class AuthenticatedModule { }
