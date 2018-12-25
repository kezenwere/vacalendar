import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppConstantsService} from '../service/app-constants/app-constants.service';
import {AuthUtilService} from '../../auth/service/auth-util.service';

@Injectable({
  providedIn: 'root',
})
export class ShouldLoginGuard implements CanActivate {
  constructor(private authUtilService: AuthUtilService,
              private router: Router,
              private appConstantsService: AppConstantsService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authUtilService.isLoggedIn()) {
      this.router.navigate([this.appConstantsService.getLoginSuccessRouterLink()]);
      return false;
    }

    return true;
  }
}
