(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-care-user-care-module"],{

/***/ "./src/pages/user-care/user-care.component.html":
/*!******************************************************!*\
  !*** ./src/pages/user-care/user-care.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<menu-page [menu]=\"menu\" [type]=\"'router'\">\n\n</menu-page>\n"

/***/ }),

/***/ "./src/pages/user-care/user-care.component.scss":
/*!******************************************************!*\
  !*** ./src/pages/user-care/user-care.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/pages/user-care/user-care.component.ts":
/*!****************************************************!*\
  !*** ./src/pages/user-care/user-care.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var UserCareComponent = /** @class */ (function () {
    function UserCareComponent() {
        this.menu = {
            items: [
                {
                    title: '参加测评',
                    icon: {
                        selected: '/assets/img/icon-2.png',
                        normal: '/assets/img/icon-2.png'
                    },
                    url: '/user-care/evaluation',
                },
                {
                    title: '查看报告',
                    icon: {
                        selected: '/assets/img/icon-3.png',
                        normal: '/assets/img/icon-3.png'
                    },
                    url: '/user-care/view-report',
                },
                {
                    title: '发展性咨询',
                    icon: {
                        selected: '/assets/img/icon-1.png',
                        normal: '/assets/img/icon-1.png'
                    },
                    url: '/user-care/development-counseling',
                }
            ]
        };
    }
    UserCareComponent.prototype.ngOnInit = function () {
    };
    UserCareComponent = __decorate([
        core_1.Component({
            selector: 'div.page.user-care',
            template: __webpack_require__(/*! ./user-care.component.html */ "./src/pages/user-care/user-care.component.html"),
            styles: [__webpack_require__(/*! ./user-care.component.scss */ "./src/pages/user-care/user-care.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], UserCareComponent);
    return UserCareComponent;
}());
exports.UserCareComponent = UserCareComponent;


/***/ }),

/***/ "./src/pages/user-care/user-care.module.ts":
/*!*************************************************!*\
  !*** ./src/pages/user-care/user-care.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var user_care_component_1 = __webpack_require__(/*! ./user-care.component */ "./src/pages/user-care/user-care.component.ts");
var components_module_1 = __webpack_require__(/*! ../../components/components.module */ "./src/components/components.module.ts");
var routeguard_service_1 = __webpack_require__(/*! ../$services/canActivate/routeguard.service */ "./src/pages/$services/canActivate/routeguard.service.ts");
var UserCareModule = /** @class */ (function () {
    function UserCareModule() {
    }
    UserCareModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                components_module_1.ComponentsModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: user_care_component_1.UserCareComponent,
                        children: [
                            {
                                path: 'evaluation',
                                loadChildren: './evaluation/evaluation.module#EvaluationModule',
                                canActivate: [routeguard_service_1.RouteGuardService]
                            },
                            {
                                path: 'view-report',
                                loadChildren: './view-report/view-report.module#ViewReportModule',
                                canActivate: [routeguard_service_1.RouteGuardService]
                            },
                            {
                                path: 'development-counseling',
                                loadChildren: './development-counseling/development-counseling.module#DevelopmentCounselingModule',
                                canActivate: [routeguard_service_1.RouteGuardService]
                            },
                        ]
                    }
                ])
            ],
            declarations: [user_care_component_1.UserCareComponent]
        })
    ], UserCareModule);
    return UserCareModule;
}());
exports.UserCareModule = UserCareModule;


/***/ })

}]);
//# sourceMappingURL=user-care-user-care-module.js.map