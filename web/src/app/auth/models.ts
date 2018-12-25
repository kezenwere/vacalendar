import {AppConstantsService} from '../shared/service/app-constants/app-constants.service';
import {User} from '../authenticated/content/vacation-form/models';

export class AuthRequest {
  constructor(public grant_type: string,
              public client: string = AppConstantsService.BACKEND_OAUTH2_CLIENT,
              public clientSecret: string = AppConstantsService.BACKEND_OAUTH2_CLIENT_SECRET,
              public scope: string = AppConstantsService.BACKEND_OAUTH2_CLIENT_SCOPE,
              public userFirstName?: string,
              public userLastName?: string,
              public userEmail?: string,
              public managerEmail?: string,
              public refresh_token?: string) {
  }
}

export class AuthSuccessToken {
  constructor(public jwtToken?: string,
              public user?: User) {
  }
}

export class AuthTokenDetails {
  constructor(public organizationId?: string,
              public email?: string,
              public firstName?: string,
              public lastName?: string,
              public user_name?: string,
              public scope?: string[],
              public exp?: string,
              public authorities?: string[],
              public jti?: string,
              public client_id?: string) {
  }
}

