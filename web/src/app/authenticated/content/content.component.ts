import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {VacationFormComponent} from './vacation-form/vacation-form.component';
import {VacationService} from './vacation-form/service/vacation.service';
import {AppWideService} from '../../shared/service/app-wide-service/app-wide.service';
import * as  FileSaver from 'file-saver';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  TABLE_VIEW = 'table-view';
  showActionBtns = true;

  constructor(private vcr: ViewContainerRef,
              private route: ActivatedRoute,
              private router: Router,
              private mdDialog: MatDialog,
              private vacationService: VacationService,
              private appWideService: AppWideService) {
  }

  ngOnInit() {
  }

  onQuickFilterChanged(value: string) {
    this.appWideService.setSearchFilterValue(value);
  }

  openVacationFormForNew() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef = this.vcr;
    const dialog = this.mdDialog.open(VacationFormComponent, dialogConfig);
    (<any>dialog.componentInstance).headerTitle = 'New vacation form';
    (<any>dialog.componentInstance).actionBtnText = 'Create';
  }

  activateVacationActionBtns() {
    return this.appWideService.getSelectedVacationRows().length > 0;
  }

  navigateToView(view: string) {
    if (view === this.TABLE_VIEW) {
      this.showActionBtns = true;
    } else {
      this.showActionBtns = false;
    }
    const url = this.router.routerState.snapshot.url;
    const lastRoute = url.substring(0, url.lastIndexOf('/'));

    this.router.navigate([lastRoute, view]);
  }

  approveSelectedVacations() {
    this.appWideService.openConfirmModal('Proceed to <strong>APPROVE</strong> selected vacation(s)?', '', this.vcr).subscribe(
      proceed => {
        if (proceed) {
          let counter = 0;

          this.appWideService.getSelectedVacationRows().forEach((row) => {
            this.vacationService.approveVacation(row.id).subscribe(
              (serverResponse) => {
                console.log('serverResponse: ', serverResponse);
                counter++;
                if (counter === this.appWideService.getSelectedVacationRows().length) {
                  this.appWideService.openStatusModal('Vacation(s) approved.', 'success', this.vcr);
                }
              },
              (serverError) => {
                const errorMessages = serverError.error.data.message;
                this.appWideService.openStatusModal('Oh snap! ' + errorMessages, 'ban', this.vcr);
              },
            );
          });
        }
      });
  }

  rejectSelectedVacations() {
    this.appWideService.openConfirmModal('Proceed to <strong>REJECT</strong> selected vacation(s)?', '', this.vcr).subscribe(
      proceed => {
        if (proceed) {
          let counter = 0;

          this.appWideService.getSelectedVacationRows().forEach((row) => {
            this.vacationService.rejectVacation(row.id).subscribe(
              (serverResponse) => {
                console.log('serverResponse: ', serverResponse);

                counter++;
                if (counter === this.appWideService.getSelectedVacationRows().length) {
                  this.appWideService.openStatusModal('Vacation(s) rejected.', 'success', this.vcr);
                }
              },
              (serverError) => {
                const errorMessages = serverError.error.data.message;
                this.appWideService.openStatusModal('Oh snap! ' + errorMessages, 'ban', this.vcr);
              },
            );
          });
        }
      });
  }

  deleteSelectedVacations() {
    this.appWideService.openConfirmModal('Proceed to <strong>DELETE</strong> selected vacation(s)?', '', this.vcr).subscribe(
      proceed => {
        if (proceed) {
          let counter = 0;

          this.appWideService.getSelectedVacationRows().forEach((row) => {
            this.vacationService.deleteVacation(row.id).subscribe(
              (serverResponse) => {
                console.log('serverResponse: ', serverResponse);

                counter++;
                if (counter === this.appWideService.getSelectedVacationRows().length) {
                  this.appWideService.openStatusModal('Vacation(s) deleted.', 'success', this.vcr);
                }
              },
              (serverError) => {
                const errorMessages = serverError.error.data.message;
                this.appWideService.openStatusModal('Oh snap! ' + errorMessages, 'ban', this.vcr);
              },
            );
          });
        }
      });
  }

  exportVacations() {

    const rows = [];
    let columns = [];

    columns.push('Full Name');
    columns.push('Email');
    columns.push('Start Time');
    columns.push('End Time');
    columns.push('Status');
    columns.push('Created Time');
    columns.push('Approved By');
    columns.push('Approved Time');
    columns.push('Rejected By');
    columns.push('Rejected Time');

    rows.push(columns.join(','));
    columns = []

    columns.push('');
    columns.push('');
    columns.push('');
    columns.push('');
    columns.push('');
    columns.push('');
    columns.push('');
    columns.push('');
    columns.push('');
    columns.push('');

    rows.push(columns.join(','));
    columns = [];

    this.appWideService.getSelectedVacationRows().forEach((row: any) => {
      columns.push(row.fullName);
      columns.push(row.email);
      columns.push(row.startTime);
      columns.push(row.endTime);
      columns.push(row.status.message);
      columns.push(row.createdDate);
      columns.push(row.approvedBy);
      columns.push(row.approvedTime);
      columns.push(row.rejectedBy);
      columns.push(row.rejectedTime);

      rows.push(columns.join(','));
      columns = [];
    });

    const blob = new Blob([rows.join('\r\n')], {type: 'application/text'});
    FileSaver.saveAs(blob, 'vaCalendar.csv');

  }
}
