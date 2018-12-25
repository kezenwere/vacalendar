import { Component, OnInit } from '@angular/core';
import {AuthUtilService} from '../../auth/service/auth-util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userFirstName: string;
  constructor(
    private authUtilService: AuthUtilService
  ) { }

  ngOnInit() {
    this.userFirstName = this.authUtilService.getAuthSuccessToken().user.firstName;
  }

  logOutActiveUser() {
    this.authUtilService.logoutUser();
  }
}
