import { Component } from '@angular/core';
import {GlobalCodes} from './global-codes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  globalCodes: GlobalCodes = new GlobalCodes();
  constructor() {
    this.globalCodes.init();
  }
}
