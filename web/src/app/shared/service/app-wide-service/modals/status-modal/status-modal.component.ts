import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.scss']
})
export class StatusModalComponent implements OnInit {
message = '';
status = '';
  constructor() { }

  ngOnInit() {
  }

}
