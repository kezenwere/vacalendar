import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './content.component';


const contentRoutes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
      {path: 'calendar-view', loadChildren: './calendar-view/calendar-view.module#CalendarViewModule'},
      {path: 'table-view', loadChildren: './table-view/table-view.module#TableViewModule'},
      {path: 'vacation-form', loadChildren: './vacation-form/vacation-form.module#VacationFormModule'},
      {path: '', redirectTo: 'table-view', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(contentRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ContentRoutingModule {
}
