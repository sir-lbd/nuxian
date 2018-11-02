(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-care-view-report-check-report-check-report-module"],{

/***/ "./src/pages/user-care/view-report/check-report/check-report.component.html":
/*!**********************************************************************************!*\
  !*** ./src/pages/user-care/view-report/check-report/check-report.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page content\">\n  <div class=\"row c-wrapper\">\n    <div class=\"col col-auto\">\n      <img class=\"success-img\" src=\"assets/img/success.png\">\n    </div>\n    <div class=\"col info-col\">\n      <div class=\"title\">恭喜完成测评</div>\n      <!--<div class=\"info\">您的测评-数据有4项结果为合格-有2项未达标，总体表现未合格，详细结果请查看更多报告。</div>-->\n    </div>\n  </div>\n  <div class=\"c-wrapper\">\n    <div class=\"t-t\">报告选择<span>温馨提示</span></div>\n    <div class=\"row i-c base\">\n      <div class=\"col col-auto\">\n        <img class=\"l-img\" src=\"assets/img/report.png\">\n      </div>\n      <div class=\"col l-c\">\n        <div class=\"name\">基础报告</div>\n        <div class=\"info\">{{machine?.description}}</div>\n      </div>\n      <div class=\"col col-auto money\">\n        <!--<button mat-button>查看详情</button>-->\n      </div>\n      <div class=\"col col-auto money\" [class.s-r]=\"report > 0 \">\n        <!--{{machine?.price}}-->\n      </div>\n      <div class=\"col col-auto r-b\">\n        <!--<mat-radio-group [(ngModel)]=\"report\" (change)=\"selectReport($event, machine)\">-->\n        <!--<mat-radio-button [checked]=\"report === 0\" [value]=\"0\"></mat-radio-button>-->\n        <!--</mat-radio-group>-->\n        <button mat-button (click)=\"checkReport()\">查看报告</button>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"c-wrapper\">\n    <div class=\"row i-c\">\n      <div class=\"col col-auto\">\n        <img class=\"l-img\" src=\"assets/img/header.jpg\">\n      </div>\n      <div class=\"col l-c\">\n        <div class=\"name\">咨询报告</div>\n        <div class=\"info\">更专业精准的测评(<span>基础报告+咨询师报告</span>)</div>\n      </div>\n      <div class=\"col col-auto money\">\n        <!--<button mat-button>查看详情</button>-->\n      </div>\n      <div class=\"col col-auto money\">\n        <!--19.9元起-->\n      </div>\n      <div class=\"col col-auto d-b\">\n        <!--<button mat-button (click)=\"openList = !openList\"><img [class.down-img]=\"openList\" src=\"assets/img/down.png\"></button>-->\n      </div>\n    </div>\n    <div class=\"con\">\n      <div class=\"row i-c\" *ngFor=\"let item of appraiser; let i = index\">\n        <div class=\"col col-auto\">\n          <img class=\"l-img\" [src]=\"item?.image_url\">\n        </div>\n        <div class=\"col l-c\">\n          <div class=\"name\">{{item?.title}}</div>\n          <div class=\"info\">{{item?.description}}(<span>基础报告+咨询师报告</span>)</div>\n        </div>\n        <div class=\"col col-auto money\">\n          <button mat-button (click)=\"goSelectAssessor()\">查看详情</button>\n        </div>\n        <div class=\"col col-auto money\">\n          {{item?.price}}\n        </div>\n        <div class=\"col col-auto r-b\">\n          <mat-radio-group [(ngModel)]=\"report\" (change)=\"selectReport($event, item)\">\n            <mat-radio-button [value]=\"i + 1\" [disabled]=\"true\"></mat-radio-button>\n          </mat-radio-group>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"report-info\">\n    <div class=\"t-t\">全部权益 <span>不同测评报告所拥有的权益</span></div>\n    <div class=\"row s-container\">\n      <div class=\"col col-auto img-c\">\n        <img src=\"assets/img/pre.png\" (click)=\"pre()\">\n      </div>\n      <div class=\"swiper-container col\" #Equity>\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide\" *ngFor=\"let item of banner; let i = index;\">\n            <div class=\"row\">\n              <div class=\"col\" *ngFor=\"let i of item; let j = index\">\n                <div class=\"row\">\n                  <div class=\"col item\" *ngFor=\"let img of i?.title\">\n                    <img *ngIf=\"i?.num <= select\" [src]=\"img?.img[0]\">\n                    <img *ngIf=\"i?.num > select\" [src]=\"img?.img[1]\">\n                    <div class=\"label\" [class.s-c]=\"i?.num <= select\">{{img?.span}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col col-auto img-c\">\n        <img src=\"assets/img/next.png\"(click)=\"next()\">\n      </div>\n    </div>\n    <div class=\"row b-c\">\n      <div class=\"col col-auto\">\n        <button mat-button class=\"s-b\" (click)=\"pre(); select = 0\">基础报告</button>\n      </div>\n      <div class=\"col\">\n        <div class=\"line\" [class.s-l]=\"select >= 1\"></div>\n      </div>\n      <div class=\"col col-auto\">\n        <button mat-button [class.s-b]=\"select >= 1\" (click)=\"pre(); select = 1\">咨询师</button>\n      </div>\n      <div class=\"col\">\n        <div class=\"line\" [class.s-l]=\"select >= 2\"></div>\n      </div>\n      <div class=\"col col-auto\">\n        <button mat-button [class.s-b]=\"select >= 2\" (click)=\"next(); select = 2\">高级咨询师</button>\n      </div>\n      <div class=\"col\">\n        <div class=\"line\" [class.s-l]=\"select >= 3\"></div>\n      </div>\n      <div class=\"col col-auto\">\n        <button mat-button [class.s-b]=\"select >= 3\" (click)=\"next(); select = 3\">专家</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row b-c\">\n    <div class=\"col l-b\">\n      <button mat-button (click)=\"backToHome()\">返回首页</button>\n    </div>\n    <div class=\"col r-b\">\n      <button mat-button (click)=\"createOrder()\">确定购买</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/view-report/check-report/check-report.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/user-care/view-report/check-report/check-report.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-check-report .content {\n  width: 60%;\n  margin: 0 auto !important;\n  margin-top: 113px !important;\n  height: 100%;\n  position: relative;\n  padding: 16px; }\n  app-check-report .content .c-wrapper {\n    padding: 16px;\n    border-bottom: 1px solid #eeeeee;\n    position: relative; }\n  app-check-report .content .c-wrapper .success-img {\n      width: 60px; }\n  app-check-report .content .c-wrapper .info-col {\n      padding-left: 16px; }\n  app-check-report .content .c-wrapper .info-col .title {\n        font-size: 1.2rem;\n        font-weight: 500;\n        color: #333333;\n        padding-bottom: 10px; }\n  app-check-report .content .c-wrapper .info-col .info {\n        font-size: 1rem;\n        color: #333333; }\n  app-check-report .content .c-wrapper .t-t {\n      padding-bottom: 16px;\n      color: #333333;\n      font-size: 1.2rem; }\n  app-check-report .content .c-wrapper .t-t span {\n        margin-left: 10px;\n        color: #999999;\n        font-size: 1rem; }\n  app-check-report .content .c-wrapper .base {\n      padding-right: 10px; }\n  app-check-report .content .c-wrapper .con {\n      padding: 10px;\n      background: #f5f5f5; }\n  app-check-report .content .c-wrapper .con::before {\n      content: '';\n      position: absolute;\n      top: 118px;\n      left: 42px;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-bottom: 10px solid #f5f5f5; }\n  app-check-report .content .c-wrapper .i-c {\n      padding: 16px 0; }\n  app-check-report .content .c-wrapper .i-c .l-c {\n        padding: 0 16px; }\n  app-check-report .content .c-wrapper .i-c .l-c .name {\n          padding-top: 10px; }\n  app-check-report .content .c-wrapper .i-c .l-c .info {\n          padding: 10px 0;\n          color: #999999;\n          font-size: 0.8rem; }\n  app-check-report .content .c-wrapper .i-c .money {\n        line-height: 80px;\n        padding: 0 10px;\n        width: 108px;\n        color: #e53935; }\n  app-check-report .content .c-wrapper .i-c .money button {\n          color: #7e8fbc; }\n  app-check-report .content .c-wrapper .i-c .s-r {\n        text-decoration: line-through; }\n  app-check-report .content .c-wrapper .i-c .r-b {\n        line-height: 85px; }\n  app-check-report .content .c-wrapper .i-c .d-b {\n        line-height: 80px;\n        width: 28px;\n        text-align: center; }\n  app-check-report .content .c-wrapper .i-c .d-b button {\n          width: auto;\n          padding: 0;\n          min-width: 0; }\n  app-check-report .content .c-wrapper .i-c .d-b button img {\n            -webkit-transform: rotate(-90deg);\n                    transform: rotate(-90deg); }\n  app-check-report .content .c-wrapper .i-c .d-b .down-img {\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg); }\n  app-check-report .content .c-wrapper .l-img {\n      width: 70px;\n      height: 80px;\n      border-radius: 5px; }\n  app-check-report .content .c-wrapper .mat-radio-outer-circle {\n      border-radius: 3px; }\n  app-check-report .content .c-wrapper .mat-radio-inner-circle {\n      border-radius: 3px; }\n  app-check-report .content .report-info {\n    padding: 16px; }\n  app-check-report .content .report-info .t-t {\n      color: #333333;\n      font-size: 1.2rem; }\n  app-check-report .content .report-info .t-t span {\n        margin-left: 10px;\n        color: #999999;\n        font-size: 1rem; }\n  app-check-report .content .report-info .out-img {\n      padding: 20px 0;\n      overflow: hidden;\n      justify-content: center; }\n  app-check-report .content .report-info .out-img .one-img {\n        padding: 6px;\n        text-align: center;\n        border: 1px solid #ccc;\n        margin-right: 10px;\n        border-radius: 20px;\n        box-shadow: 0 0 10px #ccc; }\n  app-check-report .content .report-info .out-img .one-img .bot {\n          margin-top: 10px; }\n  app-check-report .content .report-info .out-img .one-img .bos {\n          width: 114px;\n          text-align: center; }\n  app-check-report .content .report-info .out-img .one-img .fc {\n          color: #7e8fbc; }\n  app-check-report .content .report-info .out-img .rbot {\n        margin-bottom: 20px; }\n  app-check-report .content .report-info .ban {\n      border: 1px solid #ccc;\n      border-radius: 10px;\n      padding: 2px 20px;\n      margin-right: 20px;\n      cursor: pointer;\n      background: #fff; }\n  app-check-report .content .report-info .ban:last-child {\n        margin-right: 0; }\n  app-check-report .content .report-info .act {\n      background: #7e8fbc;\n      border-color: #7e8fbc;\n      color: #fff; }\n  app-check-report .content .report-info .fot {\n      justify-content: space-between;\n      padding: 0 15px; }\n  app-check-report .content .b-c .l-b {\n    padding: 16px;\n    text-align: right; }\n  app-check-report .content .b-c .l-b button {\n      color: #7e8fbc;\n      border: 1px solid #7e8fbc;\n      border-radius: 5px; }\n  app-check-report .content .b-c .r-b {\n    padding: 16px;\n    text-align: left; }\n  app-check-report .content .b-c .r-b button {\n      background: #7e8fbc;\n      color: #ffffff;\n      border-radius: 5px; }\n  app-check-report .s-container {\n  padding: 50px 0; }\n  app-check-report .s-container .swiper-container .swiper-wrapper {\n    padding: 50px 0; }\n  app-check-report .s-container .swiper-container .swiper-slide {\n    width: 100% !important; }\n  app-check-report .s-container .item {\n    text-align: center;\n    margin: 0 10px;\n    border-radius: 5px;\n    background: #ffffff;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    padding-top: 15px; }\n  app-check-report .s-container .item .label {\n      padding: 15px 0; }\n  app-check-report .img-c {\n  display: flex;\n  vertical-align: middle;\n  align-items: center; }\n  app-check-report .s-c {\n  color: #7e8fbc !important; }\n  app-check-report .s-b {\n  border-color: #7e8fbc !important;\n  color: #ffffff !important;\n  background: #7e8fbc; }\n  app-check-report .s-l {\n  background: #7e8fbc !important; }\n  app-check-report .b-c {\n  width: calc(100% - 100px);\n  margin-left: 50px;\n  text-align: center;\n  height: 30px;\n  line-height: 30px; }\n  app-check-report .b-c button {\n    width: 36px;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n    padding: 0;\n    color: #999999;\n    border: 1px solid #999999;\n    border-radius: 5px; }\n  app-check-report .b-c .line {\n    width: 100%;\n    height: 1px;\n    background: #eeeeee;\n    margin-top: 15px; }\n"

/***/ }),

/***/ "./src/pages/user-care/view-report/check-report/check-report.component.ts":
/*!********************************************************************************!*\
  !*** ./src/pages/user-care/view-report/check-report/check-report.component.ts ***!
  \********************************************************************************/
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
var check_report_service_1 = __webpack_require__(/*! ./check-report.service */ "./src/pages/user-care/view-report/check-report/check-report.service.ts");
var evaluation_service_1 = __webpack_require__(/*! ../../../$services/evaluation/evaluation.service */ "./src/pages/$services/evaluation/evaluation.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var auth_service_1 = __webpack_require__(/*! ../../../$services/auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
var http_service_1 = __webpack_require__(/*! ../../../$services/http.service */ "./src/pages/$services/http.service.ts");
var CheckReportComponent = /** @class */ (function () {
    function CheckReportComponent(_router, service, evaluation, snackBar, activedRoute) {
        this._router = _router;
        this.service = service;
        this.evaluation = evaluation;
        this.snackBar = snackBar;
        this.activedRoute = activedRoute;
        this.bg = -1;
        this.nums = 0;
        ////
        this.act = false;
        this.hidden = 0;
        this.report = -1;
        this.appraiser = [];
        this.banner = [
            [{
                    name: '基础报告',
                    active: true,
                    num: 0,
                    title: [
                        {
                            img: ['assets/img/top-1.png', 'assets/img/top-1-1.png'],
                            span: '完整评价等级'
                        },
                        {
                            img: ['assets/img/top-2.png', 'assets/img/top-2-1.png'],
                            span: '学术名词解释'
                        },
                        {
                            img: ['assets/img/top-3.png', 'assets/img/top-3-3.png'],
                            span: '丰富详尽图标'
                        }
                    ],
                },
                {
                    name: '咨询师报告',
                    num: 1,
                    title: [
                        {
                            img: ['assets/img/top-4.png', 'assets/img/top-4-4.png'],
                            span: '咨询师精读撰稿'
                        },
                        {
                            img: ['assets/img/top-5.png', 'assets/img/top-5-5.png'],
                            span: '结合个人背景'
                        },
                        {
                            img: ['assets/img/top-6.png', 'assets/img/top-6-6.png'],
                            span: '表内交叉分析'
                        }
                    ],
                }],
            [{
                    name: '高级咨询师报告',
                    num: 2,
                    title: [
                        {
                            img: ['assets/img/top-7-7.png', 'assets/img/top-7.png'],
                            span: '多表综合分析'
                        },
                        {
                            img: ['assets/img/top-8-8.png', 'assets/img/top-8.png'],
                            span: '对比团队成员'
                        },
                        {
                            img: ['assets/img/top-9-9.png', 'assets/img/top-9.png'],
                            span: '个人发展咨询'
                        }
                    ],
                },
                {
                    name: '专家报告',
                    num: 3,
                    title: [
                        {
                            img: ['assets/img/top-10.png', 'assets/img/top-10-10.png'],
                            span: '教授独写撰稿'
                        },
                        {
                            img: ['assets/img/top-11.png', 'assets/img/top-11-11.png'],
                            span: '职业生涯计划'
                        },
                        {
                            img: ['assets/img/top-12.png', 'assets/img/top-12-12.png'],
                            span: '个性根源解析'
                        }
                    ],
                }]
        ];
        this.select = 0;
    }
    Object.defineProperty(CheckReportComponent.prototype, "UserID", {
        get: function () {
            return auth_service_1.AuthService.UserID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckReportComponent.prototype, "URL", {
        get: function () {
            return http_service_1.HttpService.URL;
        },
        enumerable: true,
        configurable: true
    });
    CheckReportComponent.prototype.ngOnInit = function () {
        // console.log('banner', this.banner);
        var _this = this;
        this.activedRoute.params.subscribe(function (params) {
            _this.ids = params['ids'];
            _this.id = +params['id'];
            _this.testID = +params['test'];
            _this.amounts = _this.ids.split(',').length;
            _this.evaluation.getAssessmentList(_this.ids).then(function (assessments) {
                // console.log('assessments', assessments);
                // 获取报告类型
                _this.service.getReportType().then(function (resp) {
                    // console.log('resp', resp);
                    resp.results.forEach(function (item) {
                        item.price = 0;
                        assessments.results.forEach(function (assessment) {
                            assessment.price_assessment.length && assessment.price_assessment.forEach(function (price) {
                                // console.log('price', price);
                                if (price.appraiser_title === item.id) {
                                    item.price += price.price;
                                }
                            });
                        });
                        item.price = item.price.toFixed(2);
                        if (!item.is_person) {
                            _this.machine = item;
                        }
                        else {
                            item.image_url = _this.URL + item.image_url;
                            _this.appraiser.push(item);
                        }
                    });
                }).catch(function (err) {
                    console.log(err);
                });
                // console.log('assessments', this.assessments);
            }).catch(function (err) {
                console.log(err);
            });
        });
        this.getSystemConfig();
    };
    CheckReportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.mySwiper = new Swiper(_this.equity.nativeElement, {
                loop: false,
                allowSlidePrev: true,
                observer: true
            });
        }, 1000);
    };
    CheckReportComponent.prototype.getSystemConfig = function () {
        var _this = this;
        this.service.getSystemConfig('reportIntroduce').then(function (resp) {
            // console.log('resp', resp);
            _this.reportIntroduce = resp;
        }).catch(function (err) {
            console.log(err);
        });
    };
    CheckReportComponent.prototype.next = function () {
        this.mySwiper.slideNext();
    };
    CheckReportComponent.prototype.pre = function () {
        this.mySwiper.slidePrev();
    };
    // 查看每个权益
    CheckReportComponent.prototype.goOne = function (i) {
        this.nums = i;
    };
    // 选择报告类型
    CheckReportComponent.prototype.selectReport = function (event, type) {
        this.report = event.value;
        // console.log('type', type);
        this.selectedType = type;
        // this.banner[type.id].actives = !this.act;
        this.bg = type.id;
        this.nums = type.id;
    };
    // 确认购买 创建订单
    CheckReportComponent.prototype.createOrder = function () {
        var _this = this;
        if (!this.selectedType) {
            this.snackBar.open('请选择报告类型或咨询师！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            return;
        }
        this.service.createOrder(this.selectedType.id, this.selectedType.price, this.id, this.UserID).then(function (resp) {
            // console.log('resp', resp);
            _this._router.navigate(['/user-care/development-counseling/confirm-payment', resp.id]);
        }).catch(function (err) {
            console.log(err);
        });
    };
    CheckReportComponent.prototype.checkReport = function () {
        this._router.navigate(['/user-care/view-report/report-detail', this.ids, this.id, this.testID]);
    };
    // 返回首页
    CheckReportComponent.prototype.backToHome = function () {
        this._router.navigate(['/user-care/evaluation']);
    };
    CheckReportComponent.prototype.goSelectAssessor = function () {
        this._router.navigate(['user-care/development-counseling/expert-introduction']);
    };
    // 查看咨询师详情
    CheckReportComponent.prototype.goDetailReport = function () {
        this._router.navigate(['/user-care/view-report/report-detail']);
    };
    __decorate([
        core_1.ViewChild('Equity'),
        __metadata("design:type", core_1.ElementRef)
    ], CheckReportComponent.prototype, "equity", void 0);
    CheckReportComponent = __decorate([
        core_1.Component({
            selector: 'app-check-report',
            template: __webpack_require__(/*! ./check-report.component.html */ "./src/pages/user-care/view-report/check-report/check-report.component.html"),
            styles: [__webpack_require__(/*! ./check-report.component.scss */ "./src/pages/user-care/view-report/check-report/check-report.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router, check_report_service_1.CheckReportService, evaluation_service_1.EvaluationService,
            material_1.MatSnackBar, router_1.ActivatedRoute])
    ], CheckReportComponent);
    return CheckReportComponent;
}());
exports.CheckReportComponent = CheckReportComponent;


/***/ }),

/***/ "./src/pages/user-care/view-report/check-report/check-report.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/pages/user-care/view-report/check-report/check-report.module.ts ***!
  \*****************************************************************************/
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
var check_report_component_1 = __webpack_require__(/*! ./check-report.component */ "./src/pages/user-care/view-report/check-report/check-report.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var CheckReportModule = /** @class */ (function () {
    function CheckReportModule() {
    }
    CheckReportModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule,
                material_1.MatRadioModule,
                forms_1.FormsModule,
                material_1.MatTabsModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: check_report_component_1.CheckReportComponent
                    }
                ])
            ],
            declarations: [check_report_component_1.CheckReportComponent]
        })
    ], CheckReportModule);
    return CheckReportModule;
}());
exports.CheckReportModule = CheckReportModule;


/***/ })

}]);
//# sourceMappingURL=user-care-view-report-check-report-check-report-module.js.map