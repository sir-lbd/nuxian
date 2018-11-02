(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-info-user-info-module"],{

/***/ "./src/pages/mine/user-info/user-info.component.html":
/*!***********************************************************!*\
  !*** ./src/pages/mine/user-info/user-info.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conetnt\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/pages/mine/user-info/user-info.component.scss":
/*!***********************************************************!*\
  !*** ./src/pages/mine/user-info/user-info.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/pages/mine/user-info/user-info.component.ts":
/*!*********************************************************!*\
  !*** ./src/pages/mine/user-info/user-info.component.ts ***!
  \*********************************************************/
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
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-user-info',
            template: __webpack_require__(/*! ./user-info.component.html */ "./src/pages/mine/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.scss */ "./src/pages/mine/user-info/user-info.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;


/***/ }),

/***/ "./src/pages/mine/user-info/user-info.module.ts":
/*!******************************************************!*\
  !*** ./src/pages/mine/user-info/user-info.module.ts ***!
  \******************************************************/
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
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var user_info_component_1 = __webpack_require__(/*! ./user-info.component */ "./src/pages/mine/user-info/user-info.component.ts");
var UserInfoModule = /** @class */ (function () {
    function UserInfoModule() {
    }
    UserInfoModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule,
                router_1.RouterModule.forChild([
                    {
                        'path': '',
                        component: user_info_component_1.UserInfoComponent
                    }
                ])
            ],
            declarations: [user_info_component_1.UserInfoComponent]
        })
    ], UserInfoModule);
    return UserInfoModule;
}());
exports.UserInfoModule = UserInfoModule;


/***/ })

}]);
//# sourceMappingURL=user-info-user-info-module.js.map