import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-field-display-header',
  templateUrl: './field-display-header.component.html',
  styleUrls: ['./field-display-header.component.scss']
})
export class FieldDisplayHeaderComponent implements OnInit {
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
