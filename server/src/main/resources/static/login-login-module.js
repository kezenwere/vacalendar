(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"position: relative; z-index: 2; height: 100vh;\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\"\r\n         [@loginComponentAnimate]>\r\n  <mat-card class=\"card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"header-image\"><i class=\"fa fa-calendar-plus-o fa-2x\"></i> </div>\r\n      <mat-card-title>vaCalendar</mat-card-title>\r\n      <mat-card-subtitle>…have vacation plans centrally managed</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"../../../assets/vacation-bg.jpg\">\r\n    <mat-card-content>\r\n      <p>\r\n        vaCalendar provides a central point of entry and report of Aurea.com team members vacation plan.\r\n      </p>\r\n      <ol>\r\n        <li>Request your vacation</li>\r\n        <li>Delete your vacation requests</li>\r\n        <li>Approve or Reject vacation requests</li>\r\n        <li>Sends Google Calendar Notification</li>\r\n      </ol>\r\n    </mat-card-content>\r\n    <div *ngIf=\"errorMessages\" class=\"alert alert-danger\" role=\"alert\">\r\n      <strong>Oh snap! </strong> {{ errorMessages }}\r\n    </div>\r\n    <mat-card-actions>\r\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"authRequest()\" style=\"width: 100%;\">\r\n        LOGIN &nbsp;WITH YOUR AUREA ACCOUNT\r\n        <i class=\"fa fa-sign-in\"></i>\r\n      </button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</section>\r\n\r\n<!--#fbfbfc-->\r\n<div style=\"    background: #fff;\r\n    bottom: 0;\r\n    direction: ltr;\r\n    left: 0;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    z-index: 1;\" aria-hidden=\"true\">\r\n  <svg width=\"100%\" height=\"99.2vh\" xmlns=\"https://www.w3.org/2000/svg\" viewBox=\"0 0 1440 810\"\r\n       preserveAspectRatio=\"xMinYMin slice\" aria-hidden=\"true\">\r\n    <path fill=\"#efefee\"\r\n          d=\"M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z\"></path>\r\n    <path fill=\"#f6f6f6\"\r\n          d=\"M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z\"></path>\r\n    <path fill=\"#f7f7f7\"\r\n          d=\"M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z\"></path>\r\n    <path fill=\"#fbfbfc\" d=\"M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z\"></path>\r\n    <path fill=\"#ebebec\"\r\n          d=\"M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z\"></path>\r\n    <path fill=\"#e1e1e1\"\r\n          d=\"M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z\"></path>\r\n    <path fill=\"#e7e7e7\"\r\n          d=\"M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z\"></path>\r\n  </svg>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  max-width: 400px; }\n  .card .header-image {\n    background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9GOlxcQ3Jvc3NPdmVyXFxCb290Y2FtcFxcSW5ub3ZhdGlvblxcdmFjYXRpb24tY2FsZW5kYXJcXHdlYi9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBO0VBQ0UsaUJBQWdCLEVBS2pCO0VBTkQ7SUFJSSx1QkFBc0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy86aG9zdHtcclxuLy8gIHdpZHRoOiAxMDAlO1xyXG4vLyAgaGVpZ2h0OiAxMDAlO1xyXG4vL31cclxuLy9cclxuLy8ubG9nby1saW5re1xyXG4vLyAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbi8vICBvcGFjaXR5OiAwLjM7XHJcbi8vICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuLy99XHJcbi8vXHJcbi8vLmxvZ28tbGluazpob3ZlciB7XHJcbi8vICBvcGFjaXR5OiAxO1xyXG4vL31cclxuXHJcbi5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAuaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/auth/service/auth.service.ts");
/* harmony import */ var _service_auth_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth-util.service */ "./src/app/auth/service/auth-util.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, authUtilService, appConstantsService, route, router) {
        this.authService = authService;
        this.authUtilService = authUtilService;
        this.appConstantsService = appConstantsService;
        this.route = route;
        this.router = router;
        this.errorMessages = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.tryHandleAuthResponse();
    };
    LoginComponent.prototype.authRequest = function () {
        var _this = this;
        this.authService.authRequest().subscribe(function (serverResponse) {
            _this.errorMessages = '';
            var authRedirectUrl = serverResponse.data;
            console.log('authRequest authRedirectUrl: ', authRedirectUrl);
            // REDIRECT
            window.location.replace(authRedirectUrl);
        }, function (serverError) {
            console.log('authRequest serverError: ', serverError);
            _this.errorMessages = serverError.error.data.message;
        });
    };
    LoginComponent.prototype.tryHandleAuthResponse = function () {
        var _this = this;
        var queryParams = this.route.snapshot.parent.queryParams;
        var authCode = '';
        try {
            authCode = queryParams.code;
            if (!authCode) {
                return;
            }
            console.log('tryHandleAuthResponse authCode: ', authCode);
            this.authService.authCode2Jwt(authCode).subscribe(function (serverResponse) {
                _this.errorMessages = '';
                var authSuccessToken = serverResponse.data;
                console.log('tryHandleAuthResponse authSuccessToken: ', authSuccessToken);
                _this.authUtilService.setAuthSuccessToken(authSuccessToken);
                // REDIRECT
                if (_this.authUtilService.redirectUrl) {
                    _this.router.navigate([_this.authUtilService.redirectUrl]);
                }
                else {
                    _this.router.navigate([_this.appConstantsService.getLoginSuccessRouterLink()]);
                }
            }, function (serverError) {
                console.log('tryHandleAuthResponse serverError: ', serverError);
                _this.errorMessages = serverError.error.data.message;
            });
        }
        catch (err) {
            // Do nothing, this simply means we're not handling google callback yet
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('loginComponentAnimate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                            opacity: 0,
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.3s 0s ease-out'),
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _service_auth_util_service__WEBPACK_IMPORTED_MODULE_6__["AuthUtilService"],
            _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_2__["AppConstantsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _shared_template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/template/angular-material/angular-material.module */ "./src/app/shared/template/angular-material/angular-material.module.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.routing */ "./src/app/auth/login/login.routing.ts");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                _login_routing__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"],
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.routing.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/login/login.routing.ts ***!
  \*********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/auth/login/login.component.ts");




var loginRoutes = [
    {
        path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(loginRoutes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map