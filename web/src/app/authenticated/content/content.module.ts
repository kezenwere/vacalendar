import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './content.component';
import {AngularMaterialModule} from '../../shared/template/angular-material/angular-material.module';
import {ContentRoutingModule} from './content.routing';
import {VacationFormModule} from './vacation-form/vacation-form.module';

@NgModule({
  declarations: [
    ContentComponent
  ],
  exports: [
    ContentComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ContentRoutingModule,
    VacationFormModule
  ],
})
export class ContentModule {
}
