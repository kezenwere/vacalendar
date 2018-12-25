import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs/index';

@Injectable()
export class AppConstantsService {
// ORGANIZATION
  static COOKIE_ORGANIZATION_ID = 'org_id';
  static COOKIE_AUTH_SUCCESS_TOKEN = 'authSuccessToken';
  static COOKIE_HAS_RECENTlY_LOGGED = 'ever_logged';
// BACKEND
  // OAuth2
  static BACKEND_OAUTH2_GRANT_TYPE_PASSWORD = 'password';
  static BACKEND_OAUTH2_GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';
  static BACKEND_OAUTH2_CLIENT = 'churchrunclient';
  static BACKEND_OAUTH2_CLIENT_SCOPE = 'webclient';
  static BACKEND_OAUTH2_CLIENT_SECRET = 'secret';
  // AUTH ROUTES
  static BACKEND_ROUTE_AUTH = 'auth';
  static BACKEND_ROUTE_AUTH_LOGIN = 'login';
  static BACKEND_ROUTE_AUTH_LOGOUT = 'logout';

  // WEBSOCKET
  static BACKEND_WEBSOCKET_RELATIVE_END_POINT = 'cr-websocket';

// FRONTEND ROUTES
  // INDEX
  static FRONTEND_ROUTE_INDEX = '';
  static FRONTEND_ROUTE_INDEX_HOME = 'home';
  static FRONTEND_ROUTE_INDEX_FIRST_USER = 'first-user';

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
  static FRONTEND_ROUTE_AUTHENTICATED_ACCOUNTING = 'accounting';

  static FRONTEND_ROUTE_AUTHENTICATED_ADMIN = 'admin';
  static FRONTEND_ROUTE_AUTHENTICATED_ADMIN_DASHBOARD = 'dashboard';
  static FRONTEND_ROUTE_AUTHENTICATED_ADMIN_LICENSE = 'license';
  static FRONTEND_ROUTE_AUTHENTICATED_ADMIN_PRIVILEGES = 'privileges';
  static FRONTEND_ROUTE_AUTHENTICATED_ADMIN_SETTINGS = 'settings';
  static FRONTEND_ROUTE_AUTHENTICATED_ADMIN_USERS = 'users';

  static FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER = 'attendance-manager';
  static FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER_ATTENDANCE = 'attendance';
  static FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER_CHECK_IN = 'check-in';

  static FRONTEND_ROUTE_AUTHENTICATED_AUDITOR = 'auditor';
  static FRONTEND_ROUTE_AUTHENTICATED_AUDITOR_REPORTS = 'reports';
  static FRONTEND_ROUTE_AUTHENTICATED_AUDITOR_AUDIT_TRAIL = 'audit-trail';

  static FRONTEND_ROUTE_AUTHENTICATED_EVENTS = 'events';
  static FRONTEND_ROUTE_AUTHENTICATED_MEDIA = 'media';


  static FRONTEND_ROUTE_AUTHENTICATED_GIVING = 'giving';
  static FRONTEND_ROUTE_AUTHENTICATED_GIVING_DRIVE = 'giving-drive';
  static FRONTEND_ROUTE_AUTHENTICATED_GIVING_CATEGORY = 'giving-category';
  static FRONTEND_ROUTE_AUTHENTICATED_GIVING_PLEDGING_DRIVE = 'pledging-drive';

  static FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER = 'groups-manager';
  static FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_ARMS = 'arms';
  static FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_DEPARTMENTS = 'departments';
  static FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_GROUPS = 'groups';

  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING = 'messaging';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS = 'sms';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_DRAFT = 'draft';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_INBOX = 'inbox';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_PENDING = 'pending';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_SCHEDULED = 'scheduled';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_SENT = 'sent';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_TEMPLATES = 'templates';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL = 'email';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_DRAFT = 'draft';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_INBOX = 'inbox';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_PENDING = 'pending';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_SCHEDULED = 'scheduled';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_SENT = 'sent';
  static FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_TEMPLATES = 'templates';

  static FRONTEND_ROUTE_AUTHENTICATED_PEOPLE = 'people';
  static FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_MEMBERS = 'members';
  static FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_VISITORS = 'visitors';
  static FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_REPORTS = 'reports';
  static FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_TAGGING = 'tagging';
  static FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_DESIGNATIONS = 'designations';

// FRONTEND SESSION
  static LAST_ACTIVE_TIME = 'last_active';
  static STORAGE_USER_ACCOUNT = 'user';

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
  private STATIC_API_ROOT = 'http://192.168.43.227';
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

  /////////////////////////////////////// ACCOUNTING ///////////////////////////////////////////////////////////////////
  getAccountingRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ACCOUNTING;
  }

  /////////////////////////////////////// ADMIN ////////////////////////////////////////////////////////////////////////
  getAdminRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN;
  }

  /////////////////////////////////////// DASHBOARD //////////////////////////////////////////////////////////////////
  getDashboardRouterLink(): string {
    return this.getAdminRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_DASHBOARD;
  }

  /////////////////////////////////////// LICENSE ////////////////////////////////////////////////////////////////////
  getLicenseRouterLink(): string {
    return this.getAdminRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_LICENSE;
  }

  /////////////////////////////////////// PRIVILEGES /////////////////////////////////////////////////////////////////
  getPrivilegesRouterLink(): string {
    return this.getAdminRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_PRIVILEGES;
  }

  /////////////////////////////////////// SETTINGS ///////////////////////////////////////////////////////////////////
  getSettingsRouterLink(): string {
    return this.getAdminRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_SETTINGS;
  }

  /////////////////////////////////////// USERS //////////////////////////////////////////////////////////////////////
  getUsersRouterLink(): string {
    return this.getAdminRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_USERS;
  }

/////////////////////////////////////// ATTENDANCE /////////////////////////////////////////////////////////////////////
  getAttendanceManagerRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER;
  }

  getAttendanceRouterLink(): string {
    return this.getAttendanceManagerRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER_ATTENDANCE;
  }

  getCheckInRouterLink(): string {
    return this.getAttendanceManagerRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER_CHECK_IN;
  }

/////////////////////////////////////// AUDITOR ////////////////////////////////////////////////////////////////////////
  getAuditorRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR;
  }

  /////////////////////////////////////// AUDITOR REPORTS //////////////////////////////////////////////////////////////
  getAuditorReportsRouterLink(): string {
    return this.getAuditorRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR_REPORTS;
  }

  /////////////////////////////////////// AUDIT TRAIL //////////////////////////////////////////////////////////////////
  getAuditTrailsRouterLink(): string {
    return this.getAuditorRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR_AUDIT_TRAIL;
  }

/////////////////////////////////////// EVENTS /////////////////////////////////////////////////////////////////////////
  getEventsRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_EVENTS;
  }

/////////////////////////////////////// GIVING /////////////////////////////////////////////////////////////////////////
  getGivingRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GIVING;
  }

  getGivingDriveRouterLink(): string {
    return this.getGivingRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GIVING_DRIVE;
  }

  getGivingCategoryRouterLink(): string {
    return this.getGivingRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GIVING_CATEGORY;
  }

  getPledgingDriveRouterLink(): string {
    return this.getGivingRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GIVING_PLEDGING_DRIVE;
  }

/////////////////////////////////////// MEDIA /////////////////////////////////////////////////////////////////////////
  getMediaRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MEDIA;
  }

/////////////////////////////////////// GROUPS /////////////////////////////////////////////////////////////////////////
  getGroupsManagerRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER;
  }

  getGroupsArmsRouterLink(): string {
    return this.getGroupsManagerRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_ARMS;
  }

  getGroupsDepartmentsRouterLink(): string {
    return this.getGroupsManagerRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_DEPARTMENTS;
  }

  getGroupsRouterLink(): string {
    return this.getGroupsManagerRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_GROUPS;
  }

/////////////////////////////////////// MESSAGING //////////////////////////////////////////////////////////////////////
  getMessagingRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING;
  }

  getMessagingSmsRouterLink(): string {
    return this.getMessagingRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS;
  }

  getSmsDraftRouterLink(): string {
    return this.getMessagingSmsRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_DRAFT;
  }

  getSmsInboxRouterLink(): string {
    return this.getMessagingSmsRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_INBOX;
  }

  getSmsPendingRouterLink(): string {
    return this.getMessagingSmsRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_PENDING;
  }

  getSmsScheduledRouterLink(): string {
    return this.getMessagingSmsRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_SCHEDULED;
  }

  getSmsSentRouterLink(): string {
    return this.getMessagingSmsRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_SENT;
  }

  getSmsTemplatesRouterLink(): string {
    return this.getMessagingSmsRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_TEMPLATES;
  }

  getMessagingEmailRouterLink(): string {
    return this.getMessagingRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL;
  }

  getEmailDraftRouterLink(): string {
    return this.getMessagingEmailRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_DRAFT;
  }

  getEmailInboxRouterLink(): string {
    return this.getMessagingEmailRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_INBOX;
  }

  getEmailPendingRouterLink(): string {
    return this.getMessagingEmailRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_PENDING;
  }

  getEmailScheduledRouterLink(): string {
    return this.getMessagingEmailRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_SCHEDULED;
  }

  getEmailSentRouterLink(): string {
    return this.getMessagingEmailRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_SENT;
  }

  getEmailTemplatesRouterLink(): string {
    return this.getMessagingEmailRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_TEMPLATES;
  }


/////////////////////////////////////// PEOPLE /////////////////////////////////////////////////////////////////////////
  getPeopleRouterLink(): string {
    return this.getAuthenticatedRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE;
  }

  getMembersRouterLink(): string {
    return this.getPeopleRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_MEMBERS;
  }

  getVisitorsRouterLink(): string {
    return this.getPeopleRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_VISITORS;
  }

  getPeopleReportsRouterLink(): string {
    return this.getPeopleRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_REPORTS;
  }

  getTaggingRouterLink(): string {
    return this.getPeopleRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_TAGGING;
  }

  getDesignationsRouterLink(): string {
    return this.getPeopleRouterLink() + '/' + AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_DESIGNATIONS;
  }
}
