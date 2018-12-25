import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableViewRoutingModule} from './table-view.routing';
import {TableViewComponent} from './table-view.component';
import {GridRendererModule} from './grid-renderer/grid-renderer.module';
import {AngularMaterialModule} from '../../../shared/template/angular-material/angular-material.module';
import {AgGridModule} from 'ag-grid-angular';
import {GridRendererDefaultComponent} from './grid-renderer/grid-renderer-default/grid-renderer-default.component';
import {GridRendererDateComponent} from './grid-renderer/grid-renderer-date/grid-renderer-date.component';
import {GridRendererStatusComponent} from './grid-renderer/grid-renderer-status/grid-renderer-status.component';
import {VacationFormModule} from '../vacation-form/vacation-form.module';

@NgModule({
  declarations: [TableViewComponent],
  imports: [
    CommonModule,
    TableViewRoutingModule,
    AngularMaterialModule,
    VacationFormModule,
    GridRendererModule,
    AgGridModule.withComponents([
      GridRendererDefaultComponent, GridRendererDateComponent, GridRendererStatusComponent
    ])
  ]
})
export class TableViewModule { }
