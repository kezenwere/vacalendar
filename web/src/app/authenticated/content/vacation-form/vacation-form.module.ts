import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VacationFormComponent} from './vacation-form.component';
import {AngularMaterialModule} from '../../../shared/template/angular-material/angular-material.module';

@NgModule({
  declarations: [
    VacationFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  entryComponents: [
    VacationFormComponent
  ]
})
export class VacationFormModule { }
