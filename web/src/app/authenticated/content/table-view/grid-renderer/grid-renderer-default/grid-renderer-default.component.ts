import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-renderer-default',
  templateUrl: './grid-renderer-default.component.html',
  styleUrls: ['./grid-renderer-default.component.scss']
})
export class GridRendererDefaultComponent implements OnInit {

  value;
  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.value = params.value;
    // params.api.sizeColumnsToFit();
  }
}
