(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-care-evaluation-start-evaluation-start-evaluation-module"],{

/***/ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page content-aptitude\">\n  <h1>{{assessment?.name}}</h1>\n  <p class=\"explain\">\n    <{{assessment?.introduce}}>\n  </p>\n\n  <div [innerHtml]=\"assessment?.description\"></div>\n\n  <div class=\"btn-box\" >\n    <button mat-raised-button-button button color=\"primary\" (click)=\"goAnswer()\">开始测评</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "start-evaluation .content-aptitude {\n  text-align: center;\n  font-size: 16px;\n  color: #878787;\n  padding-top: 16px;\n  width: 60%;\n  margin: 0 auto !important;\n  margin-top: 113px !important; }\n  start-evaluation .content-aptitude h1 {\n    font-size: 22px;\n    color: #545454; }\n  start-evaluation .content-aptitude p.explain {\n    padding: 5px; }\n  start-evaluation .content-aptitude .btn-box {\n    text-align: center; }\n  start-evaluation .content-aptitude .btn-box button {\n      color: #fff;\n      background: #7E8FBC;\n      border-radius: 5px;\n      width: 110px;\n      height: 45px;\n      border: none; }\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.ts ***!
  \***************************************************************************************/
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
var start_evaluation_service_1 = __webpack_require__(/*! ./start-evaluation.service */ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.service.ts");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var StartEvaluationComponent = /** @class */ (function () {
    function StartEvaluationComponent(_router, service, activedRoute, domSanitizer) {
        this._router = _router;
        this.service = service;
        this.activedRoute = activedRoute;
        this.domSanitizer = domSanitizer;
    }
    StartEvaluationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.domSanitizer.bypassSecurityTrustHtml('');
        this.activedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.assessments = params['ids'];
            var num = +params['index'];
            _this.testID = +params['test'];
            _this.curr_num = num < 0 ? 0 : num;
            _this.assessmentID = _this.assessments.split(',')[_this.curr_num];
            _this.getAssessmentDetail(_this.assessmentID);
        });
    };
    // 获取量表详情
    StartEvaluationComponent.prototype.getAssessmentDetail = function (id) {
        var _this = this;
        this.service.getAssessment(id).then(function (resp) {
            // console.log('resp', resp);
            resp.description = _this.domSanitizer.bypassSecurityTrustHtml(resp.description);
            _this.assessment = resp;
        }).catch(function (err) {
            console.log(err);
        });
    };
    StartEvaluationComponent.prototype.goAnswer = function () {
        this.postUserTest();
    };
    // 生成测试数据
    StartEvaluationComponent.prototype.postUserTest = function () {
        var _this = this;
        if (this.curr_num) {
        }
        this.service.postUserTest(this.testID, new Date()).then(function (resp) {
            _this._router.navigate(['/user-care/evaluation/answer-evaluation', _this.id, _this.assessments, _this.curr_num, _this.testID]);
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    StartEvaluationComponent = __decorate([
        core_1.Component({
            selector: 'start-evaluation',
            template: __webpack_require__(/*! ./start-evaluation.component.html */ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./start-evaluation.component.scss */ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router,
            start_evaluation_service_1.StartEvaluationService,
            router_1.ActivatedRoute,
            platform_browser_1.DomSanitizer])
    ], StartEvaluationComponent);
    return StartEvaluationComponent;
}());
exports.StartEvaluationComponent = StartEvaluationComponent;


/***/ }),

/***/ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.module.ts":
/*!************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/start-evaluation/start-evaluation.module.ts ***!
  \************************************************************************************/
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
var start_evaluation_component_1 = __webpack_require__(/*! ./start-evaluation.component */ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var StartEvaluationModule = /** @class */ (function () {
    function StartEvaluationModule() {
    }
    StartEvaluationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: start_evaluation_component_1.StartEvaluationComponent
                    }
                ])
            ],
            declarations: [start_evaluation_component_1.StartEvaluationComponent]
        })
    ], StartEvaluationModule);
    return StartEvaluationModule;
}());
exports.StartEvaluationModule = StartEvaluationModule;


/***/ })

}]);
//# sourceMappingURL=user-care-evaluation-start-evaluation-start-evaluation-module.js.map