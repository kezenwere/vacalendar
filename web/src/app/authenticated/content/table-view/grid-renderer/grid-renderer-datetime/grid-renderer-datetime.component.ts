import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-renderer-datetime',
  templateUrl: './grid-renderer-datetime.component.html',
  styleUrls: ['./grid-renderer-datetime.component.scss']
})
export class GridRendererDatetimeComponent implements OnInit {
  value;
  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.value = params.value;
    console.log('Date renderer params: ', params);
  }
}
