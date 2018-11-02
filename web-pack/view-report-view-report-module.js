(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-report-view-report-module"],{

/***/ "./src/pages/user-care/view-report/view-report.component.html":
/*!********************************************************************!*\
  !*** ./src/pages/user-care/view-report/view-report.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-report\" *ngIf=\"reports && reports.length && isNoData\">\n  <ul class=\"search-report-ul row\">\n    <li *ngFor=\"let report of reports\" (click)=\"checkReport(report)\">\n      <div class=\"col-auto item\">\n        <div class=\"report-header row center\">\n          <span class=\"status\">已提交</span>\n          <em class=\"icon col-4\"><img src=\"{{report?.icon}}\"/> </em>\n          <div class=\"report-title col-8\">\n            <p class=\"title\">{{report?.product?.name}}</p>\n            <p class=\"subtitle\">{{report?.product?.products_describe}}</p>\n          </div>\n        </div>\n        <div class=\"report-content\">\n          <div class=\"detail-list\">\n            <span class=\"label\">截止日期：</span>\n            <span class=\"name\">{{report?.product?.end_time | date: 'yyyy-MM-dd'}}</span>\n          </div>\n          <div class=\"detail-list\">\n            <span class=\"label\">测试章节：</span>\n            <span class=\"name\">共{{report?.product?.num}}章</span>\n          </div>\n          <div class=\"detail-list\">\n            <span class=\"label\">答题时间：</span>\n            <span class=\"name\">{{report?.product?.consum_time / 60}}分钟</span>\n          </div>\n          <div class=\"detail-list\">\n            <span class=\"label\">试题数量：</span>\n            <span class=\"name\">{{report?.product?.qnum}}</span>\n          </div>\n          <div class=\"btn-box\">\n            <button mat-stroked-button color=\"primary\" class=\"btn-search\">查看报告</button>\n          </div>\n        </div>\n      </div>\n\n    </li>\n  </ul>\n</div>\n<div class=\"no-data\" *ngIf=\"(!reports || !reports?.length) && isNoData\">\n  暂无数据\n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/view-report/view-report.component.scss":
/*!********************************************************************!*\
  !*** ./src/pages/user-care/view-report/view-report.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-view-report .no-data {\n  width: 100%;\n  padding: 20px;\n  text-align: center; }\n\napp-view-report ul, app-view-report li {\n  list-style: none; }\n\napp-view-report p {\n  margin: 2px;\n  padding: 0; }\n\napp-view-report .center {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\napp-view-report .padd {\n  padding: 0 33px; }\n\napp-view-report .search-report .search-report-ul {\n  padding: 10px;\n  clear: both; }\n\napp-view-report .search-report .search-report-ul .item {\n    cursor: pointer;\n    margin: 10px;\n    border: 1px solid #E1E6EF;\n    box-shadow: 1px 1px 10px #E1E6EF;\n    width: 250px;\n    float: left; }\n\napp-view-report .search-report .search-report-ul .item .report-header {\n      background: #E1E6EF;\n      border-top-left-radius: 2px;\n      border-top-right-radius: 2px;\n      position: relative;\n      padding: 15px; }\n\napp-view-report .search-report .search-report-ul .item .report-header span.status {\n        display: inline-block;\n        border-top-right-radius: 2px;\n        width: 60px;\n        height: 20px;\n        text-align: center;\n        background: #5CB5D8;\n        color: #fff;\n        position: absolute;\n        top: 0;\n        right: 0;\n        font-size: 14px;\n        font-family: Constantia; }\n\napp-view-report .search-report .search-report-ul .item .report-header em.icon {\n        display: inline-block;\n        vertical-align: middle; }\n\napp-view-report .search-report .search-report-ul .item .report-header em.icon img {\n          width: 55px;\n          height: 55px; }\n\napp-view-report .search-report .search-report-ul .item .report-header .report-title {\n        vertical-align: middle;\n        display: inline-block; }\n\napp-view-report .search-report .search-report-ul .item .report-header .report-title .title {\n          color: #464647;\n          font-size: 20px;\n          font-weight: bold; }\n\napp-view-report .search-report .search-report-ul .item .report-header .report-title .subtitle {\n          color: #B4B6B9;\n          font-size: 14px; }\n\napp-view-report .search-report .search-report-ul .item .report-content {\n      padding: 15px;\n      color: #868686;\n      font-size: 14px; }\n\napp-view-report .search-report .search-report-ul .item .report-content .detail-list {\n        padding: 5px; }\n\napp-view-report .search-report .search-report-ul .item .report-content .detail-list .name {\n          padding-left: 15px; }\n\napp-view-report .search-report .search-report-ul .item .report-content .btn-box {\n        text-align: center;\n        padding: 5px; }\n\napp-view-report .search-report .search-report-ul .item .report-content .btn-box button.btn-search {\n          color: #92A0C6;\n          letter-spacing: 2px;\n          border-radius: 5px;\n          line-height: 28px; }\n"

/***/ }),

/***/ "./src/pages/user-care/view-report/view-report.component.ts":
/*!******************************************************************!*\
  !*** ./src/pages/user-care/view-report/view-report.component.ts ***!
  \******************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var evaluation_service_1 = __webpack_require__(/*! ../../$services/evaluation/evaluation.service */ "./src/pages/$services/evaluation/evaluation.service.ts");
var auth_service_1 = __webpack_require__(/*! ../../$services/auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
var ViewReportComponent = /** @class */ (function () {
    function ViewReportComponent(router, evaluation) {
        this.router = router;
        this.evaluation = evaluation;
        this.reports = [];
        this.isNoData = false;
    }
    Object.defineProperty(ViewReportComponent.prototype, "UserID", {
        get: function () {
            return auth_service_1.AuthService.UserID;
        },
        enumerable: true,
        configurable: true
    });
    ViewReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evaluation.getMyProductList(this.UserID, false).then(function (resp) {
            _this.reports = resp.results.map(function (item) {
                item.icon = '/assets/img/picture-1.png';
                item.assessmentsList = item.assessments.split(',');
                // console.log('item', item);
                return item;
            });
            _this.isNoData = true;
        }).catch(function (err) {
            console.log(err);
        });
    };
    ViewReportComponent.prototype.checkReport = function (report) {
        // console.log('report', report);
        this.router.navigate(['/user-care/view-report/check-report', report.assessments, report.product.id, report.id]);
    };
    ViewReportComponent = __decorate([
        core_1.Component({
            selector: 'app-view-report',
            template: __webpack_require__(/*! ./view-report.component.html */ "./src/pages/user-care/view-report/view-report.component.html"),
            styles: [__webpack_require__(/*! ./view-report.component.scss */ "./src/pages/user-care/view-report/view-report.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router, evaluation_service_1.EvaluationService])
    ], ViewReportComponent);
    return ViewReportComponent;
}());
exports.ViewReportComponent = ViewReportComponent;


/***/ }),

/***/ "./src/pages/user-care/view-report/view-report.module.ts":
/*!***************************************************************!*\
  !*** ./src/pages/user-care/view-report/view-report.module.ts ***!
  \***************************************************************/
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
var view_report_component_1 = __webpack_require__(/*! ./view-report.component */ "./src/pages/user-care/view-report/view-report.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ViewReportModule = /** @class */ (function () {
    function ViewReportModule() {
    }
    ViewReportModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: view_report_component_1.ViewReportComponent
                    }
                ])
            ],
            declarations: [view_report_component_1.ViewReportComponent]
        })
    ], ViewReportModule);
    return ViewReportModule;
}());
exports.ViewReportModule = ViewReportModule;


/***/ })

}]);
//# sourceMappingURL=view-report-view-report-module.js.map