(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"default~auth-auth-module~authenticated-authenticated-module~content-content-module~login-login-modul~68e9018c",
		"common",
		"auth-auth-module"
	],
	"./authenticated/authenticated.module": [
		"./src/app/authenticated/authenticated.module.ts",
		"default~auth-auth-module~authenticated-authenticated-module~content-content-module~login-login-modul~68e9018c",
		"default~authenticated-authenticated-module~content-content-module~table-view-table-view-module~vacat~9f5a7999",
		"default~authenticated-authenticated-module~content-content-module",
		"common",
		"authenticated-authenticated-module"
	],
	"./calendar-view/calendar-view.module": [
		"./src/app/authenticated/content/calendar-view/calendar-view.module.ts",
		"calendar-view-calendar-view-module"
	],
	"./content/content.module": [
		"./src/app/authenticated/content/content.module.ts",
		"default~auth-auth-module~authenticated-authenticated-module~content-content-module~login-login-modul~68e9018c",
		"default~authenticated-authenticated-module~content-content-module~table-view-table-view-module~vacat~9f5a7999",
		"default~authenticated-authenticated-module~content-content-module",
		"common"
	],
	"./error-pages/error-pages.module": [
		"./src/app/error-pages/error-pages.module.ts",
		"error-pages-error-pages-module"
	],
	"./login/login.module": [
		"./src/app/auth/login/login.module.ts",
		"default~auth-auth-module~authenticated-authenticated-module~content-content-module~login-login-modul~68e9018c",
		"common",
		"login-login-module"
	],
	"./table-view/table-view.module": [
		"./src/app/authenticated/content/table-view/table-view.module.ts",
		"default~auth-auth-module~authenticated-authenticated-module~content-content-module~login-login-modul~68e9018c",
		"default~authenticated-authenticated-module~content-content-module~table-view-table-view-module~vacat~9f5a7999",
		"common",
		"table-view-table-view-module"
	],
	"./vacation-form/vacation-form.module": [
		"./src/app/authenticated/content/vacation-form/vacation-form.module.ts",
		"default~auth-auth-module~authenticated-authenticated-module~content-content-module~login-login-modul~68e9018c",
		"default~authenticated-authenticated-module~content-content-module~table-view-table-view-module~vacat~9f5a7999",
		"common"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _error_pages_page_not_found_error_page_not_found_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-pages/page-not-found-error/page-not-found-error.component */ "./src/app/error-pages/page-not-found-error/page-not-found-error.component.ts");
/* harmony import */ var _shared_guards_should_login_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/guards/should-login.guard */ "./src/app/shared/guards/should-login.guard.ts");







var appRoutes = [
    {
        path: _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"].FRONTEND_ROUTE_AUTHENTICATED,
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        loadChildren: './authenticated/authenticated.module#AuthenticatedModule'
    },
    {
        path: _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"].FRONTEND_ROUTE_AUTH,
        canActivate: [_shared_guards_should_login_guard__WEBPACK_IMPORTED_MODULE_6__["ShouldLoginGuard"]],
        loadChildren: './auth/auth.module#AuthModule'
    },
    { path: _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"].FRONTEND_ROUTE_ERROR, loadChildren: './error-pages/error-pages.module#ErrorPagesModule' },
    { path: '', redirectTo: _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"].FRONTEND_ROUTE_AUTH, pathMatch: 'full' },
    { path: '**', component: _error_pages_page_not_found_error_page_not_found_error_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true } /* TODO: <-- debugging purposes only */)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _error_pages_page_not_found_error_page_not_found_error_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundErrorComponent"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-codes */ "./src/app/global-codes.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.globalCodes = new _global_codes__WEBPACK_IMPORTED_MODULE_2__["GlobalCodes"]();
        this.globalCodes.init();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");
/* harmony import */ var _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/service/auth-util.service */ "./src/app/auth/service/auth-util.service.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _shared_service_abstract_http_client_http_interceptors_http_regular_interceptor_http_regular_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/service/abstract-http-client/http-interceptors/http-regular-interceptor/http-regular-interceptor.service */ "./src/app/shared/service/abstract-http-client/http-interceptors/http-regular-interceptor/http-regular-interceptor.service.ts");
/* harmony import */ var _shared_service_app_wide_service_app_wide_service_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/service/app-wide-service/app-wide-service.module */ "./src/app/shared/service/app-wide-service/app-wide-service.module.ts");
/* harmony import */ var _shared_service_local_storage_local_storage_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/service/local-storage/local-storage.module */ "./src/app/shared/service/local-storage/local-storage.module.ts");
/* harmony import */ var _shared_service_cookie_custom_cookie_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/service/cookie/custom-cookie.module */ "./src/app/shared/service/cookie/custom-cookie.module.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_service_app_wide_service_app_wide_service_module__WEBPACK_IMPORTED_MODULE_11__["AppWideServiceModule"],
                _shared_service_local_storage_local_storage_module__WEBPACK_IMPORTED_MODULE_12__["LocalStorageModule"],
                _shared_service_cookie_custom_cookie_module__WEBPACK_IMPORTED_MODULE_13__["CustomCookieModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _shared_service_abstract_http_client_http_interceptors_http_regular_interceptor_http_regular_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["HttpRegularInterceptorService"],
                    multi: true,
                },
                _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_7__["AppConstantsService"],
                // DeviceService,
                _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_8__["AuthUtilService"],
                _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/models.ts":
/*!********************************!*\
  !*** ./src/app/auth/models.ts ***!
  \********************************/
/*! exports provided: AuthRequest, AuthSuccessToken, AuthTokenDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRequest", function() { return AuthRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSuccessToken", function() { return AuthSuccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenDetails", function() { return AuthTokenDetails; });
/* harmony import */ var _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");

var AuthRequest = /** @class */ (function () {
    function AuthRequest(grant_type, client, clientSecret, scope, userFirstName, userLastName, userEmail, managerEmail, refresh_token) {
        if (client === void 0) { client = _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_0__["AppConstantsService"].BACKEND_OAUTH2_CLIENT; }
        if (clientSecret === void 0) { clientSecret = _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_0__["AppConstantsService"].BACKEND_OAUTH2_CLIENT_SECRET; }
        if (scope === void 0) { scope = _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_0__["AppConstantsService"].BACKEND_OAUTH2_CLIENT_SCOPE; }
        this.grant_type = grant_type;
        this.client = client;
        this.clientSecret = clientSecret;
        this.scope = scope;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.userEmail = userEmail;
        this.managerEmail = managerEmail;
        this.refresh_token = refresh_token;
    }
    return AuthRequest;
}());

var AuthSuccessToken = /** @class */ (function () {
    function AuthSuccessToken(jwtToken, user) {
        this.jwtToken = jwtToken;
        this.user = user;
    }
    return AuthSuccessToken;
}());

var AuthTokenDetails = /** @class */ (function () {
    function AuthTokenDetails(organizationId, email, firstName, lastName, user_name, scope, exp, authorities, jti, client_id) {
        this.organizationId = organizationId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.user_name = user_name;
        this.scope = scope;
        this.exp = exp;
        this.authorities = authorities;
        this.jti = jti;
        this.client_id = client_id;
    }
    return AuthTokenDetails;
}());



/***/ }),

/***/ "./src/app/auth/service/auth-util.service.ts":
/*!***************************************************!*\
  !*** ./src/app/auth/service/auth-util.service.ts ***!
  \***************************************************/
/*! exports provided: AuthUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUtilService", function() { return AuthUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/app-wide-service/app-wide.service */ "./src/app/shared/service/app-wide-service/app-wide.service.ts");
/* harmony import */ var _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/auth/models.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/local-storage/local-storage.service */ "./src/app/shared/service/local-storage/local-storage.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _shared_service_cookie_custom_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/service/cookie/custom-cookie.service */ "./src/app/shared/service/cookie/custom-cookie.service.ts");











var AuthUtilService = /** @class */ (function () {
    function AuthUtilService(appWideService, localStorageService, 
    // private http: HttpClient,
    router, appConstantsService, injector, cookieService) {
        var _this = this;
        this.appWideService = appWideService;
        this.localStorageService = localStorageService;
        this.router = router;
        this.appConstantsService = appConstantsService;
        this.injector = injector;
        this.cookieService = cookieService;
        this.USER_COOKIE_EXPIRES = 60 * 24; // 1 day
        this.authSuccessToken = new _models__WEBPACK_IMPORTED_MODULE_4__["AuthSuccessToken"]();
        // Just to avoid circular dependency on HttpClient
        setTimeout(function () {
            _this.http = _this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]);
        }, 1);
    }
    AuthUtilService.prototype.getAuthTokenDetails = function () {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_8__(this.getAuthSuccessToken().jwtToken);
        }
        catch (err) {
            console.error(err);
        }
    };
    AuthUtilService.prototype.setAuthSuccessToken = function (authSuccessToken) {
        console.log('setAuthSuccessToken authSuccessToken: ', authSuccessToken);
        this.authSuccessToken = authSuccessToken;
        // this.localStorageService.setObj(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN, authSuccessToken);
        this.cookieService.setObj(_shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"].COOKIE_AUTH_SUCCESS_TOKEN, authSuccessToken, this.USER_COOKIE_EXPIRES);
        // Set ActiveOrganizationId
        // this.setActiveOrganizationId(this.getAuthTokenDetails().organizationId);
        //
        // // Set HasRecentlyLogged
        // this.setHasRecentlyLogged();
    };
    AuthUtilService.prototype.removeAuthSuccessToken = function () {
        this.cookieService.delete(_shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"].COOKIE_AUTH_SUCCESS_TOKEN);
        // this.localStorageService.remove(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN);
    };
    AuthUtilService.prototype.isLoggedIn = function () {
        return !!this.getAuthSuccessToken();
    };
    AuthUtilService.prototype.getAuthSuccessToken = function () {
        // if (!this.authSuccessToken.access_token) {
        this.authSuccessToken = this.cookieService.getObj(_shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"].COOKIE_AUTH_SUCCESS_TOKEN);
        // this.authSuccessToken = <AuthSuccessToken> this.localStorageService.getObj(AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN);
        console.log('getAuthSuccessToken authSuccessToken: ', this.authSuccessToken);
        return this.authSuccessToken;
    };
    AuthUtilService.prototype.refreshAuthToken = function () {
        var _this = this;
        var authRequest = new _models__WEBPACK_IMPORTED_MODULE_4__["AuthRequest"](_shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"].BACKEND_OAUTH2_GRANT_TYPE_REFRESH_TOKEN);
        var authSuccessToken = this.getAuthSuccessToken();
        authRequest.refresh_token = authSuccessToken.jwtToken;
        setTimeout(function () {
            _this.http.post('v1/auth/refresh', authRequest).subscribe(function (serverResponse) {
                var refreshedAuthSuccessToken = serverResponse.data;
                _this.authSuccessToken = refreshedAuthSuccessToken;
                console.log('refreshAuthToken authSuccessToken: ', authSuccessToken);
                _this.setAuthSuccessToken(refreshedAuthSuccessToken);
            }, function (error) {
                console.error(error);
            });
        }, 0);
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_9__["of"])(this.authSuccessToken);
    };
    // public setActiveOrganizationId(organizationId: string) {
    //   this.localStorageService.setStr(AppConstantsService.COOKIE_ORGANIZATION_ID, organizationId);
    // }
    //
    // public getActiveOrganizationId(notNull: boolean): string {
    //   const orgId = this.localStorageService.getStr(AppConstantsService.COOKIE_ORGANIZATION_ID);
    //
    //
    //   if (window.location.toString().indexOf('localhost:4200') === -1) { // Not Dev
    //     if (notNull && (!orgId || orgId.length < 30)) {
    //       this.logoutUser();
    //     }
    //   }
    //
    //   return orgId;
    // }
    AuthUtilService.prototype.logoutUser = function () {
        this.redirectUrl = null;
        this.removeAuthSuccessToken();
        this.router.navigate([this.appConstantsService.getLoginRouterLink()]);
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_9__["throwError"])('User logged out!!');
    };
    AuthUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_2__["AppWideService"],
            _shared_service_local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _shared_service_cookie_custom_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CustomCookieService"]])
    ], AuthUtilService);
    return AuthUtilService;
}());



/***/ }),

/***/ "./src/app/error-pages/page-not-found-error/page-not-found-error.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/error-pages/page-not-found-error/page-not-found-error.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found-error works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/error-pages/page-not-found-error/page-not-found-error.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/error-pages/page-not-found-error/page-not-found-error.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2VzL3BhZ2Utbm90LWZvdW5kLWVycm9yL3BhZ2Utbm90LWZvdW5kLWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-pages/page-not-found-error/page-not-found-error.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/error-pages/page-not-found-error/page-not-found-error.component.ts ***!
  \************************************************************************************/
/*! exports provided: PageNotFoundErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundErrorComponent", function() { return PageNotFoundErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundErrorComponent = /** @class */ (function () {
    function PageNotFoundErrorComponent() {
    }
    PageNotFoundErrorComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found-error',
            template: __webpack_require__(/*! ./page-not-found-error.component.html */ "./src/app/error-pages/page-not-found-error/page-not-found-error.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found-error.component.scss */ "./src/app/error-pages/page-not-found-error/page-not-found-error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundErrorComponent);
    return PageNotFoundErrorComponent;
}());



/***/ }),

/***/ "./src/app/global-codes.ts":
/*!*********************************!*\
  !*** ./src/app/global-codes.ts ***!
  \*********************************/
/*! exports provided: GlobalCodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalCodes", function() { return GlobalCodes; });
var GlobalCodes = /** @class */ (function () {
    function GlobalCodes() {
    }
    GlobalCodes.prototype.init = function () {
    };
    return GlobalCodes;
}());



/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/service/auth-util.service */ "./src/app/auth/service/auth-util.service.ts");
/* harmony import */ var _service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authUtilService, router, appConstantsService) {
        this.authUtilService = authUtilService;
        this.router = router;
        this.appConstantsService = appConstantsService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log('In AuthGuard...');
        var url = state.url;
        // ONLY WHILE DEBUGGING
        if (window.location.toString().indexOf('localhost:4200') !== -1) {
            return true;
        }
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (next, state) {
        return this.canActivate(next, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
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
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_3__["AuthUtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_4__["AppConstantsService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guards/should-login.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/guards/should-login.guard.ts ***!
  \*****************************************************/
/*! exports provided: ShouldLoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShouldLoginGuard", function() { return ShouldLoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");
/* harmony import */ var _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/service/auth-util.service */ "./src/app/auth/service/auth-util.service.ts");





var ShouldLoginGuard = /** @class */ (function () {
    function ShouldLoginGuard(authUtilService, router, appConstantsService) {
        this.authUtilService = authUtilService;
        this.router = router;
        this.appConstantsService = appConstantsService;
    }
    ShouldLoginGuard.prototype.canActivate = function (next, state) {
        if (this.authUtilService.isLoggedIn()) {
            this.router.navigate([this.appConstantsService.getLoginSuccessRouterLink()]);
            return false;
        }
        return true;
    };
    ShouldLoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_4__["AuthUtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_3__["AppConstantsService"]])
    ], ShouldLoginGuard);
    return ShouldLoginGuard;
}());



/***/ }),

/***/ "./src/app/shared/service/abstract-http-client/http-interceptors/http-regular-interceptor/http-regular-interceptor.service.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shared/service/abstract-http-client/http-interceptors/http-regular-interceptor/http-regular-interceptor.service.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: HttpRegularInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRegularInterceptorService", function() { return HttpRegularInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../auth/service/auth-util.service */ "./src/app/auth/service/auth-util.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");







var HttpRegularInterceptorService = /** @class */ (function () {
    function HttpRegularInterceptorService(authUtilService, appConstantsService) {
        this.authUtilService = authUtilService;
        this.appConstantsService = appConstantsService;
        this.isRefreshingToken = false;
        this.tokenSubject = new rxjs_index__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    HttpRegularInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        var clonedReq = this.addHeaders(req, this.authUtilService.getAuthSuccessToken());
        var started = Date.now();
        console.log('REQUEST: ', clonedReq);
        var networkResponse = next.handle(clonedReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                var elapsed = Date.now() - started;
                console.log("Request for " + req.urlWithParams + " took " + elapsed + " ms.");
            }
        }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                console.error('vaCalendar: ', error);
                switch (error.status) {
                    case 400:
                        return _this.handle400Error(error);
                    case 401:
                        return _this.handle401Error(req, next);
                    default:
                        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
                }
            }
            else {
                console.error('UNKNOWN ERROR OCCURRED!');
                return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }
        }));
        return networkResponse;
    };
    HttpRegularInterceptorService.prototype.addHeaders = function (req, authSuccessToken) {
        var header = {};
        // Authorization Token
        if (req.url.indexOf('auth') === -1) { // Not login
            if (authSuccessToken !== null && authSuccessToken.jwtToken) {
                header.Authorization = this.appConstantsService.getJwtPrefix() + authSuccessToken.jwtToken;
            }
        }
        return req.clone({ setHeaders: header });
    };
    HttpRegularInterceptorService.prototype.handle401Error = function (req, next) {
        var _this = this;
        console.error('handle401Error: ', req);
        // TODO: Fix this, make to work with Google Api
        return this.authUtilService.logoutUser();
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;
            // Reset here so that the following requests wait until the token
            // comes back from the refreshToken call.
            this.tokenSubject.next(null);
            return this.authUtilService.refreshAuthToken()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (newAuthToken) {
                if (newAuthToken !== null && newAuthToken.jwtToken) {
                    _this.tokenSubject.next(newAuthToken);
                    return next.handle(_this.addHeaders(req, newAuthToken));
                }
                // If we don't get a new token, we are in trouble so logout.
                return _this.authUtilService.logoutUser();
            })).subscribe(function () {
            }, function (error) {
                // If there is an exception calling 'refreshToken', bad news; so logout.
                console.error('handle401Error: ', error);
                return _this.authUtilService.logoutUser();
            }, function () {
                _this.isRefreshingToken = false;
            });
        }
        else {
            return this.tokenSubject
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (token) { return token != null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (token) {
                return next.handle(_this.addHeaders(req, token));
            }));
        }
    };
    HttpRegularInterceptorService.prototype.handle400Error = function (error) {
        console.error('handle400Error: ', error);
        if (error && error.status === 400 && error.error && error.error.error === 'invalid_grant') {
            // If we get a 400 and the error message is 'invalid_grant', the token is no longer valid so logout.
            return this.authUtilService.logoutUser();
        }
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
    };
    HttpRegularInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_3__["AuthUtilService"],
            _app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_6__["AppConstantsService"]])
    ], HttpRegularInterceptorService);
    return HttpRegularInterceptorService;
}());



/***/ }),

/***/ "./src/app/shared/service/app-constants/app-constants.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/service/app-constants/app-constants.service.ts ***!
  \***********************************************************************/
/*! exports provided: AppConstantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstantsService", function() { return AppConstantsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_2__);



var AppConstantsService = /** @class */ (function () {
    function AppConstantsService() {
        // API
        this.STATIC_API_ROOT = 'http://192.168.43.227';
        this.browserUrl = window.location.toString(); // Get url from browser
    }
    AppConstantsService_1 = AppConstantsService;
    /********************************************************************************************************************/
    //                                     BACKEND ROUTING
    /********************************************************************************************************************/
    /////////////////////////////////////////// API ROOT PATH //////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getAppApiRootPath = function () {
        var httpPartLength = this.browserUrl.indexOf(':');
        var httpFullPartLength = this.browserUrl.indexOf('/', httpPartLength + 3); // plus '://'
        if (httpFullPartLength === -1) { // does not end with '/'
            httpFullPartLength = this.browserUrl.length;
        }
        var apiRoot = this.browserUrl.substring(0, httpFullPartLength) + AppConstantsService_1.BACKEND_API_PATH;
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
    };
    AppConstantsService.prototype.getWebsocketApiRootPath = function () {
        return this.getAppApiRootPath() + AppConstantsService_1.BACKEND_WEBSOCKET_RELATIVE_END_POINT;
    };
    // JWT
    AppConstantsService.prototype.getJwtHeaderName = function () {
        return AppConstantsService_1.JWT_HEADER_NAME;
    };
    AppConstantsService.prototype.getJwtPrefix = function () {
        return AppConstantsService_1.JWT_PREFIX;
    };
    // WEBSOCKET
    AppConstantsService.prototype.getWebsocketAbsoluteEndPoint = function () {
        return this.getAppApiRootPath() + AppConstantsService_1.BACKEND_WEBSOCKET_RELATIVE_END_POINT;
    };
    // REQUEST HEADER TYPES
    AppConstantsService.prototype.getRequestHeaderContentTypeJson = function () {
        return AppConstantsService_1.REQUEST_HEADER_CONTENT_TYPE_JSON;
    };
    AppConstantsService.prototype.getRequestHeaderContentTypeBinary = function () {
        return AppConstantsService_1.REQUEST_HEADER_CONTENT_TYPE_BINARY;
    };
    AppConstantsService.prototype.getRequestHeaderContentTypeFormUrlencoded = function () {
        return AppConstantsService_1.REQUEST_HEADER_CONTENT_TYPE_FORM_URLENCODED;
    };
    /********************************************************************************************************************/
    //                                     FRONTEND ROUTING
    /********************************************************************************************************************/
    AppConstantsService.prototype.getBrowserUrl = function () {
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_2__["of"])(window.location.toString());
    };
    /////////////////////////////////////// LOGIN //////////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getLoginRouterLink = function () {
        return '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTH + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTH_LOGIN;
    };
    AppConstantsService.prototype.getLoginSuccessRouterLink = function () {
        return '/' + AppConstantsService_1.FRONTEND_ROUTE_LOGIN_SUCCESS;
    };
    /////////////////////////////////////// AUTHENTICATED //////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getAuthenticatedRouterLink = function () {
        return '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED;
    };
    /////////////////////////////////////// ACCOUNTING ///////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getAccountingRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ACCOUNTING;
    };
    /////////////////////////////////////// ADMIN ////////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getAdminRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ADMIN;
    };
    /////////////////////////////////////// DASHBOARD //////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getDashboardRouterLink = function () {
        return this.getAdminRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_DASHBOARD;
    };
    /////////////////////////////////////// LICENSE ////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getLicenseRouterLink = function () {
        return this.getAdminRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_LICENSE;
    };
    /////////////////////////////////////// PRIVILEGES /////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getPrivilegesRouterLink = function () {
        return this.getAdminRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_PRIVILEGES;
    };
    /////////////////////////////////////// SETTINGS ///////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getSettingsRouterLink = function () {
        return this.getAdminRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_SETTINGS;
    };
    /////////////////////////////////////// USERS //////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getUsersRouterLink = function () {
        return this.getAdminRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_USERS;
    };
    /////////////////////////////////////// ATTENDANCE /////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getAttendanceManagerRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER;
    };
    AppConstantsService.prototype.getAttendanceRouterLink = function () {
        return this.getAttendanceManagerRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER_ATTENDANCE;
    };
    AppConstantsService.prototype.getCheckInRouterLink = function () {
        return this.getAttendanceManagerRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER_CHECK_IN;
    };
    /////////////////////////////////////// AUDITOR ////////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getAuditorRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR;
    };
    /////////////////////////////////////// AUDITOR REPORTS //////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getAuditorReportsRouterLink = function () {
        return this.getAuditorRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR_REPORTS;
    };
    /////////////////////////////////////// AUDIT TRAIL //////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getAuditTrailsRouterLink = function () {
        return this.getAuditorRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR_AUDIT_TRAIL;
    };
    /////////////////////////////////////// EVENTS /////////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getEventsRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_EVENTS;
    };
    /////////////////////////////////////// GIVING /////////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getGivingRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_GIVING;
    };
    AppConstantsService.prototype.getGivingDriveRouterLink = function () {
        return this.getGivingRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_GIVING_DRIVE;
    };
    AppConstantsService.prototype.getGivingCategoryRouterLink = function () {
        return this.getGivingRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_GIVING_CATEGORY;
    };
    AppConstantsService.prototype.getPledgingDriveRouterLink = function () {
        return this.getGivingRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_GIVING_PLEDGING_DRIVE;
    };
    /////////////////////////////////////// MEDIA /////////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getMediaRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MEDIA;
    };
    /////////////////////////////////////// GROUPS /////////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getGroupsManagerRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER;
    };
    AppConstantsService.prototype.getGroupsArmsRouterLink = function () {
        return this.getGroupsManagerRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_ARMS;
    };
    AppConstantsService.prototype.getGroupsDepartmentsRouterLink = function () {
        return this.getGroupsManagerRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_DEPARTMENTS;
    };
    AppConstantsService.prototype.getGroupsRouterLink = function () {
        return this.getGroupsManagerRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_GROUPS;
    };
    /////////////////////////////////////// MESSAGING //////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getMessagingRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING;
    };
    AppConstantsService.prototype.getMessagingSmsRouterLink = function () {
        return this.getMessagingRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS;
    };
    AppConstantsService.prototype.getSmsDraftRouterLink = function () {
        return this.getMessagingSmsRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_DRAFT;
    };
    AppConstantsService.prototype.getSmsInboxRouterLink = function () {
        return this.getMessagingSmsRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_INBOX;
    };
    AppConstantsService.prototype.getSmsPendingRouterLink = function () {
        return this.getMessagingSmsRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_PENDING;
    };
    AppConstantsService.prototype.getSmsScheduledRouterLink = function () {
        return this.getMessagingSmsRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_SCHEDULED;
    };
    AppConstantsService.prototype.getSmsSentRouterLink = function () {
        return this.getMessagingSmsRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_SENT;
    };
    AppConstantsService.prototype.getSmsTemplatesRouterLink = function () {
        return this.getMessagingSmsRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_TEMPLATES;
    };
    AppConstantsService.prototype.getMessagingEmailRouterLink = function () {
        return this.getMessagingRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL;
    };
    AppConstantsService.prototype.getEmailDraftRouterLink = function () {
        return this.getMessagingEmailRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_DRAFT;
    };
    AppConstantsService.prototype.getEmailInboxRouterLink = function () {
        return this.getMessagingEmailRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_INBOX;
    };
    AppConstantsService.prototype.getEmailPendingRouterLink = function () {
        return this.getMessagingEmailRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_PENDING;
    };
    AppConstantsService.prototype.getEmailScheduledRouterLink = function () {
        return this.getMessagingEmailRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_SCHEDULED;
    };
    AppConstantsService.prototype.getEmailSentRouterLink = function () {
        return this.getMessagingEmailRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_SENT;
    };
    AppConstantsService.prototype.getEmailTemplatesRouterLink = function () {
        return this.getMessagingEmailRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_TEMPLATES;
    };
    /////////////////////////////////////// PEOPLE /////////////////////////////////////////////////////////////////////////
    AppConstantsService.prototype.getPeopleRouterLink = function () {
        return this.getAuthenticatedRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE;
    };
    AppConstantsService.prototype.getMembersRouterLink = function () {
        return this.getPeopleRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_MEMBERS;
    };
    AppConstantsService.prototype.getVisitorsRouterLink = function () {
        return this.getPeopleRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_VISITORS;
    };
    AppConstantsService.prototype.getPeopleReportsRouterLink = function () {
        return this.getPeopleRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_REPORTS;
    };
    AppConstantsService.prototype.getTaggingRouterLink = function () {
        return this.getPeopleRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_TAGGING;
    };
    AppConstantsService.prototype.getDesignationsRouterLink = function () {
        return this.getPeopleRouterLink() + '/' + AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_DESIGNATIONS;
    };
    var AppConstantsService_1;
    // ORGANIZATION
    AppConstantsService.COOKIE_ORGANIZATION_ID = 'org_id';
    AppConstantsService.COOKIE_AUTH_SUCCESS_TOKEN = 'authSuccessToken';
    AppConstantsService.COOKIE_HAS_RECENTlY_LOGGED = 'ever_logged';
    // BACKEND
    // OAuth2
    AppConstantsService.BACKEND_OAUTH2_GRANT_TYPE_PASSWORD = 'password';
    AppConstantsService.BACKEND_OAUTH2_GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';
    AppConstantsService.BACKEND_OAUTH2_CLIENT = 'churchrunclient';
    AppConstantsService.BACKEND_OAUTH2_CLIENT_SCOPE = 'webclient';
    AppConstantsService.BACKEND_OAUTH2_CLIENT_SECRET = 'secret';
    // AUTH ROUTES
    AppConstantsService.BACKEND_ROUTE_AUTH = 'auth';
    AppConstantsService.BACKEND_ROUTE_AUTH_LOGIN = 'login';
    AppConstantsService.BACKEND_ROUTE_AUTH_LOGOUT = 'logout';
    // WEBSOCKET
    AppConstantsService.BACKEND_WEBSOCKET_RELATIVE_END_POINT = 'cr-websocket';
    // FRONTEND ROUTES
    // INDEX
    AppConstantsService.FRONTEND_ROUTE_INDEX = '';
    AppConstantsService.FRONTEND_ROUTE_INDEX_HOME = 'home';
    AppConstantsService.FRONTEND_ROUTE_INDEX_FIRST_USER = 'first-user';
    // AUTH
    AppConstantsService.FRONTEND_ROUTE_AUTH = 'auth';
    AppConstantsService.FRONTEND_ROUTE_AUTH_LOGIN = 'login';
    AppConstantsService.FRONTEND_ROUTE_AUTH_LOGOUT = 'logout';
    // ERROR
    AppConstantsService.FRONTEND_ROUTE_ERROR = 'fatal';
    AppConstantsService.FRONTEND_ROUTE_ERROR_FATAL = 'fatal';
    // AUTHENTICATED
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED = 'portal';
    AppConstantsService.FRONTEND_ROUTE_LOGIN_SUCCESS = AppConstantsService_1.FRONTEND_ROUTE_AUTHENTICATED;
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ACCOUNTING = 'accounting';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN = 'admin';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_DASHBOARD = 'dashboard';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_LICENSE = 'license';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_PRIVILEGES = 'privileges';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_SETTINGS = 'settings';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ADMIN_USERS = 'users';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER = 'attendance-manager';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER_ATTENDANCE = 'attendance';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_ATTENDANCE_MANAGER_CHECK_IN = 'check-in';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR = 'auditor';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR_REPORTS = 'reports';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_AUDITOR_AUDIT_TRAIL = 'audit-trail';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_EVENTS = 'events';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MEDIA = 'media';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GIVING = 'giving';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GIVING_DRIVE = 'giving-drive';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GIVING_CATEGORY = 'giving-category';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GIVING_PLEDGING_DRIVE = 'pledging-drive';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER = 'groups-manager';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_ARMS = 'arms';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_DEPARTMENTS = 'departments';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_GROUPS_MANAGER_GROUPS = 'groups';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING = 'messaging';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS = 'sms';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_DRAFT = 'draft';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_INBOX = 'inbox';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_PENDING = 'pending';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_SCHEDULED = 'scheduled';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_SENT = 'sent';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_SMS_TEMPLATES = 'templates';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL = 'email';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_DRAFT = 'draft';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_INBOX = 'inbox';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_PENDING = 'pending';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_SCHEDULED = 'scheduled';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_SENT = 'sent';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_MESSAGING_EMAIL_TEMPLATES = 'templates';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE = 'people';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_MEMBERS = 'members';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_VISITORS = 'visitors';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_REPORTS = 'reports';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_TAGGING = 'tagging';
    AppConstantsService.FRONTEND_ROUTE_AUTHENTICATED_PEOPLE_DESIGNATIONS = 'designations';
    // FRONTEND SESSION
    AppConstantsService.LAST_ACTIVE_TIME = 'last_active';
    AppConstantsService.STORAGE_USER_ACCOUNT = 'user';
    // BACKEND
    // RESTFUL/FORM HEADER
    AppConstantsService.REQUEST_HEADER_CONTENT_TYPE_JSON = 'application/json';
    AppConstantsService.REQUEST_HEADER_CONTENT_TYPE_BINARY = 'binary/octet-stream';
    AppConstantsService.REQUEST_HEADER_CONTENT_TYPE_FORM_URLENCODED = 'application/x-www-form-urlencoded';
    // JWT
    AppConstantsService.JWT_HEADER_NAME = 'Authorization';
    AppConstantsService.JWT_PREFIX = 'Bearer';
    AppConstantsService.BACKEND_API_PATH = '/';
    AppConstantsService = AppConstantsService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConstantsService);
    return AppConstantsService;
}());



/***/ }),

/***/ "./src/app/shared/service/app-wide-service/app-wide-service.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/service/app-wide-service/app-wide-service.module.ts ***!
  \****************************************************************************/
/*! exports provided: AppWideServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWideServiceModule", function() { return AppWideServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/confirm-modal/confirm-modal.component */ "./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _modals_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/status-modal/status-modal.component */ "./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.ts");
/* harmony import */ var _app_wide_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-wide.service */ "./src/app/shared/service/app-wide-service/app-wide.service.ts");
/* harmony import */ var _template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../template/angular-material/angular-material.module */ "./src/app/shared/template/angular-material/angular-material.module.ts");







var AppWideServiceModule = /** @class */ (function () {
    function AppWideServiceModule() {
    }
    AppWideServiceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"]
            ],
            declarations: [
                _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"],
                _modals_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_4__["StatusModalComponent"]
            ],
            entryComponents: [
                _modals_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_4__["StatusModalComponent"],
                _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"]
            ],
            exports: [
                _modals_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_4__["StatusModalComponent"],
                _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"]
            ],
            providers: [
                _app_wide_service__WEBPACK_IMPORTED_MODULE_5__["AppWideService"]
            ]
        })
    ], AppWideServiceModule);
    return AppWideServiceModule;
}());



/***/ }),

/***/ "./src/app/shared/service/app-wide-service/app-wide.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/service/app-wide-service/app-wide.service.ts ***!
  \*********************************************************************/
/*! exports provided: AppWideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWideService", function() { return AppWideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modals_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/status-modal/status-modal.component */ "./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.ts");
/* harmony import */ var _modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/confirm-modal/confirm-modal.component */ "./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sha.js */ "./node_modules/sha.js/index.js");
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_8__);









// import SockJS from 'sockjs-client';
// import Stomp from 'stompjs';
var AppWideService = /** @class */ (function () {
    function AppWideService(mdDialog, appConstantsService, router) {
        this.mdDialog = mdDialog;
        this.appConstantsService = appConstantsService;
        this.router = router;
        this.globalModalList = [];
        this.selectedVacationRows = [];
        this.searchFilterObservable = new rxjs_index__WEBPACK_IMPORTED_MODULE_8__["ReplaySubject"](1);
        AppWideService_1.wbs = this.appConstantsService.getWebsocketApiRootPath();
    }
    AppWideService_1 = AppWideService;
    AppWideService.webSocketConnect = function (onSuccessCallback, onFailureCallback) {
        // // const that = this;
        // const socket = new SockJS(AppWideService.wbs);
        // const stompClient = Stomp.over(socket);
        // stompClient.connect({}, (frame) => {
        //   console.log('Connected: ' + frame);
        //
        //   clearInterval(this.webSocketReconnectionInterval);
        //   this.webSocketReconnectionInterval = null;
        //   onSuccessCallback(stompClient);
        //
        // }, () => {
        //   if (this.webSocketReconnectionInterval === null) {
        //     this.webSocketReconnectionInterval = setInterval(() => {
        //       // location.reload();
        //       onFailureCallback();
        //       console.log('Connection lost!: ' + this.webSocketReconnectionInterval.runCount);
        //       if (this.webSocketReconnectionInterval.runCount >= 100) {
        //         clearInterval(this.webSocketReconnectionInterval);
        //       }
        //     }, 5000);
        //   }
        // });
    };
    AppWideService.prototype.setSearchFilterValue = function (searchFilter) {
        this.searchFilterObservable.next(searchFilter);
    };
    AppWideService.prototype.getSelectedVacationRows = function () {
        return this.selectedVacationRows;
    };
    AppWideService.prototype.setSelectedVacationRows = function (selectedVacationRows) {
        this.selectedVacationRows = selectedVacationRows;
    };
    AppWideService.prototype.openStatusModal = function (message, status, vcr) {
        // Open dialog to add add message
        // 1. createMember dialog config
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.viewContainerRef = vcr;
        // 2. open dialog
        var dialog = this.mdDialog.open(_modals_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_4__["StatusModalComponent"], dialogConfig);
        // 3. pass selected model to dialog
        dialog.componentInstance.message = message;
        dialog.componentInstance.status = status;
        return dialog;
    };
    AppWideService.prototype.openConfirmModal = function (message, iconClass, vcr) {
        // Open dialog to add add message
        // 1. createMember dialog config
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        // dialogConfig.disableClose = true;
        dialogConfig.viewContainerRef = vcr;
        // 2. open dialog
        var dialog = this.mdDialog.open(_modals_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], dialogConfig);
        // 3. pass selected model to dialog
        dialog.componentInstance.message = message;
        dialog.componentInstance.iconClass = iconClass;
        // Return an observable
        return dialog.afterClosed();
    };
    AppWideService.prototype.sendToLocalStore = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    AppWideService.prototype.closeAllGlobalModals = function () {
        this.globalModalList.forEach(function (globalModal) {
            globalModal.close();
        });
    };
    AppWideService.prototype.sha256 = function (value) {
        return new sha_js__WEBPACK_IMPORTED_MODULE_6___default.a.sha256('').update(value).digest('hex');
    };
    AppWideService.prototype.sha512 = function (value) {
        return new sha_js__WEBPACK_IMPORTED_MODULE_6___default.a.sha512('').update(value).digest('hex');
    };
    AppWideService.prototype.patternDigitsNonEmpty = function () {
        return '[0-9]+';
    };
    AppWideService.prototype.navigateTo = function (node) {
        var curUrl = this.router.routerState.snapshot.url;
        this.router.navigate([curUrl + '/' + node]);
    };
    AppWideService.prototype.getErrorMessage = function (serverError) {
        var errorMessages = '';
        try {
            errorMessages = serverError.error.data.message;
        }
        catch (err) {
            errorMessages = 'Unknown error (Check your internet connection)';
            console.error('Unknown serverError: ', serverError);
        }
        return errorMessages;
    };
    var AppWideService_1;
    AppWideService.webSocketReconnectionInterval = null;
    AppWideService = AppWideService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_7__["AppConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppWideService);
    return AppWideService;
}());



/***/ }),

/***/ "./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"padding-top: 24px !important;\">\r\n  <span [outerHTML]=\"message\"></span>\r\n</mat-card>\r\n<mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n  <button mat-raised-button color=\"primary\" (click)=\"yesClicked()\">Yes</button>\r\n  <button mat-raised-button mat-dialog-close color=\"accent\" (click)=\"noClicked()\">No</button>\r\n</mat-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZXJ2aWNlL2FwcC13aWRlLXNlcnZpY2UvbW9kYWxzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(mdDialogRef) {
        this.mdDialogRef = mdDialogRef;
        this.message = 'Are you sure?';
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent.prototype.yesClicked = function () {
        this.mdDialogRef.close(true);
    };
    ConfirmModalComponent.prototype.noClicked = function () {
        this.mdDialogRef.close(false);
    };
    ConfirmModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/shared/service/app-wide-service/modals/confirm-modal/confirm-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\r\n  <i *ngIf=\"status == 'ban'; else others\" class=\"fa fa-ban fa-3x text-danger\"></i>\r\n  <ng-template #others>\r\n    <i class=\"fa fa-check-square-o fa-3x text-success\"></i>\r\n  </ng-template>\r\n  <br />\r\n  <span [outerHTML]=\"message\"></span>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zZXJ2aWNlL2FwcC13aWRlLXNlcnZpY2UvbW9kYWxzL3N0YXR1cy1tb2RhbC9zdGF0dXMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StatusModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusModalComponent", function() { return StatusModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusModalComponent = /** @class */ (function () {
    function StatusModalComponent() {
        this.message = '';
        this.status = '';
    }
    StatusModalComponent.prototype.ngOnInit = function () {
    };
    StatusModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status-modal',
            template: __webpack_require__(/*! ./status-modal.component.html */ "./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.html"),
            styles: [__webpack_require__(/*! ./status-modal.component.scss */ "./src/app/shared/service/app-wide-service/modals/status-modal/status-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StatusModalComponent);
    return StatusModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/service/cookie/custom-cookie.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/service/cookie/custom-cookie.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomCookieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCookieModule", function() { return CustomCookieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _custom_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-cookie.service */ "./src/app/shared/service/cookie/custom-cookie.service.ts");





var CustomCookieModule = /** @class */ (function () {
    function CustomCookieModule() {
    }
    CustomCookieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [],
            providers: [
                _custom_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CustomCookieService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            ]
        })
    ], CustomCookieModule);
    return CustomCookieModule;
}());



/***/ }),

/***/ "./src/app/shared/service/cookie/custom-cookie.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/service/cookie/custom-cookie.service.ts ***!
  \****************************************************************/
/*! exports provided: CustomCookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCookieService", function() { return CustomCookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");



var CustomCookieService = /** @class */ (function () {
    function CustomCookieService(cookieService) {
        this.cookieService = cookieService;
    }
    /**
     * @param name Cookie name
     * @returns check
     */
    CustomCookieService.prototype.check = function (name) {
        return this.cookieService.check(name);
    };
    /**
     * @param name Cookie name
     * @returns get
     */
    CustomCookieService.prototype.get = function (name) {
        return this.cookieService.get(name);
    };
    CustomCookieService.prototype.getObj = function (name) {
        var str = this.get(name);
        return str ? JSON.parse(str) : str;
    };
    /**
     * @returns Obj
     */
    CustomCookieService.prototype.getAll = function () {
        return this.cookieService.getAll();
    };
    /**
     * @param name    Cookie name
     * @param value   Cookie value
     * @param expires Number of days until the cookies expires or an actual `Date`
     * @param path    Cookie path
     * @param domain  Cookie domain
     * @param secure  Secure flag
     */
    CustomCookieService.prototype.set = function (name, value, expires, path, domain, secure) {
        this.delete(name, path, domain); // Delete if exist
        return this.cookieService.set(name, value, expires, path, domain, secure);
    };
    CustomCookieService.prototype.setObj = function (name, value, expires, path, domain, secure) {
        return this.set(name, JSON.stringify(value), expires, path, domain, secure);
    };
    /**
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CustomCookieService.prototype.delete = function (name, path, domain) {
        return this.cookieService.delete(name, path, domain);
    };
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CustomCookieService.prototype.deleteAll = function (path, domain) {
        return this.cookieService.deleteAll(path, domain);
    };
    CustomCookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], CustomCookieService);
    return CustomCookieService;
}());



/***/ }),

/***/ "./src/app/shared/service/local-storage/local-storage.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/service/local-storage/local-storage.module.ts ***!
  \**********************************************************************/
/*! exports provided: LocalStorageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageModule", function() { return LocalStorageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/shared/service/local-storage/local-storage.service.ts");




var LocalStorageModule = /** @class */ (function () {
    function LocalStorageModule() {
    }
    LocalStorageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [],
            providers: [
                _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]
            ]
        })
    ], LocalStorageModule);
    return LocalStorageModule;
}());



/***/ }),

/***/ "./src/app/shared/service/local-storage/local-storage.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/service/local-storage/local-storage.service.ts ***!
  \***********************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.setObj = function (key, value) {
        var objStr = JSON.stringify(value);
        this.setStr(key, objStr);
    };
    LocalStorageService.prototype.getObj = function (key) {
        var objStr = this.getStr(key);
        if (objStr) {
            return JSON.parse(objStr);
        }
        return null;
    };
    LocalStorageService.prototype.setStr = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.getStr = function (key) {
        var str;
        try {
            str = localStorage.getItem(key);
        }
        catch (err) {
            console.error(err);
        }
        return str;
    };
    LocalStorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/template/angular-material/angular-material.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/angular-material.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _custom_mat_dialog_title_bar_mat_dialog_title_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom/mat-dialog-title-bar/mat-dialog-title-bar.component */ "./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.ts");
/* harmony import */ var _custom_form_control_group_header_form_control_group_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom/form-control-group-header/form-control-group-header.component */ "./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _custom_field_display_header_field_display_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom/field-display-header/field-display-header.component */ "./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.ts");
/* harmony import */ var angular_draggable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-draggable */ "./node_modules/angular-draggable/dist/draggable.module.js");
/* harmony import */ var angular_draggable__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular_draggable__WEBPACK_IMPORTED_MODULE_10__);











var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                angular_draggable__WEBPACK_IMPORTED_MODULE_10__["NgDraggableModule"]
            ],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _custom_mat_dialog_title_bar_mat_dialog_title_bar_component__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitleBarComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _custom_form_control_group_header_form_control_group_header_component__WEBPACK_IMPORTED_MODULE_6__["FormControlGroupHeaderComponent"],
                _custom_field_display_header_field_display_header_component__WEBPACK_IMPORTED_MODULE_9__["FieldDisplayHeaderComponent"],
            ],
            declarations: [_custom_mat_dialog_title_bar_mat_dialog_title_bar_component__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitleBarComponent"], _custom_form_control_group_header_form_control_group_header_component__WEBPACK_IMPORTED_MODULE_6__["FormControlGroupHeaderComponent"], _custom_field_display_header_field_display_header_component__WEBPACK_IMPORTED_MODULE_9__["FieldDisplayHeaderComponent"]]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-control-group-container\">\n  <h3 class=\"text-muted form-control-group-label\">\n    {{ label }}\n  </h3>\n  <hr/>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control-group-container {\n  position: relative; }\n  .form-control-group-container h3 {\n    margin: 20px 0px 5px 0px; }\n  .form-control-group-container h3.form-control-group-label {\n      color: #dddddd;\n      background-color: #fff;\n      padding: 4px 0px 0px 0px;\n      font-size: 16px;\n      text-transform: uppercase; }\n  .form-control-group-container hr {\n    margin: 2px 0px 4px 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RlbXBsYXRlL2FuZ3VsYXItbWF0ZXJpYWwvY3VzdG9tL2ZpZWxkLWRpc3BsYXktaGVhZGVyL0Y6XFxDcm9zc092ZXJcXEJvb3RjYW1wXFxJbm5vdmF0aW9uXFx2YWNhdGlvbi1jYWxlbmRhclxcd2ViL3NyY1xcYXBwXFxzaGFyZWRcXHRlbXBsYXRlXFxhbmd1bGFyLW1hdGVyaWFsXFxjdXN0b21cXGZpZWxkLWRpc3BsYXktaGVhZGVyXFxmaWVsZC1kaXNwbGF5LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFrQixFQWVuQjtFQWhCRDtJQUlJLHlCQUF3QixFQVF6QjtFQVpIO01BTU0sZUFBYztNQUNkLHVCQUFzQjtNQUN0Qix5QkFBd0I7TUFDeEIsZ0JBQWU7TUFDZiwwQkFBeUIsRUFDMUI7RUFYTDtJQWNJLHdCQUF1QixFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90ZW1wbGF0ZS9hbmd1bGFyLW1hdGVyaWFsL2N1c3RvbS9maWVsZC1kaXNwbGF5LWhlYWRlci9maWVsZC1kaXNwbGF5LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1jb250cm9sLWdyb3VwLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4IDVweCAwcHg7XHJcbiAgICAmLmZvcm0tY29udHJvbC1ncm91cC1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjZGRkZGRkO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBwYWRkaW5nOiA0cHggMHB4IDBweCAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICB9XHJcbiAgaHJ7XHJcbiAgICBtYXJnaW46IDJweCAwcHggNHB4IDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: FieldDisplayHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldDisplayHeaderComponent", function() { return FieldDisplayHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FieldDisplayHeaderComponent = /** @class */ (function () {
    function FieldDisplayHeaderComponent() {
    }
    FieldDisplayHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FieldDisplayHeaderComponent.prototype, "label", void 0);
    FieldDisplayHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-field-display-header',
            template: __webpack_require__(/*! ./field-display-header.component.html */ "./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.html"),
            styles: [__webpack_require__(/*! ./field-display-header.component.scss */ "./src/app/shared/template/angular-material/custom/field-display-header/field-display-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldDisplayHeaderComponent);
    return FieldDisplayHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\n<div class=\"form-control-group-container\">\n  <h3 class=\"text-muted form-control-group-label\">\n    {{ label }}\n  </h3>\n  <hr/>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control-group-container {\n  position: relative; }\n\n.form-control-group-label {\n  margin: 0px;\n  position: absolute;\n  top: -12px;\n  left: 0px;\n  color: #dddddd;\n  background-color: #fff;\n  padding: 0px 20px 0px 0px;\n  font-size: 16px;\n  text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RlbXBsYXRlL2FuZ3VsYXItbWF0ZXJpYWwvY3VzdG9tL2Zvcm0tY29udHJvbC1ncm91cC1oZWFkZXIvRjpcXENyb3NzT3ZlclxcQm9vdGNhbXBcXElubm92YXRpb25cXHZhY2F0aW9uLWNhbGVuZGFyXFx3ZWIvc3JjXFxhcHBcXHNoYXJlZFxcdGVtcGxhdGVcXGFuZ3VsYXItbWF0ZXJpYWxcXGN1c3RvbVxcZm9ybS1jb250cm9sLWdyb3VwLWhlYWRlclxcZm9ybS1jb250cm9sLWdyb3VwLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFVBQVM7RUFDVCxlQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLDBCQUF5QjtFQUN6QixnQkFBZTtFQUNmLDBCQUF5QixFQUMxQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC90ZW1wbGF0ZS9hbmd1bGFyLW1hdGVyaWFsL2N1c3RvbS9mb3JtLWNvbnRyb2wtZ3JvdXAtaGVhZGVyL2Zvcm0tY29udHJvbC1ncm91cC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tY29udHJvbC1ncm91cC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wtZ3JvdXAtbGFiZWwge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMnB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBjb2xvcjogI2RkZGRkZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweCAwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: FormControlGroupHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlGroupHeaderComponent", function() { return FormControlGroupHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormControlGroupHeaderComponent = /** @class */ (function () {
    function FormControlGroupHeaderComponent() {
    }
    FormControlGroupHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FormControlGroupHeaderComponent.prototype, "label", void 0);
    FormControlGroupHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-control-group-header',
            template: __webpack_require__(/*! ./form-control-group-header.component.html */ "./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.html"),
            styles: [__webpack_require__(/*! ./form-control-group-header.component.scss */ "./src/app/shared/template/angular-material/custom/form-control-group-header/form-control-group-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormControlGroupHeaderComponent);
    return FormControlGroupHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-title\r\n     appDraggable\r\n     dragHandle=\".drag-handle\"\r\n     dragTarget=\".mat-dialog-container\"\r\n     fxLayout=\"row\"\r\n     fxLayoutAlign=\"space-between center\"\r\n     class=\"drag-handle\"\r\n     style=\"background-color: #ccc; margin: -24px -24px auto -24px; padding: 8px; cursor: move\">\r\n  <span>{{ title }}</span>\r\n  <div>\r\n    <i class=\"fa fa-expand canExpand\" [class.text-muted]=\"!canExpand\" (click)=\"expand()\" [matTooltip]=\"canExpand ? 'Expand' : ''\"></i>\r\n    <i class=\"fa fa-arrows-alt canFullScreen\" [class.text-muted]=\"!canFullScreen\" (click)=\"fullScreen()\" [matTooltip]=\"canFullScreen ? 'Fullscreen' : ''\"></i>\r\n    <i class=\"fa fa-window-close canClose\" [class.text-muted]=\"!canClose\" (click)=\"close()\" [matTooltip]=\"canClose ? 'Close' : ''\"></i>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #ccc;\n  margin: -24px -24px auto -24px;\n  padding: 8px; }\n\ni {\n  margin-left: 8px; }\n\ni:not(.text-muted) {\n    cursor: pointer; }\n\ni.canClose:hover {\n    color: #a94442; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RlbXBsYXRlL2FuZ3VsYXItbWF0ZXJpYWwvY3VzdG9tL21hdC1kaWFsb2ctdGl0bGUtYmFyL0Y6XFxDcm9zc092ZXJcXEJvb3RjYW1wXFxJbm5vdmF0aW9uXFx2YWNhdGlvbi1jYWxlbmRhclxcd2ViL3NyY1xcYXBwXFxzaGFyZWRcXHRlbXBsYXRlXFxhbmd1bGFyLW1hdGVyaWFsXFxjdXN0b21cXG1hdC1kaWFsb2ctdGl0bGUtYmFyXFxtYXQtZGlhbG9nLXRpdGxlLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQjtFQUN0QiwrQkFBOEI7RUFDOUIsYUFBWSxFQUNiOztBQUVEO0VBQ0UsaUJBQWdCLEVBUWpCOztBQVREO0lBSUksZ0JBQWUsRUFDaEI7O0FBTEg7SUFPSSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdGVtcGxhdGUvYW5ndWxhci1tYXRlcmlhbC9jdXN0b20vbWF0LWRpYWxvZy10aXRsZS1iYXIvbWF0LWRpYWxvZy10aXRsZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgbWFyZ2luOiAtMjRweCAtMjRweCBhdXRvIC0yNHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuaXtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG5cclxuICAmOm5vdCgudGV4dC1tdXRlZCl7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICYuY2FuQ2xvc2U6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2E5NDQ0MjtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MatDialogTitleBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDialogTitleBarComponent", function() { return MatDialogTitleBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import * as screenfull from 'screenfull';
var MatDialogTitleBarComponent = /** @class */ (function () {
    function MatDialogTitleBarComponent(router, route) {
        this.router = router;
        this.route = route;
        this.navigateOnClose = true;
        this.doRouteBackTraceOnClose = true; // Handles unwanted child closing parent
        this.dialogResizedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MatDialogTitleBarComponent.prototype.fireDialogResizedEvent = function () {
        this.dialogResizedEvent.next(Math.random());
    };
    MatDialogTitleBarComponent.prototype.ngOnInit = function () {
        this.registerRouteBackTraceOnClose();
    };
    MatDialogTitleBarComponent.prototype.registerRouteBackTraceOnClose = function () {
        var _this = this;
        if (this.navigateOnClose) {
            if (this.doRouteBackTraceOnClose) {
                this.dialogRef.afterClosed().subscribe(function (output) {
                    var url = _this.router.routerState.snapshot.url;
                    var lastRoute = _this.route.snapshot.parent.url.join('/');
                    _this.router.navigate([url.substring(0, url.lastIndexOf(lastRoute))]);
                });
            }
        }
    };
    MatDialogTitleBarComponent.prototype.expand = function () {
        if (this.canExpand) {
            console.log('Expanding dialog...');
            this.dialogRef.updateSize('100%', '100%').updatePosition();
            this.fireDialogResizedEvent();
        }
    };
    MatDialogTitleBarComponent.prototype.fullScreen = function () {
        if (this.canFullScreen) {
            //
            // if (screenfull.enabled) {
            //   screenfull.request();
            //   this.dialogRef.updateSize('100%', '100%').updatePosition();
            // }
            this.fireDialogResizedEvent();
        }
    };
    MatDialogTitleBarComponent.prototype.close = function () {
        if (this.canClose) {
            this.dialogRef.close();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MatDialogTitleBarComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MatDialogTitleBarComponent.prototype, "canExpand", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MatDialogTitleBarComponent.prototype, "canFullScreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MatDialogTitleBarComponent.prototype, "canClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])
    ], MatDialogTitleBarComponent.prototype, "dialogRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MatDialogTitleBarComponent.prototype, "dialogViewContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MatDialogTitleBarComponent.prototype, "navigateOnClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MatDialogTitleBarComponent.prototype, "doRouteBackTraceOnClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MatDialogTitleBarComponent.prototype, "dialogResizedEvent", void 0);
    MatDialogTitleBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-dialog-title-bar',
            template: __webpack_require__(/*! ./mat-dialog-title-bar.component.html */ "./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.html"),
            styles: [__webpack_require__(/*! ./mat-dialog-title-bar.component.scss */ "./src/app/shared/template/angular-material/custom/mat-dialog-title-bar/mat-dialog-title-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MatDialogTitleBarComponent);
    return MatDialogTitleBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    console.log = function () {
    };
    console.error = function () {
    };
    console.warn = function () {
    };
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\CrossOver\Bootcamp\Innovation\vacation-calendar\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map