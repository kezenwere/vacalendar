(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/auth/service/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/service/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");
/* harmony import */ var _shared_service_abstract_http_client_abstract_http_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/service/abstract-http-client/abstract-http-client.service */ "./src/app/shared/service/abstract-http-client/abstract-http-client.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/service/app-wide-service/app-wide.service */ "./src/app/shared/service/app-wide-service/app-wide.service.ts");
/* harmony import */ var _auth_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-util.service */ "./src/app/auth/service/auth-util.service.ts");







var AuthService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthService, _super);
    function AuthService(http, appWideService, authUtilService, appConstantsService) {
        return _super.call(this, 'v1/auth', 'application/x-www-form-urlencoded', http, appWideService, authUtilService, appConstantsService) || this;
    }
    AuthService.prototype.login = function (payload) {
        return _super.prototype.post.call(this, payload, 'login');
    };
    AuthService.prototype.authRequest = function () {
        return _super.prototype.get.call(this, 'google');
    };
    AuthService.prototype.authCode2Jwt = function (authCode) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('authCode', authCode);
        return _super.prototype.get.call(this, 'auth-code', params);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_5__["AppWideService"],
            _auth_util_service__WEBPACK_IMPORTED_MODULE_6__["AuthUtilService"],
            _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_2__["AppConstantsService"]])
    ], AuthService);
    return AuthService;
}(_shared_service_abstract_http_client_abstract_http_client_service__WEBPACK_IMPORTED_MODULE_3__["AbstractHttpClientService"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map