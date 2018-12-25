import {AfterViewInit, Component, OnInit, ViewContainerRef} from '@angular/core';
import {AppWideService} from '../../../shared/service/app-wide-service/app-wide.service';
import {GridOptions} from 'ag-grid-community';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {VacationFormComponent} from '../vacation-form/vacation-form.component';
import {VacationService} from '../vacation-form/service/vacation.service';
import {Vacation} from '../vacation-form/models';
import {GridRendererDefaultComponent} from './grid-renderer/grid-renderer-default/grid-renderer-default.component';
import {GridRendererDateComponent} from './grid-renderer/grid-renderer-date/grid-renderer-date.component';
import {GridRendererStatusComponent} from './grid-renderer/grid-renderer-status/grid-renderer-status.component';
import {AuthUtilService} from '../../../auth/service/auth-util.service';
import {AuthSuccessToken} from '../../../auth/models';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit, AfterViewInit {

  public gridOptions: GridOptions;
  private activeUser: AuthSuccessToken;

  constructor(private vcr: ViewContainerRef,
              private mdDialog: MatDialog,
              private vacationService: VacationService,
              private appWideService: AppWideService,
              private authUtilService: AuthUtilService) {

    this.activeUser = this.authUtilService.getAuthSuccessToken();

    this.gridOptions = <GridOptions>{
      enableSorting: true,
      enableFilter: true,
      animateRows: true,
      enableColResize: true,
      rowSelection: 'multiple',
      pagination: true,
      columnDefs: this.createColumnDefs(),
      onRowSelected: (event) => {
        this.appWideService.setSelectedVacationRows(event.api.getSelectedRows());
      },
      onCellClicked: (event) => {
        if (event.colDef.field === 'checker') {
          return;
        }

        if (event.node) { // TODO: Cannot edit
          return;
        }

        const id = event.data.id;
        this.openVacationFormForEdit(id);
      },
    };
  }

  ngOnInit() {
    this.createRowData();
    this.fetchOnVacationModified();
    this.fetchSearchFilter();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.gridOptions.api.sizeColumnsToFit();
    }, 1000);
  }

  fetchSearchFilter() {
    this.appWideService.searchFilterObservable.subscribe(
      (searchFilter) => {
        console.log('searchFilter: ', searchFilter);
        this.onQuickFilterChanged(searchFilter);
      },
    );
  }

  onQuickFilterChanged(value) {
    console.log('value: ', value)
    this.gridOptions.api.setQuickFilter(value);
  }

  private openVacationFormForEdit(vacationId: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef = this.vcr;
    const dialog = this.mdDialog.open(VacationFormComponent, dialogConfig);
    (<any>dialog.componentInstance).vacationId = vacationId;
    (<any>dialog.componentInstance).headerTitle = 'Update Vacation Form';
    (<any>dialog.componentInstance).actionBtnText = 'Update';
    (<any>dialog.componentInstance).updating = true;
  }

  private fetchOnVacationModified() {
    this.vacationService.vacationReplaySubject.subscribe(
      (serverResponse) => {
        this.createRowData();
        console.log('fetchOnVacationModified ServerResponse: ', serverResponse);
      },
    );
    this.vacationService.onVacationModified(this.vacationService);
  }

  private canEdit(vacation: Vacation): boolean {

    const canEdit =
      (!vacation.expired && !vacation.rejected && !vacation.approved) &&
      (vacation.user.email === this.activeUser.user.email ||
        vacation.assignedApproverEmail === this.activeUser.user.email)

    return canEdit;
  }

  private createRowData() {
    this.vacationService.getAllVacations().subscribe(
      (serverResponse) => {
        const vacations = <Vacation[]> serverResponse.data.content;
        console.log('vacations: ', vacations)
        const rows = [];
        vacations.forEach((vacation) => {
          const row: any = {};
          row.id = vacation.id;
          row.fullName = vacation.user.fullName;
          row.email = vacation.user.email;
          row.startDate = vacation.startDate;
          row.endDate = vacation.endDate;
          row.status = vacation.status;
          row.createdDate = vacation.createdDate;
          row.approvedBy = vacation.approvedBy;
          row.approvedDate = vacation.approvedDate;
          row.canEdit = this.canEdit(vacation);
          rows.push(row);
        });

        this.gridOptions.api.setRowData(rows);
      },
    );
  }

  private createColumnDefs(): any[] {
    const colDefs = [
      {
        headerName: '',
        field: 'checker',
        checkboxSelection: true,
        headerCheckboxSelection: true,
        suppressSorting: true,
        suppressMenu: true,
        pinned: true,
        width: 60,
      },
      {
        headerName: 'Name',
        field: 'fullName',
        filter: 'text',
        cellRendererFramework: GridRendererDefaultComponent,
      },
      {
        headerName: 'Email',
        field: 'email',
        filter: 'text',
        cellRendererFramework: GridRendererDefaultComponent,
      },
      {
        headerName: 'Start date',
        field: 'startDate',
        filter: 'text',
        cellRendererFramework: GridRendererDateComponent,
      },
      {
        headerName: 'End date',
        field: 'endDate',
        filter: 'text',
        cellRendererFramework: GridRendererDateComponent,
      },
      {
        headerName: 'Status',
        field: 'status',
        filter: 'text',
        cellRendererFramework: GridRendererStatusComponent,
      },
      {
        headerName: 'Date created',
        field: 'createdDate',
        filter: 'text',
        cellRendererFramework: GridRendererDateComponent,
      },
      {
        headerName: 'Approved by',
        field: 'approvedBy',
        filter: 'text',
        cellRendererFramework: GridRendererDefaultComponent,
      },
      {
        headerName: 'Approved date',
        field: 'approvedDate',
        filter: 'text',
        cellRendererFramework: GridRendererDateComponent,
      },
    ];

    return colDefs;
  }
}
