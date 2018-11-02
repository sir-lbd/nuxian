(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-care-evaluation-answer-evaluation-answer-evaluation-module"],{

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

module.exports = "<div class=\"page content\">\n  <!--<p>-->\n  <!--具体的答题页面 做完自动提交（模态框提示休息）&#45;&#45;》-->\n  <!--<button (click)=\"submit()\">测评报告</button>-->\n  <!--</p>-->\n  <div class=\"swiper-container\" #SwiperAnswer>\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" *ngFor=\"let question of questionsList;let i = index;\">\n        <div class=\"content-answer\">\n          <div class=\"subject-desc\">\n            <span class=\"subject-text\">{{i + 1}}/{{questionsList?.length}}. </span>\n            <!--<div class=\"subject-type\">({{question?.type_name}})</div>-->\n            <span class=\"subject-name\" [innerHTML]=\"question?.title\"></span>\n          </div>\n          <div class=\"subject-img\">\n            <em><img src=\"{{question?.title_img}}\"/></em>\n          </div>\n          <mat-radio-group [(ngModel)]=\"question.selected\" (change)=\"selectAnswer($event)\">\n            <mat-radio-button *ngFor=\"let option of question?.optionsArr; let i = index;\" [value]=\"i + 1\">\n              {{option?.option}}.{{option?.value?.title}}\n            </mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"btn-box row\">\n    <div class=\"\">\n      <button mat-stroked-button class=\"prev-nextBtn\" (click)=\"slideToPre()\">上一题</button>\n    </div>\n    <div class=\"\">\n      <button mat-stroked-button class=\"submitBtn\" [class.auto]=\"!auto\" (click)=\"clickAuto()\">\n        <img src=\"assets/img/automatic-2.png\" *ngIf=\"auto\">\n        <img src=\"assets/img/automatic-1.png\" *ngIf=\"!auto\">\n      </button><!-- (click)=\"submit()\"-->\n    </div>\n    <div class=\"\">\n      <button mat-stroked-button class=\"prev-nextBtn\" (click)=\"slideToNext()\">下一题</button>\n    </div>\n  </div>\n  <!--<button mat-raised-button (click)=\"openDialog()\">对话框</button>-->\n  <div class='progress' (mouseover)=\"showNoSelected = true;\" (mouseleave)=\"showNoSelected = false;\">\n    <div class=\"p-d row\" *ngIf=\"showNoSelected\">\n      <div class=\"col c-c\" *ngFor=\"let q of questionsList; let i = index;\"\n           [class.no-selected]=\"q?.selected < 0 && currentIndex >= i\" [class.selected]=\"q?.selected > 0\">\n        <div class=\"number\" *ngIf=\"showNoSelected && currentIndex > i && q?.selected === -1\">{{i + 1}}</div>\n        <div class=\"n-p\" *ngIf=\"showNoSelected && currentIndex == i\">{{i + 1}}/{{questionsList?.length}}</div>\n        <div class=\"p-c\" *ngIf=\"currentIndex == i\">\n          <div class=\"p-c-i\" *ngIf=\"showNoSelected\"></div>\n          <img class=\"clock\" *ngIf=\"!showNoSelected\" src=\"assets/img/clock.png\">\n        </div>\n      </div>\n    </div>\n    <div class=\"p-d\" *ngIf=\"!showNoSelected\">\n      <div class=\"time\" *ngIf=\"minutes && seconds\" [style.left]=\"mProgress\">{{minutes}}分{{seconds}}秒</div>\n      <mat-progress-bar [value]=\"progress\"></mat-progress-bar>\n    </div>\n  </div>\n</div>\n\n<div class=\"alert-model\" *ngIf=\"showAlert\" [class.slipUp]=\"showAlert\" [class.slipBottom]=\"!showAlert\"><!-- -->\n  <div class=\"a-content\" *ngIf=\"noAnswer\" [class.slipUp]=\"noAnswer\" [class.slipBottom]=\"!noAnswer\">\n    <div class=\"title\">第一章<span>言语理解</span></div>\n    <div class=\"row\">\n      <div class=\"col\">总题数<span>{{questionsList?.length}}</span>道</div>\n      <div class=\"col\">未答题<span class=\"no\">{{noAnswer}}</span>道</div>\n    </div>\n    <div class=\"tips\">请跳转到未答题继续作答</div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <button mat-button class=\"l-b\" (click)=\"backToCheck()\">返回检查</button>\n      </div>\n      <div class=\"col\">\n        <button mat-button class=\"r-b\" (click)=\"toNoAnswer()\">继续作答</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"a-content\" *ngIf=\"!noAnswer\" [class.slipUp]=\"!noAnswer\" [class.slipBottom]=\"noAnswer\"><!-- -->\n    <div class=\"title\">恭喜您完成全部测评</div>\n    <div class=\"row\">\n      <div class=\"col t-u-t\">用时：</div>\n      <div class=\"col\"><span class=\"c-b\">{{1}}</span><span class=\"l-t\">时</span></div>\n      <div class=\"col\"><span class=\"c-b\">{{10}}</span><span class=\"l-t\">分</span></div>\n      <div class=\"col\"><span class=\"c-b\">{{55}}</span><span class=\"l-t\">秒</span></div>\n    </div>\n    <div class=\"t-tips\">请您提交答案，我们会生成机打报告</div>\n    <div class=\"tips\">如果您想了解更详细的报告请咨询我们的测评师</div>\n    <div class=\"row b-c\">\n      <div class=\"col\">\n        <button mat-button class=\"l-b\" (click)=\"backToCheck()\">返回检查</button>\n      </div>\n      <div class=\"col\">\n        <button mat-button class=\"r-b\" (click)=\"submit()\">提交生成报告</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "answer-evaluation ul, answer-evaluation li, answer-evaluation ol {\n  list-style: none;\n  padding: 0; }\n\nanswer-evaluation mat-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\nanswer-evaluation .content {\n  width: 60%;\n  margin: 0 auto !important;\n  margin-top: 113px !important;\n  height: 100%;\n  position: relative;\n  padding: 16px; }\n\nanswer-evaluation .content .btn-box {\n    padding: 5px 15px; }\n\nanswer-evaluation .content .btn-box .collectBtn {\n      width: 80px;\n      color: #C3C3C3;\n      border: 1px solid #C3C3C3; }\n\nanswer-evaluation .content .btn-box .submitBtn {\n      width: 35px;\n      height: 35px;\n      border-radius: 5px;\n      border: 1px solid #C3C3C3;\n      background: #7e8fbc;\n      margin: 0 5px; }\n\nanswer-evaluation .content .btn-box .auto {\n      background: #ffffff; }\n\nanswer-evaluation .content .btn-box .prev-nextBtn {\n      border: 1px solid #C3C3C3;\n      font-size: 14px;\n      width: 85px;\n      height: 35px;\n      border-radius: 5px;\n      background: #fff;\n      color: #000; }\n\nanswer-evaluation .content .swiper-container {\n    position: relative;\n    overflow: hidden;\n    height: auto; }\n\nanswer-evaluation .swiper-slide {\n  width: 100% !important; }\n\nanswer-evaluation .content-answer {\n  padding: 15px;\n  width: 100%; }\n\nanswer-evaluation .content-answer .subject-desc .subject-text {\n    font-size: 16px;\n    color: #555555;\n    font-weight: bold; }\n\nanswer-evaluation .content-answer .subject-desc .subject-type {\n    color: #555555;\n    font-weight: bold;\n    font-size: 16px;\n    display: inline-block; }\n\nanswer-evaluation .content-answer .subject-desc .subject-name {\n    color: #555555;\n    padding-left: 15px;\n    white-space: pre-wrap;\n    font-weight: bold;\n    letter-spacing: 1px; }\n\nanswer-evaluation .content-answer .subject-img {\n    width: 100%;\n    text-align: center; }\n\nanswer-evaluation .content-answer .subject-img em {\n      display: inline-block;\n      text-align: center; }\n\nanswer-evaluation .content-answer .subject-img img {\n      width: 100%; }\n\nanswer-evaluation .content-answer .subject-options {\n    padding: 15px; }\n\nanswer-evaluation .content-answer .subject-options li {\n      padding: 10px; }\n\nanswer-evaluation .content-answer .subject-options em {\n      display: inline-block;\n      width: 17px;\n      height: 17px;\n      background: #ffffff;\n      border-top: 1px solid #F1F1F1;\n      border-radius: 50px;\n      box-shadow: 1px 1px 10px #F1F1F1; }\n\nanswer-evaluation .content-answer .subject-options em .disnone {\n        opacity: 0; }\n\nanswer-evaluation .content-answer .subject-options em.right-checked {\n      color: #01A2FD;\n      background-image: url(\"/assets/images/sailor-master/tessts/test-answer/right.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .content-answer .subject-options em.mistake-checked {\n      color: #FE4B3E;\n      background-image: url(\"/assets/images/sailor-master/tessts/test-answer/mistake.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .content-answer .subject-options span.option-value {\n      padding-left: 15px;\n      color: #868686; }\n\nanswer-evaluation .content-answer .subject-options span.right {\n      color: #01A2FD; }\n\nanswer-evaluation .content-answer .subject-options span.mistake {\n      color: #FE4B3E; }\n\nanswer-evaluation .content-answer .analysis {\n    padding: 15px;\n    display: none; }\n\nanswer-evaluation .content-answer .analysis .right-key {\n      font-size: 20px;\n      font-weight: 500;\n      padding: 5px 0; }\n\nanswer-evaluation .content-answer .analysis .analysis-detail {\n      color: #ADADAD;\n      font-size: 16px; }\n\nanswer-evaluation .content-answer .analysis .analysis-detail span {\n        color: #22ACFD; }\n\nanswer-evaluation .swiper-container-horizontal > .swiper-pagination-progressbar {\n  height: 2px;\n  left: 0;\n  top: 92%; }\n\nanswer-evaluation .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: #38B4FA; }\n\nanswer-evaluation .swiper-button-next, answer-evaluation .swiper-button-prev {\n  top: 94%;\n  width: 100px;\n  opacity: 0; }\n\nanswer-evaluation .swiper-button-next {\n  right: -1px;\n  position: absolute;\n  left: 9%; }\n\nanswer-evaluation .btn2-box {\n  padding: 5px 0px;\n  border-top: 1px solid #F6F6F6;\n  position: fixed;\n  left: 0;\n  bottom: 0vh;\n  width: 100%; }\n\nanswer-evaluation .btn2-box .btn-col {\n    position: relative; }\n\nanswer-evaluation .btn2-box .btn-col button {\n      width: 100%; }\n\nanswer-evaluation .btn2-box .btn-col .collectBtn {\n      color: #BABABA; }\n\nanswer-evaluation .btn2-box .btn-col .submitBtn {\n      color: #BABABA; }\n\nanswer-evaluation .btn2-box .btn-col .prev-nextBtn {\n      color: #BABABA; }\n\nanswer-evaluation .btn2-box .btn-col em {\n      display: inline-block;\n      width: 25px;\n      height: 25px;\n      position: absolute;\n      top: 1.1vw;\n      left: 3.8vw; }\n\nanswer-evaluation .btn2-box .btn-col em.btn-icon01 {\n      background-image: url(\"/assets/images/sailor-master/home/english-practice-page/t-collect.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .btn2-box .btn-col em.btn-icon02 {\n      background-image: url(\"/assets/images/sailor-master/home/english-practice-page/t-correct.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .btn2-box .btn-col em.btn-icon03 {\n      background-image: url(\"/assets/images/sailor-master/home/english-practice-page/t-setting.png\");\n      background-size: 100% 100%; }\n\nanswer-evaluation .progress {\n  height: 5px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  overflow: visible;\n  border-radius: 5px; }\n\nanswer-evaluation .progress .p-d {\n    width: 100%;\n    height: 5px; }\n\nanswer-evaluation .progress .p-d .mat-progress-bar-buffer {\n      background: #dee2ed; }\n\nanswer-evaluation .progress .p-d .mat-progress-bar-fill::after {\n      background: #7e8fbc; }\n\nanswer-evaluation .progress .p-d .time {\n      position: absolute;\n      bottom: 13px;\n      height: 30px;\n      line-height: 30px; }\n\nanswer-evaluation .progress .selected {\n    background: #7e8fbc; }\n\nanswer-evaluation .progress .no-selected {\n    background: #d9c089; }\n\nanswer-evaluation .progress .current {\n    background: #7e8fbc; }\n\nanswer-evaluation .progress .c-c {\n    position: relative; }\n\nanswer-evaluation .progress .c-c .number {\n      position: absolute;\n      text-align: center;\n      height: 20px;\n      width: 20px;\n      line-height: 20px;\n      bottom: 13px;\n      left: calc(50% - 10px);\n      background: #d9c089;\n      color: #ffffff;\n      box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1); }\n\nanswer-evaluation .progress .c-c .number::before {\n      position: absolute;\n      bottom: -5px;\n      left: calc(50% - 5px);\n      content: '';\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      border-top: 6px solid #d9c089; }\n\nanswer-evaluation .progress .c-c .n-p {\n      position: absolute;\n      text-align: center;\n      height: 20px;\n      width: 30px;\n      line-height: 20px;\n      bottom: 13px;\n      left: calc(100% - 15px);\n      background: #7e8fbc;\n      color: #ffffff;\n      box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1); }\n\nanswer-evaluation .progress .c-c .n-p::before {\n      position: absolute;\n      bottom: -5px;\n      left: calc(50% - 6px);\n      content: '';\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent;\n      border-top: 6px solid #7e8fbc; }\n\nanswer-evaluation .progress .c-c .p-c {\n      width: 11px;\n      height: 11px;\n      border-radius: 50%;\n      position: absolute;\n      right: -5px;\n      top: -3px;\n      background: #ffffff;\n      padding: 2px;\n      border: 1px solid #ececec; }\n\nanswer-evaluation .progress .c-c .p-c .p-c-i {\n        background: #7e8fbc;\n        border-radius: 50%;\n        width: 5px;\n        height: 5px; }\n\nanswer-evaluation .progress .c-c .time {\n      position: absolute;\n      bottom: 30px;\n      right: -31px; }\n\nanswer-evaluation .progress .c-c .clock {\n      width: 11px;\n      position: absolute;\n      right: 0;\n      top: 0; }\n\nanswer-evaluation .alert-model {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 10;\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\nanswer-evaluation .alert-model.slipUp {\n  opacity: 1;\n  -webkit-animation-name: dialogFaceSlipToUp;\n  animation-name: dialogFaceSlipToUp; }\n\nanswer-evaluation .alert-model.slipBottom {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-animation-name: dialogFaceSlipToBottom;\n  animation-name: dialogFaceSlipToBottom; }\n\nanswer-evaluation .a-content {\n  position: fixed;\n  background: #ffffff;\n  width: 430px;\n  margin: 0 auto;\n  top: 30%;\n  left: calc(50% - 215px);\n  z-index: 11;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 6px;\n  text-align: center;\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%; }\n\nanswer-evaluation .a-content .title {\n    width: 100%;\n    font-size: 1.5rem;\n    color: #7e8fbc;\n    padding: 16px; }\n\nanswer-evaluation .a-content .title span {\n      margin-left: 10px; }\n\nanswer-evaluation .a-content .t-u-t {\n    height: 40px;\n    line-height: 40px;\n    padding: 0;\n    color: #7e8fbc; }\n\nanswer-evaluation .a-content .row {\n    padding: 16px;\n    width: 80%;\n    margin: 0 auto;\n    font-size: 1.3rem;\n    color: #333333; }\n\nanswer-evaluation .a-content .row .col span {\n      margin: 0 5px; }\n\nanswer-evaluation .a-content .row .col .no {\n      color: #7e8fbc; }\n\nanswer-evaluation .a-content .row .col .c-b {\n      background: url('t-b.png') no-repeat;\n      display: inline-block;\n      width: 40px;\n      height: 40px;\n      line-height: 40px;\n      color: #fff; }\n\nanswer-evaluation .a-content .row .col .l-t {\n      font-size: 1rem;\n      color: #999999; }\n\nanswer-evaluation .a-content .t-tips {\n    color: #333;\n    padding-top: 16px; }\n\nanswer-evaluation .a-content .tips {\n    width: 100%;\n    padding: 16px;\n    color: #999999; }\n\nanswer-evaluation .a-content button {\n    height: 35px;\n    line-height: 35px;\n    border-radius: 5px; }\n\nanswer-evaluation .a-content .b-c {\n    padding: 16px; }\n\nanswer-evaluation .a-content .l-b {\n    color: #7e8fbc;\n    border: 1px solid #7e8fbc; }\n\nanswer-evaluation .a-content .r-b {\n    background: #7e8fbc;\n    color: #fff; }\n\nanswer-evaluation .a-content.slipUp {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  -webkit-animation-name: contentSlipToUp;\n  animation-name: contentSlipToUp; }\n\nanswer-evaluation .a-content.slipBottom {\n  -webkit-transform: rotateX(90deg);\n  transform: rotateX(90deg);\n  -webkit-animation-name: contentSlipToBottom;\n  animation-name: contentSlipToBottom; }\n\n@-webkit-keyframes dialogFaceSlipToUp {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes dialogFaceSlipToUp {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes dialogFaceSlipToBottom {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes dialogFaceSlipToBottom {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes dialogSlipToUp {\n  0% {\n    top: 100%;\n    opacity: 0.3; }\n  100% {\n    top: 50%;\n    opacity: 1; } }\n\n@keyframes dialogSlipToUp {\n  0% {\n    top: 100%;\n    opacity: 0.3; }\n  100% {\n    top: 50%;\n    opacity: 1; } }\n\n@-webkit-keyframes dialogSlipToBottom {\n  0% {\n    top: 50%;\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n  100% {\n    top: 100%;\n    opacity: 0.3;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0); } }\n\n@keyframes dialogSlipToBottom {\n  0% {\n    top: 50%;\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n  100% {\n    top: 100%;\n    opacity: 0.3;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0); } }\n\n@-webkit-keyframes contentSlipToUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); } }\n\n@keyframes contentSlipToUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); } }\n\n@-webkit-keyframes contentSlipToBottom {\n  0% {\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n  60% {\n    -webkit-transform: rotateX(60deg);\n    transform: rotateX(60deg); }\n  100% {\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); } }\n\n@keyframes contentSlipToBottom {\n  0% {\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n  60% {\n    -webkit-transform: rotateX(60deg);\n    transform: rotateX(60deg); }\n  100% {\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); } }\n"

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
// import {EvaluationService} from "../../../$services/evaluation/evaluation.service";
var answer_evaluation_service_1 = __webpack_require__(/*! ./answer-evaluation.service */ "./src/pages/user-care/evaluation/answer-evaluation/answer-evaluation.service.ts");
var AnswerEvaluationComponent = /** @class */ (function () {
    function AnswerEvaluationComponent(_router, dialog, snackBar, activedRoute, service) {
        this._router = _router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.activedRoute = activedRoute;
        this.service = service;
        this.currentContent = 0;
        this.currentIndex = 0;
        this.auto = false;
        this.showNoSelected = false;
        this.time = 0;
        this.progress = 0;
        this.mProgress = '0%';
        this.noAnswer = 0;
        this.showAlert = false;
        this.noAnswerArray = [];
    }
    AnswerEvaluationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activedRoute.params.subscribe(function (params) {
            _this.assessments = params['ids'];
            _this.curr_num = params['index'];
            // this.contents = params['contents'];
            // 获取当前应该测试的量表id
            var assessmentList = _this.assessments.split(',');
            _this.service.getAssessment(parseInt(assessmentList[_this.curr_num], 10)).then(function (resp) {
                // console.log('resp', resp);
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
                _this.service.getQuestion(_this.contents).then(function (qResp) {
                    // console.log('qResp', qResp);
                    _this.questionsList = _this.dealData(qResp.results);
                    // console.log('questionsList', this.questionsList);
                }).catch(function (err) {
                    console.log(err);
                });
                var allTime = resp.consum_time;
                var times = allTime;
                _this.interval = setInterval(function () {
                    _this.time += 1;
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
                    }
                    times -= 1;
                    _this.minutes = Math.floor(times / 60);
                    _this.seconds = times % 60;
                }, 1000);
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
            });
        }, 1000);
    };
    AnswerEvaluationComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };
    // 转化试题数据
    AnswerEvaluationComponent.prototype.dealData = function (data) {
        data.map(function (item) {
            item.selected = -1;
            item.option = JSON.parse(item.option);
            item.optionsArr = [];
            [item.option['A'], item.option['B'], item.option['C'], item.option['D'], item.option['E']].map(function (opt, index) {
                var optionsKey = ['A', 'B', 'C', 'D', 'E'];
                // opt.selected = -1;
                opt && item.optionsArr.push({ option: optionsKey[index], value: opt });
            });
            item.type_name = '单选题';
            // console.log(item.optionsArr);
            return item;
        });
        // console.log('data: ', data);
        return data;
    };
    AnswerEvaluationComponent.prototype.slideToPre = function () {
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
    AnswerEvaluationComponent.prototype.slideToNext = function () {
        // console.log('currentIndex', this.currentIndex);
        this.caculateNo();
        if (this.mySwiper.activeIndex + 1 === this.questionsList.length) {
            this.showAlert = true;
            // this.snackBar.open('当前是最后一题', '', {
            //   duration: 2000,
            //   verticalPosition: 'top'
            // });
        }
        if (this.currentIndex <= this.mySwiper.activeIndex) {
            this.currentIndex += 1;
        }
        this.mySwiper.slideNext();
    };
    AnswerEvaluationComponent.prototype.caculateNo = function () {
        var _this = this;
        this.noAnswer = 0;
        this.noAnswerArray = [];
        this.questionsList.forEach(function (q, index) {
            if (q.selected === -1) {
                _this.noAnswer += 1;
                _this.noAnswerArray.push(index);
            }
        });
        // console.log('noAnswerArray', this.noAnswerArray);
    };
    AnswerEvaluationComponent.prototype.selectAnswer = function (event) {
        var _this = this;
        // console.log(event.value);
        // console.log('questionsList', this.questionsList);
        if (this.auto) {
            setTimeout(function () {
                _this.slideToNext();
            }, 500);
        }
    };
    AnswerEvaluationComponent.prototype.clickAuto = function () {
        this.auto = !this.auto;
    };
    AnswerEvaluationComponent.prototype.backToCheck = function () {
        this.mySwiper.slideTo(0);
        this.showAlert = false;
        this.noAnswer = 0;
    };
    AnswerEvaluationComponent.prototype.toNoAnswer = function () {
        this.showAlert = false;
        this.mySwiper.slideTo(this.noAnswerArray[0]);
    };
    AnswerEvaluationComponent.prototype.toQuestion = function (index) {
        this.mySwiper.slideTo(index);
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
    AnswerEvaluationComponent.prototype.submit = function () {
        this._router.navigate(['/user-care/view-report/check-report']);
    };
    __decorate([
        core_1.ViewChild('SwiperAnswer'),
        __metadata("design:type", core_1.ElementRef)
    ], AnswerEvaluationComponent.prototype, "swiperAnswerDiv", void 0);
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
            declarations: [answer_evaluation_component_1.AnswerEvaluationComponent, answer_evaluation_dialog_component_1.AnswerEvaluationDialogComponent],
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
var AnswerEvaluationService = /** @class */ (function () {
    function AnswerEvaluationService(http) {
        this.http = http;
    }
    AnswerEvaluationService.prototype.getAssessment = function (id) {
        return this.http.call('assessmentDetail', {
            id: id,
        }).then(function (resp) {
            return resp;
        });
    };
    AnswerEvaluationService.prototype.getQuestion = function (contents) {
        return this.http.call('question', {
            content__in: contents,
            limit: 1000,
            offset: 0
        }).then(function (resp) {
            return resp;
        });
    };
    AnswerEvaluationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AnswerEvaluationService);
    return AnswerEvaluationService;
}());
exports.AnswerEvaluationService = AnswerEvaluationService;


/***/ })

}]);
//# sourceMappingURL=user-care-evaluation-answer-evaluation-answer-evaluation-module.js.map