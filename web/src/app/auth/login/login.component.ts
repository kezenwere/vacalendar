import {Component, OnInit} from '@angular/core';
import {AppConstantsService} from '../../shared/service/app-constants/app-constants.service';
import {ActivatedRoute, Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../service/auth.service';
import {AuthUtilService} from '../service/auth-util.service';
import {AuthSuccessToken} from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('loginComponentAnimate', [
      state('*', style({
        transform: 'translate3D(0px, 0px, 0px)',
        opacity: 1,
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate3D(0px, 150px, 0px)',
        }),
        animate('0.3s 0s ease-out'),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  errorMessages = '';

  constructor(private authService: AuthService,
              private authUtilService: AuthUtilService,
              private appConstantsService: AppConstantsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.tryHandleAuthResponse();
  }

  authRequest() {
    this.authService.authRequest().subscribe(
      (serverResponse) => {
        this.errorMessages = '';
        const authRedirectUrl = serverResponse.data;
        console.log('authRequest authRedirectUrl: ', authRedirectUrl);

        // REDIRECT
        window.location.replace(authRedirectUrl);
      },
      (serverError) => {
        console.log('authRequest serverError: ', serverError);
        this.errorMessages = serverError.error.data.message;
      },
    );
  }

  tryHandleAuthResponse() {
    const queryParams: any = this.route.snapshot.parent.queryParams;
    let authCode = ''
    try {
      authCode = queryParams.code;
      if (!authCode) {
        return;
      }
      console.log('tryHandleAuthResponse authCode: ', authCode)
      this.authService.authCode2Jwt(authCode).subscribe(
        (serverResponse) => {
          this.errorMessages = '';
          const authSuccessToken = <AuthSuccessToken> serverResponse.data;
          console.log('tryHandleAuthResponse authSuccessToken: ', authSuccessToken);
          this.authUtilService.setAuthSuccessToken(authSuccessToken);

          // REDIRECT
          if (this.authUtilService.redirectUrl) {
            this.router.navigate([this.authUtilService.redirectUrl]);
          } else {
            this.router.navigate([this.appConstantsService.getLoginSuccessRouterLink()]);
          }
        },
        (serverError) => {
          console.log('tryHandleAuthResponse serverError: ', serverError);
          this.errorMessages = serverError.error.data.message;
        },
      );
    } catch (err) {
      // Do nothing, this simply means we're not handling google callback yet
    }
  }

}
