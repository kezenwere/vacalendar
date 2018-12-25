import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmModalComponent} from './modals/confirm-modal/confirm-modal.component';
import {StatusModalComponent} from './modals/status-modal/status-modal.component';
import {AppWideService} from './app-wide.service';
import {AngularMaterialModule} from '../../template/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [
    ConfirmModalComponent,
    StatusModalComponent
  ],
  entryComponents: [
    StatusModalComponent,
    ConfirmModalComponent
  ],
  exports: [
    StatusModalComponent,
    ConfirmModalComponent
  ],
  providers: [
    AppWideService
  ]
})
export class AppWideServiceModule { }
