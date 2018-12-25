import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridRendererDateComponent } from './grid-renderer-date/grid-renderer-date.component';
import { GridRendererDefaultComponent } from './grid-renderer-default/grid-renderer-default.component';
import { GridRendererStatusComponent } from './grid-renderer-status/grid-renderer-status.component';
import { GridRendererDatetimeComponent } from './grid-renderer-datetime/grid-renderer-datetime.component';
import {AngularMaterialModule} from '../../../../shared/template/angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  declarations: [
    GridRendererDefaultComponent,
    GridRendererDateComponent,
    GridRendererStatusComponent,
    GridRendererDatetimeComponent
  ],
  exports: [
    // GridRendererDefaultComponent,
    // GridRendererDateComponent,
    // GridRendererStatusComponent,
    // GridRendererPhonesComponent,
    // GridRendererEmailsComponent,
    // GridRendererRolesComponent,
    // GridRendererAgeCategoryComponent,
    // GridRendererGroupMembersComponent
  ]
})
export class GridRendererModule { }
