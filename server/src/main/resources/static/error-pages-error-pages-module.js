(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-pages-error-pages-module"],{

/***/ "./src/app/error-pages/error-pages.component.html":
/*!********************************************************!*\
  !*** ./src/app/error-pages/error-pages.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/error-pages/error-pages.component.scss":
/*!********************************************************!*\
  !*** ./src/app/error-pages/error-pages.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2VzL2Vycm9yLXBhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-pages/error-pages.component.ts":
/*!******************************************************!*\
  !*** ./src/app/error-pages/error-pages.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesComponent", function() { return ErrorPagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorPagesComponent = /** @class */ (function () {
    function ErrorPagesComponent() {
    }
    ErrorPagesComponent.prototype.ngOnInit = function () {
    };
    ErrorPagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-pages',
            template: __webpack_require__(/*! ./error-pages.component.html */ "./src/app/error-pages/error-pages.component.html"),
            styles: [__webpack_require__(/*! ./error-pages.component.scss */ "./src/app/error-pages/error-pages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorPagesComponent);
    return ErrorPagesComponent;
}());



/***/ }),

/***/ "./src/app/error-pages/error-pages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/error-pages/error-pages.module.ts ***!
  \***************************************************/
/*! exports provided: ErrorPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesModule", function() { return ErrorPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-pages.component */ "./src/app/error-pages/error-pages.component.ts");
/* harmony import */ var _fatal_error_fatal_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fatal-error/fatal-error.component */ "./src/app/error-pages/fatal-error/fatal-error.component.ts");
/* harmony import */ var _error_pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-pages.routing */ "./src/app/error-pages/error-pages.routing.ts");






var ErrorPagesModule = /** @class */ (function () {
    function ErrorPagesModule() {
    }
    ErrorPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _error_pages_routing__WEBPACK_IMPORTED_MODULE_5__["ErrorPagesRoutingModule"],
            ],
            declarations: [
                _error_pages_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPagesComponent"],
                _fatal_error_fatal_error_component__WEBPACK_IMPORTED_MODULE_4__["FatalErrorComponent"],
            ],
        })
    ], ErrorPagesModule);
    return ErrorPagesModule;
}());



/***/ }),

/***/ "./src/app/error-pages/error-pages.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/error-pages/error-pages.routing.ts ***!
  \****************************************************/
/*! exports provided: ErrorPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPagesRoutingModule", function() { return ErrorPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-pages.component */ "./src/app/error-pages/error-pages.component.ts");
/* harmony import */ var _fatal_error_fatal_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fatal-error/fatal-error.component */ "./src/app/error-pages/fatal-error/fatal-error.component.ts");
/* harmony import */ var _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");






var errorPagesRoutes = [
    {
        path: '', component: _error_pages_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPagesComponent"],
        children: [
            { path: _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_5__["AppConstantsService"].FRONTEND_ROUTE_ERROR_FATAL, component: _fatal_error_fatal_error_component__WEBPACK_IMPORTED_MODULE_4__["FatalErrorComponent"] },
            { path: '', redirectTo: _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_5__["AppConstantsService"].FRONTEND_ROUTE_ERROR_FATAL, pathMatch: 'full' },
        ]
    }
];
var ErrorPagesRoutingModule = /** @class */ (function () {
    function ErrorPagesRoutingModule() {
    }
    ErrorPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(errorPagesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ErrorPagesRoutingModule);
    return ErrorPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/error-pages/fatal-error/fatal-error.component.html":
/*!********************************************************************!*\
  !*** ./src/app/error-pages/fatal-error/fatal-error.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fatal-error works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/error-pages/fatal-error/fatal-error.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/error-pages/fatal-error/fatal-error.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXBhZ2VzL2ZhdGFsLWVycm9yL2ZhdGFsLWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/error-pages/fatal-error/fatal-error.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/error-pages/fatal-error/fatal-error.component.ts ***!
  \******************************************************************/
/*! exports provided: FatalErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatalErrorComponent", function() { return FatalErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FatalErrorComponent = /** @class */ (function () {
    function FatalErrorComponent() {
    }
    FatalErrorComponent.prototype.ngOnInit = function () {
    };
    FatalErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fatal-error',
            template: __webpack_require__(/*! ./fatal-error.component.html */ "./src/app/error-pages/fatal-error/fatal-error.component.html"),
            styles: [__webpack_require__(/*! ./fatal-error.component.scss */ "./src/app/error-pages/fatal-error/fatal-error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FatalErrorComponent);
    return FatalErrorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=error-pages-error-pages-module.js.map