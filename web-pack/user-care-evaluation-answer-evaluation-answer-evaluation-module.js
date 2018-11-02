(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-care-evaluation-answer-evaluation-answer-evaluation-module"],{

/***/ "./src/pages/loading/loading.component.html":
/*!**************************************************!*\
  !*** ./src/pages/loading/loading.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"spinner\">\n    <div class=\"spinner-container container1\">\n      <div class=\"circle1\"></div>\n      <div class=\"circle2\"></div>\n      <div class=\"circle3\"></div>\n      <div class=\"circle4\"></div>\n    </div>\n    <div class=\"spinner-container container2\">\n      <div class=\"circle1\"></div>\n      <div class=\"circle2\"></div>\n      <div class=\"circle3\"></div>\n      <div class=\"circle4\"></div>\n    </div>\n    <div class=\"spinner-container container3\">\n      <div class=\"circle1\"></div>\n      <div class=\"circle2\"></div>\n      <div class=\"circle3\"></div>\n      <div class=\"circle4\"></div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/pages/loading/loading.component.scss":
/*!**************************************************!*\
  !*** ./src/pages/loading/loading.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-loading .wrapper {\n  position: fixed;\n  width: 100vw;\n  height: calc(100vh + 32px);\n  top: -32px;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.3); }\n  app-loading .wrapper .spinner {\n    width: 30px;\n    height: 30px;\n    position: relative;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  app-loading .wrapper .container1 > div, app-loading .wrapper .container2 > div, app-loading .wrapper .container3 > div {\n    width: 6px;\n    height: 6px;\n    background-color: #7e8fbc;\n    border-radius: 100%;\n    position: absolute;\n    -webkit-animation: bouncedelay 1.2s infinite ease-in-out;\n    animation: bouncedelay 1.2s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both; }\n  app-loading .wrapper .spinner .spinner-container {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n  app-loading .wrapper .container2 {\n    -webkit-transform: rotateZ(45deg);\n    transform: rotateZ(45deg); }\n  app-loading .wrapper .container3 {\n    -webkit-transform: rotateZ(90deg);\n    transform: rotateZ(90deg); }\n  app-loading .wrapper .circle1 {\n    top: 0;\n    left: 0; }\n  app-loading .wrapper .circle2 {\n    top: 0;\n    right: 0; }\n  app-loading .wrapper .circle3 {\n    right: 0;\n    bottom: 0; }\n  app-loading .wrapper .circle4 {\n    left: 0;\n    bottom: 0; }\n  app-loading .wrapper .container2 .circle1 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s; }\n  app-loading .wrapper .container3 .circle1 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s; }\n  app-loading .wrapper .container1 .circle2 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s; }\n  app-loading .wrapper .container2 .circle2 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s; }\n  app-loading .wrapper .container3 .circle2 {\n    -webkit-animation-delay: -0.7s;\n    animation-delay: -0.7s; }\n  app-loading .wrapper .container1 .circle3 {\n    -webkit-animation-delay: -0.6s;\n    animation-delay: -0.6s; }\n  app-loading .wrapper .container2 .circle3 {\n    -webkit-animation-delay: -0.5s;\n    animation-delay: -0.5s; }\n  app-loading .wrapper .container3 .circle3 {\n    -webkit-animation-delay: -0.4s;\n    animation-delay: -0.4s; }\n  app-loading .wrapper .container1 .circle4 {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s; }\n  app-loading .wrapper .container2 .circle4 {\n    -webkit-animation-delay: -0.2s;\n    animation-delay: -0.2s; }\n  app-loading .wrapper .container3 .circle4 {\n    -webkit-animation-delay: -0.1s;\n    animation-delay: -0.1s; }\n  @-webkit-keyframes bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1); } }\n  @keyframes bouncedelay {\n  0%, 80%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  40% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n"

/***/ }),

/***/ "./src/pages/loading/loading.component.ts":
/*!************************************************!*\
  !*** ./src/pages/loading/loading.component.ts ***!
  \************************************************/
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
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        core_1.Component({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/pages/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/pages/loading/loading.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;


/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>{{config?.title}}</div>\n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.ts ***!
  \*************************************************************************************************************************/
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
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var AnswerEvaluationDialogComponent = /** @class */ (function () {
    function AnswerEvaluationDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    AnswerEvaluationDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogRef.afterOpen().subscribe(function (resp) {
            // console.log('open');
            // console.log(this.dialogRef._containerInstance._config.data);
            _this.config = _this.dialogRef._containerInstance._config.data;
        });
    };
    AnswerEvaluationDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-answer-evaluation-dialog',
            template: __webpack_require__(/*! ./answer-evaluation-dialog.component.html */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.html"),
            styles: [__webpack_require__(/*! ./answer-evaluation-dialog.component.scss */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [material_1.MatDialogRef])
    ], AnswerEvaluationDialogComponent);
    return AnswerEvaluationDialogComponent;
}());
exports.AnswerEvaluationDialogComponent = AnswerEvaluationDialogComponent;


/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"showLoading\"></app-loading>\n<div class=\"page content\">\n  <!--练习题-->\n  <div class=\"swiper-container\" #SwiperPractice [hidden]=\"!showPractice\">\n    <div>下面是{{practice?.length}}个例题，请尝试回答这几个问题。</div>\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" *ngFor=\"let question of practice;let i = index;\">\n        <div class=\"content-answer\">\n          <div class=\"subject-desc\">\n            <span class=\"subject-text\">(练习题){{i + 1}}/{{practice?.length}}. </span>\n            <span class=\"subject-name\" [innerHTML]=\"question?.title\"></span>\n          </div>\n          <div class=\"subject-img\">\n            <em><img src=\"{{question?.title_img}}\"/></em>\n          </div>\n          <mat-radio-group [(ngModel)]=\"question.selected\" (change)=\"selectAnswer($event, question, 0)\">\n            <mat-radio-button *ngFor=\"let option of question?.optionsArr; let i = index;\" [value]=\"option?.option\">\n              {{option?.option}}.{{option?.value?.title}}\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--正式题-->\n  <div class=\"swiper-container\" #SwiperAnswer [hidden]=\"showPractice && !questionsList?.length\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" *ngFor=\"let question of questionsList;let i = index;\">\n        <div class=\"content-answer\">\n          <div class=\"subject-desc\">\n            <span class=\"subject-text\">{{i + 1}}/{{questionsList?.length}}. </span>\n            <span class=\"subject-name\" [innerHTML]=\"question?.title\"></span>\n          </div>\n          <div class=\"subject-img\">\n            <em><img src=\"{{question?.title_img}}\"/></em>\n          </div>\n          <mat-radio-group [(ngModel)]=\"question.selected\" (change)=\"selectAnswer($event, question, 1)\">\n            <mat-radio-button *ngFor=\"let option of question?.optionsArr; let i = index;\" [value]=\"option?.option\">\n              {{option?.option}}.{{option?.value?.title}}\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--正式题操作按钮-->\n  <div class=\"btn-box row\" *ngIf=\"questionsList && questionsList?.length\">\n    <div class=\"\">\n      <button mat-stroked-button class=\"prev-nextBtn\" (click)=\"slideToPre()\">上一题</button>\n    </div>\n    <div class=\"\">\n      <button mat-stroked-button class=\"submitBtn\" [class.auto]=\"true\" (click)=\"clickAuto()\">\n        <img src=\"assets/img/pause.jpg\" *ngIf=\"auto\">\n        <img src=\"assets/img/automatic-1.png\" *ngIf=\"!auto\">\n        <!--<img src=\"assets/img/pause.jpg\">-->\n      </button>\n    </div>\n    <div class=\"\">\n      <button mat-stroked-button class=\"prev-nextBtn\" (click)=\"slideToNext()\">下一题</button>\n    </div>\n    <div *ngIf=\"!noAnswerArray.length\">\n      <button mat-stroked-button class=\"prev-nextBtn s-b\" (click)=\"slideToNext();showAlert = true\">提交</button>\n    </div>\n  </div>\n  <!--下方进度条-->\n  <div class='progress' (mouseover)=\"showNoSelected = true;\" (mouseleave)=\"showNoSelected = false;\">\n    <div class=\"p-d row\" *ngIf=\"showNoSelected\">\n      <div class=\"col c-c\" *ngFor=\"let q of questionsList; let i = index;\"\n           [class.no-selected]=\"q?.selected === '' && currentIndex >= i\" [class.selected]=\"q?.selected !== ''\">\n        <div class=\"number\" *ngIf=\"showNoSelected && currentIndex > i && q?.selected === ''\">{{i + 1}}</div>\n        <div class=\"n-p\" *ngIf=\"showNoSelected && currentIndex == i\">{{i + 1}}/{{questionsList?.length}}</div>\n        <div class=\"p-c\" *ngIf=\"currentIndex == i\">\n          <div class=\"p-c-i\" *ngIf=\"showNoSelected\"></div>\n          <img class=\"clock\" *ngIf=\"!showNoSelected\" src=\"assets/img/clock.png\">\n        </div>\n      </div>\n    </div>\n    <div class=\"p-d\" *ngIf=\"!showNoSelected\">\n      <div class=\"time\" *ngIf=\"minutes || seconds\" [style.left]=\"mProgress\">{{minutes}}分{{seconds}}秒</div>\n      <mat-progress-bar [value]=\"progress\"></mat-progress-bar>\n    </div>\n  </div>\n</div>\n\n<!--答完练习题提示-->\n<div class=\"alert-model\" *ngIf=\"showStart\" [class.slipUp]=\"showStart\" [class.slipBottom]=\"!showStart\">\n  <div class=\"a-content slipUp\" >\n    <div>\n      <i class=\"material-icons close\" (click)=\"backToPractice()\">close</i>\n      <div class=\"title\" *ngIf=\"practice?.length\">您已完成练习题</div>\n      <div class=\"title\" *ngIf=\"!practice?.length\">暂无练习题</div>\n      <div class=\"tips\">是否开始正式答题</div>\n      <div class=\"row\">\n        <div class=\"col\" *ngIf=\"practice?.length\">\n          <button mat-button class=\"l-b\" (click)=\"backToPractice()\">继续练习</button>\n        </div>\n        <div class=\"col\">\n          <button mat-button class=\"r-b\" (click)=\"getQuestions()\">开始测评</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!--答完正式题的提示-->\n<div class=\"alert-model\" *ngIf=\"showAlert\" [class.slipUp]=\"showAlert\" [class.slipBottom]=\"!showAlert\">\n  <div class=\"a-content slipUp\" >\n    <div *ngIf=\"noAnswer !== 0\">\n      <i class=\"material-icons close\" (click)=\"toNoAnswer();\">close</i>\n      <div class=\"title\">第{{curr_num + 1}}章<span>{{currentAssessment?.name}}</span></div>\n      <div class=\"row\">\n        <div class=\"col\">总题数<span>{{questionsList?.length}}</span>道</div>\n        <div class=\"col\">未答题<span class=\"no\">{{noAnswer}}</span>道</div>\n      </div>\n      <div class=\"tips\" *ngIf=\"minutes || seconds\">请跳转到未答题继续作答</div>\n      <div class=\"row\">\n        <div class=\"col\" *ngIf=\"minutes || seconds\">\n          <button mat-button class=\"l-b\" (click)=\"backToCheck(); isBack = true\">返回检查</button>\n        </div>\n        <div class=\"col\" *ngIf=\"minutes || seconds\">\n          <button mat-button class=\"r-b\" (click)=\"toNoAnswer();\">跳转未答</button>\n        </div>\n        <div class=\"col\" *ngIf=\"!minutes && !seconds\">\n          <button mat-button class=\"r-b\" (click)=\"toContinue()\">继续测评</button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!noAnswer && assessmentList?.length > curr_num + 1\">\n      <i class=\"material-icons close\" (click)=\"showAlert = false\">close</i>\n      <div class=\"title\">第{{curr_num + 1}}章<span>{{currentAssessment?.name}}</span>您已完成</div>\n      <div class=\"row\">\n        <div class=\"col\">建议休息十分钟继续测评</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\"><span class=\"c-b\">{{0}}</span><span class=\"l-t\">时</span></div>\n        <div class=\"col\"><span class=\"c-b\">{{tenMinutes}}</span><span class=\"l-t\">分</span></div>\n        <div class=\"col\"><span class=\"c-b\">{{tenSeconds}}</span><span class=\"l-t\">秒</span></div>\n      </div>\n      <div class=\"row b-c\">\n        <div class=\"col\" *ngIf=\"minutes || seconds\">\n          <button mat-button class=\"l-b\" (click)=\"backToCheck(); isBack = true\">返回检查</button>\n        </div>\n        <div class=\"col\">\n          <button mat-button class=\"r-b\" (click)=\"toContinue()\">继续测评</button>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!noAnswer && assessmentList?.length === (curr_num + 1)\">\n      <i class=\"material-icons close\" (click)=\"showAlert = false\">close</i>\n      <div class=\"title\">恭喜您完成全部测评</div>\n      <div class=\"row\">\n        <div class=\"col t-u-t\">用时：</div>\n        <div class=\"col\"><span class=\"c-b\">{{consumeHours}}</span><span class=\"l-t\">时</span></div>\n        <div class=\"col\"><span class=\"c-b\">{{consumeMinutes}}</span><span class=\"l-t\">分</span></div>\n        <div class=\"col\"><span class=\"c-b\">{{consumeSeconds}}</span><span class=\"l-t\">秒</span></div>\n      </div>\n      <div class=\"t-tips\">请您提交答案，我们会生成机打报告</div>\n      <div class=\"tips\">如果您想了解更详细的报告请咨询我们的测评师</div>\n      <div class=\"row b-c\">\n        <div class=\"col\" *ngIf=\"minutes || seconds\">\n          <button mat-button class=\"l-b\" (click)=\"backToCheck(); isBack = true\">返回检查</button>\n        </div>\n        <div class=\"col\">\n          <button mat-button class=\"r-b\" (click)=\"submit()\">提交生成报告</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "answer-evaluation ul, answer-evaluation li, answer-evaluation ol {\n  list-style: none;\n  padding: 0; }\n\nanswer-evaluation mat-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\nanswer-evaluation .content {\n  width: 60%;\n  margin: 0 auto !important;\n  margin-top: 113px !important;\n  height: 100%;\n  position: relative;\n  padding: 16px; }\n\nanswer-evaluation .content .btn-box {\n    padding: 5px 15px; }\n\nanswer-evaluation .content .btn-box .collectBtn {\n      width: 80px;\n      color: #C3C3C3;\n      border: 1px solid #C3C3C3; }\n\nanswer-evaluation .content .btn-box .submitBtn {\n      width: 35px;\n      height: 35px;\n      border-radius: 5px;\n      border: 1px solid #C3C3C3;\n      background: #7e8fbc;\n      margin: 0 5px; }\n\nanswer-evaluation .content .btn-box .auto {\n      background: #ffffff; }\n\nanswer-evaluation .content .btn-box .prev-nextBtn {\n      border: 1px solid #C3C3C3;\n      font-size: 14px;\n      width: 85px;\n      height: 35px;\n      border-radius: 5px;\n      background: #fff;\n      color: #000; }\n\nanswer-evaluation .content .btn-box .s-b {\n      margin-left: 10px; }\n\nanswer-evaluation .content .swiper-container {\n    position: relative;\n    overflow: hidden;\n    height: auto; }\n\nanswer-evaluation .swiper-slide {\n  width: 100% !important; }\n\nanswer-evaluation .content-answer {\n  padding: 15px;\n  width: 100%; }\n\nanswer-evaluation .content-answer .subject-desc .subject-text {\n    font-size: 16px;\n    color: #555555;\n    font-weight: bold; }\n\nanswer-evaluation .content-answer .subject-desc .subject-type {\n    color: #555555;\n    font-weight: bold;\n    font-size: 16px;\n    display: inline-block; }\n\nanswer-evaluation .content-answer .subject-desc .subject-name {\n    color: #555555;\n    padding-left: 15px;\n    white-space: pre-wrap;\n    font-weight: bold;\n    letter-spacing: 1px; }\n\nanswer-evaluation .content-answer .subject-img {\n    width: 100%;\n    text-align: center; }\n\nanswer-evaluation .content-answer .subject-img em {\n      display: inline-block;\n      text-align: center; }\n\nanswer-evaluation .content-answer .subject-img img {\n      width: 100%; }\n\nanswer-evaluation .content-answer .subject-options {\n    padding: 15px; }\n\nanswer-evaluation .content-answer .subject-options li {\n      padding: 10px; }\n\nanswer-evaluation .content-answer .subject-options em {\n      display: inline-block;\n      width: 17px;\n      height: 17px;\n      background: #ffffff;\n      border-top: 1px solid #F1F1F1;\n      border-radius: 50px;\n      box-shadow: 1px 1px 10px #F1F1F1; }\n\nanswer-evaluation .content-answer .subject-options em .disnone {\n        opacity: 0; }\n\nanswer-evaluation .content-answer .subject-options em.right-checked {\n      color: #01A2FD;\n      background-image: url(\"/assets/images/sailor-master/tessts/test-answer/right.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .content-answer .subject-options em.mistake-checked {\n      color: #FE4B3E;\n      background-image: url(\"/assets/images/sailor-master/tessts/test-answer/mistake.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .content-answer .subject-options span.option-value {\n      padding-left: 15px;\n      color: #868686; }\n\nanswer-evaluation .content-answer .subject-options span.right {\n      color: #01A2FD; }\n\nanswer-evaluation .content-answer .subject-options span.mistake {\n      color: #FE4B3E; }\n\nanswer-evaluation .content-answer .analysis {\n    padding: 15px;\n    display: none; }\n\nanswer-evaluation .content-answer .analysis .right-key {\n      font-size: 20px;\n      font-weight: 500;\n      padding: 5px 0; }\n\nanswer-evaluation .content-answer .analysis .analysis-detail {\n      color: #ADADAD;\n      font-size: 16px; }\n\nanswer-evaluation .content-answer .analysis .analysis-detail span {\n        color: #22ACFD; }\n\nanswer-evaluation .swiper-container-horizontal > .swiper-pagination-progressbar {\n  height: 2px;\n  left: 0;\n  top: 92%; }\n\nanswer-evaluation .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #38B4FA; }\n\nanswer-evaluation .swiper-button-next, answer-evaluation .swiper-button-prev {\n  top: 94%;\n  width: 100px;\n  opacity: 0; }\n\nanswer-evaluation .swiper-button-next {\n  right: -1px;\n  position: absolute;\n  left: 9%; }\n\nanswer-evaluation .btn2-box {\n  padding: 5px 0px;\n  border-top: 1px solid #F6F6F6;\n  position: fixed;\n  left: 0;\n  bottom: 0vh;\n  width: 100%; }\n\nanswer-evaluation .btn2-box .btn-col {\n    position: relative; }\n\nanswer-evaluation .btn2-box .btn-col button {\n      width: 100%; }\n\nanswer-evaluation .btn2-box .btn-col .collectBtn {\n      color: #BABABA; }\n\nanswer-evaluation .btn2-box .btn-col .submitBtn {\n      color: #BABABA; }\n\nanswer-evaluation .btn2-box .btn-col .prev-nextBtn {\n      color: #BABABA; }\n\nanswer-evaluation .btn2-box .btn-col em {\n      display: inline-block;\n      width: 25px;\n      height: 25px;\n      position: absolute;\n      top: 1.1vw;\n      left: 3.8vw; }\n\nanswer-evaluation .btn2-box .btn-col em.btn-icon01 {\n      background-image: url(\"/assets/images/sailor-master/home/english-practice-page/t-collect.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .btn2-box .btn-col em.btn-icon02 {\n      background-image: url(\"/assets/images/sailor-master/home/english-practice-page/t-correct.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .btn2-box .btn-col em.btn-icon03 {\n      background-image: url(\"/assets/images/sailor-master/home/english-practice-page/t-setting.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .progress {\n  height: 5px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  overflow: visible;\n  border-radius: 5px; }\n\nanswer-evaluation .progress .p-d {\n    width: 100%;\n    height: 5px; }\n\nanswer-evaluation .progress .p-d .mat-progress-bar-buffer {\n      background: #dee2ed; }\n\nanswer-evaluation .progress .p-d .mat-progress-bar-fill::after {\n      background: #7e8fbc; }\n\nanswer-evaluation .progress .p-d .time {\n      position: absolute;\n      bottom: 13px;\n      height: 30px;\n      line-height: 30px; }\n\nanswer-evaluation .progress .selected {\n    background: #7e8fbc; }\n\nanswer-evaluation .progress .no-selected {\n    background: #d9c089; }\n\nanswer-evaluation .progress .current {\n    background: #7e8fbc; }\n\nanswer-evaluation .progress .c-c {\n    position: relative; }\n\nanswer-evaluation .progress .c-c .number {\n      position: absolute;\n      text-align: center;\n      height: 20px;\n      width: 20px;\n      line-height: 20px;\n      bottom: 13px;\n      left: calc(50% - 10px);\n      background: #d9c089;\n      color: #ffffff;\n      box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1); }\n\nanswer-evaluation .progress .c-c .number::before {\n      position: absolute;\n      bottom: -5px;\n      left: calc(50% - 5px);\n      content: '';\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      border-top: 6px solid #d9c089; }\n\nanswer-evaluation .progress .c-c .n-p {\n      position: absolute;\n      text-align: center;\n      height: 20px;\n      width: 30px;\n      line-height: 20px;\n      bottom: 13px;\n      left: calc(100% - 15px);\n      background: #7e8fbc;\n      color: #ffffff;\n      box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1); }\n\nanswer-evaluation .progress .c-c .n-p::before {\n      position: absolute;\n      bottom: -5px;\n      left: calc(50% - 6px);\n      content: '';\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      border-top: 6px solid #7e8fbc; }\n\nanswer-evaluation .progress .c-c .p-c {\n      width: 11px;\n      height: 11px;\n      border-radius: 50%;\n      position: absolute;\n      right: -5px;\n      top: -3px;\n      background: #ffffff;\n      padding: 2px;\n      border: 1px solid #ececec; }\n\nanswer-evaluation .progress .c-c .p-c .p-c-i {\n        background: #7e8fbc;\n        border-radius: 50%;\n        width: 5px;\n        height: 5px; }\n\nanswer-evaluation .progress .c-c .time {\n      position: absolute;\n      bottom: 30px;\n      right: -31px; }\n\nanswer-evaluation .progress .c-c .clock {\n      width: 11px;\n      position: absolute;\n      right: 0;\n      top: 0; }\n\nanswer-evaluation .alert-model {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 10;\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\nanswer-evaluation .alert-model.slipUp {\n  opacity: 1;\n  -webkit-animation-name: dialogFaceSlipToUp;\n  animation-name: dialogFaceSlipToUp; }\n\nanswer-evaluation .alert-model.slipBottom {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-animation-name: dialogFaceSlipToBottom;\n  animation-name: dialogFaceSlipToBottom; }\n\nanswer-evaluation .a-content {\n  position: fixed;\n  background: #ffffff;\n  width: 430px;\n  margin: 0 auto;\n  top: 30%;\n  left: calc(50% - 215px);\n  z-index: 11;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 6px;\n  text-align: center;\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%; }\n\nanswer-evaluation .a-content .close {\n    position: absolute;\n    right: 10px;\n    top: 10px; }\n\nanswer-evaluation .a-content .title {\n    width: 100%;\n    font-size: 1.5rem;\n    color: #7e8fbc;\n    padding: 16px; }\n\nanswer-evaluation .a-content .title span {\n      margin-left: 10px; }\n\nanswer-evaluation .a-content .t-u-t {\n    height: 40px;\n    line-height: 40px;\n    padding: 0;\n    color: #7e8fbc; }\n\nanswer-evaluation .a-content .row {\n    padding: 16px;\n    width: 80%;\n    margin: 0 auto;\n    font-size: 1.3rem;\n    color: #333333; }\n\nanswer-evaluation .a-content .row .col span {\n      margin: 0 5px; }\n\nanswer-evaluation .a-content .row .col .no {\n      color: #7e8fbc; }\n\nanswer-evaluation .a-content .row .col .c-b {\n      background: url('t-b.png') no-repeat;\n      display: inline-block;\n      width: 40px;\n      height: 40px;\n      line-height: 40px;\n      color: #fff; }\n\nanswer-evaluation .a-content .row .col .l-t {\n      font-size: 1rem;\n      color: #999999; }\n\nanswer-evaluation .a-content .t-tips {\n    color: #333;\n    padding-top: 16px; }\n\nanswer-evaluation .a-content .tips {\n    width: 100%;\n    padding: 16px;\n    color: #999999; }\n\nanswer-evaluation .a-content button {\n    height: 35px;\n    line-height: 35px;\n    border-radius: 5px; }\n\nanswer-evaluation .a-content .b-c {\n    padding: 16px; }\n\nanswer-evaluation .a-content .l-b {\n    color: #7e8fbc;\n    border: 1px solid #7e8fbc; }\n\nanswer-evaluation .a-content .r-b {\n    background: #7e8fbc;\n    color: #fff; }\n\nanswer-evaluation .a-content.slipUp {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  -webkit-animation-name: contentSlipToUp;\n  animation-name: contentSlipToUp; }\n\nanswer-evaluation .a-content.slipBottom {\n  -webkit-transform: rotateX(90deg);\n  transform: rotateX(90deg);\n  -webkit-animation-name: contentSlipToBottom;\n  animation-name: contentSlipToBottom; }\n\n@-webkit-keyframes dialogFaceSlipToUp {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes dialogFaceSlipToUp {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes dialogFaceSlipToBottom {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes dialogFaceSlipToBottom {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes dialogSlipToUp {\n  0% {\n    top: 100%;\n    opacity: 0.3; }\n  100% {\n    top: 50%;\n    opacity: 1; } }\n\n@keyframes dialogSlipToUp {\n  0% {\n    top: 100%;\n    opacity: 0.3; }\n  100% {\n    top: 50%;\n    opacity: 1; } }\n\n@-webkit-keyframes dialogSlipToBottom {\n  0% {\n    top: 50%;\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n  100% {\n    top: 100%;\n    opacity: 0.3;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0); } }\n\n@keyframes dialogSlipToBottom {\n  0% {\n    top: 50%;\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n  100% {\n    top: 100%;\n    opacity: 0.3;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0); } }\n\n@-webkit-keyframes contentSlipToUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); } }\n\n@keyframes contentSlipToUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); } }\n\n@-webkit-keyframes contentSlipToBottom {\n  0% {\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n  60% {\n    -webkit-transform: rotateX(60deg);\n    transform: rotateX(60deg); }\n  100% {\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); } }\n\n@keyframes contentSlipToBottom {\n  0% {\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n  60% {\n    -webkit-transform: rotateX(60deg);\n    transform: rotateX(60deg); }\n  100% {\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); } }\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.ts ***!
  \*****************************************************************************************/
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
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var answer_evaluation_dialog_component_1 = __webpack_require__(/*! ./answer-evaluation-dialog/answer-evaluation-dialog.component */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.ts");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var answer_evaluation_service_1 = __webpack_require__(/*! ./answer-evaluation.service */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.service.ts");
var auth_service_1 = __webpack_require__(/*! ../../../$services/auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
var AnswerEvaluationComponent = /** @class */ (function () {
    function AnswerEvaluationComponent(_router, dialog, snackBar, activedRoute, service) {
        this._router = _router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.activedRoute = activedRoute;
        this.service = service;
        this.currentIndex = 0; // 已经达到的最后的位置坐标
        this.auto = true;
        this.showNoSelected = false;
        this.time = 0;
        this.progress = 0;
        this.mProgress = '0%';
        this.noAnswer = 0;
        this.showAlert = false;
        this.noAnswerArray = []; // 未答题位置数组
        this.oneConsumeTime = 0; // 单个题耗时
        this.consumeHours = 0; // 总耗时-小时
        this.consumeMinutes = 0; // 总耗时-分钟
        this.consumeSeconds = 0; // 总耗时-秒
        this.tenMinutes = 10;
        this.tenSeconds = 0;
        this.showLoading = true;
        this.showPractice = false;
        this.showStart = false;
        this.hasNoAnswer = false; // 到过最后一题且有未答题
        this.isBack = false;
    }
    Object.defineProperty(AnswerEvaluationComponent.prototype, "UserID", {
        get: function () {
            return auth_service_1.AuthService.UserID;
        },
        enumerable: true,
        configurable: true
    });
    AnswerEvaluationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.assessments = params['ids'];
            _this.curr_num = +params['index'];
            _this.testID = +params['test'];
            // console.log('testID', this.testID);
            // this.contents = params['contents'];
            // 获取当前应该测试的量表id
            _this.assessmentList = _this.assessments.split(',');
            // console.log('assessmentList', this.assessmentList)
            _this.service.getAssessment(parseInt(_this.assessmentList[_this.curr_num], 10)).then(function (resp) {
                // console.log('resp', resp);
                _this.currentAssessment = resp;
                // console.log('currentAssessment', this.currentAssessment);
                resp.assessment_content.forEach(function (element) {
                    element.contents_parent.forEach(function (item) {
                        if (_this.contents) {
                            _this.contents += ',' + item.id;
                        }
                        else {
                            _this.contents = item.id + '';
                        }
                    });
                });
                _this.getPractice();
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    AnswerEvaluationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.mySwiper = new Swiper(_this.swiperAnswerDiv.nativeElement, {
                loop: false,
                allowSlidePrev: true,
                observer: true
            });
            _this.practiceSwiper = new Swiper(_this.swiperPractice.nativeElement, {
                loop: false,
                allowSlidePrev: true,
                observer: true
            });
        }, 1000);
    };
    // 获取练习题
    AnswerEvaluationComponent.prototype.getPractice = function () {
        var _this = this;
        this.practice = [];
        this.service.getPractice(this.contents).then(function (resp) {
            _this.practice = resp;
            console.log(resp);
            _this.practice = _this.dealData(resp);
            // console.log('practice', this.practice);
            if (_this.practice.length) {
                _this.showPractice = true;
            }
            else {
                // this.showStart = true;
                _this.getQuestions();
            }
            _this.showLoading = false;
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取正式试题
    AnswerEvaluationComponent.prototype.getQuestions = function () {
        var _this = this;
        this.showLoading = true;
        this.showPractice = false;
        this.showStart = false;
        this.service.getQuestion(this.contents).then(function (qResp) {
            // console.log('qResp', qResp);
            _this.questionsList = _this.dealData(qResp.results);
            _this.showLoading = false;
            _this.caculateNo();
            // console.log('questionsList', this.questionsList);
        }).catch(function (err) {
            console.log(err);
        });
        var allTime = this.currentAssessment.consum_time;
        // const allTime = 10;
        var times = allTime;
        this.interval = setInterval(function () {
            _this.time += 1;
            _this.oneConsumeTime += 1;
            _this.progress = _this.time * 100 / allTime;
            if (_this.progress < 2) {
                _this.mProgress = '0px';
            }
            else if (_this.progress > 90) {
                _this.mProgress = 'calc(95% - 20px)';
            }
            else {
                _this.mProgress = 'calc(' + _this.progress + '% - 20px)';
            }
            if (_this.time === allTime) {
                clearInterval(_this.interval);
                _this.showAlert = true;
                if (_this.assessmentList.length > (_this.curr_num + 1)) { // 未答完所有量表
                    // 十分钟倒计时
                    _this.executeTenInterval();
                }
            }
            times -= 1;
            _this.minutes = Math.floor(times / 60);
            _this.seconds = times % 60;
        }, 1000);
    };
    // 转化试题数据
    AnswerEvaluationComponent.prototype.dealData = function (data) {
        data.map(function (item) {
            item.selected = '';
            // console.log('item', item);
            item.option = JSON.parse(item.option);
            item.optionsArr = [];
            [item.option['A'], item.option['B'], item.option['C'], item.option['D'], item.option['E']].map(function (opt, index) {
                var optionsKey = ['A', 'B', 'C', 'D', 'E'];
                opt && item.optionsArr.push({ option: optionsKey[index], value: opt });
            });
            item.type_name = '单选题';
            // console.log(item.optionsArr);
            return item;
        });
        // console.log('data: ', data);
        return data;
    };
    // 上一题
    AnswerEvaluationComponent.prototype.slideToPre = function () {
        this.oneConsumeTime = 0;
        if (this.mySwiper.activeIndex === 0) {
            this.snackBar.open('当前是第一题', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            return;
        }
        this.caculateNo();
        this.mySwiper.slidePrev();
    };
    // 下一题
    AnswerEvaluationComponent.prototype.slideToNext = function () {
        this.caculateNo();
        // console.log('noAnswerArray', this.noAnswerArray);
        // 当前题答题时间清空重新计算
        this.oneConsumeTime = 0;
        // 更新当前进度，最大不超过题目数量
        if (this.currentIndex <= this.mySwiper.activeIndex) {
            this.currentIndex += 1;
        }
        if (this.mySwiper.activeIndex + 1 === this.questionsList.length) { // 当前是最后一道题的处理
            this.showAlert = true;
            if (this.noAnswerArray.length) {
                this.hasNoAnswer = true;
            }
            if (this.assessmentList.length > (this.curr_num + 1)) { // 未答完所有量表
                // 十分钟倒计时
                this.executeTenInterval();
            }
            else { // 答完所有量表
                this.getConsumeTimes();
            }
        }
        else { // 当前不是最后一道题
            // 没有未答题
            if (!this.noAnswerArray.length) {
                if (this.isBack) {
                    this.mySwiper.slideNext();
                }
                else {
                    this.showAlert = true;
                    if (this.assessmentList.length > (this.curr_num + 1)) { // 未答完所有量表
                        // 十分钟倒计时
                        this.executeTenInterval();
                    }
                    else { // 答完所有量表
                        this.getConsumeTimes();
                    }
                }
            }
            else {
                // 到过最后一题且有过未答题
                if (this.hasNoAnswer) {
                    if (this.isBack) {
                        this.mySwiper.slideNext();
                    }
                    else {
                        if (this.noAnswerArray.length) {
                            // 下一道未答题
                            this.mySwiper.slideTo(this.noAnswerArray[0]);
                        }
                        else {
                            // 下一题
                            this.mySwiper.slideNext();
                        }
                    }
                }
                else {
                    // 下一题
                    this.mySwiper.slideNext();
                }
            }
        }
    };
    // 答完一个量表之后的十分钟倒计时
    AnswerEvaluationComponent.prototype.executeTenInterval = function () {
        var _this = this;
        if (!this.tenInterval) {
            var times_1 = 10 * 60;
            this.tenInterval = setInterval(function () {
                times_1 -= 1;
                _this.tenMinutes = Math.floor(times_1 / 60);
                _this.tenSeconds = times_1 % 60;
                if (times_1 === 0) {
                    clearInterval(_this.tenInterval);
                }
            }, 1000);
        }
    };
    // 计算未答题数量
    AnswerEvaluationComponent.prototype.caculateNo = function () {
        var _this = this;
        this.noAnswer = 0;
        this.noAnswerArray = [];
        this.questionsList.forEach(function (q, index) {
            if (q.selected === '') {
                _this.noAnswer += 1;
                _this.noAnswerArray.push(index);
            }
        });
        // console.log('noAnswerArray', this.noAnswerArray);
    };
    // 选择答案自动提交答案
    AnswerEvaluationComponent.prototype.selectAnswer = function (event, question, type) {
        var _this = this;
        // console.log('type', type);
        if (type) {
            this.answerQuestion(question.id, this.testID, event.value);
        }
        else {
            if (this.practiceSwiper.activeIndex + 1 === this.practice.length) {
                this.showStart = true;
            }
            else {
                setTimeout(function () {
                    _this.practiceSwiper.slideNext();
                }, 200);
            }
        }
    };
    // 提交答案
    AnswerEvaluationComponent.prototype.answerQuestion = function (question_id, test_id, answer) {
        var _this = this;
        this.service.answerQuestion(this.UserID, question_id, test_id, this.assessmentList[this.curr_num], answer, this.oneConsumeTime).then(function (resp) {
            // console.log('resp', resp);
            if (_this.auto) {
                setTimeout(function () {
                    _this.slideToNext();
                }, 200);
            }
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    // 继续答题
    AnswerEvaluationComponent.prototype.toContinue = function () {
        this.testCurrentNum();
        if (this.assessmentList.length > (this.curr_num + 1)) {
            this._router.navigate(['/user-care/evaluation/start-evaluation', this.id, this.assessments, this.curr_num + 1, this.testID]);
        }
    };
    // 自动下一题
    AnswerEvaluationComponent.prototype.clickAuto = function () {
        this.auto = !this.auto;
    };
    // 返回检查
    AnswerEvaluationComponent.prototype.backToCheck = function () {
        this.mySwiper.slideTo(0);
        this.showAlert = false;
        this.noAnswer = 0;
        if (this.tenInterval) {
            this.tenMinutes = 10;
            this.tenSeconds = 0;
            clearInterval(this.tenInterval);
        }
    };
    // 继续练习
    AnswerEvaluationComponent.prototype.backToPractice = function () {
        this.getPractice();
        this.showPractice = true;
        this.showStart = false;
        this.practiceSwiper.slideTo(0);
    };
    // 跳转未答题
    AnswerEvaluationComponent.prototype.toNoAnswer = function () {
        this.showAlert = false;
        this.mySwiper.slideTo(this.noAnswerArray[0]);
        // console.log('noAnswerArray', this.noAnswerArray);
    };
    // 提交生成报告
    AnswerEvaluationComponent.prototype.submit = function () {
        this.postUserTest();
        this.testCurrentNum();
        this._router.navigate(['/user-care/view-report/check-report', this.assessments, this.id, this.testID]);
    };
    // 答题完成更新测试表数据
    AnswerEvaluationComponent.prototype.postUserTest = function () {
        var _this = this;
        this.assessmentID = this.assessmentList[this.curr_num];
        // console.log('id', this.assessmentID);
        this.service.postUserTest(this.testID, new Date()).then(function (resp) {
            // console.log('resp', resp);
            _this.testID = resp.id;
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    // 更新当前量表进度
    AnswerEvaluationComponent.prototype.testCurrentNum = function () {
        this.service.testCurrentNum(this.testID, this.curr_num).then(function (resp) {
            // console.log('resp', resp);
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    // 获取总耗时
    AnswerEvaluationComponent.prototype.getConsumeTimes = function () {
        var _this = this;
        this.service.consumeTime(this.testID).then(function (resp) {
            // console.log('resp', resp);
            var consumeTimes = resp.consum_time;
            _this.consumeHours = Math.floor(consumeTimes / (60 * 60));
            _this.consumeMinutes = Math.floor(consumeTimes / 60) % 60;
            _this.consumeSeconds = consumeTimes % (60);
        }).catch(function (err) {
            console.log('err', err);
        });
    };
    AnswerEvaluationComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.tenInterval) {
            clearInterval(this.tenInterval);
        }
    };
    AnswerEvaluationComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(answer_evaluation_dialog_component_1.AnswerEvaluationDialogComponent, {
            width: '250px',
            data: { 'title': '测评题目' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
        });
    };
    __decorate([
        core_1.ViewChild('SwiperAnswer'),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerEvaluationComponent.prototype, "swiperAnswerDiv", void 0);
    __decorate([
        core_1.ViewChild('SwiperPractice'),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerEvaluationComponent.prototype, "swiperPractice", void 0);
    AnswerEvaluationComponent = __decorate([
        core_1.Component({
            selector: 'answer-evaluation',
            template: __webpack_require__(/*! ./answer-evaluation.component.html */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./answer-evaluation.component.scss */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router,
            material_1.MatDialog,
            material_2.MatSnackBar,
            router_1.ActivatedRoute,
            answer_evaluation_service_1.AnswerEvaluationService])
    ], AnswerEvaluationComponent);
    return AnswerEvaluationComponent;
}());
exports.AnswerEvaluationComponent = AnswerEvaluationComponent;


/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.module.ts ***!
  \**************************************************************************************/
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
var answer_evaluation_component_1 = __webpack_require__(/*! ./answer-evaluation.component */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.ts");
var loading_component_1 = __webpack_require__(/*! ../../../loading/loading.component */ "./src/pages/loading/loading.component.ts");
// 声明子组件
var answer_evaluation_dialog_component_1 = __webpack_require__(/*! ./answer-evaluation-dialog/answer-evaluation-dialog.component */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation-dialog/answer-evaluation-dialog.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var AnswerEvaluationModule = /** @class */ (function () {
    function AnswerEvaluationModule() {
    }
    AnswerEvaluationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatDialogModule,
                material_1.MatRadioModule,
                forms_1.FormsModule,
                material_1.MatButtonModule,
                material_1.MatProgressBarModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: answer_evaluation_component_1.AnswerEvaluationComponent,
                    }
                ])
            ],
            declarations: [answer_evaluation_component_1.AnswerEvaluationComponent, answer_evaluation_dialog_component_1.AnswerEvaluationDialogComponent, loading_component_1.LoadingComponent],
            entryComponents: [answer_evaluation_dialog_component_1.AnswerEvaluationDialogComponent],
            providers: [answer_evaluation_dialog_component_1.AnswerEvaluationDialogComponent]
        })
    ], AnswerEvaluationModule);
    return AnswerEvaluationModule;
}());
exports.AnswerEvaluationModule = AnswerEvaluationModule;


/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.service.ts ***!
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
var http_1 = __webpack_require__(/*! ../../../../services/http/http */ "./src/services/http/http.ts");
var start_evaluation_service_1 = __webpack_require__(/*! ../start-evaluation/start-evaluation.service */ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.service.ts");
var AnswerEvaluationService = /** @class */ (function () {
    function AnswerEvaluationService(http, statrService) {
        this.http = http;
        this.statrService = statrService;
    }
    // 获取练习题
    AnswerEvaluationService.prototype.getPractice = function (contents) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('practice', {
                content__in: contents,
                limit: 1000,
                offset: 0
            }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 生成测试记录
    AnswerEvaluationService.prototype.postUserTest = function (id, end_date) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                id: id,
                end_date: _this.statrService.formatDate(end_date)
            };
            _this.http.call('UserTest', data).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取量表
    AnswerEvaluationService.prototype.getAssessment = function (id) {
        return this.http.call('assessmentDetail', {
            id: id,
        }).then(function (resp) {
            return resp;
        });
    };
    // 获取试题
    AnswerEvaluationService.prototype.getQuestion = function (contents) {
        return this.http.call('question', {
            content__in: contents,
            limit: 1000,
            offset: 0
        }).then(function (resp) {
            return resp;
        });
    };
    // 答题
    AnswerEvaluationService.prototype.answerQuestion = function (user_id, question_id, test_id, assessment_id, answer, consum_time) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('AnswerQuestion', {
                user_id: user_id,
                question_id: question_id,
                test_id: test_id,
                assessment_id: assessment_id,
                answer: answer,
                consum_time: consum_time
            }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 更新产品测试量表位置
    AnswerEvaluationService.prototype.testCurrentNum = function (id, curr_num) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('testCurrentNum', {
                id: id,
                curr_num: curr_num
            }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 总共耗时
    AnswerEvaluationService.prototype.consumeTime = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('consumeTime', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AnswerEvaluationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http, start_evaluation_service_1.StartEvaluationService])
    ], AnswerEvaluationService);
    return AnswerEvaluationService;
}());
exports.AnswerEvaluationService = AnswerEvaluationService;


/***/ })

}]);
//# sourceMappingURL=user-care-evaluation-answer-evaluation-answer-evaluation-module.js.map