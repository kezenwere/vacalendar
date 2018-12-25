import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-renderer-status',
  templateUrl: './grid-renderer-status.component.html',
  styleUrls: ['./grid-renderer-status.component.scss']
})
export class GridRendererStatusComponent implements OnInit {

  value: {message: '', color: ''};
  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.value = params.value;
    console.log('this.value: ', this.value);
    // params.api.sizeColumnsToFit();
  }
}
