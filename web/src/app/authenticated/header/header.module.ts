import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {AngularMaterialModule} from '../../shared/template/angular-material/angular-material.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ]
})
export class HeaderModule { }
