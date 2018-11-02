(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mine-record-details-record-details-module"],{

/***/ "./src/pages/mine/record-details/record-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/pages/mine/record-details/record-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page content\">\n  <div class=\"info-container\">\n    <div class=\"title\">订单详情</div>\n    <div>订单号：20180930101025</div>\n  </div>\n  <div class=\"info-container\">\n    <div class=\"title\">报告详情</div>\n    <div class=\"row\">\n      <div class=\"col col-auto img-col\">\n        <img src=\"assets/img/report.png\">\n      </div>\n      <div class=\"col info-col\">\n        <div class=\"name\">基本报告</div>\n        <div class=\"desc\">购买后可查看全部机打报告</div>\n      </div>\n      <div class=\"col col-auto \">\n        <div class=\"money\">\n          0元\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-auto img-col\">\n        <img src=\"assets/img/doctor.jpg\">\n      </div>\n      <div class=\"col info-col\">\n        <div class=\"name\">专家咨询师</div>\n        <div class=\"desc\">多量表综合测评更加权威<span>（机打报告+咨询师报告）</span></div>\n      </div>\n      <div class=\"col col-auto \">\n        <div class=\"money\">\n          39.9元\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/mine/record-details/record-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/mine/record-details/record-details.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-record-details .content {\n  width: 60%;\n  margin: 0 auto !important;\n  margin-top: 113px !important;\n  height: 100%;\n  position: relative;\n  padding: 16px; }\n\napp-record-details .info-container {\n  padding: 20px;\n  border-bottom: 1px solid #ecedf1; }\n\napp-record-details .info-container .title {\n    padding-bottom: 10px;\n    color: #333333;\n    font-size: 1.2rem;\n    font-weight: 500; }\n\napp-record-details .info-container .row {\n    padding: 20px 0 10px 0;\n    height: 110px;\n    color: #333333; }\n\napp-record-details .info-container .row .img-col img {\n      width: 70px; }\n\napp-record-details .info-container .row .info-col {\n      padding: 0 10px; }\n\napp-record-details .info-container .row .info-col .name {\n        padding: 10px 0; }\n\napp-record-details .info-container .row .info-col .desc {\n        color: #999999; }\n\napp-record-details .info-container .row .money {\n      height: 80px;\n      line-height: 80px; }\n"

/***/ }),

/***/ "./src/pages/mine/record-details/record-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/mine/record-details/record-details.component.ts ***!
  \*******************************************************************/
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
var RecordDetailsComponent = /** @class */ (function () {
    function RecordDetailsComponent() {
    }
    RecordDetailsComponent.prototype.ngOnInit = function () {
    };
    RecordDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-record-details',
            template: __webpack_require__(/*! ./record-details.component.html */ "./src/pages/mine/record-details/record-details.component.html"),
            styles: [__webpack_require__(/*! ./record-details.component.scss */ "./src/pages/mine/record-details/record-details.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], RecordDetailsComponent);
    return RecordDetailsComponent;
}());
exports.RecordDetailsComponent = RecordDetailsComponent;


/***/ }),

/***/ "./src/pages/mine/record-details/record-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/pages/mine/record-details/record-details.module.ts ***!
  \****************************************************************/
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
var record_details_component_1 = __webpack_require__(/*! ./record-details.component */ "./src/pages/mine/record-details/record-details.component.ts");
var RecordDetailsModule = /** @class */ (function () {
    function RecordDetailsModule() {
    }
    RecordDetailsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                common_1.CommonModule,
                material_1.MatButtonModule,
                material_1.MatTabsModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: record_details_component_1.RecordDetailsComponent
                    }
                ])
            ],
            declarations: [record_details_component_1.RecordDetailsComponent]
        })
    ], RecordDetailsModule);
    return RecordDetailsModule;
}());
exports.RecordDetailsModule = RecordDetailsModule;


/***/ })

}]);
//# sourceMappingURL=mine-record-details-record-details-module.js.map