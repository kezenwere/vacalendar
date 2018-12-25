import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableViewComponent} from './table-view.component';


const tableViewRoutes: Routes = [
  {
    path: '', component: TableViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(tableViewRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TableViewRoutingModule {
}
