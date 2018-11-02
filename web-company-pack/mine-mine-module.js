(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mine-mine-module"],{

/***/ "./src/pages/mine/mine.component.html":
/*!********************************************!*\
  !*** ./src/pages/mine/mine.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <menu-page [menu]=\"menu\" [type]=\"'router'\">\n  </menu-page>\n</div>\n"

/***/ }),

/***/ "./src/pages/mine/mine.component.scss":
/*!********************************************!*\
  !*** ./src/pages/mine/mine.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/pages/mine/mine.component.ts":
/*!******************************************!*\
  !*** ./src/pages/mine/mine.component.ts ***!
  \******************************************/
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
var MineComponent = /** @class */ (function () {
    function MineComponent() {
        this.menu = {
            items: [
                {
                    title: '用户信息',
                    icon: {
                        selected: '/assets/img/icon-2.png',
                        normal: '/assets/img/icon-2.png'
                    },
                    url: '/mine/user-info',
                },
                {
                    title: '测评记录',
                    icon: {
                        selected: '/assets/img/icon-3.png',
                        normal: '/assets/img/icon-3.png'
                    },
                    url: '/mine/evaluation-records',
                }
            ]
        };
    }
    MineComponent.prototype.ngOnInit = function () {
    };
    MineComponent = __decorate([
        core_1.Component({
            selector: 'app-mine',
            template: __webpack_require__(/*! ./mine.component.html */ "./src/pages/mine/mine.component.html"),
            styles: [__webpack_require__(/*! ./mine.component.scss */ "./src/pages/mine/mine.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], MineComponent);
    return MineComponent;
}());
exports.MineComponent = MineComponent;


/***/ }),

/***/ "./src/pages/mine/mine.module.ts":
/*!***************************************!*\
  !*** ./src/pages/mine/mine.module.ts ***!
  \***************************************/
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
var mine_component_1 = __webpack_require__(/*! ./mine.component */ "./src/pages/mine/mine.component.ts");
var components_module_1 = __webpack_require__(/*! ../../components/components.module */ "./src/components/components.module.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// @ts-ignore
var MineModule = /** @class */ (function () {
    function MineModule() {
    }
    MineModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                components_module_1.ComponentsModule,
                material_1.MatMenuModule,
                material_1.MatButtonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: mine_component_1.MineComponent,
                        children: [
                            {
                                path: 'user-info',
                                loadChildren: './user-info/user-info.module#UserInfoModule'
                            },
                            {
                                path: 'evaluation-records',
                                loadChildren: './evaluation-records/evaluation-records.module#EvaluationRecordsModule'
                            }
                        ]
                    }
                ])
            ],
            declarations: [mine_component_1.MineComponent]
        })
    ], MineModule);
    return MineModule;
}());
exports.MineModule = MineModule;


/***/ })

}]);
//# sourceMappingURL=mine-mine-module.js.map