(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authenticated-authenticated-module"],{

/***/ "./src/app/authenticated/authenticated.component.html":
/*!************************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/authenticated/authenticated.component.scss":
/*!************************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvYXV0aGVudGljYXRlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/authenticated/authenticated.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/authenticated/authenticated.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function() { return AuthenticatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthenticatedComponent = /** @class */ (function () {
    function AuthenticatedComponent() {
    }
    AuthenticatedComponent.prototype.ngOnInit = function () {
    };
    AuthenticatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authenticated',
            template: __webpack_require__(/*! ./authenticated.component.html */ "./src/app/authenticated/authenticated.component.html"),
            styles: [__webpack_require__(/*! ./authenticated.component.scss */ "./src/app/authenticated/authenticated.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthenticatedComponent);
    return AuthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/authenticated/authenticated.module.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticatedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedModule", function() { return AuthenticatedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _authenticated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticated.component */ "./src/app/authenticated/authenticated.component.ts");
/* harmony import */ var _content_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.module */ "./src/app/authenticated/content/content.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.module */ "./src/app/authenticated/header/header.module.ts");
/* harmony import */ var _authenticated_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticated.routing */ "./src/app/authenticated/authenticated.routing.ts");







var AuthenticatedModule = /** @class */ (function () {
    function AuthenticatedModule() {
    }
    AuthenticatedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _authenticated_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticatedComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _authenticated_routing__WEBPACK_IMPORTED_MODULE_6__["AuthenticatedRoutingModule"],
                _content_content_module__WEBPACK_IMPORTED_MODULE_4__["ContentModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
            ]
        })
    ], AuthenticatedModule);
    return AuthenticatedModule;
}());



/***/ }),

/***/ "./src/app/authenticated/authenticated.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/authenticated/authenticated.routing.ts ***!
  \********************************************************/
/*! exports provided: AuthenticatedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedRoutingModule", function() { return AuthenticatedRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticated.component */ "./src/app/authenticated/authenticated.component.ts");




var authenticatedRoutes = [
    {
        path: '', component: _authenticated_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticatedComponent"], children: [
            { path: '', loadChildren: './content/content.module#ContentModule' },
        ],
    },
];
var AuthenticatedRoutingModule = /** @class */ (function () {
    function AuthenticatedRoutingModule() {
    }
    AuthenticatedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(authenticatedRoutes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
        })
    ], AuthenticatedRoutingModule);
    return AuthenticatedRoutingModule;
}());



/***/ }),

/***/ "./src/app/authenticated/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/authenticated/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <div>\n  <span>vaCalendar</span>\n    <button mat-icon-button>\n      <i class=\"fa fa-calendar-plus-o\"></i>\n      <!--<i class=\"fa fa-ellipsis-v fa-2x\"></i>-->\n    </button>\n  </div>\n\n  <span class=\"flex-grow\"></span>\n\n  <div>\n    <span>hi, {{ userFirstName }}</span>\n    <button mat-icon-button matTooltip=\"Logout\" (click)=\"logOutActiveUser()\">\n      <i class=\"fa fa-sign-out\"></i>\n    </button>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/authenticated/header/header.component.scss":
/*!************************************************************!*\
  !*** ./src/app/authenticated/header/header.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/authenticated/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/authenticated/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/service/auth-util.service */ "./src/app/auth/service/auth-util.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authUtilService) {
        this.authUtilService = authUtilService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userFirstName = this.authUtilService.getAuthSuccessToken().user.firstName;
    };
    HeaderComponent.prototype.logOutActiveUser = function () {
        this.authUtilService.logoutUser();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/authenticated/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/authenticated/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_2__["AuthUtilService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/header/header.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/authenticated/header/header.module.ts ***!
  \*******************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/authenticated/header/header.component.ts");
/* harmony import */ var _shared_template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/template/angular-material/angular-material.module */ "./src/app/shared/template/angular-material/angular-material.module.ts");





var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ })

}]);
//# sourceMappingURL=authenticated-authenticated-module.js.map