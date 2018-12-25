import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
// import * as screenfull from 'screenfull';

@Component({
  selector: 'app-mat-dialog-title-bar',
  templateUrl: './mat-dialog-title-bar.component.html',
  styleUrls: ['./mat-dialog-title-bar.component.scss'],
})
export class MatDialogTitleBarComponent implements OnInit {
  @Input() title: string;
  @Input() canExpand: boolean;
  @Input() canFullScreen: boolean;
  @Input() canClose: boolean;
  @Input() dialogRef: MatDialogRef<any>;
  @Input() dialogViewContainer: ElementRef;
  @Input() navigateOnClose = true;

  @Input() doRouteBackTraceOnClose = true; // Handles unwanted child closing parent

  @Output() dialogResizedEvent: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  fireDialogResizedEvent() {
    this.dialogResizedEvent.next(Math.random());
  }

  ngOnInit() {
    this.registerRouteBackTraceOnClose();
  }

  registerRouteBackTraceOnClose() {
    if (this.navigateOnClose) {
      if (this.doRouteBackTraceOnClose) {
        this.dialogRef.afterClosed().subscribe(
          (output) => {
            const url = this.router.routerState.snapshot.url;
            const lastRoute = this.route.snapshot.parent.url.join('/');

            this.router.navigate([url.substring(0, url.lastIndexOf(lastRoute))]);
          });
      }
    }
  }

  expand() {
    if (this.canExpand) {
      console.log('Expanding dialog...');
      this.dialogRef.updateSize('100%', '100%').updatePosition();
      this.fireDialogResizedEvent();
    }

  }

  fullScreen() {
    if (this.canFullScreen) {
      //
      // if (screenfull.enabled) {
      //   screenfull.request();
      //   this.dialogRef.updateSize('100%', '100%').updatePosition();
      // }

      this.fireDialogResizedEvent();
    }
  }

  close() {
    if (this.canClose) {
      this.dialogRef.close();
    }
  }
}
