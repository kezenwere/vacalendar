import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-control-group-header',
  templateUrl: './form-control-group-header.component.html',
  styleUrls: ['./form-control-group-header.component.scss']
})
export class FormControlGroupHeaderComponent implements OnInit {

  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
