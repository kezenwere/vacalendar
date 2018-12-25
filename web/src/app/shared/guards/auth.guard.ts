import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {AuthUtilService} from '../../auth/service/auth-util.service';
import {AppConstantsService} from '../service/app-constants/app-constants.service';
import {Observable} from 'rxjs/index';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authUtilService: AuthUtilService,
              private router: Router,
              private appConstantsService: AppConstantsService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('In AuthGuard...')
    const url: string = state.url;

    // ONLY WHILE DEBUGGING
    if (window.location.toString().indexOf('localhost:4200') !== -1) {
      return true;
    }

    return this.checkLogin(url);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }

  checkLogin(url: string): boolean {
    if (this.authUtilService.isLoggedIn()) {
      console.log('User is Logged!');
      return true;
    }

    console.log('User is not Logged!');
    // Store the attempted URL for redirecting
    this.authUtilService.redirectUrl = url;

    console.log('In AuthGuard redirectUrl: ', this.authUtilService.redirectUrl);
    // Navigate to the login page
    this.router.navigate([this.appConstantsService.getLoginRouterLink()]);
    return false;
  }
}
