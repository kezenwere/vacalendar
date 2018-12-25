import {Component, OnInit, ViewChild} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {CalendarComponent} from 'ng-fullcalendar';
import {Moment} from 'moment';
// import {Options} from 'fullcalendar';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  calendarOptions: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  calEvents: CustomEvent[] = [];
  private remoteEvents: Event[];

  private startTime: Moment;
  private endTime: Moment;

  constructor(private router: Router,
              // protected eventService: EventService
  ) {
  }

  ngOnInit() {
    this.initCalendar([]);

    this.fetchEvents();
    this.fetchOnEventModified();
  }

  // clearEvents() {
  //   this.remoteEvents= [];
  // }
  //
  // loadEvents() {
  //   this.eventService.getEvents().subscribe(calEvents => {
  //     this.remoteEvents= calEvents;
  //   });
  // }

  daySelect(event: CustomEvent) {
    event.preventDefault();

    console.log('event: ', event);
    console.log('this.remoteEvents', this.remoteEvents);

    this.startTime = event.detail.start;
    const startTime = this.startTime.toDate();
    this.endTime = event.detail.end;
    const endTime = this.endTime.toDate();

    const extras = {queryParams: {startTime: startTime, endTime: endTime}};
    this.navigateTo('new', extras);
  }

  eventClick(event: CustomEvent) {
    event.preventDefault();

    console.log('event: ', event);
    console.log('this.remoteEvents', this.remoteEvents);

    this.navigateTo(event.detail.event.id + '/edit', {});
  }

  btnClick(event: CustomEvent) {
    event.preventDefault();

    console.log('event: ', event);
    console.log('this.remoteEvents', this.remoteEvents);
  }

  private fetchEvents(isAnUpdate = false) {
    // this.eventService.getAllEventsByOrganization(new Organization()).subscribe(
    //   (serverResponse) => {
    //     this.remoteEvents = <Event[]> serverResponse.data;
    //
    //     this.calEvents = [];
    //     this.remoteEvents.forEach(event => {
    //       const events: any = {};
    //       events.id = event.id;
    //       events.title = event.name;
    //       events.start = event.startTime;
    //       events.end = event.endTime;
    //       events.url = event.url;
    //
    //       this.calEvents.push(events);
    //     });
    //
    //     console.log('this.calEvents: ', this.calEvents);
    //     // if (!isAnUpdate) {
    //     //   this.initCalendar(this.calEvents);
    //     // }
    //   });
  }

  private initCalendar(events: CustomEvent[]) {
    this.calendarOptions = {
      editable: false,
      eventLimit: false,
      selectable: false,
      contentHeight: 500,
      height: 75,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth',
      },
      events: events,
    };
  }

  private navigateTo(node: string, extras: NavigationExtras) {
    const curUrl = this.router.routerState.snapshot.url;
    this.router.navigate([curUrl + '/' + node], extras);
  }


  private fetchOnEventModified() {

    // this.eventService.eventReplaySubject.subscribe(
    //   (serverResponse) => {
    //     this.fetchEvents(true);
    //     console.log('fetchOnEventModified ServerResponse: ', serverResponse);
    //   },
    // );
    // this.eventService.onEventModified(this.eventService);
  }
}
