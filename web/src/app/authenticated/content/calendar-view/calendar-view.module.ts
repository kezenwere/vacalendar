import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarViewRoutingModule} from './calendar-view.routing';
import {CalendarViewComponent} from './calendar-view.component';
import {FullCalendarModule} from 'ng-fullcalendar';

@NgModule({
  declarations: [CalendarViewComponent],
  imports: [
    CommonModule,
    CalendarViewRoutingModule,
    FullCalendarModule,
  ]
})
export class CalendarViewModule { }
