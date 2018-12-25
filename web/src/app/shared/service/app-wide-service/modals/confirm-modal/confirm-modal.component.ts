import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  message = 'Are you sure?';
  iconClass: string;

  constructor(private mdDialogRef: MatDialogRef<ConfirmModalComponent>) {
  }

  ngOnInit() {
  }

  yesClicked() {
    this.mdDialogRef.close(true);
  }
  noClicked() {
    this.mdDialogRef.close(false);
  }
}
