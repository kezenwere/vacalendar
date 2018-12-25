import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-renderer-date',
  templateUrl: './grid-renderer-date.component.html',
  styleUrls: ['./grid-renderer-date.component.scss']
})
export class GridRendererDateComponent implements OnInit {
  value;
  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.value = params.value;
    console.log('Date renderer params: ', params);
  }
}
