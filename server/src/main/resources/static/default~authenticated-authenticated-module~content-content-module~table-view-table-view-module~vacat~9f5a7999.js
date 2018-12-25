(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authenticated-authenticated-module~content-content-module~table-view-table-view-module~vacat~9f5a7999"],{

/***/ "./src/app/authenticated/content/vacation-form/models.ts":
/*!***************************************************************!*\
  !*** ./src/app/authenticated/content/vacation-form/models.ts ***!
  \***************************************************************/
/*! exports provided: Vacation, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vacation", function() { return Vacation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/models */ "./src/app/shared/models/models.ts");


var Vacation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Vacation, _super);
    function Vacation(user, startDate, endDate, approvedBy, approvedDate, approved, rejected, assignedApproverEmail, expired) {
        if (user === void 0) { user = new User(); }
        var _this = _super.call(this) || this;
        _this.user = user;
        _this.startDate = startDate;
        _this.endDate = endDate;
        _this.approvedBy = approvedBy;
        _this.approvedDate = approvedDate;
        _this.approved = approved;
        _this.rejected = rejected;
        _this.assignedApproverEmail = assignedApproverEmail;
        _this.expired = expired;
        return _this;
    }
    return Vacation;
}(_shared_models_models__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));

var User = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](User, _super);
    function User(firstName, lastName, fullName, email, managerEmail) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.fullName = fullName;
        _this.email = email;
        _this.managerEmail = managerEmail;
        return _this;
    }
    return User;
}(_shared_models_models__WEBPACK_IMPORTED_MODULE_1__["AbstractEntity"]));



/***/ }),

/***/ "./src/app/authenticated/content/vacation-form/service/vacation.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/authenticated/content/vacation-form/service/vacation.service.ts ***!
  \*********************************************************************************/
/*! exports provided: VacationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationService", function() { return VacationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_abstract_http_client_abstract_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/service/abstract-http-client/abstract-http-client.service */ "./src/app/shared/service/abstract-http-client/abstract-http-client.service.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/service/app-wide-service/app-wide.service */ "./src/app/shared/service/app-wide-service/app-wide.service.ts");
/* harmony import */ var _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../auth/service/auth-util.service */ "./src/app/auth/service/auth-util.service.ts");
/* harmony import */ var _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/service/app-constants/app-constants.service */ "./src/app/shared/service/app-constants/app-constants.service.ts");








var VacationService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VacationService, _super);
    function VacationService(http, appWideService, authUtilService, appConstantsService) {
        var _this = _super.call(this, 'v1/vacations', 'application/x-www-form-urlencoded', http, appWideService, authUtilService, appConstantsService) || this;
        _this.vacationReplaySubject = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        return _this;
    }
    VacationService.prototype.createVacation = function (payload) {
        return _super.prototype.post.call(this, payload);
    };
    VacationService.prototype.getVacationById = function (vacationId) {
        return _super.prototype.get.call(this, vacationId);
    };
    VacationService.prototype.getAllVacations = function () {
        return _super.prototype.get.call(this);
    };
    VacationService.prototype.updateVacation = function (payload, vacationId) {
        return _super.prototype.put.call(this, payload, vacationId);
    };
    VacationService.prototype.approveVacation = function (vacationId) {
        return _super.prototype.put.call(this, null, vacationId + '/approve');
    };
    VacationService.prototype.rejectVacation = function (vacationId) {
        return _super.prototype.put.call(this, null, vacationId + '/reject');
    };
    VacationService.prototype.deleteVacation = function (vacationId) {
        return _super.prototype.delete.call(this, vacationId);
    };
    VacationService.prototype.onVacationModified = function (vacationService) {
        var _this = this;
        _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_5__["AppWideService"].webSocketConnect(function (stompClient) {
            stompClient.subscribe('/topic/vacations/modified', function (serverResponse) {
                _this.vacationReplaySubject.next(serverResponse);
                return _this.vacationReplaySubject;
            }, function (error) { return console.log('Websocket Error: Can\'t subscribe... ', error); });
        }, function () {
            vacationService.onVacationModified(vacationService);
        });
    };
    VacationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_5__["AppWideService"],
            _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_6__["AuthUtilService"],
            _shared_service_app_constants_app_constants_service__WEBPACK_IMPORTED_MODULE_7__["AppConstantsService"]])
    ], VacationService);
    return VacationService;
}(_shared_service_abstract_http_client_abstract_http_client_service__WEBPACK_IMPORTED_MODULE_2__["AbstractHttpClientService"]));



/***/ }),

/***/ "./src/app/authenticated/content/vacation-form/vacation-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/authenticated/content/vacation-form/vacation-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-section\" draggable>\n  <app-mat-dialog-title-bar\n    [title]=\"headerTitle\"\n    [dialogRef]=\"dialogRef\"\n    [navigateOnClose]=\"false\"\n    [canExpand]=\"false\"\n    [canFullScreen]=\"false\"\n    [canClose]=\"true\">\n\n  </app-mat-dialog-title-bar>\n\n  <form #vacationForm=\"ngForm\" (ngSubmit)=\"formAction($event)\">\n    <div *ngIf=\"errorMessages\" class=\"alert alert-danger\" role=\"alert\">\n      <strong>Oh snap! </strong> {{ errorMessages }}\n    </div>\n    <mat-card style=\"height: 89%; overflow-y: auto;\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"First name\" [(ngModel)]=\"vacation.user.firstName\" name=\"firstName\"\n                 required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput type=\"text\" placeholder=\"Last name (surname)\" [(ngModel)]=\"vacation.user.lastName\" name=\"lastName\"\n                 required>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"16px\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"email\" email placeholder=\"Your email\" [(ngModel)]=\"vacation.user.email\" name=\"email\" required>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput type=\"email\" email placeholder=\"Your manager's email\" [(ngModel)]=\"vacation.user.managerEmail\" name=\"managerEmail\" required>\n        </mat-form-field>\n      </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        <mat-form-field>\n          <input matInput\n                 (click)=\"vacationStartDatePicker.open()\"\n                 [matDatepicker]=\"vacationStartDatePicker\"\n                 placeholder=\"Start date\"\n                 [(ngModel)]=\"vacation.startDate\"\n                 name=\"vacationStartDate\"\n                 readonly required\n          >\n          <mat-datepicker-toggle matSuffix [for]=\"vacationStartDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #vacationStartDatePicker></mat-datepicker>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput\n                 (click)=\"vacationEndDatePicker.open()\"\n                 [matDatepicker]=\"vacationEndDatePicker\"\n                 placeholder=\"End date\"\n                 [(ngModel)]=\"vacation.endDate\"\n                 name=\"vacationEndDate\"\n                 readonly required\n          >\n          <mat-datepicker-toggle matSuffix [for]=\"vacationEndDatePicker\"></mat-datepicker-toggle>\n          <mat-datepicker #vacationEndDatePicker></mat-datepicker>\n        </mat-form-field>\n      </div>\n    </mat-card>\n\n    <mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"form-button-set\">\n      <div></div>\n      <div>\n        <button mat-raised-button color=\"primary\" [type]=\"'submit'\" [disabled]=\"!formIsValid(vacationForm)\">\n          {{ actionBtnText }}\n        </button>\n        <button mat-raised-button color=\"warn\" [type]=\"'reset'\" mat-dialog-close>Cancel</button>\n      </div>\n    </mat-dialog-actions>\n  </form>\n</section>\n"

/***/ }),

/***/ "./src/app/authenticated/content/vacation-form/vacation-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/authenticated/content/vacation-form/vacation-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvY29udGVudC92YWNhdGlvbi1mb3JtL3ZhY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/authenticated/content/vacation-form/vacation-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/authenticated/content/vacation-form/vacation-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: VacationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationFormComponent", function() { return VacationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/service/app-wide-service/app-wide.service */ "./src/app/shared/service/app-wide-service/app-wide.service.ts");
/* harmony import */ var _service_vacation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/vacation.service */ "./src/app/authenticated/content/vacation-form/service/vacation.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "./src/app/authenticated/content/vacation-form/models.ts");
/* harmony import */ var _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../auth/service/auth-util.service */ "./src/app/auth/service/auth-util.service.ts");







var VacationFormComponent = /** @class */ (function () {
    function VacationFormComponent(vacationService, dialogRef, appWideService, vcr, authUtilService) {
        this.vacationService = vacationService;
        this.dialogRef = dialogRef;
        this.appWideService = appWideService;
        this.vcr = vcr;
        this.authUtilService = authUtilService;
        this.vacation = new _models__WEBPACK_IMPORTED_MODULE_5__["Vacation"]();
        this.headerTitle = 'Vacation Form';
        this.actionBtnText = 'Create';
        this.updating = false;
    }
    VacationFormComponent.prototype.ngOnInit = function () {
        this.fetchVacation(this.vacationId);
    };
    VacationFormComponent.prototype.formIsValid = function (ngForm) {
        return ngForm.form.valid;
    };
    VacationFormComponent.prototype.formAction = function (event) {
        event.preventDefault();
        if (this.updating && this.vacationId) {
            this.update();
        }
        else {
            var activeUser = this.authUtilService.getAuthSuccessToken();
            this.vacation.user.email = activeUser.user.email;
            this.vacation.user.firstName = activeUser.user.firstName;
            this.vacation.user.lastName = activeUser.user.lastName;
            this.vacation.user.managerEmail = activeUser.user.managerEmail;
            this.create();
        }
    };
    VacationFormComponent.prototype.fetchVacation = function (vacationId) {
        var _this = this;
        if (this.updating && vacationId) {
            this.vacationService.getVacationById(vacationId).subscribe(function (serverResponse) {
                _this.vacation = serverResponse.data;
            });
        }
    };
    VacationFormComponent.prototype.create = function () {
        var _this = this;
        this.vacationService.createVacation(this.vacation).subscribe(function (serverResponse) {
            _this.errorMessages = '';
            console.log('serverResponse:', serverResponse);
            _this.appWideService.openStatusModal('Vacation created.', 'success', _this.vcr);
        }, function (serverError) {
            _this.errorMessages = serverError.error.data.message;
        });
    };
    VacationFormComponent.prototype.update = function () {
        var _this = this;
        this.vacationService.updateVacation(this.vacation, this.vacationId).subscribe(function (serverResponse) {
            _this.errorMessages = '';
            console.log('serverResponse:', serverResponse);
            _this.appWideService.openStatusModal('Vacation updated.', 'success', _this.vcr);
        }, function (serverError) {
            _this.errorMessages = serverError.error.data.message;
        });
    };
    VacationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vacation-form',
            template: __webpack_require__(/*! ./vacation-form.component.html */ "./src/app/authenticated/content/vacation-form/vacation-form.component.html"),
            styles: [__webpack_require__(/*! ./vacation-form.component.scss */ "./src/app/authenticated/content/vacation-form/vacation-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_vacation_service__WEBPACK_IMPORTED_MODULE_4__["VacationService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_3__["AppWideService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _auth_service_auth_util_service__WEBPACK_IMPORTED_MODULE_6__["AuthUtilService"]])
    ], VacationFormComponent);
    return VacationFormComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/content/vacation-form/vacation-form.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/authenticated/content/vacation-form/vacation-form.module.ts ***!
  \*****************************************************************************/
/*! exports provided: VacationFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacationFormModule", function() { return VacationFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vacation_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vacation-form.component */ "./src/app/authenticated/content/vacation-form/vacation-form.component.ts");
/* harmony import */ var _shared_template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/template/angular-material/angular-material.module */ "./src/app/shared/template/angular-material/angular-material.module.ts");





var VacationFormModule = /** @class */ (function () {
    function VacationFormModule() {
    }
    VacationFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _vacation_form_component__WEBPACK_IMPORTED_MODULE_3__["VacationFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            ],
            entryComponents: [
                _vacation_form_component__WEBPACK_IMPORTED_MODULE_3__["VacationFormComponent"]
            ]
        })
    ], VacationFormModule);
    return VacationFormModule;
}());



/***/ }),

/***/ "./src/app/shared/models/models.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/models.ts ***!
  \*****************************************/
/*! exports provided: AbstractEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractEntity", function() { return AbstractEntity; });
var AbstractEntity = /** @class */ (function () {
    function AbstractEntity(id, createdDate, createdBy, createdByIp, version, lastModifiedDate, lastModifiedBy, lastModifiedByIp, active, activatedDate, activatedBy, activatedByIp, inactivatedDate, inactivatedBy, inactivatedByIp, deleted, deletedDate, deletedBy, deletedByIp, status) {
        if (active === void 0) { active = true; }
        this.id = id;
        this.createdDate = createdDate;
        this.createdBy = createdBy;
        this.createdByIp = createdByIp;
        this.version = version;
        this.lastModifiedDate = lastModifiedDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedByIp = lastModifiedByIp;
        this.active = active;
        this.activatedDate = activatedDate;
        this.activatedBy = activatedBy;
        this.activatedByIp = activatedByIp;
        this.inactivatedDate = inactivatedDate;
        this.inactivatedBy = inactivatedBy;
        this.inactivatedByIp = inactivatedByIp;
        this.deleted = deleted;
        this.deletedDate = deletedDate;
        this.deletedBy = deletedBy;
        this.deletedByIp = deletedByIp;
        this.status = status;
    }
    return AbstractEntity;
}());



/***/ })

}]);
//# sourceMappingURL=default~authenticated-authenticated-module~content-content-module~table-view-table-view-module~vacat~9f5a7999.js.map