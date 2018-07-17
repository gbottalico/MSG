(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _new_visit_new_visit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-visit/new-visit.component */ "./src/app/new-visit/new-visit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'datepicker', component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_2__["DatepickerComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'new-visit', component: _new_visit_new_visit_component__WEBPACK_IMPORTED_MODULE_4__["NewVisitComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n  <div class=\"row content\">\n    <div class=\"col-sm-2 sidenav\">\n      <app-datepicker></app-datepicker>\n    </div>\n    <div class=\"col-sm-9\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MSG';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/datepicker/datepicker.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _new_visit_new_visit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-visit/new-visit.component */ "./src/app/new-visit/new-visit.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _edit_visit_edit_visit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-visit/edit-visit.component */ "./src/app/edit-visit/edit-visit.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatepickerComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _new_visit_new_visit_component__WEBPACK_IMPORTED_MODULE_10__["NewVisitComponent"],
                _edit_visit_edit_visit_component__WEBPACK_IMPORTED_MODULE_12__["EditVisitComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot()
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex\">\n  <div class=\"col-sm-9\">\n    <div class=\"input-group\">\n      <input #searchBox type=\"text\" class=\"form-control\" placeholder=\"Cerca nome..\" (keyup)=\"search(searchBox.value)\" style=\"height: 40px\">\n      <app-new-visit></app-new-visit>\n      <button class=\"plus-button btn btn-sm btn-outline-warning mr-2\" (click)=\"refresh()\" style=\"width: 40px;height: 40px;\"><span class=\"glyphicon glyphicon-refresh\"></span> </button>\n    </div>\n  </div>\n</div>\n<table id=\"table\" class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Luogo</th>\n      <th scope=\"col\">Badge</th>\n      <th scope=\"col\">Ospite</th>\n      <th scope=\"col\">Ospitante</th>\n      <th scope=\"col\">Ragione</th>\n      <th scope=\"col\">Data</th>\n      <th scope=\"col\">Orario Entrata</th>\n      <th scope=\"col\">Orario Uscita</th>\n      <th>\n        <div class=\"dropdown\">\n          <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{placeLabel}}\n          </button>\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" >\n            <button *ngFor=\"let place of places\" class=\"dropdown-item\" (click)=\"setCurrentPlace(place)\">{{place.name}}</button>\n          </div>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let visit of visits; let i=index\">\n    <tr>\n      <th scope=\"row\">{{i + 1}}</th>\n      <td>{{visit.place.name}}</td>\n      <td>{{visit.badgeNo}}</td>\n      <td>{{visit.guestName}}</td>\n      <td>{{visit.hostName}}</td>\n      <td>{{visit.socialReason}}</td>\n      <td>{{visit.entranceDate}}</td>\n      <td>{{visit.entranceTime}}</td>\n      <td>{{visit.leavingTime}}</td>\n      <td>\n        <button (click)=\"setVisitForm(visit)\" class=\"btn btn-sm btn-outline-primary mr-2\"><span class=\"glyphicon glyphicon-repeat\"></span></button>\n        <button (click)=\"editVisit(visit)\" class=\"btn btn-sm btn-outline-warning mr-2\"><span class=\"glyphicon glyphicon-pencil\"></span></button>\n        <button [disabled]=\"disableDelete\"  (click)=\"deleteVisit(visit)\" class=\"btn btn-sm btn-outline-danger mr-2\"><span class=\"glyphicon glyphicon-trash\"></span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<app-edit-visit></app-edit-visit>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _visit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../visit.service */ "./src/app/visit.service.ts");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datepicker.service */ "./src/app/datepicker.service.ts");
/* harmony import */ var _visit_event_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../visit-event.service */ "./src/app/visit-event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(visitEventService, visitService, placeService, datepickerService, datePipe) {
        this.visitEventService = visitEventService;
        this.visitService = visitService;
        this.placeService = placeService;
        this.datepickerService = datepickerService;
        this.datePipe = datePipe;
        this.places = [];
        this.allVisits = [];
        this.visits = [];
        this.date = new Date();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.disableDelete = false;
        this.placeLabel = "Selezionare Luogo";
        this.getAllPlaces();
        this.placeService.getStoredCurrentPlace().subscribe(function (place) {
            _this.setCurrentPlace(place);
        });
        this.datepickerService.change.subscribe(function (date) {
            _this.date = date;
            _this.getVisitsFromDate();
        });
        this.visitEventService.newVisitCreatedEvent.subscribe(function (visit) {
            if (visit.entranceDate === _this.datePipe.transform(_this.date, 'dd-MM-yyyy')) {
                setTimeout(_this.refresh(), 500);
            }
        });
    };
    DashboardComponent.prototype.setVisitForm = function (visit) {
        this.visitEventService.showNewForm();
        this.visitEventService.setNewModel(visit);
    };
    DashboardComponent.prototype.showVisitForm = function () {
        this.visitEventService.showNewForm();
    };
    DashboardComponent.prototype.search = function (term) {
        this.visits = this.allVisits
            .filter(function (visit) {
            return visit.hostName.toLowerCase().search(term.toLowerCase()) != -1 ||
                visit.guestName.toLowerCase().search(term.toLowerCase()) != -1;
        });
    };
    DashboardComponent.prototype.getVisitsFromDate = function () {
        var _this = this;
        if (this.date == null) {
            this.date = new Date();
        }
        if (this.currentPlace != null) {
            this.visitService.getVisitsByDate(this.currentPlace.id, this.date)
                .subscribe(function (visits) {
                _this.visits = _this.allVisits = visits;
            });
        }
    };
    DashboardComponent.prototype.setCurrentPlace = function (place) {
        this.currentPlace = place;
        this.placeLabel = place.name;
        this.getVisitsFromDate();
        this.placeService.setCurrentPlace(this.currentPlace);
    };
    DashboardComponent.prototype.getAllPlaces = function () {
        var _this = this;
        this.placeService.getPlaces().subscribe(function (places) { return _this.places = places; });
    };
    DashboardComponent.prototype.editVisit = function (visit) {
        this.visitEventService.setEditModel(visit);
        this.visitEventService.showEditForm();
    };
    DashboardComponent.prototype.deleteVisit = function (visit) {
        var _this = this;
        this.visitService.deleteVisit(visit).subscribe(function (result) {
            _this.visits.splice(_this.visits.indexOf(visit), _this.currentPlace.id);
        }, function (error) {
            console.log(error);
        }, function () {
            _this.disableDelete = false;
        });
    };
    DashboardComponent.prototype.refresh = function () {
        this.getVisitsFromDate();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_visit_event_service__WEBPACK_IMPORTED_MODULE_5__["VisitEventService"],
            _visit_service__WEBPACK_IMPORTED_MODULE_2__["VisitService"],
            _place_service__WEBPACK_IMPORTED_MODULE_3__["PlaceService"],
            _datepicker_service__WEBPACK_IMPORTED_MODULE_4__["DatepickerService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data/backend_url.ts":
/*!*************************************!*\
  !*** ./src/app/data/backend_url.ts ***!
  \*************************************/
/*! exports provided: BACKEND_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL", function() { return BACKEND_URL; });
// export const BACKEND_URL = 'http://localhost:8081';
var BACKEND_URL = 'http://localhost:8080/msg';


/***/ }),

/***/ "./src/app/data/datepicker_IT.ts":
/*!***************************************!*\
  !*** ./src/app/data/datepicker_IT.ts ***!
  \***************************************/
/*! exports provided: I18n, CustomDatepickerI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function() { return CustomDatepickerI18n; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18N_VALUES = {
    'it': {
        weekdays: ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'],
        months: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
    }
    // other languages you would support
};
// Define a service holding the language. You probably already have one if your app is i18ned. Or you could also
// use the Angular LOCALE_ID value
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'it';
    }
    I18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], I18n);
    return I18n;
}());

// Define custom service providing the months and weekdays translations
var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    CustomDatepickerI18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]));



/***/ }),

/***/ "./src/app/data/document_types.ts":
/*!****************************************!*\
  !*** ./src/app/data/document_types.ts ***!
  \****************************************/
/*! exports provided: DOCUMENT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_TYPES", function() { return DOCUMENT_TYPES; });
var DOCUMENT_TYPES = ["Patente", "Passaporto", "Carta D'Identità"];


/***/ }),

/***/ "./src/app/data/ngb-date-it-parser-formatter.ts":
/*!******************************************************!*\
  !*** ./src/app/data/ngb-date-it-parser-formatter.ts ***!
  \******************************************************/
/*! exports provided: NgbDateITParserFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbDateITParserFormatter", function() { return NgbDateITParserFormatter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    }
    else {
        return "";
    }
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function toInteger(value) {
    return parseInt("" + value, 10);
}
var NgbDateITParserFormatter = /** @class */ (function (_super) {
    __extends(NgbDateITParserFormatter, _super);
    function NgbDateITParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateITParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { year: toInteger(dateParts[0]), month: null, day: null };
            }
            else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null };
            }
            else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
            }
        }
        return null;
    };
    NgbDateITParserFormatter.prototype.format = function (date) {
        var stringDate = "";
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + "-" : "";
            stringDate += isNumber(date.month) ? padNumber(date.month) + "-" : "";
            stringDate += date.year;
        }
        return stringDate;
    };
    NgbDateITParserFormatter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NgbDateITParserFormatter);
    return NgbDateITParserFormatter;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/datepicker.service.ts":
/*!***************************************!*\
  !*** ./src/app/datepicker.service.ts ***!
  \***************************************/
/*! exports provided: DatepickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerService", function() { return DatepickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatepickerService = /** @class */ (function () {
    function DatepickerService() {
        this.date = new Date();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DatepickerService.prototype.bind = function (date) {
        this.date = date;
        this.change.emit(this.date);
    };
    DatepickerService.prototype.getCurrentDate = function () {
        return this.date;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DatepickerService.prototype, "change", void 0);
    DatepickerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerService);
    return DatepickerService;
}());



/***/ }),

/***/ "./src/app/datepicker/datepicker.component.css":
/*!*****************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.html":
/*!******************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-datepicker #dp [(ngModel)]=\"model\" (click)=\"bindDate()\"></ngb-datepicker>\n"

/***/ }),

/***/ "./src/app/datepicker/datepicker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/datepicker/datepicker.component.ts ***!
  \****************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _data_ngb_date_it_parser_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ngb-date-it-parser-formatter */ "./src/app/data/ngb-date-it-parser-formatter.ts");
/* harmony import */ var _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/datepicker_IT */ "./src/app/data/datepicker_IT.ts");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datepicker.service */ "./src/app/datepicker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var now = new Date();
var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(datepickerService) {
        this.datepickerService = datepickerService;
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.selectToday();
    };
    DatepickerComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.bindDate();
    };
    DatepickerComponent.prototype.bindDate = function () {
        this.date = new Date(this.model.year, this.model.month - 1, this.model.day);
        this.datepickerService.bind(this.date);
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__(/*! ./datepicker.component.html */ "./src/app/datepicker/datepicker.component.html"),
            styles: [__webpack_require__(/*! ./datepicker.component.css */ "./src/app/datepicker/datepicker.component.css")],
            providers: [
                _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__["I18n"],
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: _data_ngb_date_it_parser_formatter__WEBPACK_IMPORTED_MODULE_2__["NgbDateITParserFormatter"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__["CustomDatepickerI18n"] }
            ] // define custom NgbDatepickerI18n provider
        }),
        __metadata("design:paramtypes", [_datepicker_service__WEBPACK_IMPORTED_MODULE_4__["DatepickerService"]])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/edit-visit/edit-visit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-visit/edit-visit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-visit/edit-visit.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-visit/edit-visit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"plus-button btn btn-sm btn-outline-success mr-2\" ><span class=\"glyphicon glyphicon-plus\"></span> </button> -->\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Modifica Visita</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form #visitForm=\"ngForm\">\n      <div [hidden]=\"visitForm.submitted\">\n        <div class=\"cross-validation\" [class.cross-validation-error]=\"visitForm.errors?.identityRevealed && (visitForm.touched || visitForm.dirty)\">\n          <div class=\"form-group\">\n            <input id=\"badgeNo\" name=\"badgeNo\" class=\"form-control\"\n                   [disabled]=\"isBadgeAssigned || isLeavingTimeAssigned\"\n                   required [(ngModel)]=\"visit.badgeNo\" #badgeNo=\"ngModel\"\n                   placeholder=\"Numero Badge..\">\n            <div *ngIf=\"badgeNo.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"badgeNo.errors.required\">Numero badge obbligatorio</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <form class=\"form-inline\">\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"Data entrata..\"\n                       [disabled]=\"visit.entranceDate || isLeavingTimeAssigned\"\n                       name=\"dp\" [(ngModel)]=\"entranceDate\" ngbDatepicker #d=\"ngbDatepicker\"\n                       (click)=\"assignEntranceDate()\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                    <span class=\"glyphicon glyphicon-calendar\"></span>\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"guestName\" name=\"guestName\" class=\"form-control\"\n                   [disabled]=\"isGuestNameAssigned || isLeavingTimeAssigned\"\n                   required appForbidden=\".*[-\\/\\\\^%$*+£?&.()|[\\]{}].*\"\n                   [(ngModel)]=\"visit.guestName\" #guestName=\"ngModel\"\n                   placeholder=\"Nome ospite..\">\n\n            <div *ngIf=\"guestName.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"guestName.errors.required\">Nome ospite obbligatorio</div>\n              <div *ngIf=\"guestName.errors.forbidden\">Un nome non può contenere caratteri speciali</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input id=\"hostName\" name=\"hostName\" class=\"form-control\"\n                   [disabled]=\"isHostNameAssigned || isLeavingTimeAssigned\"\n                   required appForbidden=\".*[-\\/\\\\^%$*+£?&.()|[\\]{}].*\"\n                   [(ngModel)]=\"visit.hostName\" #hostName=\"ngModel\"\n                   placeholder=\"Nome persona visitata..\">\n\n            <div *ngIf=\"hostName.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"hostName.errors.required\">Nome persona visitata obbligatorio</div>\n              <div *ngIf=\"hostName.errors.forbidden\">Un nome non può contenere caratteri speciali</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"socialReason\" name=\"socialReason\" class=\"form-control\"\n                   [disabled]=\"isLeavingTimeAssigned\"\n                   appForbidden=\".*[-\\/\\\\^%$*+£?&.()|[\\]{}].*\"\n                   [(ngModel)]=\"visit.socialReason\" #socialReason=\"ngModel\"\n                   placeholder=\"Ragione sociale..\">\n\n            <div *ngIf=\"socialReason.invalid\" class=\"alert alert-danger\">\n              <div *ngIf=\"socialReason.errors.required\">Ragione sociale obbligatora</div>\n              <div *ngIf=\"socialReason.errors.forbidden\">Non può contenere caratteri speciali</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm\">\n                <input id=\"entranceTime\" name=\"entranceTime\" class=\"form-control\"\n                       [disabled]=\"isEntranceTimeAssigned || isLeavingTimeAssigned\"\n                       pattern=\"^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$\"\n                       [(ngModel)]=\"visit.entranceTime\" #entranceTime=\"ngModel\"\n                       placeholder=\"Orario entrata..\">\n                <div *ngIf=\"entranceTime.invalid\" class=\"alert alert-danger\">\n                 <div *ngIf=\"entranceTime.errors.pattern\">L'orario deve essere nel formato HH:MM</div>\n                </div>\n              </div>\n              <div class=\"col-sm\">\n                <input id=\"leavingTime\" name=\"leavingTime\" class=\"form-control\"\n                       [disabled]=\"isLeavingTimeAssigned\"\n                       pattern=\"^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$\"\n                       [(ngModel)]=\"visit.leavingTime\" #leavingTime=\"ngModel\"\n                       placeholder=\"Orario uscita..\">\n                <div *ngIf=\"leavingTime.invalid || (visit.entranceDate>visit.leavingDate)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"leavingTime.errors.pattern\">L'orario deve essere nel formato HH:MM</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle form-control\" type=\"button\" id=\"dropdownMenuButton\"\n                          [disabled]=\"isLeavingTimeAssigned\"\n                          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{documentLabel}}\n                  </button>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" >\n                    <a *ngFor=\"let d of documentTypes\" class=\"dropdown-item\"\n                            (click)=\"setDocumentType(d)\">{{d}}</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm\">\n                <input *ngIf=\"visit.guestDocumentType\" id=\"guestDocumentNo\" name=\"guestDocumentNo\" class=\"form-control\"\n                       [disabled]=\"isLeavingTimeAssigned\"\n                       [(ngModel)]=\"visit.guestDocumentNo\" #guestDocumentNo=\"ngModel\"\n                       placeholder=\"Numero documento..\">\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"plus-button btn btn-sm btn-outline-primary mr-2\"\n                  (click)=\"editVisit()\" [disabled]=\"visitForm.invalid\">Applica Modifiche</button>\n        </div>\n      </div>\n      <div class=\"submitted-message\" *ngIf=\"visitForm.submitted\">\n        <p>{{resultMessage}}</p>\n      </div>\n    </form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/edit-visit/edit-visit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-visit/edit-visit.component.ts ***!
  \****************************************************/
/*! exports provided: EditVisitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVisitComponent", function() { return EditVisitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _data_ngb_date_it_parser_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ngb-date-it-parser-formatter */ "./src/app/data/ngb-date-it-parser-formatter.ts");
/* harmony import */ var _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/datepicker_IT */ "./src/app/data/datepicker_IT.ts");
/* harmony import */ var _visit_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../visit-event.service */ "./src/app/visit-event.service.ts");
/* harmony import */ var _visit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../visit.service */ "./src/app/visit.service.ts");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");
/* harmony import */ var _model_visit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/visit */ "./src/app/model/visit.ts");
/* harmony import */ var _data_document_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/document_types */ "./src/app/data/document_types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var now = new Date();
var EditVisitComponent = /** @class */ (function () {
    function EditVisitComponent(visitEventService, visitService, placeService, formatter, modalService) {
        this.visitEventService = visitEventService;
        this.visitService = visitService;
        this.placeService = placeService;
        this.formatter = formatter;
        this.modalService = modalService;
        this.showLeavingDate = false;
        this.documentTypes = _data_document_types__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT_TYPES"];
        this.documentLabel = 'Tipo Documento';
    }
    EditVisitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visit = new _model_visit__WEBPACK_IMPORTED_MODULE_7__["Visit"]();
        this.resetDates();
        this.visitEventService.showEditFormEvent.subscribe(function (show) {
            _this.open(_this.content);
        });
        this.visitEventService.editVisitChangedEvent.subscribe(function (visit) {
            _this.visit = visit;
            _this.showLeavingDate = false;
            if (visit.guestDocumentType != '' && visit.guestDocumentType != null) {
                _this.documentLabel = visit.guestDocumentType;
            }
        });
    };
    EditVisitComponent.prototype.open = function (content) {
        this.isBadgeAssigned = this.visit.badgeNo != null;
        this.isEntranceDateAssigned = this.visit.entranceDate != null;
        this.isLeavingTimeAssigned = this.visit.leavingTime != null;
        this.isEntranceTimeAssigned = this.visit.entranceTime != null;
        this.isHostNameAssigned = this.visit.hostName != null;
        this.isGuestNameAssigned = this.visit.guestName != null;
        this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    EditVisitComponent.prototype.close = function () {
        this.mr.close();
    };
    EditVisitComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    EditVisitComponent.prototype.resetVisit = function () {
        this.visit.id = 0;
        this.visit.badgeNo = null;
        this.visit.entranceTime = null;
        this.visit.leavingTime = null;
        this.assignLeavinDate();
        this.assignEntranceDate();
    };
    EditVisitComponent.prototype.setDocumentType = function (d) {
        this.visit.guestDocumentType = d;
        this.documentLabel = d;
    };
    EditVisitComponent.prototype.reset = function () {
        this.documentLabel = 'Tipo Documento';
        this.visit = new _model_visit__WEBPACK_IMPORTED_MODULE_7__["Visit"]();
        this.resetDates();
    };
    EditVisitComponent.prototype.resetDates = function () {
        this.leavingDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.entranceDate = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.assignLeavinDate();
        this.assignEntranceDate();
    };
    EditVisitComponent.prototype.toggleLeavingDate = function () {
        this.showLeavingDate = !this.showLeavingDate;
        this.assignLeavinDate();
    };
    EditVisitComponent.prototype.assignLeavinDate = function () {
        this.visit.leavingDate = this.formatter.format(this.leavingDate);
    };
    EditVisitComponent.prototype.assignEntranceDate = function () {
        this.visit.entranceDate = this.formatter.format(this.entranceDate);
    };
    EditVisitComponent.prototype.editVisit = function () {
        var _this = this;
        this.resultMessage = "Errore nell'aggiunta della visita";
        this.visit.place = this.placeService.getCurrentPlace();
        this.visit.entranceDate = this.formatter.format(this.entranceDate);
        this.visit.leavingDate = this.formatter.format(this.leavingDate);
        this.visitService.updateVisit(this.visit)
            .subscribe(function () {
            _this.resultMessage = "Visita aggiunta con successo!",
                function (err) { return _this.resultMessage = "Errore nell'aggiunta della visita"; };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], EditVisitComponent.prototype, "content", void 0);
    EditVisitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-visit',
            template: __webpack_require__(/*! ./edit-visit.component.html */ "./src/app/edit-visit/edit-visit.component.html"),
            styles: [__webpack_require__(/*! ./edit-visit.component.css */ "./src/app/edit-visit/edit-visit.component.css")],
            providers: [
                _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__["I18n"],
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: _data_ngb_date_it_parser_formatter__WEBPACK_IMPORTED_MODULE_2__["NgbDateITParserFormatter"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__["CustomDatepickerI18n"] }
            ]
        }),
        __metadata("design:paramtypes", [_visit_event_service__WEBPACK_IMPORTED_MODULE_4__["VisitEventService"],
            _visit_service__WEBPACK_IMPORTED_MODULE_5__["VisitService"],
            _place_service__WEBPACK_IMPORTED_MODULE_6__["PlaceService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], EditVisitComponent);
    return EditVisitComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-fixed-bottom bg-primary text-white\">\r\n  <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\r\n    <a class=\"text-white\" href=\"https://www.fincons.com/\"> Fincons.com</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  margin-bottom: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light text-white\">\n  <a href=\"\"><img src=\"https://image.ibb.co/eGoZwo/logo_msa.jpg\" alt=\"logo msa\" border=\"0\" class=\"img-rounded\" width=\"50%\" height=\"50%\" /></a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = "MSG";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/model/visit.ts":
/*!********************************!*\
  !*** ./src/app/model/visit.ts ***!
  \********************************/
/*! exports provided: Visit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visit", function() { return Visit; });
var Visit = /** @class */ (function () {
    function Visit() {
    }
    return Visit;
}());

;


/***/ }),

/***/ "./src/app/new-visit/new-visit.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-visit/new-visit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new-visit/new-visit.component.html":
/*!****************************************************!*\
  !*** ./src/app/new-visit/new-visit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"plus-button btn btn-sm btn-outline-success mr-2\" (click)=\"open(content)\" style=\"width: 40px;height: 40px;\"><span class=\"glyphicon glyphicon-plus\"></span> </button>\n\n<ng-template #content>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Crea Visita</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form #visitForm=\"ngForm\">\n      <div [hidden]=\"visitForm.submitted\">\n        <div class=\"cross-validation\" [class.cross-validation-error]=\"visitForm.errors?.identityRevealed && (visitForm.touched || visitForm.dirty)\">\n          <div class=\"form-group\">\n            <form class=\"form-inline\">\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"Data entrata..\"\n                       name=\"dp\" [(ngModel)]=\"entranceDate\" ngbDatepicker #d=\"ngbDatepicker\"\n                       (ngModelChange)=\"assignEntranceDate()\">\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                    <span class=\"glyphicon glyphicon-calendar\"></span>\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"guestName\" name=\"guestName\" class=\"form-control\"\n                   required appForbidden=\".*[-\\/\\\\^%$*+£?&.()|[\\]{}].*\"\n                   [(ngModel)]=\"visit.guestName\" #guestName=\"ngModel\"\n                   placeholder=\"Nome ospite..\">\n\n            <div *ngIf=\"guestName.invalid && (guestName.dirty || guestName.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"guestName.errors.required\">Nome ospite obbligatorio</div>\n              <div *ngIf=\"guestName.errors.forbidden\">Un nome non può contenere caratteri speciali</div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input id=\"hostName\" name=\"hostName\" class=\"form-control\"\n                   required appForbidden=\".*[-\\/\\\\^%$*+£?&.()|[\\]{}].*\"\n                   [(ngModel)]=\"visit.hostName\" #hostName=\"ngModel\"\n                   placeholder=\"Nome persona visitata..\">\n\n            <div *ngIf=\"hostName.invalid && (hostName.dirty || hostName.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"hostName.errors.required\">Nome persona visitata obbligatorio</div>\n              <div *ngIf=\"hostName.errors.forbidden\">Un nome non può contenere caratteri speciali</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <input id=\"socialReason\" name=\"socialReason\" class=\"form-control\"\n                   appForbidden=\".*[-\\/\\\\^%$*+£?&.()|[\\]{}].*\"\n                   [(ngModel)]=\"visit.socialReason\" #socialReason=\"ngModel\"\n                   placeholder=\"Ragione sociale..\">\n\n            <div *ngIf=\"socialReason.invalid && (socialReason.dirty || socialReason.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"socialReason.errors.required\">Ragione sociale obbligatora</div>\n              <div *ngIf=\"socialReason.errors.forbidden\">Non può contenere caratteri speciali</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm\">\n                <div class=\"dropdown\">\n                  <button class=\"btn btn-primary dropdown-toggle form-control\" type=\"button\" id=\"dropdownMenuButton\"\n                          data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{documentLabel}}\n                  </button>\n                  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" >\n                    <a *ngFor=\"let d of documentTypes\" class=\"dropdown-item\"\n                            (click)=\"setDocumentType(d)\">{{d}}</a>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm\">\n                <input *ngIf=\"visit.guestDocumentType\" id=\"guestDocumentNo\" name=\"guestDocumentNo\" class=\"form-control\"\n                       [(ngModel)]=\"visit.guestDocumentNo\" #guestDocumentNo=\"ngModel\"\n                       placeholder=\"Numero documento..\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"col-sm\">\n                <div class=\"form-check\">\n                  <input id=\"exampleCheck1\" type=\"checkbox\" class=\"form-check-input\"\n                         (click)=\"toggleLeavingDate()\">\n                  <label class=\"form-check-label\">Aggiungi data di uscita</label>\n                </div>\n              </div>\n              <div class=\"col-sm\">\n                <div class=\"form-group\" *ngIf=\"showLeavingDate\" >\n                  <form class=\"form-inline\">\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" placeholder=\"Data uscita..\"\n                             name=\"dp\" [(ngModel)]=\"leavingDate\"\n                             (ngModelChange)=\"assignLeavinDate()\"  ngbDatepicker #d=\"ngbDatepicker\">\n\n                      <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                          <span class=\"glyphicon glyphicon-calendar\"></span>\n                        </button>\n                      </div>\n                    </div>\n                  </form>\n                  <div class=\"alert alert-danger\" *ngIf=\"comparableEntranceDate>comparableLeavingDate\">\n                    La data di entrata non può essere minore alla data di uscita\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button type=\"submit\" class=\"plus-button btn btn-sm btn-outline-primary mr-2\" (click)=\"addVisit()\" [disabled]=\"visitForm.invalid || (showLeavingDate && comparableEntranceDate>comparableLeavingDate)\">Crea</button>\n        </div>\n      </div>\n      <div class=\"submitted-message\" *ngIf=\"visitForm.submitted\">\n        <p>{{resultMessage}}</p>\n      </div>\n    </form>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/new-visit/new-visit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-visit/new-visit.component.ts ***!
  \**************************************************/
/*! exports provided: NewVisitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewVisitComponent", function() { return NewVisitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _data_ngb_date_it_parser_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ngb-date-it-parser-formatter */ "./src/app/data/ngb-date-it-parser-formatter.ts");
/* harmony import */ var _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/datepicker_IT */ "./src/app/data/datepicker_IT.ts");
/* harmony import */ var _visit_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../visit-event.service */ "./src/app/visit-event.service.ts");
/* harmony import */ var _visit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../visit.service */ "./src/app/visit.service.ts");
/* harmony import */ var _place_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../place.service */ "./src/app/place.service.ts");
/* harmony import */ var _datepicker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datepicker.service */ "./src/app/datepicker.service.ts");
/* harmony import */ var _model_visit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/visit */ "./src/app/model/visit.ts");
/* harmony import */ var _data_document_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/document_types */ "./src/app/data/document_types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NewVisitComponent = /** @class */ (function () {
    function NewVisitComponent(visitEventService, visitService, placeService, formatter, modalService, datepickerService) {
        this.visitEventService = visitEventService;
        this.visitService = visitService;
        this.placeService = placeService;
        this.formatter = formatter;
        this.modalService = modalService;
        this.datepickerService = datepickerService;
        this.showLeavingDate = false;
        this.documentTypes = _data_document_types__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT_TYPES"];
        this.documentLabel = 'Tipo Documento';
        this.resultMessage = "Errore nell'aggiunta della visita";
    }
    NewVisitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visit = new _model_visit__WEBPACK_IMPORTED_MODULE_8__["Visit"]();
        this.resetDates();
        this.visitEventService.showNewFormEvent.subscribe(function (show) {
            _this.resetVisit();
            _this.openPopulated(_this.content);
        });
        this.visitEventService.newVisitChangedEvent.subscribe(function (visit) {
            _this.visit.guestName = visit.guestName;
            _this.visit.hostName = visit.hostName;
            _this.visit.guestDocumentType = visit.guestDocumentType;
            _this.visit.guestDocumentNo = visit.guestDocumentNo;
            _this.visit.socialReason = visit.socialReason;
            _this.showLeavingDate = false;
            if (visit.guestDocumentType != '' && visit.guestDocumentType != null) {
                _this.documentLabel = visit.guestDocumentType;
            }
        });
    };
    NewVisitComponent.prototype.open = function (content) {
        this.reset();
        this.openPopulated(content);
    };
    NewVisitComponent.prototype.openPopulated = function (content) {
        this.mr = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    NewVisitComponent.prototype.close = function () {
        this.mr.close();
    };
    NewVisitComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NewVisitComponent.prototype.resetVisit = function () {
        this.visit.id = 0;
        this.visit.badgeNo = null;
        this.visit.entranceTime = null;
        this.visit.leavingTime = null;
        this.assignLeavinDate();
        this.assignEntranceDate();
    };
    NewVisitComponent.prototype.setDocumentType = function (d) {
        this.visit.guestDocumentType = d;
        this.documentLabel = d;
    };
    NewVisitComponent.prototype.reset = function () {
        this.documentLabel = 'Tipo Documento';
        this.visit = new _model_visit__WEBPACK_IMPORTED_MODULE_8__["Visit"]();
        this.resetDates();
    };
    NewVisitComponent.prototype.resetDates = function () {
        this.leavingDate = { year: this.datepickerService.getCurrentDate().getFullYear(), month: this.datepickerService.getCurrentDate().getMonth() + 1, day: this.datepickerService.getCurrentDate().getDate() };
        this.entranceDate = { year: this.datepickerService.getCurrentDate().getFullYear(), month: this.datepickerService.getCurrentDate().getMonth() + 1, day: this.datepickerService.getCurrentDate().getDate() };
        this.assignLeavinDate();
        this.assignEntranceDate();
    };
    NewVisitComponent.prototype.toggleLeavingDate = function () {
        this.showLeavingDate = !this.showLeavingDate;
        this.assignLeavinDate();
    };
    NewVisitComponent.prototype.assignLeavinDate = function () {
        this.comparableLeavingDate = new Date(this.leavingDate.year, this.leavingDate.month - 1, this.leavingDate.day);
        console.log(this.comparableEntranceDate);
        console.log(this.comparableLeavingDate);
        console.log(this.comparableEntranceDate > this.comparableLeavingDate);
        this.visit.leavingDate = this.formatter.format(this.leavingDate);
    };
    NewVisitComponent.prototype.assignEntranceDate = function () {
        this.comparableEntranceDate = new Date(this.entranceDate.year, this.entranceDate.month - 1, this.entranceDate.day);
        console.log(this.comparableEntranceDate);
        console.log(this.comparableLeavingDate);
        console.log(this.comparableEntranceDate > this.comparableLeavingDate);
        this.visit.entranceDate = this.formatter.format(this.entranceDate);
    };
    NewVisitComponent.prototype.addVisit = function () {
        var _this = this;
        this.resultMessage = "Errore nell'aggiunta della visita";
        this.visit.place = this.placeService.getCurrentPlace();
        this.visit.entranceDate = this.formatter.format(this.entranceDate);
        this.visit.leavingDate = this.formatter.format(this.leavingDate);
        this.visitService.addVisit(this.visit)
            .subscribe(function () {
            _this.visitEventService.visitCreated(_this.visit);
            _this.resultMessage = "Visita aggiunta con successo!",
                function (err) { return _this.resultMessage = "Errore nell'aggiunta della visita"; };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", Object)
    ], NewVisitComponent.prototype, "content", void 0);
    NewVisitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-visit',
            template: __webpack_require__(/*! ./new-visit.component.html */ "./src/app/new-visit/new-visit.component.html"),
            styles: [__webpack_require__(/*! ./new-visit.component.css */ "./src/app/new-visit/new-visit.component.css")],
            providers: [
                _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__["I18n"],
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"], useClass: _data_ngb_date_it_parser_formatter__WEBPACK_IMPORTED_MODULE_2__["NgbDateITParserFormatter"] },
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: _data_datepicker_IT__WEBPACK_IMPORTED_MODULE_3__["CustomDatepickerI18n"] }
            ]
        }),
        __metadata("design:paramtypes", [_visit_event_service__WEBPACK_IMPORTED_MODULE_4__["VisitEventService"],
            _visit_service__WEBPACK_IMPORTED_MODULE_5__["VisitService"],
            _place_service__WEBPACK_IMPORTED_MODULE_6__["PlaceService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _datepicker_service__WEBPACK_IMPORTED_MODULE_7__["DatepickerService"]])
    ], NewVisitComponent);
    return NewVisitComponent;
}());



/***/ }),

/***/ "./src/app/place.service.ts":
/*!**********************************!*\
  !*** ./src/app/place.service.ts ***!
  \**********************************/
/*! exports provided: PlaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceService", function() { return PlaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _data_backend_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/backend_url */ "./src/app/data/backend_url.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PlaceService = /** @class */ (function () {
    function PlaceService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.placeUrl = _data_backend_url__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL"] + '/api/place';
        this.placesUrl = _data_backend_url__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL"] + '/api/places';
    }
    PlaceService.prototype.ngOnInit = function () {
    };
    PlaceService.prototype.setCurrentPlace = function (place) {
        this.cookieService.set('msg.currentPlace', "" + place.id);
        this.currentPlace = place;
    };
    PlaceService.prototype.getStoredCurrentPlace = function () {
        return this.getPlace(+this.cookieService.get('msg.currentPlace'));
    };
    PlaceService.prototype.getCurrentPlace = function () {
        return this.currentPlace;
    };
    PlaceService.prototype.getPlaces = function () {
        var _this = this;
        return this.http.get(this.placesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (places) { return _this.log("fetched places"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPlaces', [])));
    };
    PlaceService.prototype.getPlace = function (id) {
        var _this = this;
        var url = this.placeUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched place id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPlace id=" + id)));
    };
    PlaceService.prototype.updatePlace = function (place) {
        var _this = this;
        return this.http.put(this.placeUrl, place, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated place id=$=" + place.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updatePlace')));
    };
    PlaceService.prototype.addPlace = function (place) {
        var _this = this;
        return this.http.post(this.placeUrl, place, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (place) { return _this.log("added place w/ id=" + place.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("addPlace")));
    };
    PlaceService.prototype.deletePlace = function (place) {
        var _this = this;
        var id = typeof place === 'number' ? place : place.id;
        var url = this.placeUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted place id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deletePlace')));
    };
    PlaceService.prototype.log = function (message) {
        console.log('PlaceService:' + message);
    };
    PlaceService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    PlaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], PlaceService);
    return PlaceService;
}());



/***/ }),

/***/ "./src/app/visit-event.service.ts":
/*!****************************************!*\
  !*** ./src/app/visit-event.service.ts ***!
  \****************************************/
/*! exports provided: VisitEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitEventService", function() { return VisitEventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisitEventService = /** @class */ (function () {
    function VisitEventService() {
        this.newVisitCreatedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showEditFormEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showNewFormEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newVisitChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editVisitChangedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    VisitEventService.prototype.setEditModel = function (visit) {
        this.editVisitModel = visit;
        this.editVisitChangedEvent.emit(this.editVisitModel);
    };
    VisitEventService.prototype.setNewModel = function (visit) {
        this.newVisitModel = visit;
        this.newVisitChangedEvent.emit(this.newVisitModel);
    };
    VisitEventService.prototype.showEditForm = function () {
        this.showForm = true;
        this.showEditFormEvent.emit(this.showForm);
    };
    VisitEventService.prototype.showNewForm = function () {
        this.showForm = false;
        this.showNewFormEvent.emit(this.showForm);
    };
    VisitEventService.prototype.visitCreated = function (visit) {
        this.newVisitModel = visit;
        this.newVisitCreatedEvent.emit(this.newVisitModel);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VisitEventService.prototype, "newVisitCreatedEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VisitEventService.prototype, "showEditFormEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VisitEventService.prototype, "showNewFormEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VisitEventService.prototype, "newVisitChangedEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], VisitEventService.prototype, "editVisitChangedEvent", void 0);
    VisitEventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], VisitEventService);
    return VisitEventService;
}());



/***/ }),

/***/ "./src/app/visit.service.ts":
/*!**********************************!*\
  !*** ./src/app/visit.service.ts ***!
  \**********************************/
/*! exports provided: VisitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitService", function() { return VisitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_backend_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/backend_url */ "./src/app/data/backend_url.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var VisitService = /** @class */ (function () {
    function VisitService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.visitUrl = _data_backend_url__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL"] + '/api/visit';
        this.visitsUrl = _data_backend_url__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL"] + '/api/visits';
        this.visitsByPlaceAndNameUrl = _data_backend_url__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL"] + '/api/visit_by_place_and_name';
        this.visitsByPlaceAndDateUrl = _data_backend_url__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL"] + '/api/visit_by_place_and_date';
    }
    VisitService.prototype.getVisits = function () {
        var _this = this;
        return this.http.get(this.visitsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (visits) { return _this.log("fetched visits"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getVisits', [])));
    };
    VisitService.prototype.getVisit = function (id) {
        var _this = this;
        var url = this.visitUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched visit id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getVisit id=" + id)));
    };
    VisitService.prototype.updateVisit = function (visit) {
        var _this = this;
        return this.http.put(this.visitUrl, visit, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated visit id=$=" + visit.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateVisit')));
    };
    VisitService.prototype.addVisit = function (visit) {
        return this.http.post(this.visitUrl, visit, httpOptions);
    };
    VisitService.prototype.deleteVisit = function (visit) {
        var _this = this;
        var id = typeof visit === 'number' ? visit : visit.id;
        var url = this.visitUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted visit id=" + id); }));
    };
    VisitService.prototype.getVisitsByDate = function (placeId, date) {
        var _this = this;
        var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
        return this.http.get(this.visitsByPlaceAndDateUrl + "?place_id=" + placeId + "&date=" + dateStr)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("found visits matching \"" + date + "\" with place id \"" + placeId + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchVisits', [])));
    };
    VisitService.prototype.getVisitsByName = function (placeId, name) {
        var _this = this;
        if (!name.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get(this.visitsByPlaceAndNameUrl + "?place_id=" + placeId + "&name='" + name + "'")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("found visits matching \"" + name + "\" with place id \"" + placeId + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchVisits', [])));
    };
    VisitService.prototype.log = function (message) {
        console.log('VisitService:' + message);
    };
    VisitService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    VisitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], VisitService);
    return VisitService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\simone.colaci\workspace\MSG\MSG-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map