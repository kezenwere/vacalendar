import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';

@Injectable()
export class AppConstantsService {
// ORGANIZATION
  static COOKIE_ORGANIZATION_ID = 'org_id';
  static COOKIE_AUTH_SUCCESS_TOKEN = 'authSuccessToken';
// BACKEND
  // OAuth2
  static BACKEND_OAUTH2_GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';
  static BACKEND_OAUTH2_CLIENT = 'vacalendar';
  static BACKEND_OAUTH2_CLIENT_SCOPE = 'webclient';
  static BACKEND_OAUTH2_CLIENT_SECRET = 'secret';
  // AUTH ROUTES

  // WEBSOCKET
  static BACKEND_WEBSOCKET_RELATIVE_END_POINT = 'vacalendar-websocket';

// FRONTEND ROUTES
  // INDEX

  // AUTH
  static FRONTEND_ROUTE_AUTH = 'auth';
  static FRONTEND_ROUTE_AUTH_LOGIN = 'login';
  static FRONTEND_ROUTE_AUTH_LOGOUT = 'logout';

  // ERROR
  static FRONTEND_ROUTE_ERROR = 'fatal';
  static FRONTEND_ROUTE_ERROR_FATAL = 'fatal';

  // AUTHENTICATED
  static FRONTEND_ROUTE_AUTHENTICATED = 'portal';
  static FRONTEND_ROUTE_LOGIN_SUCCESS = AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED;

// BACKEND
  // RESTFUL/FORM HEADER
  static REQUEST_HEADER_CONTENT_TYPE_JSON = 'application/json';
  static REQUEST_HEADER_CONTENT_TYPE_BINARY = 'binary/octet-stream';
  static REQUEST_HEADER_CONTENT_TYPE_FORM_URLENCODED = 'application/x-www-form-urlencoded';

  // JWT
  static JWT_HEADER_NAME = 'Authorization';
  static JWT_PREFIX = 'Bearer';
  private static BACKEND_API_PATH = '/';
  // API
  private STATIC_API_ROOT = 'http://localhost:9000';
  private browserUrl = window.location.toString(); // Get url from browser

  constructor() {
  }

  /********************************************************************************************************************/
//                                     BACKEND ROUTING
  /********************************************************************************************************************/

/////////////////////////////////////////// API ROOT PATH //////////////////////////////////////////////////////////////
  getAppApiRootPath(): string {

    const httpPartLength = this.browserUrl.indexOf(':');

    let httpFullPartLength = this.browserUrl.indexOf('/', httpPartLength + 3); // plus '://'
    if (httpFullPartLength === -1) { // does not end with '/'
      httpFullPartLength = this.browserUrl.length;
    }

    let apiRoot = this.browserUrl.substring(0, httpFullPartLength) + AppConstantsService.BACKEND_API_PATH;

    // Are we on dev?
    if (this.browserUrl.indexOf('localhost:4200') !== -1) {
      apiRoot = this.STATIC_API_ROOT;
    }

    // Maybe this is mobile
    if (apiRoot.length < 10) {
      apiRoot = this.STATIC_API_ROOT;
    }

    // Should end with a slash
    if (!apiRoot.endsWith('/')) {
      apiRoot = apiRoot + '/';
    }

    console.log('apiRoot: ', apiRoot);

    return apiRoot;
  }

  getWebsocketApiRootPath(): string {
    return this.getAppApiRootPath() + AppConstantsService.BACKEND_WEBSOCKET_RELATIVE_END_POINT;
  }

  // JWT
  getJwtHeaderName(): string {
    return AppConstantsService.JWT_HEADER_NAME;
  }

  getJwtPrefix(): string {
    return AppConstantsService.JWT_PREFIX;
  }

  // WEBSOCKET
  getWebsocketAbsoluteEndPoint(): string {
    return this.getAppApiRootPath() + AppConstantsService.BACKEND_WEBSOCKET_RELATIVE_END_POINT;
  }

  // REQUEST HEADER TYPES
  getRequestHeaderContentTypeJson(): string {
    return AppConstantsService.REQUEST_HEADER_CONTENT_TYPE_JSON;
  }

  getRequestHeaderContentTypeBinary(): string {
    return AppConstantsService.REQUEST_HEADER_CONTENT_TYPE_BINARY;
  }

  getRequestHeaderContentTypeFormUrlencoded(): string {
    return AppConstantsService.REQUEST_HEADER_CONTENT_TYPE_FORM_URLENCODED;
  }

  /********************************************************************************************************************/
//                                     FRONTEND ROUTING
  /********************************************************************************************************************/
  getBrowserUrl(): Observable<string> {
    return of(window.location.toString());
  }

/////////////////////////////////////// LOGIN //////////////////////////////////////////////////////////////////////////
  getLoginRouterLink(): string {
    return '/' + AppConstantsService.FRONTEND_ROUTE_AUTH + '/' + AppConstantsService.FRONTEND_ROUTE_AUTH_LOGIN;
  }

  getLoginSuccessRouterLink(): string {
    return '/' + AppConstantsService.FRONTEND_ROUTE_LOGIN_SUCCESS;
  }

/////////////////////////////////////// AUTHENTICATED //////////////////////////////////////////////////////////////////
  getAuthenticatedRouterLink(): string {
    return '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED;
  }
}
