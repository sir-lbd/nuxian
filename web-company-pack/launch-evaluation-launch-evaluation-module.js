(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["launch-evaluation-launch-evaluation-module"],{

/***/ "./src/pages/launch-evaluation/create-order/create-order.component.html":
/*!******************************************************************************!*\
  !*** ./src/pages/launch-evaluation/create-order/create-order.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-container\">\n  <div class=\"row top\">\n    <div class=\"col col-auto hs\">\n      <span class=\"circle co\">√</span>配置组织架构\n    </div>\n    <div class=\"col\"><span class=\"line\"></span></div>\n    <div class=\"col col-auto hs\">\n      <span class=\"circle co\">√</span>产品选择(测评师)\n    </div>\n    <div class=\"col\"><span class=\"line\"></span></div>\n    <div class=\"col col-auto hs\">\n      <span class=\"circle co\">√</span>配置项目组\n    </div>\n    <div class=\"col\"><span class=\"line\"></span></div>\n    <div class=\"col col-auto hs\">\n      <span class=\"circle co\">√</span>导入成员\n    </div>\n    <div class=\"col\"><span class=\"line\"></span></div>\n    <div class=\"col col-auto bl\">\n      <span class=\"circle lb\">5</span>提交支付\n    </div>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"row title\">\n      <div class=\"col col-auto left\">\n        量表<img src=\"assets/img/editor.png\">\n      </div>\n      <div class=\"col\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-auto left\">\n      </div>\n      <div class=\"col\">\n        <div class=\"c-container\">\n          <div class=\"row\">\n            <div class=\"col\">量表名称</div>\n            <div class=\"col\">简介</div>\n            <div class=\"col\">受众人群</div>\n            <div class=\"col\">版权费</div>\n            <div class=\"col\">信息服务费</div>\n          </div>\n          <div class=\"row\" [class.p-line]=\"i % 2 === 0\" *ngFor=\"let a of assessments; let i = index\">\n            <div class=\"col\">{{a?.name}}</div>\n            <div class=\"col\">{{a?.introduce}}</div>\n            <div class=\"col\">{{a?.audiences}}</div>\n            <div class=\"col\"><span class=\"money\">{{a?.copyright_fee}}</span>元</div>\n            <div class=\"col\"><span class=\"money\">{{a?.price}}</span>元</div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"row title\">\n      <div class=\"col col-auto left\">\n        测评师<img src=\"assets/img/editor.png\">\n      </div>\n      <div class=\"col tips\">为提高测评效率、请选择测评师给您详细测评。</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-auto left\">\n      </div>\n      <div class=\"col\">\n        <div class=\"c-container\">\n          <div class=\"row\">\n            <div class=\"col\">测评等级</div>\n            <div class=\"col\">专业测评范围</div>\n            <div class=\"col\">简介</div>\n            <div class=\"col\">测评年限</div>\n          </div>\n          <div class=\"row p-line\" *ngIf=\"showReport\">\n            <div class=\"col\">{{appraiser?.title}}</div>\n            <div class=\"col\">{{appraiser?.working_field}}</div>\n            <div class=\"col\">{{appraiser?.description}}</div>\n            <div class=\"col\">{{appraiser?.working_life}}</div>\n          </div>\n          <div style=\"text-align: center; padding: 10px;\" *ngIf=\"!showReport\">\n            暂无测评师\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"row title\">\n      <div class=\"col col-auto left\">\n        结果反馈形式<img src=\"assets/img/editor.png\">\n      </div>\n      <div class=\"col\">\n        <span class=\"report-name\">基础数据</span>\n        <span class=\"report-name\" *ngIf=\"report === 0 || report >= 1\">基础报告</span>\n        <span class=\"report-name\" *ngIf=\"report >= 1\">咨询报告</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"row title\">\n      <div class=\"col col-auto left\">\n        配置项目组\n      </div>\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div>项目组<img class=\"e-i\" src=\"assets/img/editor.png\"></div>\n            <div class=\"group\">\n              <div class=\"row\">\n                <div class=\"col col-auto\">项目组名称：</div>\n                <div class=\"col\">{{product?.name}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col col-auto\">开始时间：</div>\n                <div class=\"col\">{{product?.start_time | date: 'yyyy-MM-dd'}}</div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col col-auto\">开始时间：</div>\n                <div class=\"col\">{{product?.end_time | date: 'yyyy-MM-dd'}}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col\" [hidden]=\"true\">\n            <div>授权查看<img class=\"e-i\" src=\"assets/img/editor.png\"></div>\n            <div class=\"group\">\n              <div class=\"row\">上级查看（组织架构）</div>\n              <div class=\"row\">李先生（经理）</div>\n              <div class=\"row\">李先生（经理）</div>\n              <div class=\"row\">李先生（经理）</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"row title\">\n      <div class=\"col col-auto left\">\n        导入成员\n      </div>\n      <div class=\"col\">\n        <button mat-button class=\"set-btn\" (click)=\"backTo()\">立即配置></button>\n        <span class=\"set-btn p-c\">{{users?.length}}人</span>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-auto left\">\n      </div>\n      <div class=\"col\">\n        <div class=\"c-container\">\n          <div class=\"row\">\n            <div class=\"col\">姓名</div>\n            <div class=\"col\">职位</div>\n            <div class=\"col\">量表组合</div>\n            <div class=\"col\">测评师</div>\n            <div class=\"col\">结果反馈形式</div>\n            <div class=\"col\">价格</div>\n          </div>\n          <div class=\"row\" [class.p-line]=\"i % 2 === 0\" *ngFor=\"let item of users; let i = index;\">\n            <div class=\"col\">{{item?.user?.username}}</div>\n            <div class=\"col\">技术总监</div>\n            <div class=\"col\">\n              <span *ngFor=\"let a of item?.assessments; let n = index;\">{{a?.name}}\n                <span *ngIf=\"(n + 1) < item?.assessments?.length\">、</span>\n              </span>\n\n            </div>\n            <div class=\"col\">\n              <span *ngIf=\"item?.appraiser_title?.title\">{{item?.appraiser_title?.title}}</span>\n              <span>无</span>\n            </div>\n            <div class=\"col\">\n              <span>基础数据</span><span *ngIf=\"item?.appraiser_title?.id >= 0\">、</span>\n              <span *ngIf=\"item?.appraiser_title?.id > 0\">基础报告</span><span *ngIf=\"item?.appraiser_title?.id > 0\">、</span>\n              <span *ngIf=\"item?.appraiser_title?.id > 1\">咨询报告</span>\n            </div>\n            <div class=\"col\">{{item?.price}}</div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"row title\">\n      <div class=\"col col-auto left\">\n        服务协议\n      </div>\n      <div class=\"col\">\n        <mat-radio-group>\n          <mat-radio-button>《沐贤测评服务协议》</mat-radio-button>\n        </mat-radio-group>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-auto left\">\n      </div>\n      <div class=\"col tips\">\n        <div>退款规则及操作说明、订单对应发票信息。</div>\n        <div class=\"b\">人工服务电话：0532-87690275，感谢使用沐贤测评系统</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer row\">\n  <div class=\"col col-auto left\">配置费用：<span class=\"money\">{{shop?.price}}</span><span class=\"y\">元</span></div>\n  <div class=\"col\"></div>\n  <div class=\"col col-auto b-c\">\n    <button mat-button (click)=\"backTo()\">上一步：导入成员</button>\n    <button mat-button class=\"s-b\" (click)=\"createOrder()\">提交订单</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/create-order/create-order.component.scss":
/*!******************************************************************************!*\
  !*** ./src/pages/launch-evaluation/create-order/create-order.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-create-order .p-container {\n  width: 100%;\n  padding: 100px 30px; }\n  app-create-order .p-container .top {\n    width: 100%;\n    margin: 0 auto;\n    justify-content: space-between; }\n  app-create-order .p-container .top .circle {\n      justify-content: center;\n      align-items: center;\n      display: inline-flex;\n      height: 24px;\n      width: 24px;\n      border-radius: 100%;\n      margin-right: 0.2rem; }\n  app-create-order .p-container .top .no-line {\n      width: 90%;\n      margin: 5%;\n      display: inline-block;\n      height: 2px;\n      background: #cccccc; }\n  app-create-order .p-container .top .line {\n      width: 90%;\n      margin: 5%;\n      display: inline-block;\n      height: 2px;\n      background: #7e8fbc; }\n  app-create-order .p-container .top .co {\n      color: #7e8fbc;\n      background: #ffffff;\n      border: 1px solid #7e8fbc; }\n  app-create-order .p-container .top .lb {\n      color: #fff;\n      background: #7e8fbc;\n      border: 1px solid #7e8fbc; }\n  app-create-order .p-container .top .hs {\n      color: #999; }\n  app-create-order .p-container .top .bl {\n      color: #7e8fbc; }\n  app-create-order .p-container .top .bb {\n      background: #fff;\n      color: #7e8fbc;\n      border: 1px solid #7e8fbc; }\n  app-create-order .p-container .top .b {\n      color: #999;\n      border: 1px solid #999; }\n  app-create-order .p-container .top .lb {\n      color: #fff;\n      background: #7e8fbc;\n      border: 1px solid #7e8fbc; }\n  app-create-order .p-container .wrapper {\n    width: 100%;\n    padding: 0 30px;\n    background: #ffffff;\n    border-radius: 3px;\n    margin: 10px 0; }\n  app-create-order .p-container .wrapper .title {\n      padding: 10px 0; }\n  app-create-order .p-container .wrapper .left {\n      width: 150px;\n      height: 25px;\n      line-height: 25px; }\n  app-create-order .p-container .wrapper .left img {\n        margin-left: 10px; }\n  app-create-order .p-container .wrapper .report-name {\n      margin-right: 20px; }\n  app-create-order .p-container .wrapper .tips {\n      color: #999999; }\n  app-create-order .p-container .wrapper .tips .b {\n        padding: 10px 0; }\n  app-create-order .p-container .wrapper .c-container {\n      text-align: center;\n      margin-bottom: 10px; }\n  app-create-order .p-container .wrapper .c-container .row {\n        padding: 5px;\n        background: #f8fafc; }\n  app-create-order .p-container .wrapper .c-container .row .money {\n          color: #e53935; }\n  app-create-order .p-container .wrapper .c-container .p-line {\n        background: #fffcfa; }\n  app-create-order .p-container .wrapper .group {\n      text-align: left; }\n  app-create-order .p-container .wrapper .group .row {\n        padding: 5px 0; }\n  app-create-order .p-container .wrapper .set-btn {\n      border: 1px solid #cccccc;\n      border-radius: 5px;\n      height: 35px;\n      line-height: 35px;\n      width: 98px; }\n  app-create-order .p-container .wrapper .p-c {\n      display: inline-block;\n      border: 1px solid #7e8fbc;\n      color: #7e8fbc;\n      margin-left: 10px;\n      text-align: center; }\n  app-create-order .p-container .wrapper .e-i {\n      margin-left: 10px; }\n  app-create-order .mat-radio-label-content {\n  color: #7e8fbc; }\n  app-create-order .mat-radio-outer-circle {\n  border-radius: 20%; }\n  app-create-order .mat-radio-inner-circle {\n  border-radius: 20%; }\n  app-create-order .footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  background: #fff;\n  padding: 0 20px; }\n  app-create-order .footer .col {\n    height: 60px;\n    line-height: 60px; }\n  app-create-order .footer .left {\n    color: #333333; }\n  app-create-order .footer .left span {\n      color: #e53935; }\n  app-create-order .footer .left .money {\n      font-size: 1.5rem;\n      font-weight: 600;\n      margin-right: 5px; }\n  app-create-order .footer .left .y {\n      font-size: 1rem; }\n  app-create-order .footer .b-c button {\n    height: 50px;\n    line-height: 50px;\n    width: 200px;\n    font-weight: lighter;\n    font-size: 1.1rem;\n    color: #7e8fbc;\n    border: 1px solid #7e8fbc;\n    border-radius: 0; }\n  app-create-order .footer .b-c .s-b {\n    margin-left: 10px;\n    color: #ffffff;\n    background: #7e8fbc; }\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/create-order/create-order.component.ts":
/*!****************************************************************************!*\
  !*** ./src/pages/launch-evaluation/create-order/create-order.component.ts ***!
  \****************************************************************************/
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
var launch_evaluation_service_1 = __webpack_require__(/*! ../launch-evaluation.service */ "./src/pages/launch-evaluation/launch-evaluation.service.ts");
var CreateOrderComponent = /** @class */ (function () {
    function CreateOrderComponent(activatedRoute, service, router) {
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.router = router;
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getImportMembers(_this.id);
            _this.service.getShopList(_this.id).then(function (shop) {
                shop.detail = JSON.parse(shop.detail);
                // console.log('shop', shop);
                _this.shop = shop;
                _this.report = shop.appraiser_title;
                _this.service.getProductByID(shop.product).then(function (resp) {
                    _this.product = resp;
                    // console.log('product', this.product);
                    _this.service.getAssessmentsByProduct(resp.assessments).then(function (assessments) {
                        _this.assessments = assessments;
                        // console.log('assessments', this.assessments);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }).catch(function (err) {
                    console.log(err);
                });
                if (_this.report > 0) {
                    _this.service.getAppraiser(_this.report).then(function (resp) {
                        _this.appraiser = resp;
                        // console.log('appraiser', this.appraiser);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    // 获取导入用户数据
    CreateOrderComponent.prototype.getImportMembers = function (id) {
        var _this = this;
        this.service.getShopListDetail(id).then(function (resp) {
            _this.users = resp;
            // console.log('users', this.users);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 创建订单
    CreateOrderComponent.prototype.createOrder = function () {
        var _this = this;
        // this.router.navigate(['/launch-evaluation/payment', 1]);
        this.service.createOrder(this.product.id, this.shop.id).then(function (resp) {
            _this.router.navigate(['/launch-evaluation/payment', resp.id]);
        }).catch(function (err) {
            console.log(err);
        });
    };
    CreateOrderComponent.prototype.backTo = function () {
        // console.log('bb');
        window.history.back(-1);
    };
    CreateOrderComponent = __decorate([
        core_1.Component({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.component.html */ "./src/pages/launch-evaluation/create-order/create-order.component.html"),
            styles: [__webpack_require__(/*! ./create-order.component.scss */ "./src/pages/launch-evaluation/create-order/create-order.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            launch_evaluation_service_1.LaunchEvaluationService,
            router_1.Router])
    ], CreateOrderComponent);
    return CreateOrderComponent;
}());
exports.CreateOrderComponent = CreateOrderComponent;


/***/ }),

/***/ "./src/pages/launch-evaluation/create-project-group/create-project-group.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/pages/launch-evaluation/create-project-group/create-project-group.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"l-container\">\n  <div class=\"row top\">\n    <div class=\"col col-auto color9\">\n      <span class=\"circle co\">√️</span>配置组织架构\n    </div>\n    <div class=\"col\"><span class=\"line\"></span></div>\n    <div class=\"col col-auto color9\" [class.blues]='step === 0'>\n      <span class=\"circle lb\" *ngIf=\"step === 0\">2</span>\n      <span class=\"circle co\" *ngIf=\"step === 1\">√</span>产品选择(测评师)\n    </div>\n    <div class=\"col\"><span class=\"no-line\" [class.line]=\"step === 1\"></span></div>\n    <div class=\"col col-auto color9\" [class.blues] = 'step === 1' >\n      <span class=\"circle co2 \" [class.lb]='step === 1'>3</span>配置项目组\n    </div>\n    <div class=\"col\"><span class=\"no-line\"></span></div>\n    <div class=\"col col-auto color9\" >\n      <span class=\"circle co2\">4</span>导入成员\n    </div>\n    <div class=\"col\"><span class=\"no-line\"></span></div>\n    <div class=\"col col-auto color9\" >\n      <span class=\"circle co2\">5</span>提交支付\n    </div>\n  </div>\n  <div *ngIf=\"step === 0\">\n    <div class=\"row chose\">\n      <div class=\"col col-auto ch\"> 产品选择</div>\n      <div class=\"col\">\n        <div class=\"row bot\">\n          <div class=\"col col-auto tit\" [class.ys]='label === i' *ngFor='let p of pub; let i = index'\n               (click)=\"selectLabel(i)\">{{p.title}}\n          </div>\n        </div>\n        <div class=\"row t1\" *ngIf=\"label !== 2\">\n          <div class=\"col\">项目名称</div>\n          <div class=\"col\">量表组合</div>\n          <div class=\"col\">咨询级别</div>\n          <div class=\"col\">受众人群</div>\n          <div class=\"col col-auto m-c\">版权费</div>\n          <div class=\"col col-auto m-c\">信息服务费</div>\n          <div class=\"col col-auto m-c\">操作</div>\n        </div>\n        <div class=\"row t1\" *ngIf=\"label === 2\">\n          <div class=\"col\">量表名称</div>\n          <div class=\"col\">受众人群</div>\n          <div class=\"col col-auto m-c\">版权费</div>\n          <div class=\"col col-auto m-c\">信息服务费</div>\n          <div class=\"col col-auto m-c\">操作</div>\n        </div>\n        <div *ngIf=\"label === 0\">\n          <div class=\"row item\" [class.p-l]=\"i % 2 === 0\" *ngFor=\"let item of brandData; let i = index;\">\n            <div class=\"col name\">\n              <mat-checkbox [checked]=\"item?.select\" (change)=\"select($event, item)\"></mat-checkbox>\n              <span>{{item?.name}}</span>\n            </div>\n            <div class=\"col\">\n              <span *ngFor=\"let name of item?.assessments_list; let i = index;\">\n                {{name?.name}}\n                <span *ngIf=\"i + 1 !== item?.assessments_list?.length\">、</span>\n              </span>\n            </div>\n            <div class=\"col\">\n              <span *ngFor=\"let a of appraisers; let i = index;\">\n                <span *ngIf=\"a?.id > item?.lowest_appraiser_title\">{{a?.title}}\n                  <span *ngIf=\"i + 1 < appraisers?.length\">/</span>\n                </span>\n              </span>\n            </div>\n            <div class=\"col\">{{item?.audiences}}</div>\n            <div class=\"col col-auto m-c centers\"><span class=\"red\">{{item?.copyright_fee}}</span>元</div>\n            <div class=\"col col-auto m-c\"><span class=\"red\">{{item?.price}}</span>元</div>\n            <div class=\"col col-auto m-c\">\n              <button mat-button>查看详情</button>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"label === 1\">\n          <div class=\"row item\" [class.p-l]=\"i % 2 === 0\" *ngFor=\"let item of sceneData; let i = index;\">\n            <div class=\"col name\">\n              <mat-checkbox [checked]=\"item?.select\" (change)=\"select($event, item)\"></mat-checkbox>\n              <span>{{item?.name}}</span>\n            </div>\n            <div class=\"col\">\n              <span *ngFor=\"let name of item?.assessments_list; let i = index;\">\n                {{name?.name}}\n                <span *ngIf=\"i + 1 !== item?.assessments_list?.length\">、</span>\n              </span>\n            </div>\n            <div class=\"col\">\n              <span *ngFor=\"let a of appraisers; let i = index;\">\n                <span *ngIf=\"a?.id > item?.lowest_appraiser_title\">{{a?.title}}\n                  <span *ngIf=\"i + 1 < appraisers?.length\">/</span>\n                </span>\n              </span>\n            </div>\n            <div class=\"col\">{{item?.audiences}}</div>\n            <div class=\"col col-auto m-c centers\"><span class=\"red\">{{item?.copyright_fee}}</span>元</div>\n            <div class=\"col col-auto m-c\"><span class=\"red\">{{item?.price}}</span>元</div>\n            <div class=\"col col-auto m-c\">\n              <button mat-button>查看详情</button>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"label === 2\">\n          <div class=\"row item\" [class.p-l]=\"i % 2 === 0\" *ngFor=\"let item of assessments; let i = index;\">\n            <div class=\"col name\">\n              <mat-checkbox [checked]=\"item?.select\" (change)=\"select($event, item)\"></mat-checkbox>\n              <span>{{item?.name}}</span>\n            </div>\n            <div class=\"col\">{{item?.audiences}}</div>\n            <div class=\"col col-auto m-c centers\"><span class=\"red\">{{item?.copyright_fee}}</span>元</div>\n            <div class=\"col col-auto m-c\"><span class=\"red\">{{item?.price}}</span>元</div>\n            <div class=\"col col-auto m-c\">\n              <button mat-button>查看详情</button>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"label === 3\">\n          <div class=\"row item\" [class.p-l]=\"i % 2 === 0\" *ngFor=\"let item of historyData; let i = index;\">\n            <div class=\"col name\">\n              <mat-checkbox [checked]=\"item?.select\" (change)=\"select($event, item)\"></mat-checkbox>\n              <span>{{item?.name}}</span>\n            </div>\n            <div class=\"col\">\n              <span *ngFor=\"let name of item?.assessments_list; let i = index;\">\n                {{name?.name}}\n                <span *ngIf=\"i + 1 !== item?.assessments_list?.length\">、</span>\n              </span>\n            </div>\n            <div class=\"col\">\n              <span *ngFor=\"let a of appraisers; let i = index;\">\n                <span *ngIf=\"a?.id > item?.lowest_appraiser_title\">{{a?.title}}\n                  <span *ngIf=\"i + 1 < appraisers?.length\">/</span>\n                </span>\n              </span>\n            </div>\n            <div class=\"col\">{{item?.audiences}}</div>\n            <div class=\"col col-auto m-c centers\"><span class=\"red\">{{item?.copyright_fee}}</span>元</div>\n            <div class=\"col col-auto m-c\"><span class=\"red\">{{item?.price}}</span>元</div>\n            <div class=\"col col-auto m-c\">\n              <button mat-button>查看详情</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row chose\">\n      <div class=\"col col-auto ch\">测评师选择</div>\n      <div class=\"col\">\n        <div class=\"tips\">为了提高测评效率，请选择测评师给您详细评测</div>\n        <div class=\"row t1\">\n          <div class=\"col\">测评等级</div>\n          <div class=\"col\">专业测评范围</div>\n          <div class=\"col\">简介</div>\n          <div class=\"col\">测评年限</div>\n        </div>\n        <div class=\"row item\" [class.p-l]=\"i % 2 === 0\" *ngFor=\"let item of appraisers; let i = index;\">\n          <div class=\"col name cc\">\n            <!--<input type=\"checkbox\" [checked]=\"item?.checked\" (change)=\"checkAppraiser($event, item)\">-->\n            <mat-checkbox  [checked]=\"item?.checked\" [disabled]=\"true\"\n                          (change)=\"checkAppraiser($event, item)\"></mat-checkbox>\n            <span>{{item?.title}}</span>\n          </div>\n          <div class=\"col\">企业中高级管理人员、团队匹配分析</div>\n          <div class=\"col\">{{item?.description}}</div>\n          <div class=\"col\">8年以上</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row chose\">\n      <div class=\"col col-auto ch\">结果反馈形式</div>\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col col-auto check\" *ngFor=\"let r of reports\">\n            <!--<input type=\"checkbox\" [checked]=\"r?.select || selectAppraiser\" [disabled]=\"r.disable\" (change)=\"selectReport($event, r)\">-->\n            <mat-checkbox [checked]=\"r?.select || selectAppraiser\" [disabled]=\"r.disable\"\n                          (change)=\"selectReport($event, r)\"></mat-checkbox>\n            <span>{{r?.name}}</span>\n          </div>\n          <div class=\"col tips\">基础数据为必选项目，企业可选择结果反馈形式给测试人员购买相应的结果报告。</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"step === 1\">\n    <div class=\"chose info\">\n      <div class=\"row\">\n        <div class=\"col col-auto ch \">项目组名称</div>\n        <div class=\"col col-auto p-n w251\">\n          <input type=\"text\" [(ngModel)]=\"product.name\">\n        </div>\n        <div class=\"hz\">8到30个字符。</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-auto ch \">开始时间</div>\n        <div class=\"col col-auto w251\">\n          <!--<input class=\"in\" type=\"text\" [(ngModel)]=\"product.start_time\">-->\n          <mat-form-field floatLabel=\"never\" class=\"col col-auto\">\n            <input matInput placeholder=\"开始日期\" disabled [(ngModel)]=\"startFormatDate\">\n            <input matInput [matDatepicker]=\"picker1\" placeholder=\"截止日期\" disabled style=\"display: none\"\n                   [(ngModel)]=\"product.start_time\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n            <mat-datepicker #picker1 disabled=\"false\" (closed)=\"closeDate(0)\"></mat-datepicker>\n          </mat-form-field>\n        </div>\n        <div class=\"hz\">项目开始测试时间</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-auto ch \">结束时间</div>\n        <div class=\"col col-auto w251\">\n          <mat-form-field floatLabel=\"never\" class=\"col col-auto\">\n            <input matInput placeholder=\"截止日期\" disabled [(ngModel)]=\"endFormatDate\">\n            <input matInput [matDatepicker]=\"picker2\" placeholder=\"截止日期\" disabled style=\"display: none\"\n                   [(ngModel)]=\"product.end_time\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n            <mat-datepicker #picker2 disabled=\"false\" (closed)=\"closeDate(1)\"></mat-datepicker>\n          </mat-form-field>\n        </div>\n        <div class=\"hz\">项目结束时间</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-auto ch \">描述</div>\n        <textarea class=\"col col-auto\" cols=\"30\" rows=\"3\" [(ngModel)]=\"product.products_describe\"></textarea>\n        <div class=\"hz\">对于该项目的基本描述</div>\n      </div>\n    </div>\n\n    <div class=\"chose info\" hidden>\n      <div class=\"row\">\n        <div class=\"col col-auto ch\">授权查看</div>\n        <div class=\"col col-auto\">\n          <div class=\"row\">\n            <div class=\"col col-auto check\">\n              <mat-checkbox>上级查看（标签）</mat-checkbox>\n              <mat-checkbox>上级查看（组织架构）</mat-checkbox>\n            </div>\n            <div class=\"col tips\">配置相应的授权范围可授权给用户查看测评报告。</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-auto ch\"></div>\n        <div class=\"col col-auto \">\n          <div class=\"row\">\n            <div class=\"col col-auto container left-container\">\n\n              <div *ngFor=\"let l of [1, 1, 1, 1]\">\n                <div class=\"label\">标签名</div>\n                <button mat-button class=\"name\" *ngFor=\"let n of [1, 1, 1, 1]\">王先生</button>\n              </div>\n            </div>\n            <div class=\"col col-auto img-c\">\n              <img src=\"\">\n            </div>\n            <div class=\"col col-auto container right-container\">\n\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"im row\">\n  <div class=\"col fd\">配置费用：<span class=\"fon\">{{amount}}</span> <span>元</span></div>\n  <div class=\"col col-auto\">\n    <button mat-button *ngIf=\"step === 0\" (click)=\"nextStep()\">下一步：配置项目组</button>\n    <button mat-button class=\"btn\" *ngIf=\"step === 1\" (click)=\"upStep()\">上一步：配置项目组</button>\n    <button mat-button *ngIf=\"step === 1\" (click)=\"confirmCreate()\">下一步：导入成员</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/create-project-group/create-project-group.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/pages/launch-evaluation/create-project-group/create-project-group.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-create-project-group .l-container {\n  width: calc(100% - 4rem);\n  margin: 100px auto 90px;\n  min-height: 100vh; }\n  app-create-project-group .l-container .mb {\n    margin-bottom: 10px; }\n  app-create-project-group .l-container .ch {\n    width: 123px; }\n  app-create-project-group .l-container .red {\n    display: inline-flex;\n    color: red; }\n  app-create-project-group .l-container .m-c {\n    width: 100px; }\n  app-create-project-group .l-container .centers {\n    text-align: center; }\n  app-create-project-group .l-container .tt {\n    width: 100px; }\n  app-create-project-group .l-container .tt input {\n      margin-right: 20px; }\n  app-create-project-group .l-container .top {\n    justify-content: space-between; }\n  app-create-project-group .l-container .top .color9 {\n      color: #999; }\n  app-create-project-group .l-container .top .circle {\n      justify-content: center;\n      align-items: center;\n      display: inline-flex;\n      height: 24px;\n      width: 24px;\n      border-radius: 100%;\n      margin-right: 0.2rem; }\n  app-create-project-group .l-container .top .no-line {\n      width: 90%;\n      margin: 5%;\n      display: inline-block;\n      height: 2px;\n      background: #cccccc; }\n  app-create-project-group .l-container .top .line {\n      width: 90%;\n      margin: 5%;\n      display: inline-block;\n      height: 2px;\n      background: #7e8fbc; }\n  app-create-project-group .l-container .top .co {\n      color: #7e8fbc;\n      background: #ffffff;\n      border: 1px solid #7e8fbc; }\n  app-create-project-group .l-container .top .co2 {\n      color: #999;\n      border: 1px solid #cdcdcd; }\n  app-create-project-group .l-container .top .lb {\n      color: #fff;\n      background: #7e8fbc;\n      border: 1px solid #7e8fbc; }\n  app-create-project-group .l-container .top .blues {\n      color: #7e8fbc; }\n  app-create-project-group .l-container .set {\n    margin-top: 1rem;\n    border-radius: 6px;\n    background: #fff;\n    padding: 10px; }\n  app-create-project-group .l-container .set .pz {\n      position: relative;\n      border-radius: 6px;\n      border: 1px solid #ddd;\n      padding: 0 20px 0 10px; }\n  app-create-project-group .l-container .set .pzz {\n      margin-left: 40px;\n      margin-right: 20px; }\n  app-create-project-group .l-container .set .pzz::after {\n      position: absolute;\n      top: 50%;\n      right: 1%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      content: '>';\n      color: #ccc; }\n  app-create-project-group .l-container .item {\n    background: #f8fafc;\n    display: flex;\n    vertical-align: middle;\n    align-items: center; }\n  app-create-project-group .l-container .item .col {\n      padding: 0 5px; }\n  app-create-project-group .l-container .p-l {\n    background: #fffcfa; }\n  app-create-project-group .l-container .chose {\n    background: #fff;\n    margin-top: 10px;\n    padding: 20px;\n    border-radius: 8px; }\n  app-create-project-group .l-container .chose .tips {\n      text-align: left !important;\n      padding: 12px 5px;\n      color: #999999; }\n  app-create-project-group .l-container .chose .check {\n      padding: 12px 0;\n      margin-right: 20px; }\n  app-create-project-group .l-container .chose .check input {\n        margin-right: 10px; }\n  app-create-project-group .l-container .chose .check span {\n        margin-right: 10px; }\n  app-create-project-group .l-container .chose .col {\n      text-align: center; }\n  app-create-project-group .l-container .chose .t1 {\n      margin-top: 20px;\n      padding: 10px 0;\n      background: #f8fafc; }\n  app-create-project-group .l-container .chose .name {\n      text-align: left; }\n  app-create-project-group .l-container .chose .name span {\n        margin-left: 10px; }\n  app-create-project-group .l-container .chose .cc .mat-checkbox-inner-container {\n      background: #ccc; }\n  app-create-project-group .l-container .chose .p-n {\n      padding-top: 7px; }\n  app-create-project-group .l-container .chose .p-n input {\n        padding: 3px 10px;\n        width: 200px;\n        border-radius: 5px;\n        border: 1px solid #eeeeee; }\n  app-create-project-group .l-container .chose .ch {\n      padding: 10px;\n      text-align: left; }\n  app-create-project-group .l-container .chose textarea {\n      text-align: left !important;\n      padding: 10px;\n      border: 1px solid #eeeeee;\n      border-radius: 3px;\n      resize: none; }\n  app-create-project-group .l-container .chose .tit {\n      padding: 10px;\n      cursor: pointer; }\n  app-create-project-group .l-container .chose .ys {\n      border-bottom: 1px solid #7e8fbc;\n      color: #7e8fbc; }\n  app-create-project-group .l-container .chose .ht {\n      padding: 2px 8px;\n      border: 1px solid #ccc;\n      border-radius: 6px; }\n  app-create-project-group .l-container .chose .hz {\n      padding-top: 10px;\n      padding-left: 60px;\n      color: #999; }\n  app-create-project-group .l-container .chose .w251 {\n      width: 251px; }\n  app-create-project-group .l-container .chose .w251 .mat-form-field {\n        width: 100%; }\n  app-create-project-group .l-container .chose .w251 input {\n        width: 100%; }\n  app-create-project-group .l-container .info {\n    padding: 20px;\n    border-radius: 8px; }\n  app-create-project-group .l-container .container {\n    width: 200px;\n    height: 150px;\n    border: 1px solid #eeeeee;\n    overflow-y: scroll; }\n  app-create-project-group .l-container .container .label {\n      background: #eeeeee;\n      padding: 5px;\n      text-align: left; }\n  app-create-project-group .l-container .container .name {\n      width: 100%; }\n  app-create-project-group .l-container .text {\n    padding-bottom: 30px;\n    background: #fff;\n    margin-top: 10px; }\n  app-create-project-group .l-container .text .t1 {\n      margin-top: 20px;\n      margin-right: 20px;\n      padding: 10px 0;\n      border-radius: 6px; }\n  app-create-project-group .l-container .text .ch {\n      position: relative;\n      padding: 10px;\n      margin-top: 20px; }\n  app-create-project-group .l-container .text .ch .div {\n        color: #999;\n        position: absolute;\n        right: -317px;\n        z-index: 1;\n        top: 11px; }\n  app-create-project-group .l-container .text .tit {\n      padding: 10px;\n      cursor: pointer; }\n  app-create-project-group .l-container .text .ys {\n      border-bottom: 1px solid #7e8fbc;\n      color: #7e8fbc; }\n  app-create-project-group .l-container .text .ht {\n      padding: 2px 8px;\n      border: 1px solid #ccc;\n      border-radius: 6px; }\n  app-create-project-group .l-container .textcon {\n    background: #fff;\n    align-items: center;\n    margin-top: 10px;\n    padding: 30px 10px; }\n  app-create-project-group .l-container .textcon .text-r {\n      width: 123px; }\n  app-create-project-group .l-container .textcon .text-e {\n      color: #999;\n      margin-left: 60px; }\n  app-create-project-group .l-container .textcon input {\n      margin-left: 60px; }\n  app-create-project-group .l-container .textcon input:first-child {\n        margin-left: 0; }\n  app-create-project-group .im {\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 10px;\n  background: #fff;\n  height: 80px;\n  padding: 0 16px;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0; }\n  app-create-project-group .im .fd span {\n    display: inline-flex;\n    color: red; }\n  app-create-project-group .im .fd .fon {\n    font-size: 1.6rem; }\n  app-create-project-group .im button {\n    background: #7e8fbc;\n    color: #fff;\n    height: 50px;\n    line-height: 50px;\n    border: 1px solid #7e8fbc; }\n  app-create-project-group .im .btn {\n    color: #7e8fbc;\n    border: 1px solid #7e8fbc;\n    background: transparent;\n    margin-right: 10px; }\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/create-project-group/create-project-group.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/pages/launch-evaluation/create-project-group/create-project-group.component.ts ***!
  \********************************************************************************************/
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
// @ts-ignore
var launch_evaluation_service_1 = __webpack_require__(/*! ../launch-evaluation.service */ "./src/pages/launch-evaluation/launch-evaluation.service.ts");
var project_management_service_1 = __webpack_require__(/*! ../../project-management/project-management.service */ "./src/pages/project-management/project-management.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var auth_service_1 = __webpack_require__(/*! ../../$services/auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
var CreateProjectGroupComponent = /** @class */ (function () {
    function CreateProjectGroupComponent(router, activatedRoute, service, pmServices, snackBar) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.pmServices = pmServices;
        this.snackBar = snackBar;
        this.label = 0;
        this.step = 0;
        this.pub = [
            {
                title: '测评品牌'
            },
            {
                title: '适用场景'
            },
            {
                title: '所有量表'
            },
            {
                title: '历史评测项目'
            }
        ];
        this.reports = [
            {
                id: -1,
                name: '基础数据',
                select: true,
                disable: true,
                value: -1,
            },
            {
                id: 0,
                name: '基础报告',
                select: false,
                disable: false,
                value: 0,
            },
            {
                id: 1,
                name: '咨询报告',
                select: false,
                disable: true,
                value: 1
            },
        ];
        this.product = {};
        this.amounts = 0;
        this.amount = 0;
        this.selected = [];
        this.report = -1;
    }
    Object.defineProperty(CreateProjectGroupComponent.prototype, "UserID", {
        get: function () {
            return auth_service_1.AuthService.UserID;
        },
        enumerable: true,
        configurable: true
    });
    CreateProjectGroupComponent.prototype.ngOnInit = function () {
        this.getBrand();
        this.getScene();
        this.getHistory();
        this.getAllAssessment();
        this.getAppraiserTitles();
    };
    // 切换
    CreateProjectGroupComponent.prototype.selectLabel = function (index) {
        this.label = index;
    };
    // 获取历史测评项目
    CreateProjectGroupComponent.prototype.getHistory = function () {
        var _this = this;
        var data = { user_id: this.UserID, brand: 0, scene: 0, limit: 1000 };
        this.pmServices.getProductList(data).then(function (resp) {
            resp.forEach(function (item) {
                item.assessments = item.assessments.split(',');
                item.price = 0;
                item.copyright_fee = 0;
                item.assessments_list.forEach(function (list) {
                    item.price += list.price;
                    item.copyright_fee += list.copyright_fee;
                });
                item.price = parseFloat(item.price.toFixed(2));
                item.copyright_fee = parseFloat(item.copyright_fee.toFixed(2));
            });
            _this.historyData = resp;
            // console.log('historyData', this.historyData);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取推荐品牌
    CreateProjectGroupComponent.prototype.getBrand = function () {
        var _this = this;
        var data = { brand: 1, limit: 1000 };
        this.pmServices.getProductList(data).then(function (resp) {
            // console.log('resp', resp);
            resp.forEach(function (item) {
                item.assessments = item.assessments.split(',');
                item.price = 0;
                item.copyright_fee = 0;
                item.assessments_list.forEach(function (list) {
                    item.price += list.price;
                    item.copyright_fee += list.copyright_fee;
                });
                item.price = parseFloat(item.price.toFixed(2));
                item.copyright_fee = parseFloat(item.copyright_fee.toFixed(2));
            });
            _this.brandData = resp;
            // console.log('brandData', this.brandData);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取试用场景
    CreateProjectGroupComponent.prototype.getScene = function () {
        var _this = this;
        var data = { scene: 1, limit: 1000 };
        this.pmServices.getProductList(data).then(function (resp) {
            // console.log('resp', resp);
            resp.forEach(function (item) {
                item.assessments = item.assessments.split(',');
                item.price = 0;
                item.copyright_fee = 0;
                item.assessments_list.forEach(function (list) {
                    item.price += list.price;
                    item.copyright_fee += list.copyright_fee;
                });
                item.price = parseFloat(item.price.toFixed(2));
                item.copyright_fee = parseFloat(item.copyright_fee.toFixed(2));
            });
            _this.sceneData = resp;
            // console.log('sceneData', this.sceneData);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取所有量表
    CreateProjectGroupComponent.prototype.getAllAssessment = function () {
        var _this = this;
        this.service.getAllAssessment().then(function (resp) {
            _this.assessments = resp;
            _this.assessments.forEach(function (a) {
                a.select = false;
            });
            console.log('assessments', _this.assessments);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取测评师等级
    CreateProjectGroupComponent.prototype.getAppraiserTitles = function () {
        var _this = this;
        this.service.getAppraiserTitles().then(function (resp) {
            // console.log('resp', resp);
            _this.appraisers = resp;
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 选择测评师等级
    CreateProjectGroupComponent.prototype.checkAppraiser = function (event, item) {
        item.select = !item.select;
        this.reports[1].select = true;
        this.reports[2].select = true;
        this.report = item.id;
        this.caculateAmount();
        // console.log('report', this.report);
    };
    // 选择报告
    CreateProjectGroupComponent.prototype.selectReport = function (event, r) {
        r.select = !r.select;
        // console.log('r', r);
        // console.log('amount', this.amount);
        if (r.select) {
            this.report = r.value;
            if (this.report === 1) {
                this.reports[1].select = true;
            }
        }
        else {
            if (this.reports[1].select && !this.reports[2].select) {
                this.report = 0;
            }
            if (!this.reports[1].select && !this.reports[2].select) {
                this.report = -1;
            }
        }
        this.caculateAmount();
        // console.log('report', this.report);
    };
    // 选择产品
    CreateProjectGroupComponent.prototype.select = function (event, item) {
        // this.selected = [];
        // console.log('event', event);
        item.select = event.checked;
        // this.selected = [];
        // console.log('label', this.label);
        // console.log('item', item);
        if (this.label === 2) {
            if (item.select) {
                if (this.selected.indexOf(item.id) < 0) {
                    this.selected.push(item.id);
                }
            }
            else {
                if (this.selected.indexOf(item.id) >= 0) {
                    this.selected.splice(this.selected.indexOf(item.id), 1);
                }
            }
        }
        else {
            this.products = [];
            this.caculateAssessments();
        }
        // this.caculateAmount();
        // console.log('selected', this.selected);
    };
    // 统计选择量表
    CreateProjectGroupComponent.prototype.caculateAssessments = function () {
        var _this = this;
        this.historyData && this.historyData.length && this.historyData.forEach(function (list) {
            // console.log('list', list);
            if (list.select) {
                _this.products.push(list.id);
                list.assessments.forEach(function (a) {
                    a = parseInt(a, 10);
                    if (_this.selected.indexOf(a) < 0) {
                        _this.selected.push(a);
                    }
                });
            }
        });
        this.brandData && this.brandData.length && this.brandData.forEach(function (list) {
            // console.log('list', list);
            if (list.select) {
                _this.products.push(list.id);
                list.assessments.forEach(function (a) {
                    a = parseInt(a, 10);
                    if (_this.selected.indexOf(a) < 0) {
                        _this.selected.push(a);
                    }
                });
            }
        });
        this.sceneData && this.sceneData.length && this.sceneData.forEach(function (list) {
            // console.log('list', list);
            if (list.select) {
                _this.products.push(list.id);
                list.assessments.forEach(function (a) {
                    a = parseInt(a, 10);
                    if (_this.selected.indexOf(a) < 0) {
                        _this.selected.push(a);
                    }
                });
            }
        });
        // console.log('selectedAssessments', selectedAssessments);
        this.assessments && this.assessments.length && this.assessments.forEach(function (assessment) {
            if (_this.selected.indexOf(assessment.id) >= 0) {
                assessment.select = true;
            }
            else {
                assessment.select = false;
            }
        });
        // console.log('products', this.products);
        // console.log('assessments', this.assessments);
    };
    // 计算金额
    CreateProjectGroupComponent.prototype.caculateAmount = function () {
        // console.log('assessments', this.assessments);
        // console.log('appraisers', this.appraisers);
        // console.log('report', this.reports);
    };
    CreateProjectGroupComponent.prototype.closeDate = function (type) {
        if (type === 0) {
            if (this.product.start_time) {
                this.startFormatDate = this.service.formatDate(this.product.start_time);
            }
        }
        else {
            if (this.product.end_time) {
                this.endFormatDate = this.service.formatDate(this.product.end_time);
            }
        }
    };
    CreateProjectGroupComponent.prototype.upStep = function () {
        this.step = 0;
    };
    CreateProjectGroupComponent.prototype.nextStep = function () {
        // console.log('report', this.report);
        // console.log('selected', this.selected);
        if (!this.selected.length) {
            this.snackBar.open('请选择产品或量表！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            return;
        }
        this.step = 1;
        // console.log('selected', this.selected);
    };
    CreateProjectGroupComponent.prototype.confirmCreate = function () {
        var _this = this;
        // console.log('product', this.product);
        if (!this.product.name || !this.product.products_describe || !this.product.start_time || !this.product.end_time) {
            this.snackBar.open('请填写项目组相关内容！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            return;
        }
        var now = new Date(this.service.formatDate(new Date(), 1));
        // console.log('now', now);
        if (now > this.product.start_time) {
            this.snackBar.open('开始时间不能小于当前时间！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            return;
        }
        if (this.product.start_time >= this.product.end_time) {
            this.snackBar.open('开始时间不能大于或等于结束时间！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            return;
        }
        var qnum = 0;
        var num = 0;
        var consume_time = 0;
        this.assessments.forEach(function (item) {
            if (item.select) {
                qnum += item.num;
                num += 1;
                consume_time = item.consum_time;
            }
        });
        // console.log('amounts', this.amounts);
        this.product.user_id = this.UserID;
        this.product.start_time = this.startFormatDate;
        this.product.end_time = this.endFormatDate;
        this.product.assessments = this.selected.join(',');
        this.product.qnum = qnum;
        this.product.num = num;
        this.product.consum_time = consume_time;
        if (this.products && this.products.length) {
            this.product.products = this.products.join(',');
        }
        // console.log('report', this.report);
        this.service.createProduct(this.product).then(function (resp) {
            // console.log(resp);
            _this.service.postShopList(resp.id, _this.UserID, _this.report).then(function (res) {
                // console.log('res', res);
                _this.router.navigate(['/launch-evaluation/import-members', res.id]);
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    CreateProjectGroupComponent = __decorate([
        core_1.Component({
            selector: 'app-create-project-group',
            template: __webpack_require__(/*! ./create-project-group.component.html */ "./src/pages/launch-evaluation/create-project-group/create-project-group.component.html"),
            styles: [__webpack_require__(/*! ./create-project-group.component.scss */ "./src/pages/launch-evaluation/create-project-group/create-project-group.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            launch_evaluation_service_1.LaunchEvaluationService,
            project_management_service_1.ProjectManagementService,
            material_1.MatSnackBar])
    ], CreateProjectGroupComponent);
    return CreateProjectGroupComponent;
}());
exports.CreateProjectGroupComponent = CreateProjectGroupComponent;


/***/ }),

/***/ "./src/pages/launch-evaluation/import-members/import-members.component.html":
/*!**********************************************************************************!*\
  !*** ./src/pages/launch-evaluation/import-members/import-members.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row top\">\n  <div class=\"col col-auto hs\">\n    <span class=\"circle co\">√</span>配置组织架构\n  </div>\n  <div class=\"col\"><span class=\"line\"></span></div>\n  <div class=\"col col-auto hs\">\n    <span class=\"circle co\">√</span>产品选择(测评师)\n  </div>\n  <div class=\"col\"><span class=\"line\"></span></div>\n  <div class=\"col col-auto hs\">\n    <span class=\"circle co\">√</span>配置项目组\n  </div>\n  <div class=\"col\"><span class=\"line\"></span></div>\n  <div class=\"col col-auto\">\n    <span class=\"circle lb\">4</span>导入成员\n  </div>\n  <div class=\"col\"><span class=\"no-line\"></span></div>\n  <div class=\"col col-auto hs\">\n    <span class=\"circle b\">5</span>提交支付\n  </div>\n</div>\n<div class=\"f-container row\">\n  <div class=\"col col-auto left\">\n    <div class=\"row space-between\">\n      <img src=\"assets/img/list.png\">\n    </div>\n    <div class=\"con\">\n      <div class=\"p-b\">{{product?.name}}（<span class=\"c\">{{importData?.length}}人</span> /测评数 {{assessments?.length * importData?.length}}）</div>\n      <div>开始时间：{{product?.start_time | date: 'yyyy-MM-dd'}}</div>\n      <div>截止时间：{{product?.end_time | date: 'yyyy-MM-dd'}}</div>\n      <div class=\"p-b\">项目描述：{{product?.products_describe}}</div>\n      <div>所选产品：<span class=\"p\" *ngFor=\"let p of product?.products_list\">{{p?.name}}</span></div>\n      <div class=\"row\">\n        <div class=\"col col-auto\">所选量表：</div>\n        <div class=\"col col-auto\">\n          <div class=\"row\" *ngFor=\"let a of assessments\">\n            <span class=\"l-c\" [style.background]=\"a?.short_name?.color\">{{a?.short_name?.name}}</span>\n            <span class=\"l\">{{a?.name}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" [hidden]=\"true\">\n        <div class=\"col col-auto\">授权查看：</div>\n        <div class=\"col col-auto\">\n          <div class=\"row\">上级查看</div>\n          <div class=\"row\">李女士 <span class=\"lb\">（财务总监）</span></div>\n        </div>\n      </div>\n      <div>反馈形式：\n        <span>基础数据</span>\n        <span *ngIf=\"report == 0 || report > 1\">、基础报告</span>\n        <span *ngIf=\"report >= 1\">、咨询报告</span>\n      </div>\n      <div>结果测评师：\n        <span *ngIf=\"appraiser\">{{appraiser?.title}}</span>\n        <span *ngIf=\"!appraiser\">暂无</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col center \">\n    <div class=\"in\">\n      <input type=\"text\" placeholder=\"\">\n      <img src=\"assets/img/search.png\">\n    </div>\n    <button mat-button class=\"col col-auto btn\">添加成员</button>\n    <button mat-button class=\"col col-auto btn btn2\">批量删除</button>\n\n    <div class='row'>\n      <div class=\"col col-auto cho\" *ngFor = 'let l of importData; let i = index'>\n        <img class=\"pos\" src=\"assets/img/delete.png\" (click)=\"deleteUser(i)\">\n        <div class=\"tit\">{{l?.user.username}}</div>\n        <div class=\"js lb\">技术总监</div>\n        <div class=\"row por\">\n          <div class=\"col col-auto l-i\">\n            <img src=\"assets/img/printer.png\">\n          </div>\n          <div class=\"col lb\"> 基础报告</div>\n          <div class='col col-auto r-i'>\n            <img src=\"assets/img/automatic-1.png\">\n          </div>\n        </div>\n        <div class=\"row por\" ><!--(click)=\"showAppraiser = true\"-->\n          <div class=\"col col-auto l-d-i\">\n            <img src=\"assets/img/icon-4.png\">\n          </div>\n          <div class=\"col lb\" (click)=\"showAppraiser = true\">添加测评师</div>\n          <div class='col col-auto r-i'>\n            <img src=\"assets/img/automatic-1.png\">\n          </div>\n        </div>\n        <div class='row por'>\n          <div class=\"col col-auto\" *ngFor=\"let a of l?.assessments\">\n            <span class=\"l-c\" [style.background]=\"a?.short_name?.color\">{{a?.short_name?.name}}</span>\n          </div>\n          <div class=\"col\"></div>\n          <div class='col col-auto r-i' (click)=\"showReport = true\">\n            <span >更改产品</span>\n            <img src=\"assets/img/automatic-1.png\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col col-auto right\">\n    <div class=\"in ino\">\n      <input type=\"text\" placeholder=\"\">\n      <img src=\"assets/img/search.png\">\n    </div>\n    <div class=\"row btn-out\">\n      <div class=\"col s-btn btn\">组织架构</div>\n      <div class=\"col btn\">标签组</div>\n    </div>\n    <div >\n      <div class=\"row row-c\" [class.ysj]=isShow [class.xsj]=!isShow (click)=\"isShow=!isShow\">\n        <div class=\"col col-auto\">\n          <img class=\"pos\" src=\"assets/img/folder.png\">\n        </div>\n        <div class=\"col\">青龙智能（45）</div>\n        <!--<div class=\"col col-auto add top-a\">+</div>-->\n      </div>\n      <div class=\"row row-c list\" *ngFor=\"let item of users\"\n           (click)=\"addToImport(item)\"\n           (mouseenter)=\"item.showAdd = true\"\n           (mouseleave)=\"item.showAdd = false\">\n        <div class=\"col col-auto\">\n          <img src=\"assets/img/icon-4.png\">\n        </div>\n        <div class=\"col\" >{{item?.username}}</div>\n        <div class=\"col col-auto add\" *ngIf=\"item?.showAdd && !item?.added\" >+</div>\n        <div class=\"col col-auto add\" *ngIf=\"item?.added\">√</div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"window\" *ngIf='showAppraiser'>\n    <div class=\"cps\">\n      <div class=\"ce re\"> <span>测评师</span>\n        <div class=\"wrong cp\" >\n          <i class=\"material-icons\" (click)=\"showAppraiser=false\">close</i>\n        </div>\n      </div>\n      <div class=\"cen row\">\n        <div class=\"col col-auto cente\" [class.act]='num === i' *ngFor='let c of appraisers; let i = index' (click)=\"num = i\">\n          <img src=\"assets/img/doctor.jpg\" alt=\"\">\n          <div class=\"zj\">{{c?.title}}</div>\n          <div class=\"zy\">{{c?.short_description}}</div>\n          <div class=\"sp\"><span *ngFor=\"let l of c?.label\">{{l}}</span></div>\n        </div>\n      </div>\n      <div class=\"row ok\">\n        <div class=\"col col-auto com com1\" (click)=\"selectAppraiser(c)\">确定</div>\n        <div class=\"col col-auto com\"  (click)=\" showAppraiser=false\">取消</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"window\" *ngIf=showReport>\n    <div class=\"cps cps2\">\n      <div class=\"ce re\"> <span>所有产品</span>\n        <div class=\"wrong cp\" (click)=\"showReport = false\">\n          <i class=\"material-icons\" (click)=\" showAppraiser=false\">close</i>\n        </div>\n      </div>\n      <div class=\"cen \">\n        <div class=\"cp col col-auto\" *ngFor = 'let la of assessments'>\n          <span class=\"logo-sp\" [style.background]=\"la?.short_name?.color\">{{la?.short_name?.name}}</span>\n          <span >{{la?.name}}</span>\n          <input class=\"in\" type=\"checkbox\">\n        </div>\n      </div>\n      <div class=\"row ok\">\n        <div class=\"col col-auto com com1\" (click)=\"showReport = false\">确定</div>\n        <div class=\"col col-auto com\" (click)=\"showReport = false\">取消</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer row\">\n  <div class=\"col col-auto fot1\">\n    配置费用：<span class=\"font\">0</span> <span>元</span>\n  </div>\n  <div class=\"col col-auto\">\n    <button mat-button class=\"bt1\" (click)=\"backTo()\">上一步：配置项目组</button>\n    <button mat-button class=\"bt2\" (click)=\"importMembers()\">下一步：提交订单</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/import-members/import-members.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/pages/launch-evaluation/import-members/import-members.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\napp-import-members .cp {\n  cursor: pointer; }\napp-import-members .top {\n  width: calc(100% - 4rem);\n  margin: 0 auto;\n  margin-top: 100px;\n  justify-content: space-between; }\napp-import-members .top .circle {\n    justify-content: center;\n    align-items: center;\n    display: inline-flex;\n    height: 24px;\n    width: 24px;\n    border-radius: 100%;\n    margin-right: 0.2rem; }\napp-import-members .top .no-line {\n    width: 90%;\n    margin: 5%;\n    display: inline-block;\n    height: 2px;\n    background: #cccccc; }\napp-import-members .top .line {\n    width: 90%;\n    margin: 5%;\n    display: inline-block;\n    height: 2px;\n    background: #7e8fbc; }\napp-import-members .top .co {\n    color: #7e8fbc;\n    background: #ffffff;\n    border: 1px solid #7e8fbc; }\napp-import-members .top .lb {\n    color: #fff;\n    background: #7e8fbc;\n    border: 1px solid #7e8fbc; }\napp-import-members .top .hs {\n    color: #999; }\napp-import-members .top .bb {\n    background: #fff;\n    color: #7e8fbc;\n    border: 1px solid #7e8fbc; }\napp-import-members .top .b {\n    color: #999;\n    border: 1px solid #cdcdcd; }\napp-import-members .top .lb {\n    color: #fff;\n    background: #7e8fbc;\n    border: 1px solid #7e8fbc; }\napp-import-members .footer {\n  padding: 10px 2rem;\n  background: #fff;\n  margin-top: 10px;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0; }\napp-import-members .footer .fot1 span {\n    display: inline-flex;\n    color: red; }\napp-import-members .footer .fot1 .font {\n    font-size: 1.6rem; }\napp-import-members .footer .bt1 {\n    margin-right: 10px;\n    background: #fff;\n    color: #5a72a0;\n    border: 1px solid #5a72a0; }\napp-import-members .footer .bt2 {\n    background: #5a72a0;\n    color: #fff;\n    border: 1px solid #5a72a0; }\napp-import-members .f-container {\n  background: #fff;\n  width: calc(100% - 4rem);\n  margin: 30px 30px 80px 30px;\n  min-height: 100vh; }\napp-import-members .f-container .lb {\n    color: #999999; }\napp-import-members .f-container .c {\n    color: #5a72a0;\n    display: inline-flex; }\napp-import-members .f-container .in {\n    position: relative;\n    height: 50px;\n    line-height: 50px;\n    border-bottom: 1px solid #ccc; }\napp-import-members .f-container .in input {\n      border-radius: 15px;\n      padding-left: 35px;\n      background: #f5f5f5;\n      border: 0;\n      height: 30px;\n      line-height: 30px;\n      width: 280px; }\napp-import-members .f-container .in img {\n      position: absolute;\n      left: 10px;\n      top: 15px; }\napp-import-members .f-container .space-between {\n    justify-content: space-between;\n    padding: 20px 0 40px 0; }\napp-import-members .f-container .left, app-import-members .f-container .center {\n    border-right: 1px solid #b0b0b0; }\napp-import-members .f-container .l-c {\n    display: inline-block;\n    width: 36px;\n    height: 40px;\n    text-align: center;\n    line-height: 40px;\n    color: #ffffff; }\napp-import-members .f-container .l {\n    display: inline-block;\n    height: 40px;\n    line-height: 40px;\n    margin-left: 5px; }\napp-import-members .f-container .c-1 {\n    background: #3498ee; }\napp-import-members .f-container .c-2 {\n    background: #33ba99; }\napp-import-members .f-container .c-3 {\n    background: #e2ae38; }\napp-import-members .f-container .c-4 {\n    background: #f26458; }\napp-import-members .f-container .left {\n    color: #666666;\n    padding: 0 10px 0 30px;\n    width: 300px; }\napp-import-members .f-container .left div {\n      padding-bottom: 5px; }\napp-import-members .f-container .left .con .p {\n      margin-left: 10px; }\napp-import-members .f-container .p-b {\n    margin-top: 20px;\n    padding-bottom: 10px !important; }\napp-import-members .f-container .center {\n    padding: 5px 20px; }\napp-import-members .f-container .center .cho {\n      width: 270px;\n      margin-top: 20px;\n      border-radius: 5px;\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n      padding: 10px;\n      position: relative;\n      margin-right: 20px; }\napp-import-members .f-container .center .cho .js {\n        margin-bottom: 20px; }\napp-import-members .f-container .center .cho .tit {\n        margin-top: 30px; }\napp-import-members .f-container .center .cho .pos {\n        position: absolute;\n        top: 20px;\n        right: 20px; }\napp-import-members .f-container .center .cho .por {\n        width: 100%;\n        position: relative;\n        padding: 10px 0px; }\napp-import-members .f-container .center .cho .por img {\n          width: 16px;\n          height: 16px; }\napp-import-members .f-container .center .cho .por .l-i {\n          padding-right: 5px; }\napp-import-members .f-container .center .cho .por .l-d-i {\n          padding-right: 2px; }\napp-import-members .f-container .center .cho .por .l-d-i img {\n            width: 20px;\n            height: 20px; }\napp-import-members .f-container .center .cho .por .r-i {\n          cursor: pointer;\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          color: #5a72a0; }\napp-import-members .f-container .center .cho .por .r-i span {\n            margin-right: 10px; }\napp-import-members .f-container .center .cho .por .r-i img {\n            width: 10px;\n            height: 10px;\n            margin-right: 10px; }\napp-import-members .f-container .center .btn {\n      background: #fff;\n      margin-top: 20px;\n      margin-bottom: 20px;\n      color: #5a72a0;\n      border: 1px solid #5a72a0;\n      border-radius: 5px;\n      width: 110px;\n      height: 35px;\n      line-height: 35px; }\napp-import-members .f-container .center .btn2 {\n      margin-left: 20px;\n      color: red;\n      border-color: red; }\napp-import-members .f-container .right {\n    width: 300px; }\napp-import-members .f-container .right .ino {\n      border-bottom: 0;\n      padding: 0 10px;\n      margin: 10px 0; }\napp-import-members .f-container .right .ino img {\n        left: 20px; }\napp-import-members .f-container .right .btn-out {\n      border: 1px solid #5a72a0;\n      border-radius: 5px;\n      width: 80%;\n      margin: 0 auto; }\napp-import-members .f-container .right .btn-out .btn {\n        width: 90px;\n        color: #5a72a0;\n        border-radius: 5px;\n        background: #fff;\n        height: 100%; }\napp-import-members .f-container .right .btn-out .s-btn {\n        background: #5a72a0;\n        color: #ffffff; }\napp-import-members .f-container .right .row-c {\n      cursor: pointer;\n      position: relative;\n      justify-content: center;\n      width: 80%;\n      margin: 10px auto;\n      height: 30px;\n      line-height: 30px; }\napp-import-members .f-container .right .list {\n      padding-left: 20px; }\napp-import-members .f-container .right .top-a {\n      font-size: 2.5rem !important; }\napp-import-members .f-container .right .add {\n      color: #5a72a0;\n      font-size: 2rem;\n      font-weight: lighter;\n      cursor: pointer; }\napp-import-members .f-container .right .xsj::after {\n      position: absolute;\n      top: 50%;\n      left: -20px;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      content: '';\n      border-top: 6px solid #5a72a0;\n      border-left: 6px solid transparent;\n      border-right: 6px solid transparent; }\napp-import-members .f-container .right .ysj::after {\n      position: absolute;\n      top: 50%;\n      left: -20px;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      content: '';\n      border-top: 6px solid transparent;\n      border-left: 6px solid #5a72a0;\n      border-bottom: 6px solid transparent; }\napp-import-members .f-container .window {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 80px;\n    left: 0;\n    z-index: 999;\n    background: rgba(0, 0, 0, 0.6); }\napp-import-members .f-container .window .cps {\n      position: absolute;\n      top: 45%;\n      left: 50%;\n      -webkit-transform: translate(-45%, -50%);\n              transform: translate(-45%, -50%);\n      padding: 10px;\n      border-bottom: 1px solid #eee;\n      width: 800px;\n      background: #fff;\n      border-radius: 10px; }\napp-import-members .f-container .window .cps .re {\n        position: relative; }\napp-import-members .f-container .window .cps .re .wrong {\n          position: absolute;\n          top: 50%;\n          right: 20px;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%); }\napp-import-members .f-container .window .cps .ce {\n        border-bottom: 1px solid #eee;\n        padding: 10px;\n        margin-bottom: 20px; }\napp-import-members .f-container .window .cps .cen {\n        justify-content: center; }\napp-import-members .f-container .window .cps .cen .logo-sp {\n          width: 30px;\n          align-items: center;\n          height: 40px;\n          color: #fff;\n          margin-right: 10px;\n          justify-content: center;\n          display: inline-flex; }\napp-import-members .f-container .window .cps .cen .cp {\n          padding: 10px 10px 10px 20%;\n          position: relative; }\napp-import-members .f-container .window .cps .cen .cp img {\n            margin-right: 10px; }\napp-import-members .f-container .window .cps .cen .cp .in {\n            position: absolute;\n            top: 50%;\n            -webkit-transform: translateY(-50%);\n                    transform: translateY(-50%);\n            right: 24%; }\napp-import-members .f-container .window .cps .cen .act {\n          position: relative;\n          border: 1px solid #7e8fbc !important;\n          border-radius: 6px; }\napp-import-members .f-container .window .cps .cen .act::after {\n          position: absolute;\n          content: '√';\n          width: 25px;\n          top: 10px;\n          right: 10px;\n          height: 25px;\n          background: #7e8fbc;\n          color: #fff;\n          border-radius: 20px; }\napp-import-members .f-container .window .cps .cen .zj {\n          padding: 20px 0 0; }\napp-import-members .f-container .window .cps .cen .zy {\n          height: 88px;\n          text-align: left;\n          color: #a1a1a1;\n          padding: 10px 0 30px; }\napp-import-members .f-container .window .cps .cen .sp {\n          margin-bottom: 8px; }\napp-import-members .f-container .window .cps .cen .sp span {\n            display: inline-flex;\n            padding: 2px 10px;\n            border: 1px solid #7e8fbc;\n            color: #7e8fbc;\n            border-radius: 6px;\n            margin-right: 8px;\n            margin-bottom: 6px; }\napp-import-members .f-container .window .cps .cen .sp span:nth-child(2n) {\n              margin-right: 0; }\napp-import-members .f-container .window .cps .cen .cente {\n          width: 30%;\n          border: 1px solid #eee;\n          text-align: center;\n          justify-content: center;\n          margin-right: 20px;\n          box-shadow: 0 0 10px #ccc;\n          padding: 20px; }\napp-import-members .f-container .window .cps .cen .cente:last-child {\n            margin: 0; }\napp-import-members .f-container .window .cps .ok {\n        justify-content: center;\n        align-items: center;\n        margin: 80px 0 30px; }\napp-import-members .f-container .window .cps .ok .com {\n          cursor: pointer;\n          padding: 6px 34px;\n          border-radius: 6px;\n          margin-right: 20px;\n          border: 1px solid #eee; }\napp-import-members .f-container .window .cps .ok .com1 {\n          background: #7e8fbc;\n          color: #fff;\n          border: 0; }\napp-import-members .f-container .window .cps2 {\n      width: 480px; }\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/import-members/import-members.component.ts":
/*!********************************************************************************!*\
  !*** ./src/pages/launch-evaluation/import-members/import-members.component.ts ***!
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
var launch_evaluation_service_1 = __webpack_require__(/*! ../launch-evaluation.service */ "./src/pages/launch-evaluation/launch-evaluation.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ImportMembersComponent = /** @class */ (function () {
    function ImportMembersComponent(router, activatedRoute, service, snackBar) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.snackBar = snackBar;
        this.showAppraiser = false;
        this.showReport = false;
        this.num = 0;
        this.isShow = false;
        this.importData = [];
    }
    ImportMembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            // console.log('id', this.id);
            _this.service.getShopList(_this.id).then(function (shop) {
                // console.log('shop', shop);
                _this.report = shop.appraiser_title;
                // this.importData = JSON.parse(shop.detail.toString());
                // console.log('report', this.report);
                // if (this.report > 0) {
                _this.service.getAppraiserTitles().then(function (resp) {
                    // console.log('resp', resp);
                    _this.appraisers = resp;
                    _this.appraisers.forEach(function (a) {
                        a.label = a.label.split(',');
                    });
                }).catch(function (err) {
                    console.log(err);
                });
                // }
                _this.service.getProductByID(shop.product).then(function (resp) {
                    // console.log(resp);
                    _this.product = resp;
                    _this.service.getAssessmentsByProduct(resp.assessments).then(function (assessments) {
                        _this.assessments = assessments;
                        // console.log('ass', this.assessments)
                        _this.assessments.forEach(function (item) {
                            item.short_name = JSON.parse(item.short_name);
                        });
                        // console.log('assessments', this.assessments);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }).catch(function (err) {
                    console.log(err);
                });
            }).catch(function (err) {
                console.log(err);
            });
            // this.report = +params['report'];
            // console.log('id', this.productID);
        });
        this.getAllUsers();
    };
    // 获取所有用户
    ImportMembersComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.service.getAllUsers().then(function (resp) {
            _this.users = resp;
            // console.log('users', this.users);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ImportMembersComponent.prototype.selectAppraiser = function (a) {
    };
    ImportMembersComponent.prototype.addToImport = function (user) {
        user.added = true;
        this.importData.push({ user: user, assessments: this.assessments, appraiser_title: this.report });
        // console.log('importData', this.importData);
    };
    ImportMembersComponent.prototype.deleteUser = function (index) {
        this.importData[index].user.added = false;
        this.importData.splice(index, 1);
    };
    ImportMembersComponent.prototype.backTo = function () {
        // console.log('bb');
        window.history.back(-1);
    };
    ImportMembersComponent.prototype.importMembers = function () {
        var _this = this;
        // console.log('importData', this.importData);
        if (!this.importData.length) {
            this.snackBar.open('请选择成员导入！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            return;
        }
        var test = [];
        this.importData.forEach(function (data) {
            data.assessmentList = [];
            data.assessments.forEach(function (a) {
                data.assessmentList.push(a.id);
            });
            test.push({
                user: data.user.id, assessments: data.assessmentList.join(','),
                appraiser_title: data.appraiser_title
            });
        });
        // console.log('test', test);
        this.service.putShopList(this.id, JSON.stringify(test)).then(function (resp) {
            // console.log('resp', resp);
            _this.router.navigate(['/launch-evaluation/create-order', _this.id]);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ImportMembersComponent.prototype.goCom = function () {
        this.router.navigate(['/user-care/evaluation/product/product-com']);
    };
    ImportMembersComponent.prototype.goPayment = function () {
        this.router.navigate(['/user-care/evaluation/file/payment']);
    };
    ImportMembersComponent.prototype.goConfig = function () {
        this.router.navigate(['/launch-evaluation/import-members']);
    };
    ImportMembersComponent.prototype.goUpList = function () {
        this.router.navigate(['/launch-evaluation/create-order']);
    };
    ImportMembersComponent = __decorate([
        core_1.Component({
            selector: 'app-import-members',
            template: __webpack_require__(/*! ./import-members.component.html */ "./src/pages/launch-evaluation/import-members/import-members.component.html"),
            styles: [__webpack_require__(/*! ./import-members.component.scss */ "./src/pages/launch-evaluation/import-members/import-members.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            launch_evaluation_service_1.LaunchEvaluationService,
            material_1.MatSnackBar])
    ], ImportMembersComponent);
    return ImportMembersComponent;
}());
exports.ImportMembersComponent = ImportMembersComponent;


/***/ }),

/***/ "./src/pages/launch-evaluation/launch-evaluation.component.html":
/*!**********************************************************************!*\
  !*** ./src/pages/launch-evaluation/launch-evaluation.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"p-container\">\n  <div class=\"row row-end\">\n    <i class=\"iconfont icon-icon-\"></i>\n    <input class=\"in\" type=\"text\" >\n    <button class=\"btn\" (click)=\"toCreate()\">创建项目</button>\n  </div>\n  <div class=\"t-content\">\n    <div class=\"row row-bas\">\n      <h3>测评项目</h3>\n      丰富量表组合，直达测评目标\n    </div>\n    <div class=\"row nav-f\" >\n      <div class=\"col col-auto p-nav\" [class.p-act]= \"i === type \"  (click)=\" type = i\" *ngFor = 'let b of nav; let i = index'>\n        {{b.title}}\n      </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"type === 0\">\n      <div class=\"col col-auto box\" *ngFor = 'let item of brandData'>\n        <div class=\"title m-b\">{{item?.name}}</div>\n        <div class=\"row m-b\">\n          <div class=\"col col-auto six\">量表：</div>\n          <div class=\"col m-b\">\n            <div class=\"row\">\n              <span class=\"col col-auto\" *ngFor=\"let name of item?.assessments_list\">\n                <span class=\"sp\" >{{name?.name}}</span>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"m-b six\">测评师：\n          <span *ngFor=\"let a of appraisers; let i = index;\">\n            <span *ngIf=\"a?.id > item?.lowest_appraiser_title\">{{a?.title}}<span *ngIf=\"i + 1 < appraisers?.length\">/</span></span>\n          </span>\n        </div>\n        <div class=\"row m-b six\">\n          <div class=\"col col-auto\">适用人群：</div>\n          <span class=\"col col-auto\">{{item?.audiences}}</span>\n        </div>\n        <div class=\"row space-around\">\n          <div class=\"col col-auto\">\n\n            <div class=\"col col-auto b-c\"> <img src=\"assets/img/l-4.png\">共{{item?.num}}章 {{item?.qnum}}道 {{item?.consum_time / 60}}分钟</div>\n          </div>\n          <div class=\"col\"></div>\n          <button class=\"col col-auto btn b-btn\">查看详情</button>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"type === 1\">\n      <div class=\"col col-auto box\" *ngFor = 'let item of sceneData'>\n        <div class=\"title m-b\">{{item?.name}}</div>\n        <div class=\"row m-b\">\n          <div class=\"col col-auto six\">量表：</div>\n          <div class=\"col m-b\">\n            <div class=\"row\">\n              <span class=\"col col-auto\" *ngFor=\"let name of item?.assessments_list\">\n                <span class=\"sp\" >{{name?.name}}</span>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"m-b six\">测评师：\n          <span *ngFor=\"let a of appraisers; let i = index;\">\n            <span *ngIf=\"a?.id > item?.lowest_appraiser_title\">{{a?.title}}<span *ngIf=\"i + 1 < appraisers?.length\">/</span></span>\n          </span>\n        </div>\n        <div class=\"row m-b six\">\n          <div class=\"col col-auto\">适用人群：</div>\n          <span class=\"col col-auto\">{{item?.audiences}}</span>\n        </div>\n        <div class=\"row space-around\">\n          <img src=\"assets/img/l-4.png\">\n          <div class=\"col col-auto b-c\">共{{item?.num}}章 {{item?.qnum}}道 {{item?.consum_time / 60}}分钟</div>\n          <button class=\"btn b-btn\">查看详情</button>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"type === 2\">\n      <div class=\"col col-auto box\" *ngFor='let item of assessments'>\n        <div>\n          <div class=\"title m-b\">{{item?.name}}</div>\n          <div class=\"row m-b six\">\n            <div class=\"col col-auto\">适用人群：</div>\n            <span class=\"col col-auto\">{{item?.audiences}}</span>\n          </div>\n          <div class=\"row space-around\">\n            <img src=\"assets/img/l-4.png\" alt=\"\">\n            <div class=\"col col-auto b-c\">共{{item?.num}}章 {{item?.qnum}}道 {{item?.consum_time / 60}}分钟</div>\n            <button class=\"btn b-btn\">查看详情</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"type === 3\">\n      <div class=\"col col-auto box\" *ngFor = 'let item of recommendList'>\n        <div class=\"title m-b\">{{item?.name}}</div>\n        <div class=\"row m-b\">\n          <div class=\"col col-auto six\">量表：</div>\n          <div class=\"col m-b\">\n            <div class=\"row\">\n              <span class=\"col col-auto\" *ngFor=\"let name of item?.assessments_list\">\n                <span class=\"sp\" >{{name?.name}}</span>\n              </span>\n            </div>\n          </div>\n        </div>\n        <div class=\"m-b six\">测评师：\n          <span *ngFor=\"let a of appraisers; let i = index;\">\n            <span *ngIf=\"a?.id > item?.lowest_appraiser_title\">{{a?.title}}<span *ngIf=\"i + 1 < appraisers?.length\">/</span></span>\n          </span>\n        </div>\n        <div class=\"row m-b six\">\n          <div class=\"col col-auto\">适用人群：</div>\n          <span class=\"col col-auto\">{{item?.audiences}}</span>\n        </div>\n        <div class=\"row space-around\">\n          <div class=\"col col-auto\">\n            <img src=\"assets/img/l-4.png\">\n            <span class=\"col col-auto b-c\">共{{item?.num}}章 {{item?.qnum}}道 {{item?.consum_time / 60}}分钟</span>\n          </div>\n          <div class=\"col\"></div>\n          <button class=\"col col-auto btn b-btn\">查看详情</button>\n        </div>\n\n      </div>\n    </div>\n    <div>\n      <div class=\"row row-bas\">\n        <h3>咨询顾问团队</h3>\n        立足机构人才需求，提供个体发展性咨询\n      </div>\n      <div class=\"row bot\">\n        <div class=\"col col-auto w-30\" *ngFor = 'let f of appraisers'>\n          <div><img [src]=\"f?.image_url\"></div>\n          <div class=\"b-t b-tt\">{{f.title}}</div>\n          <div class=\"b-t b-c\">{{f?.short_description}}</div>\n          <div class=\"row cho\">\n            <div class=\"col col-auto\" *ngFor=\"let a of f?.label\">{{a}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/launch-evaluation.component.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/launch-evaluation/launch-evaluation.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-launch-evaluation .p-container {\n  background: #fff;\n  width: calc(100% - 4rem);\n  margin: 113px auto 0; }\n  app-launch-evaluation .p-container .six {\n    color: #666666; }\n  app-launch-evaluation .p-container .jsb {\n    justify-content: space-between; }\n  app-launch-evaluation .p-container .b-c {\n    color: #b0b0b0; }\n  app-launch-evaluation .p-container .b-c img {\n      margin-right: 10px; }\n  app-launch-evaluation .p-container .row-end {\n    position: relative;\n    justify-content: flex-end;\n    padding: 20px 60px 0 0; }\n  app-launch-evaluation .p-container .row-end .btn {\n      position: absolute;\n      top: 80px;\n      background: #7e8fbc;\n      color: #fff;\n      padding: 4px 16px; }\n  app-launch-evaluation .p-container .row-end .btn-l {\n      color: #7e8fbc;\n      border: 1px solid #7e8fbc;\n      background: #fff;\n      position: absolute;\n      right: 180px; }\n  app-launch-evaluation .p-container .row-end .iconfont {\n      position: absolute;\n      right: 260px;\n      top: 33px;\n      font-size: 22px;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n  app-launch-evaluation .p-container .in {\n    width: 240px;\n    border-radius: 20px;\n    background: #f5f5f5;\n    padding-left: 15px;\n    border: 0; }\n  app-launch-evaluation .p-container .t-content {\n    width: calc(100% - 360px);\n    margin: 0 auto; }\n  app-launch-evaluation .p-container .t-content .w-30 {\n      width: 25%;\n      text-align: center;\n      border: 1px solid #ccc;\n      border-radius: 6px;\n      margin-right: 20px;\n      padding: 20px 10px;\n      box-shadow: 0 0 10px #ccc; }\n  app-launch-evaluation .p-container .t-content .w-30 img {\n        width: 150px; }\n  app-launch-evaluation .p-container .t-content .w-30 .b-t {\n        padding: 10px; }\n  app-launch-evaluation .p-container .t-content .w-30 .b-tt {\n        font-size: 20px;\n        padding-top: 40px;\n        padding-bottom: 0; }\n  app-launch-evaluation .p-container .t-content .bot {\n      margin-top: 20px;\n      padding-bottom: 100px; }\n  app-launch-evaluation .p-container .t-content .cho {\n      padding: 6px;\n      justify-content: center;\n      width: 80%;\n      margin: 0 auto; }\n  app-launch-evaluation .p-container .t-content .cho div {\n        border: 1px solid #7e8fbc;\n        color: #7e8fbc;\n        border-radius: 6px;\n        padding: 2px 8px;\n        margin-right: 10px;\n        margin-bottom: 10px; }\n  app-launch-evaluation .p-container .t-content .space-around {\n      align-items: center; }\n  app-launch-evaluation .p-container .t-content .space-around img {\n        width: 19px;\n        height: 18px; }\n  app-launch-evaluation .p-container .t-content .row-bas {\n      padding: 30px 0 10px;\n      align-items: baseline;\n      color: #333; }\n  app-launch-evaluation .p-container .t-content .row-bas h3 {\n        margin-right: 1rem; }\n  app-launch-evaluation .p-container .t-content .nav-f {\n      margin-bottom: 20px; }\n  app-launch-evaluation .p-container .t-content .p-act {\n      color: #7e8fbc;\n      border-bottom: 1px solid #7e8fbc; }\n  app-launch-evaluation .p-container .t-content .p-nav {\n      padding: 10px;\n      margin-right: 2rem;\n      cursor: pointer; }\n  app-launch-evaluation .p-container .t-content .box {\n      padding: 20px;\n      margin-right: 20px;\n      margin-bottom: 20px;\n      border-radius: 6px;\n      box-shadow: 0 0 10px #ccc;\n      width: 30%; }\n  app-launch-evaluation .p-container .t-content .box .m-b {\n        margin-bottom: 20px; }\n  app-launch-evaluation .p-container .t-content .box .m-b .rz {\n          margin-top: 10px; }\n  app-launch-evaluation .p-container .t-content .box .sp {\n        border-radius: 6px;\n        padding: 2px 10px;\n        border: 1px solid  #7e8fbc;\n        color: #7e8fbc;\n        margin: 0 10px 10px 0; }\n  app-launch-evaluation .p-container .t-content .box span {\n        display: inline-flex; }\n  app-launch-evaluation .p-container .t-content .selected {\n      border: 1px solid #FE4B3E; }\n  app-launch-evaluation .p-container .t-content .b-btn {\n      background: #7e8fbc;\n      color: #fff;\n      padding: 2px 5px;\n      margin-left: 30px; }\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/launch-evaluation.component.ts":
/*!********************************************************************!*\
  !*** ./src/pages/launch-evaluation/launch-evaluation.component.ts ***!
  \********************************************************************/
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
var project_management_service_1 = __webpack_require__(/*! ../project-management/project-management.service */ "./src/pages/project-management/project-management.service.ts");
var launch_evaluation_service_1 = __webpack_require__(/*! ./launch-evaluation.service */ "./src/pages/launch-evaluation/launch-evaluation.service.ts");
var http_service_1 = __webpack_require__(/*! ../$services/http.service */ "./src/pages/$services/http.service.ts");
var auth_service_1 = __webpack_require__(/*! ../$services/auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
// @ts-ignore
var LaunchEvaluationComponent = /** @class */ (function () {
    function LaunchEvaluationComponent(router, pmServices, service, httpService) {
        this.router = router;
        this.pmServices = pmServices;
        this.service = service;
        this.httpService = httpService;
        this.type = 0;
        this.nav = [
            {
                title: '测评品牌'
            },
            {
                title: '适用场景'
            },
            {
                title: '所有量表'
            },
            {
                title: '历史测评项目'
            }
        ];
    }
    Object.defineProperty(LaunchEvaluationComponent.prototype, "url", {
        get: function () {
            return http_service_1.HttpService.URL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaunchEvaluationComponent.prototype, "UserID", {
        get: function () {
            return auth_service_1.AuthService.UserID;
        },
        enumerable: true,
        configurable: true
    });
    LaunchEvaluationComponent.prototype.ngOnInit = function () {
        if (this.UserID) {
            this.getRecommend();
            this.getAppraiserTitles();
            this.getAllAssessment();
            this.getScene();
            this.getBrand();
        }
    };
    // 获取推荐品牌
    LaunchEvaluationComponent.prototype.getBrand = function () {
        var _this = this;
        var data = { brand: 1, limit: 1000 };
        this.pmServices.getProductList(data).then(function (resp) {
            // console.log('resp', resp);
            _this.brandData = resp;
            // console.log('brandData', this.brandData);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取试用场景
    LaunchEvaluationComponent.prototype.getScene = function () {
        var _this = this;
        var data = { scene: 1, limit: 1000 };
        this.pmServices.getProductList(data).then(function (resp) {
            // console.log('resp', resp);
            _this.sceneData = resp;
            // console.log('getBrand', this.sceneData);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取历史测评项目
    LaunchEvaluationComponent.prototype.getRecommend = function () {
        var _this = this;
        var data = { user_id: this.UserID, brand: 0, scene: 0, limit: 1000 };
        this.pmServices.getProductList(data).then(function (resp) {
            // console.log('resp', resp);
            _this.recommendList = resp;
            // console.log('recommendList', this.recommendList);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取测评师等级
    LaunchEvaluationComponent.prototype.getAppraiserTitles = function () {
        var _this = this;
        this.service.getAppraiserTitles().then(function (resp) {
            _this.appraisers = resp;
            _this.appraisers.forEach(function (a) {
                a.label = a.label.split(',');
                a.image_url = _this.url + a.image_url;
            });
            console.log('appraisers', _this.appraisers);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取所有量表
    LaunchEvaluationComponent.prototype.getAllAssessment = function () {
        var _this = this;
        this.service.getAllAssessment().then(function (resp) {
            _this.assessments = resp;
            // console.log('assessments', this.assessments);
        }).catch(function (err) {
            console.log(err);
        });
    };
    LaunchEvaluationComponent.prototype.toCreate = function () {
        this.router.navigate(['/launch-evaluation/create-project-group']);
    };
    LaunchEvaluationComponent = __decorate([
        core_1.Component({
            selector: 'app-launch-evaluation',
            template: __webpack_require__(/*! ./launch-evaluation.component.html */ "./src/pages/launch-evaluation/launch-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./launch-evaluation.component.scss */ "./src/pages/launch-evaluation/launch-evaluation.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router, project_management_service_1.ProjectManagementService,
            launch_evaluation_service_1.LaunchEvaluationService,
            http_service_1.HttpService])
    ], LaunchEvaluationComponent);
    return LaunchEvaluationComponent;
}());
exports.LaunchEvaluationComponent = LaunchEvaluationComponent;


/***/ }),

/***/ "./src/pages/launch-evaluation/launch-evaluation.module.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/launch-evaluation/launch-evaluation.module.ts ***!
  \*****************************************************************/
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
var components_module_1 = __webpack_require__(/*! ../../components/components.module */ "./src/components/components.module.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var launch_evaluation_component_1 = __webpack_require__(/*! ./launch-evaluation.component */ "./src/pages/launch-evaluation/launch-evaluation.component.ts");
var create_project_group_component_1 = __webpack_require__(/*! ./create-project-group/create-project-group.component */ "./src/pages/launch-evaluation/create-project-group/create-project-group.component.ts");
var import_members_component_1 = __webpack_require__(/*! ./import-members/import-members.component */ "./src/pages/launch-evaluation/import-members/import-members.component.ts");
var create_order_component_1 = __webpack_require__(/*! ./create-order/create-order.component */ "./src/pages/launch-evaluation/create-order/create-order.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// @ts-ignore
var payment_component_1 = __webpack_require__(/*! ./payment/payment.component */ "./src/pages/launch-evaluation/payment/payment.component.ts");
var routeguard_service_1 = __webpack_require__(/*! ../$services/canActivate/routeguard.service */ "./src/pages/$services/canActivate/routeguard.service.ts");
var LaunchEvaluationModule = /** @class */ (function () {
    function LaunchEvaluationModule() {
    }
    LaunchEvaluationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                components_module_1.ComponentsModule,
                material_1.MatButtonModule,
                forms_1.FormsModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                material_1.MatRadioModule,
                material_1.MatCheckboxModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: launch_evaluation_component_1.LaunchEvaluationComponent,
                    },
                    {
                        path: 'create-project-group',
                        component: create_project_group_component_1.CreateProjectGroupComponent,
                    },
                    {
                        path: 'import-members/:id',
                        component: import_members_component_1.ImportMembersComponent,
                    },
                    {
                        path: 'create-order/:id',
                        component: create_order_component_1.CreateOrderComponent,
                    },
                    {
                        path: 'payment/:id',
                        component: payment_component_1.PaymentComponent,
                    },
                ])
            ],
            declarations: [launch_evaluation_component_1.LaunchEvaluationComponent, create_project_group_component_1.CreateProjectGroupComponent,
                import_members_component_1.ImportMembersComponent, create_order_component_1.CreateOrderComponent, payment_component_1.PaymentComponent],
            providers: [routeguard_service_1.RouteGuardService]
        })
    ], LaunchEvaluationModule);
    return LaunchEvaluationModule;
}());
exports.LaunchEvaluationModule = LaunchEvaluationModule;


/***/ }),

/***/ "./src/pages/launch-evaluation/launch-evaluation.service.ts":
/*!******************************************************************!*\
  !*** ./src/pages/launch-evaluation/launch-evaluation.service.ts ***!
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
var http_1 = __webpack_require__(/*! ../../services/http/http */ "./src/services/http/http.ts");
var LaunchEvaluationService = /** @class */ (function () {
    function LaunchEvaluationService(http) {
        this.http = http;
    }
    // 获取测评师等级
    LaunchEvaluationService.prototype.getAppraiserTitles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('appraisers', { id__gt: 0 }).then(function (resp) {
                resolve(resp.results);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取测评师
    LaunchEvaluationService.prototype.getAppraiser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('appraisers', { id: id }).then(function (resp) {
                resolve(resp.results[0]);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取所有量表
    LaunchEvaluationService.prototype.getAllAssessment = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('assessment', { status: 1 }).then(function (resp) {
                resolve(resp.results);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 选择量表创建产品
    LaunchEvaluationService.prototype.createProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('product', product).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 生成shoplist数据
    LaunchEvaluationService.prototype.postShopList = function (product_id, user_id, appraiser) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data;
            if (appraiser >= 0) {
                data = {
                    product: product_id,
                    user: user_id,
                    appraiser_title: appraiser
                };
            }
            else {
                data = {
                    product: product_id,
                    user: user_id
                };
            }
            _this.http.call('shopList', data).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取创建的产品
    LaunchEvaluationService.prototype.getProductByID = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('products', { id: id }).then(function (resp) {
                resolve(resp.results[0]);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取产品中的量表
    LaunchEvaluationService.prototype.getAssessmentsByProduct = function (assessments) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('assessment', {
                id__in: assessments,
                limit: 100
            }).then(function (resp) {
                resolve(resp.results);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取所有用户
    LaunchEvaluationService.prototype.getAllUsers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('companyUser').then(function (resp) {
                resolve(resp.results);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取shopList数据
    LaunchEvaluationService.prototype.getShopList = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('getShopList', { id: id }).then(function (resp) {
                resolve(resp.results[0]);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取导入用户数据
    LaunchEvaluationService.prototype.getShopListDetail = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('getShopListDetail', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 修改shopList数据
    LaunchEvaluationService.prototype.putShopList = function (id, detail) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('putShopList', { id: id, detail: detail }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 导入成员
    LaunchEvaluationService.prototype.importMembers = function (product_id, test) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('importMember', { product_id: product_id, test: test }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取导入成员
    LaunchEvaluationService.prototype.getUserTest = function (product_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('userTest', { product_id: product_id, limit: 1000 }).then(function (resp) {
                resolve(resp.results);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 创建订单
    LaunchEvaluationService.prototype.createOrder = function (product, shop) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('createOrder', {
                product: product,
                company_shop_list: shop
            }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取订单数据
    LaunchEvaluationService.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('companyOrder', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 确认支付状态
    LaunchEvaluationService.prototype.confirmOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('putOrder', { id: id, status: 1 }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 格式化时间
    LaunchEvaluationService.prototype.formatDate = function (date, full) {
        var time = new Date(date);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        month = month >= 10 ? month : '0' + month;
        var day = time.getDate();
        day = day >= 10 ? day : '0' + day;
        var hour = time.getHours();
        hour = hour >= 10 ? hour : '0' + hour;
        var minutes = time.getMinutes();
        minutes = minutes >= 10 ? minutes : '0' + minutes;
        var seconds = time.getSeconds();
        seconds = seconds >= 10 ? seconds : '0' + seconds;
        // console.log('year-month-day', year, month, day);
        if (!full) {
            return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
        }
        else {
            return year + '-' + month + '-' + day + ' ' + '00:00:00';
        }
    };
    LaunchEvaluationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], LaunchEvaluationService);
    return LaunchEvaluationService;
}());
exports.LaunchEvaluationService = LaunchEvaluationService;


/***/ }),

/***/ "./src/pages/launch-evaluation/payment/payment.component.html":
/*!********************************************************************!*\
  !*** ./src/pages/launch-evaluation/payment/payment.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pay-container\">\n  <div class=\"top\">\n    <div class=\"row item\">\n      <div class=\"col col-auto f-w\"><div class=\"p\">项目组名</div></div>\n      <!--<div class=\"col col-auto f-w\"><div class=\"p\">产品名</div></div>-->\n      <div class=\"col\">\n      <div class=\"row\">\n        <div class=\"col\">量表</div>\n        <div class=\"col\">数量</div>\n        <!--<div class=\"col\">结果反馈形式</div>-->\n        <div class=\"col\">价格</div>\n      </div>\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-auto f-w\"><div class=\"p\">{{order?.product?.name}}</div></div>\n      <!--<div class=\"col col-auto f-w\"><div class=\"p\">鸿途</div></div>-->\n      <div class=\"col\">\n        <div class=\"row\" *ngFor=\"let i of order?.detail_price?.assessments\">\n          <div class=\"col\">\n            <div >{{i?.name}}</div>\n          </div>\n          <div class=\"col\">\n            <div >{{i?.count}}</div>\n          </div>\n          <!--<div class=\"col\">-->\n            <!--<div >基础报告</div>-->\n          <!--</div>-->\n          <div class=\"col\">\n            <div >{{i?.sum_price}}</div>\n          </div>\n        </div>\n\n      </div>\n\n\n    </div>\n  </div>\n  <div class=\"top\">\n    <div class=\"row item\">\n      <div class=\"col col-auto f-w\"><div class=\"p\">反馈形式</div></div>\n      <div class=\"col\">\n        <div class=\"row\">\n          <div class=\"col\">量表</div>\n          <div class=\"col\">数量</div>\n          <!--<div class=\"col\">结果反馈形式</div>-->\n          <div class=\"col\">价格</div>\n        </div>\n\n      </div>\n    </div>\n    <div *ngIf=\"order?.detail_price?.reports && order?.detail_price?.reports?.length\">\n      <div class=\"row\" *ngFor=\"let i of order?.detail_price?.reports\">\n        <div class=\"col col-auto f-w\">\n          <div class=\"p\">\n            <span *ngIf=\"i?.appraiser_title_id === 0\">基础报告</span>\n            <span *ngIf=\"i?.appraiser_title_id > 0\">{{i?.title}}</span>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"row\" *ngFor=\"let i of i?.assessments\">\n            <div class=\"col\">\n              <div >{{i?.name}}</div>\n            </div>\n            <div class=\"col\">\n              <div >{{i?.count}}</div>\n            </div>\n            <div class=\"col\">\n              <div >{{i?.sum_price}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"!order?.detail_price?.reports || !order?.detail_price?.reports?.length\">\n      <div class=\"row\">\n        <div class=\"col col-auto f-w\">\n          <div class=\"p\">\n            <span >基础数据</span>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"row\" *ngFor=\"let i of order?.detail_price?.assessments\">\n            <div class=\"col\">\n              <div>{{i?.name}}</div>\n            </div>\n            <div class=\"col\">\n              <div>{{i?.count}}</div>\n            </div>\n            <div class=\"col\">\n              <div>0</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <div class=\"top pay-c\">\n    <div class=\"title\">选择支付方式</div>\n    <div class=\"m-c row\">\n      <div class=\"col col-auto m\">\n        <img src=\"assets/img/wx-pay.png\">\n      </div>\n      <div class=\"col col-auto m\">\n        <img src=\"assets/img/ali-pay.png\">\n      </div>\n    </div>\n  </div>\n  <div class=\"row footer\">\n    <div class=\"col\"></div>\n    <div class=\"col col-auto money\">合计：<span>{{order?.price}}</span>元</div>\n    <div class=\"col col-auto\">\n      <button mat-button (click)=\"confirm()\">确认支付</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/payment/payment.component.scss":
/*!********************************************************************!*\
  !*** ./src/pages/launch-evaluation/payment/payment.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-payment .pay-container {\n  width: 80%;\n  margin: 100px auto;\n  min-height: 100vh; }\n  app-payment .pay-container .top {\n    background: #FFFFFF;\n    text-align: center;\n    margin-bottom: 20px; }\n  app-payment .pay-container .top .p {\n      padding: 10px 0; }\n  app-payment .pay-container .top .item {\n      border-bottom: 1px solid #cccccc; }\n  app-payment .pay-container .top .row {\n      padding: 10px 0; }\n  app-payment .pay-container .top .row .f-w {\n        width: 150px; }\n  app-payment .pay-container .pay-c {\n    padding: 0 10px;\n    margin-bottom: 0; }\n  app-payment .pay-container .pay-c .title {\n      text-align: left;\n      padding: 10px 6px;\n      border-bottom: 1px solid #eeeeee; }\n  app-payment .pay-container .pay-c .m-c .col {\n      padding: 10px; }\n  app-payment .pay-container .pay-c .m-c .m img {\n      border: 1px solid #eeeeee; }\n  app-payment .pay-container .pay-c .m-c .m:hover img {\n      border: 1px solid #e4322e; }\n  app-payment .pay-container .footer {\n    background: #FFFFFF;\n    height: 50px;\n    line-height: 50px;\n    border-top: 1px solid #eeeeee;\n    width: 100%; }\n  app-payment .pay-container .footer .money {\n      color: #e4322e;\n      padding: 0 10px; }\n  app-payment .pay-container .footer .money span {\n        font-size: 1.5rem;\n        margin-right: 5px; }\n  app-payment .pay-container .footer button {\n      height: 40px;\n      line-height: 40px;\n      width: 100px;\n      background: #7e8fbc;\n      color: #FFFFFF;\n      font-weight: lighter; }\n"

/***/ }),

/***/ "./src/pages/launch-evaluation/payment/payment.component.ts":
/*!******************************************************************!*\
  !*** ./src/pages/launch-evaluation/payment/payment.component.ts ***!
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
var launch_evaluation_service_1 = __webpack_require__(/*! ../launch-evaluation.service */ "./src/pages/launch-evaluation/launch-evaluation.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(activateRoute, service, router, snackBar) {
        this.activateRoute = activateRoute;
        this.service = service;
        this.router = router;
        this.snackBar = snackBar;
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.id = +params['id'];
            // console.log('id', this.id);
            _this.service.getOrder(_this.id).then(function (resp) {
                _this.order = resp;
                console.log('order', _this.order);
            }).catch(function (err) {
                console.log(err);
            });
        });
    };
    // 确认支付
    PaymentComponent.prototype.confirm = function () {
        var _this = this;
        this.service.confirmOrder(this.id).then(function (resp) {
            console.log(resp);
            _this.snackBar.open('项目支付成功', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            setTimeout(function () {
                _this.router.navigate(['/launch-evaluation']);
            }, 1000);
        }).catch(function (err) {
            console.log(err);
        });
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/pages/launch-evaluation/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/pages/launch-evaluation/payment/payment.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            launch_evaluation_service_1.LaunchEvaluationService,
            router_1.Router,
            material_1.MatSnackBar])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;


/***/ })

}]);
//# sourceMappingURL=launch-evaluation-launch-evaluation-module.js.map