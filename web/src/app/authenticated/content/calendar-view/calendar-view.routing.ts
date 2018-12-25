import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarViewComponent} from './calendar-view.component';


const calendarViewRoutes: Routes = [
  {
    path: '', component: CalendarViewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(calendarViewRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CalendarViewRoutingModule {
}
