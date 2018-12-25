import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AppWideService} from '../../../shared/service/app-wide-service/app-wide.service';
import {NgForm} from '@angular/forms';
import {VacationService} from './service/vacation.service';
import {Vacation} from './models';
import {AuthUtilService} from '../../../auth/service/auth-util.service';

@Component({
  selector: 'app-vacation-form',
  templateUrl: './vacation-form.component.html',
  styleUrls: ['./vacation-form.component.scss'],
})
export class VacationFormComponent implements OnInit {
  errorMessages: string;
  vacation: Vacation = new Vacation();
  headerTitle = 'Vacation Form';
  actionBtnText = 'Create';
  vacationId: string;
  updating = false;

  constructor(private vacationService: VacationService,
              public dialogRef: MatDialogRef<VacationFormComponent>,
              private appWideService: AppWideService,
              private vcr: ViewContainerRef,
              private authUtilService: AuthUtilService) {
  }

  ngOnInit() {
    this.fetchVacation(this.vacationId);
  }

  formIsValid(ngForm: NgForm) {
    return ngForm.form.valid;
  }

  formAction(event) {
    event.preventDefault();

    if (this.updating && this.vacationId) {
      this.update();
    } else {

      const activeUser = this.authUtilService.getAuthSuccessToken();
      this.vacation.user.email = activeUser.user.email;
      this.vacation.user.firstName = activeUser.user.firstName;
      this.vacation.user.lastName = activeUser.user.lastName;
      this.vacation.user.managerEmail = activeUser.user.managerEmail;

      this.create();
    }
  }

  private fetchVacation(vacationId: string) {
    if (this.updating && vacationId) {
      this.vacationService.getVacationById(vacationId).subscribe(
        (serverResponse) => {
          this.vacation = <Vacation> serverResponse.data;
        },
      );
    }
  }

  private create() {
    this.vacationService.createVacation(this.vacation).subscribe(
      (serverResponse) => {
        this.errorMessages = '';
        console.log('serverResponse:', serverResponse);
        this.appWideService.openStatusModal('Vacation created.', 'success', this.vcr);
      },
      (serverError) => {
        this.errorMessages = serverError.error.data.message;
      },
    );
  }

  private update() {
    this.vacationService.updateVacation(this.vacation, this.vacationId).subscribe(
      (serverResponse) => {
        this.errorMessages = '';
        console.log('serverResponse:', serverResponse);
        this.appWideService.openStatusModal('Vacation updated.', 'success', this.vcr);
      },
      (serverError) => {
        this.errorMessages = serverError.error.data.message;
      },
    );
  }
}
