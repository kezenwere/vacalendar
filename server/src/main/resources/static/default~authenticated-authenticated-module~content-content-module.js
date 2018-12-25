(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~authenticated-authenticated-module~content-content-module"],{

/***/ "./src/app/authenticated/content/content.component.html":
/*!**************************************************************!*\
  !*** ./src/app/authenticated/content/content.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"height: 90vh;\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" style=\"padding-bottom: 8px;\">\n    <div *ngIf=\"!showActionBtns\">\n      <!--A DUMMY, just to balance the view-->\n    </div>\n    <div fxLayoutGap=\"4px\" *ngIf=\"showActionBtns\">\n      <button mat-raised-button (click)=\"approveSelectedVacations()\" [disabled]=\"!activateVacationActionBtns()\">\n        Approve\n      </button>\n      <button mat-raised-button color=\"accent\" (click)=\"rejectSelectedVacations()\"\n              [disabled]=\"!activateVacationActionBtns()\">\n        Reject\n      </button>\n      <button mat-raised-button color=\"warn\" (click)=\"deleteSelectedVacations()\"\n              [disabled]=\"!activateVacationActionBtns()\">\n        Delete\n      </button>\n    </div>\n\n    <mat-form-field>\n      <input matInput [type]=\"'text'\" placeholder=\"Search...\" #quickFilter\n             (keyup)=\"onQuickFilterChanged(quickFilter.value)\" name=\"quickFilter\">\n    </mat-form-field>\n\n    <div>\n      <mat-form-field>\n        <mat-select class=\"full-width\" placeholder=\"Choose view\" (valueChange)=\"navigateToView(navigateTo.value)\"\n                    #navigateTo>\n          <mat-option [value]=\"'calendar-view'\">\n            Calendar view\n          </mat-option>\n          <mat-option [value]=\"'table-view'\">\n            Table view\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <router-outlet></router-outlet>\n\n  <footer class=\"tab-actions right-bottom\">\n    <button style=\"\" mat-fab color=\"accent\" (click)=\"openVacationFormForNew()\"\n            matTooltip=\"Add vacation.\"\n            [matTooltipPosition]=\"'right'\">\n      <i class=\"fa fa-plus\"></i>\n    </button>\n  </footer>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/authenticated/content/content.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/authenticated/content/content.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0ZWQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authenticated/content/content.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authenticated/content/content.component.ts ***!
  \************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _vacation_form_vacation_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vacation-form/vacation-form.component */ "./src/app/authenticated/content/vacation-form/vacation-form.component.ts");
/* harmony import */ var _vacation_form_service_vacation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vacation-form/service/vacation.service */ "./src/app/authenticated/content/vacation-form/service/vacation.service.ts");
/* harmony import */ var _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/service/app-wide-service/app-wide.service */ "./src/app/shared/service/app-wide-service/app-wide.service.ts");







var ContentComponent = /** @class */ (function () {
    function ContentComponent(vcr, route, router, mdDialog, vacationService, appWideService) {
        this.vcr = vcr;
        this.route = route;
        this.router = router;
        this.mdDialog = mdDialog;
        this.vacationService = vacationService;
        this.appWideService = appWideService;
        this.TABLE_VIEW = 'table-view';
        this.showActionBtns = true;
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.onQuickFilterChanged = function (value) {
        this.appWideService.setSearchFilterValue(value);
    };
    ContentComponent.prototype.openVacationFormForNew = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.viewContainerRef = this.vcr;
        var dialog = this.mdDialog.open(_vacation_form_vacation_form_component__WEBPACK_IMPORTED_MODULE_4__["VacationFormComponent"], dialogConfig);
        dialog.componentInstance.headerTitle = 'New vacation form';
        dialog.componentInstance.actionBtnText = 'Create';
    };
    ContentComponent.prototype.activateVacationActionBtns = function () {
        return this.appWideService.getSelectedVacationRows().length > 0;
    };
    ContentComponent.prototype.navigateToView = function (view) {
        if (view === this.TABLE_VIEW) {
            this.showActionBtns = true;
        }
        else {
            this.showActionBtns = false;
        }
        var url = this.router.routerState.snapshot.url;
        var lastRoute = url.substring(0, url.lastIndexOf('/'));
        this.router.navigate([lastRoute, view]);
    };
    ContentComponent.prototype.approveSelectedVacations = function () {
        var _this = this;
        this.appWideService.openConfirmModal('Proceed to <strong>APPROVE</strong> selected vacation(s)?', '', this.vcr).subscribe(function (proceed) {
            if (proceed) {
                var counter_1 = 0;
                _this.appWideService.getSelectedVacationRows().forEach(function (row) {
                    _this.vacationService.approveVacation(row.id).subscribe(function (serverResponse) {
                        console.log('serverResponse: ', serverResponse);
                        counter_1++;
                        if (counter_1 === _this.appWideService.getSelectedVacationRows().length) {
                            _this.appWideService.openStatusModal('Vacation(s) approved.', 'success', _this.vcr);
                        }
                    }, function (serverError) {
                        var errorMessages = serverError.error.data.message;
                        _this.appWideService.openStatusModal('Oh snap! ' + errorMessages, 'ban', _this.vcr);
                    });
                });
            }
        });
    };
    ContentComponent.prototype.rejectSelectedVacations = function () {
        var _this = this;
        this.appWideService.openConfirmModal('Proceed to <strong>REJECT</strong> selected vacation(s)?', '', this.vcr).subscribe(function (proceed) {
            if (proceed) {
                var counter_2 = 0;
                _this.appWideService.getSelectedVacationRows().forEach(function (row) {
                    _this.vacationService.rejectVacation(row.id).subscribe(function (serverResponse) {
                        console.log('serverResponse: ', serverResponse);
                        counter_2++;
                        if (counter_2 === _this.appWideService.getSelectedVacationRows().length) {
                            _this.appWideService.openStatusModal('Vacation(s) rejected.', 'success', _this.vcr);
                        }
                    }, function (serverError) {
                        var errorMessages = serverError.error.data.message;
                        _this.appWideService.openStatusModal('Oh snap! ' + errorMessages, 'ban', _this.vcr);
                    });
                });
            }
        });
    };
    ContentComponent.prototype.deleteSelectedVacations = function () {
        var _this = this;
        this.appWideService.openConfirmModal('Proceed to <strong>DELETE</strong> selected vacation(s)?', '', this.vcr).subscribe(function (proceed) {
            if (proceed) {
                var counter_3 = 0;
                _this.appWideService.getSelectedVacationRows().forEach(function (row) {
                    _this.vacationService.deleteVacation(row.id).subscribe(function (serverResponse) {
                        console.log('serverResponse: ', serverResponse);
                        counter_3++;
                        if (counter_3 === _this.appWideService.getSelectedVacationRows().length) {
                            _this.appWideService.openStatusModal('Vacation(s) deleted.', 'success', _this.vcr);
                        }
                    }, function (serverError) {
                        var errorMessages = serverError.error.data.message;
                        _this.appWideService.openStatusModal('Oh snap! ' + errorMessages, 'ban', _this.vcr);
                    });
                });
            }
        });
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/authenticated/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/authenticated/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _vacation_form_service_vacation_service__WEBPACK_IMPORTED_MODULE_5__["VacationService"],
            _shared_service_app_wide_service_app_wide_service__WEBPACK_IMPORTED_MODULE_6__["AppWideService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/authenticated/content/content.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authenticated/content/content.module.ts ***!
  \*********************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.component */ "./src/app/authenticated/content/content.component.ts");
/* harmony import */ var _shared_template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/template/angular-material/angular-material.module */ "./src/app/shared/template/angular-material/angular-material.module.ts");
/* harmony import */ var _content_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.routing */ "./src/app/authenticated/content/content.routing.ts");
/* harmony import */ var _vacation_form_vacation_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vacation-form/vacation-form.module */ "./src/app/authenticated/content/vacation-form/vacation-form.module.ts");







var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]
            ],
            exports: [
                _content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_template_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                _content_routing__WEBPACK_IMPORTED_MODULE_5__["ContentRoutingModule"],
                _vacation_form_vacation_form_module__WEBPACK_IMPORTED_MODULE_6__["VacationFormModule"]
            ],
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ }),

/***/ "./src/app/authenticated/content/content.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authenticated/content/content.routing.ts ***!
  \**********************************************************/
/*! exports provided: ContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRoutingModule", function() { return ContentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.component */ "./src/app/authenticated/content/content.component.ts");




var contentRoutes = [
    {
        path: '', component: _content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"],
        children: [
            { path: 'calendar-view', loadChildren: './calendar-view/calendar-view.module#CalendarViewModule' },
            { path: 'table-view', loadChildren: './table-view/table-view.module#TableViewModule' },
            { path: 'vacation-form', loadChildren: './vacation-form/vacation-form.module#VacationFormModule' },
            { path: '', redirectTo: 'table-view', pathMatch: 'full' },
        ],
    },
];
var ContentRoutingModule = /** @class */ (function () {
    function ContentRoutingModule() {
    }
    ContentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(contentRoutes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
        })
    ], ContentRoutingModule);
    return ContentRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~authenticated-authenticated-module~content-content-module.js.map