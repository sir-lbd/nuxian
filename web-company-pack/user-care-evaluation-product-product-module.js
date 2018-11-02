(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-care-evaluation-product-product-module"],{

/***/ "./src/pages/user-care/evaluation/product/product-com/product-com.component.html":
/*!***************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-com/product-com.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-com works!\n</p>\n\n<div class=\"com-container row\">\n  <div class=\"col col-auto left\">\n    <img class=\"c\" src=\"assets/img/back.png\" alt=\"\">\n    <div class=\"c \" [class.act] = 'com === 0' (click)=\"com = 0\"><img class=\"pl\" src=\"assets/img/back.png\"  >公司信息</div>\n    <div class=\"c \" [class.act] = 'com === 1' (click)=\"com = 1\"><img class=\"pl\" src=\"assets/img/back.png\"  >订单记录</div>\n  </div>\n\n  <div class=\"col col-auto right\">\n    <div class=\"row\" *ngIf = 'com === 0' >\n      <div class=\" tit\" *ngFor = 'let i = index;let x of sj1; ' [class.bo]=\"i === bot\" (click)=\"bot =i; com1 = i \" >{{x.tit}}</div>\n    </div>\n    <div class=\"row bot\" *ngIf = 'com === 1'>\n      <div class=\" tit\" *ngFor = 'let i = index;let x of [1]; ' [class.bo]=\"i === bot2\" (click)=\"bot2 =i; com1 = i \" >全部记录</div>\n    </div>\n    <div class=\" tip\" *ngIf = 'com === 0  '>\n      请完善以下信息方便我们更好的为您服务。\n    </div>\n    <div *ngIf = 'com === 1  ' class=\"dd\">\n      <div class=\" tip\" >\n        <span class=\"ddh\">下单时间：</span> <span>2018-12-12 23:12:00</span>\n        <span class=\"ddh\">订单号：</span> <span>59773294</span>\n        <img class=\"del\" src=\"assets/img/back.png\" >\n      </div>\n      <div class=\"row list\">\n        <div class=\"col\">鸿途评测</div>\n        <div class=\"col\">\n          <div>管理能力倾向</div>\n          <div>管理能力倾向</div>\n          <div>管理能力倾向</div>\n          <div>管理能力倾向</div>\n          <div>管理能力倾向</div>\n        </div>\n        <div class=\"col\">\n          <div>数量15</div>\n          <div>数量15</div>\n          <div>数量15</div>\n          <div>数量15</div>\n          <div>数量15</div>\n        </div>\n        <div class=\"col\">\n          <div>机打报告15</div>\n          <div>机打报告15</div>\n          <div>机打报告15</div>\n          <div>机打报告15</div>\n          <div>机打报告15</div>\n        </div>\n        <div class=\"col\">\n          <div>900元</div>\n          <div>900元</div>\n          <div>900元</div>\n          <div>900元</div>\n          <div>900元</div>\n        </div>\n        <div class=\"col\">查看详情</div>\n      </div>\n    </div>\n    <!--。。。。。。。。。。。第二个。。。。。。。。。。。。。。。。。。。-->\n    <div *ngIf = 'com === 1  ' class=\"dd dd2\">\n      <div class=\"row list\">\n        <div class=\"col\"><img src=\"assets/img/doctor.jpg\" alt=\"\"></div>\n        <div class=\"col space-b\">\n          <span>李小姐</span>\n          <span>专家</span>\n        </div>\n\n        <div class=\"col\">\n          <div>鸿途测评</div>\n        </div>\n        <div class=\"col \">\n          <div class=\"row space-b\"><span>数量15</span> <span>15</span></div>\n          <div class=\"row space-b\"><span>数量15</span> <span>15</span></div>\n          <div class=\"row space-b\"><span>数量15</span> <span>15</span></div>\n        </div>\n        <div class=\"col\">\n          <div>900元</div>\n          <div>900元</div>\n          <div>900元</div>\n        </div>\n        <div class=\"col\">\n          <div>查看详情</div>\n          <div>查看详情</div>\n          <div>查看详情</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"ch\" *ngIf = 'com !== 1'>\n      <button mat-button class=\"bt1\">保存</button>\n      <button mat-button class=\"bt2\">修改</button>\n    </div>\n    <!--................账号信息........................-->\n\n    <div *ngIf = 'com1 === 0 && com !== 1'>\n      <div class=\" car\">\n        <img src=\"assets/img/doctor.jpg\" alt=\"失敗\">\n        <div> 账号头像</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col col-auto input-left\">\n          <div class=\"row input-list\">\n            <span class=\"span\">账号昵称：</span>\n            <input type=\"text\" placeholder=\"昵称\">\n          </div>\n          <div class=\"row input-list\">\n            <span class=\"span\">账号：</span>\n            <input type=\"text\" placeholder=\"账号\">\n          </div>\n          <div class=\"row input-list up\">\n            <span class=\"span\">营业执照：</span>\n            <button mat-button>上传</button>\n          </div>\n        </div>\n        <div class=\"col col-auto input-left input-right\">\n          <div class=\"row input-list\">\n            <span class=\"span\">账号昵称：</span>\n            <input type=\"text\" placeholder=\"昵称\">\n          </div>\n          <div class=\"row input-list\">\n            <span class=\"span\">账号：</span>\n            <input type=\"text\" placeholder=\"账号\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--................公司信息........................-->\n    <div >\n      <div class=\"row\" *ngIf = 'com1 ===1'>\n        <div class=\"col col-auto input-left\">\n          <div class=\"row input-list\">\n            <span class=\"span\">公司名称：</span>\n            <input type=\"text\" placeholder=\"\">\n          </div>\n          <div class=\"row input-list\">\n            <span class=\"span\">联系人姓名：</span>\n            <input type=\"text\" placeholder=\"\">\n          </div>\n          <div class=\"row input-list\">\n            <span class=\"span\">联系人邮箱：</span>\n            <input type=\"text\" placeholder=\"\">\n          </div>\n          <div class=\"row input-list\">\n            <span class=\"span\">联系人电话：</span>\n            <input type=\"text\" placeholder=\"\">\n          </div>\n        </div>\n        <div class=\"col col-auto input-left input-right\">\n          <div class=\"row input-list\">\n            <span class=\"span\">公司规模：</span>\n            <select  >\n              <option value=\"青龙\">27</option>\n            </select>\n          </div>\n          <div class=\"row input-list\">\n            <span class=\"span\">公司地址：</span>\n            <select  >\n              <option value=\"青龙\">27</option>\n            </select>\n          </div>\n          <div class=\"row input-list\">\n            <span class=\"span\">所属行业：</span>\n            <select  >\n              <option value=\"青龙\">27</option>\n            </select>\n          </div>\n          <div class=\"row input-list\">\n            <span class=\"span\">公司类型：</span>\n            <select  >\n              <option value=\"青龙\">27</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"window\" *ngIf = false>\n    <div class=\"cen\">\n      <div class=\"tit\">\n        <span>修改密码</span>\n        <img src=\"assets/img/clock.png\">\n      </div>\n      <div class=\"row input-list\">\n        <span class=\"span\">原密码：</span>\n        <input type=\"text\" placeholder=\"\">\n      </div>\n      <div class=\"row input-list\">\n        <span class=\"span\">输入新密码：</span>\n        <input type=\"text\" placeholder=\"\">\n      </div>\n      <div class=\"row input-list\">\n        <span class=\"span\">重复新密码：</span>\n        <input type=\"text\" placeholder=\"\">\n      </div>\n      <div class=\"row input-list\">\n        <span class=\"span\">验证码：</span>\n        <input class = 'yzm' type=\"text\" placeholder=\"\">\n      </div>\n      <div class=\"row foot\">\n        <button mat-button class=\"btn1\">确认</button>\n        <button mat-button class=\"btn2\">取消</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-com/product-com.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-com/product-com.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-product-com .com-container {\n  background: #fff;\n  width: calc(100% - 4rem);\n  margin: 113px auto 0; }\n  app-product-com .com-container .space-b {\n    display: flex;\n    justify-content: space-around; }\n  app-product-com .com-container input, app-product-com .com-container select {\n    border-radius: 6px;\n    border: 1px solid #ccc;\n    padding-left: 10px;\n    width: 260px;\n    height: 28px; }\n  app-product-com .com-container .lb {\n    color: #999999; }\n  app-product-com .com-container .c {\n    cursor: pointer;\n    padding: 10px 0 10px 20px; }\n  app-product-com .com-container .pl {\n    margin-right: 40px; }\n  app-product-com .com-container .left {\n    padding: 10px 0 10px 0;\n    width: 320px; }\n  app-product-com .com-container .left .act {\n      color: #7e8fbc;\n      background: #edf1fc;\n      border-right: 1px solid blue; }\n  app-product-com .com-container .right {\n    width: calc(100% - 320px);\n    padding: 10px 0 10px 21px;\n    border-left: 1px solid #e5e5e5; }\n  app-product-com .com-container .right .bot {\n      border-bottom: 1px solid #eee; }\n  app-product-com .com-container .right .dd2 {\n      margin-top: 0 !important;\n      border-top: 0 !important;\n      margin-bottom: 200px; }\n  app-product-com .com-container .right .dd {\n      border: 1px solid #d4d4d4;\n      margin-top: 20px; }\n  app-product-com .com-container .right .dd .list {\n        align-items: center;\n        padding: 20px 50px; }\n  app-product-com .com-container .right .dd .list .col div {\n          padding: 8px 0; }\n  app-product-com .com-container .right .dd .list .col:last-child {\n          color: #c9bc9c;\n          cursor: pointer; }\n  app-product-com .com-container .right .tit {\n      padding: 20px;\n      cursor: pointer; }\n  app-product-com .com-container .right .bo {\n      border-bottom: 2px solid #5a72a0; }\n  app-product-com .com-container .right .tip {\n      position: relative;\n      top: -1px;\n      padding: 10px;\n      background: #f5f5f5;\n      border: 1px solid #ccc;\n      border-top: 2px solid #ccc;\n      border-right: 0; }\n  app-product-com .com-container .right .tip .ddh {\n        display: inline-flex;\n        margin-left: 40px; }\n  app-product-com .com-container .right .tip .del {\n        position: absolute;\n        right: 10px;\n        top: 10px; }\n  app-product-com .com-container .right .ch {\n      padding: 30px 0; }\n  app-product-com .com-container .right .ch .bt1 {\n        background: #f8f9fa;\n        margin-right: 20px;\n        color: #ccc; }\n  app-product-com .com-container .right .ch .bt2 {\n        color: #5a72a0;\n        border: 1px solid #5a72a0;\n        border-radius: 6px; }\n  app-product-com .com-container .right .car {\n      width: 91px;\n      color: #494949;\n      text-align: center; }\n  app-product-com .com-container .right .car img {\n        margin-bottom: 10px; }\n  app-product-com .com-container .right .input-right {\n      margin-left: 100px; }\n  app-product-com .com-container .right .input-left {\n      padding: 40px 0; }\n  app-product-com .com-container .right .input-left .span {\n        color: #494949;\n        display: inline-flex;\n        width: 100px; }\n  app-product-com .com-container .right .input-left .input-list {\n        margin-bottom: 20px;\n        align-items: center; }\n  app-product-com .com-container .right .input-left .input-list button {\n          background: #5a72a0;\n          color: #fff; }\n  app-product-com .com-container .window {\n    position: fixed;\n    top: 80px;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); }\n  app-product-com .com-container .window .cen {\n      border-radius: 10px;\n      background: #fff;\n      position: absolute;\n      top: 45%;\n      left: 50%;\n      -webkit-transform: translate(-45%, -50%);\n              transform: translate(-45%, -50%);\n      width: 500px;\n      height: 400px; }\n  app-product-com .com-container .window .cen .tit {\n        border-bottom: 1px solid #eee;\n        padding: 20px 20px 10px;\n        position: relative; }\n  app-product-com .com-container .window .cen .tit > img {\n          position: absolute;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          right: 4%; }\n  app-product-com .com-container .window .cen .input-list {\n        padding: 20px; }\n  app-product-com .com-container .window .cen .input-list span {\n          color: #666666;\n          display: inline-flex;\n          width: 140px; }\n  app-product-com .com-container .window .cen .input-list .yzm {\n          width: 100px; }\n  app-product-com .com-container .window .foot {\n      align-items: center;\n      justify-content: center; }\n  app-product-com .com-container .window .foot button {\n        border-radius: 6px; }\n  app-product-com .com-container .window .foot .btn1 {\n        background: #7e8fbc;\n        color: #fff;\n        margin-right: 20px; }\n  app-product-com .com-container .window .foot .btn2 {\n        border: 1px solid #eee; }\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-com/product-com.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-com/product-com.component.ts ***!
  \*************************************************************************************/
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
var ProductComComponent = /** @class */ (function () {
    function ProductComComponent() {
        this.com = 1;
        this.bot = 0;
        this.bot2 = 0;
        this.com1 = 0;
        this.sj1 = [
            {
                tit: '公司信息'
            },
            {
                tit: '账号信息'
            }
        ];
    }
    ProductComComponent.prototype.ngOnInit = function () {
    };
    ProductComComponent = __decorate([
        core_1.Component({
            selector: 'app-product-com',
            template: __webpack_require__(/*! ./product-com.component.html */ "./src/pages/user-care/evaluation/product/product-com/product-com.component.html"),
            styles: [__webpack_require__(/*! ./product-com.component.scss */ "./src/pages/user-care/evaluation/product/product-com/product-com.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ProductComComponent);
    return ProductComComponent;
}());
exports.ProductComComponent = ProductComComponent;


/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-import/product-import.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-import/product-import.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-import works!\n</p>\n\n<div class=\"i-container\">\n  <div class=\"top row\">\n    <div class=\"col col-auto\"><span class=\"lb\">1</span>配置组织架构-------------------</div>\n    <div class=\"col col-auto\"><span class=\"lb\">2</span>产品选择测评师-----------------</div>\n    <div class=\"col col-auto\"><span class=\"lb\">3</span>配置项目组---------------------</div>\n    <div class=\"col col-auto\"><span class=\"lb\">4</span>导入成员-------------------</div>\n  </div>\n  <div class=\"row set\">\n    <div class=\"col col-auto w120\">配置架构</div>\n    <div class=\"col col-auto pz pzz\">立即配置</div>\n    <div class=\"col col-auto pz\" >配置完成</div>\n  </div>\n  <div class=\"row set\">\n    <div class=\"col col-auto w120\">产品选择</div>\n    <div class=\"col col-auto pz \">鸿途</div>\n    <div class=\"col col-auto pz\" >青龙</div>\n  </div>\n  <div class=\"row textcon\">\n    <div class=\"col col-auto ch w120\">配置项目组</div>\n    <div class=\"col col-auto\">\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">项目组名称</div>\n        <input class=\"in\" type=\"text\" value=\"青龙智能能力提升项目组\">\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">开始时间</div>\n        <input class=\"in\" type=\"text\" value=\"2018-10-14\">\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">截止时间</div>\n        <input class=\"in\" type=\"text\" value=\"2018-10-31\">\n      </div>\n    </div>\n    <div class=\"col col-auto\">\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">结果反馈形式</div>\n        <input class=\"in\" type=\"text\" value=\"青龙智能能力提升项目组\">\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">授权查看</div>\n        <input class=\"in\" type=\"text\" value=\"青龙智能能力提升项目组\">\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">描述</div>\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"3\">青龙智能</textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"row set\">\n    <div class=\"col col-auto w120\">导入成员</div>\n    <div class=\"col\">\n      <div class=\"row mb\">\n        <div class=\"col col-auto pz \">立即配置</div>\n        <div class=\"col col-auto pz\" >40人</div>\n      </div>\n      <div class=\"row t pd\">\n        <div class=\"col first\">姓名</div>\n        <div class=\"col\">职位</div>\n        <div class=\"col\">量表组合</div>\n        <div class=\"col\">测评师</div>\n        <div class=\"col\">结果反馈形式</div>\n        <div class=\"col\">价格</div>\n      </div>\n      <div class=\"row pd\">\n        <div class=\"col first\">李先生</div>\n        <div class=\"col\">技术总监</div>\n        <div class=\"col\">管理能力倾向、16pf、动机、认知风格</div>\n        <div class=\"col\">高级测评师</div>\n        <div class=\"col\">基本报告</div>\n        <div class=\"col \"><span class=\"red\">20</span> 元</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row end\">\n    <span class=\"red\">合计</span><span class=\"size red\">900</span> <span class=\"red\">元</span> <span class=\"up\" (click)=\"goPay()\">提交订单</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-import/product-import.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-import/product-import.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-product-import .i-container {\n  width: calc(100% - 4rem);\n  margin: 80px auto 0; }\n  app-product-import .i-container .w120 {\n    width: 120px; }\n  app-product-import .i-container .red {\n    color: red; }\n  app-product-import .i-container .mb {\n    margin-bottom: 20px; }\n  app-product-import .i-container .pzz {\n    margin-right: 20px; }\n  app-product-import .i-container .pzz::after {\n    position: absolute;\n    top: 50%;\n    right: 3%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    content: '>';\n    color: #ccc; }\n  app-product-import .i-container .top {\n    justify-content: space-between; }\n  app-product-import .i-container .top span {\n      justify-content: center;\n      align-items: center;\n      display: inline-flex;\n      height: 24px;\n      width: 24px;\n      background: #7e8fbc;\n      border-radius: 100%;\n      margin-right: 0.2rem; }\n  app-product-import .i-container .top .lb {\n      color: #fff; }\n  app-product-import .i-container .set {\n    margin-top: 1rem;\n    border-radius: 6px;\n    background: #fff;\n    padding: 10px 10px 10px 30px; }\n  app-product-import .i-container .set .t {\n      background: #f8fafc; }\n  app-product-import .i-container .set .pd {\n      padding: 10px; }\n  app-product-import .i-container .set .first {\n      padding-left: 30px; }\n  app-product-import .i-container .set .pz {\n      position: relative;\n      border-radius: 6px;\n      border: 1px solid #ddd;\n      padding: 2px 20px;\n      margin-right: 20px; }\n  app-product-import .i-container .set .pz:last-child {\n        margin-right: 0; }\n  app-product-import .i-container .textcon {\n    padding-left: 30px;\n    padding-bottom: 30px;\n    background: #fff;\n    margin-top: 10px; }\n  app-product-import .i-container .textcon .t1 {\n      margin-top: 20px;\n      padding: 10px 0;\n      border-radius: 6px;\n      margin-right: 20px; }\n  app-product-import .i-container .textcon .tt {\n      width: 120px; }\n  app-product-import .i-container .textcon .in {\n      border: 1px solid #ccc;\n      border-radius: 6px;\n      padding-left: 20px;\n      padding-right: 50px; }\n  app-product-import .i-container .textcon .ch {\n      padding-top: 30px; }\n  app-product-import .i-container .textcon .tit {\n      padding: 10px;\n      cursor: pointer; }\n  app-product-import .i-container .textcon .ys {\n      border-bottom: 1px solid #7e8fbc;\n      color: #7e8fbc; }\n  app-product-import .i-container .textcon .ht {\n      padding: 2px 8px;\n      border: 1px solid #494949;\n      border-radius: 6px; }\n  app-product-import .i-container .end {\n    background: #fff;\n    margin-top: 10px;\n    align-items: baseline;\n    justify-content: flex-end; }\n  app-product-import .i-container .end span {\n      display: inline-flex; }\n  app-product-import .i-container .end .up {\n      cursor: pointer;\n      background: #7e8fbc;\n      color: #fff;\n      padding: 10px 30px;\n      margin-left: 20px; }\n  app-product-import .i-container .end .size {\n      font-size: 1.6rem;\n      font-weight: 600; }\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-import/product-import.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-import/product-import.component.ts ***!
  \*******************************************************************************************/
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
var ProductImportComponent = /** @class */ (function () {
    function ProductImportComponent(router) {
        this.router = router;
    }
    ProductImportComponent.prototype.ngOnInit = function () {
    };
    ProductImportComponent.prototype.goPay = function () {
        this.router.navigate(['/user-care/evaluation/product/product-pay']);
    };
    ProductImportComponent = __decorate([
        core_1.Component({
            selector: 'app-product-import',
            template: __webpack_require__(/*! ./product-import.component.html */ "./src/pages/user-care/evaluation/product/product-import/product-import.component.html"),
            styles: [__webpack_require__(/*! ./product-import.component.scss */ "./src/pages/user-care/evaluation/product/product-import/product-import.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ProductImportComponent);
    return ProductImportComponent;
}());
exports.ProductImportComponent = ProductImportComponent;


/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-list/product-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-list/product-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-list works!\n</p>\n\n<div class=\"l-container\">\n  <div class=\"top row\">\n    <div class=\"col col-auto\"><span class=\"lb\">1</span>配置组织架构-------------------</div>\n    <div class=\"col col-auto\"><span class=\"lb\">2</span>产品选择测评师-----------------</div>\n    <div class=\"col col-auto\"><span class=\"lb\">3</span>配置项目组---------------------</div>\n    <div class=\"col col-auto\"><span class=\"b\">4</span>导入成员-------------------</div>\n  </div>\n  <div class=\"row set\">\n    <div class=\"col col-auto\">配置架构</div>\n    <div class=\"col col-auto pz pzz\">立即配置</div>\n    <div class=\"col col-auto pz\" (click)=\" goImport()\">配置完成</div>\n  </div>\n  <div class=\"chose row\">\n    <div class=\"col col-auto ch\"> 产品选择</div>\n    <div class=\"col\">\n      <div class=\"row bot\">\n        <div class=\"col col-auto tit\" [class.ys] = 'lb === i' *ngFor = 'let p of pub; let i = index' (click)=\"lb = i\">{{p.title}}</div>\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col tt\">项目名称</div>\n        <div class=\"col\">量表组合</div>\n        <div class=\"col\">咨询级别</div>\n        <div class=\"col\">受众人群</div>\n        <div class=\"col\">版权费</div>\n        <div class=\"col\">信息服务费</div>\n        <div class=\"col\">操作</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"checkbox\">\n          鸿途\n        </div>\n        <div class=\"col\">管理能力倾向、动机、16pf</div>\n        <div class=\"col\">专家/高级咨询师</div>\n        <div class=\"col\">企业中高级人员/团队匹配分析</div>\n        <div class=\"col\">0元</div>\n        <div class=\"col\">9.9元</div>\n        <div class=\"col\">查看详情</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"checkbox\">\n          鸿途\n        </div>\n        <div class=\"col\">管理能力倾向、动机、16pf</div>\n        <div class=\"col\">专家/高级咨询师</div>\n        <div class=\"col\">企业中高级人员/团队匹配分析</div>\n        <div class=\"col\">0元</div>\n        <div class=\"col\">9.9元</div>\n        <div class=\"col\">查看详情</div>\n      </div>\n      <div class=\"row\">\n        <div>已选项目：</div>\n        <div class=\"col col-auto ht\">鸿途 <img src=\"../../../../../assets/img/clock.png\" alt=\"\"> </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row text\">\n    <div class=\"col col-auto ch\">测评师选择</div>\n    <div class=\"col\">\n      <div class=\"row t1\">\n        <div class=\"col tt\">测评等级</div>\n        <div class=\"col\">专业测评范围</div>\n        <div class=\"col\">简介</div>\n        <div class=\"col\">测评年限</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"checkbox\">\n          专家\n        </div>\n        <div class=\"col\">企业中高级管理人员、团队匹配分析</div>\n        <div class=\"col\">精准定位、细节分析高校测评</div>\n        <div class=\"col\">8年以上</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"checkbox\">\n          高级咨询师\n        </div>\n        <div class=\"col\">企业中高级管理人员、团队匹配分析</div>\n        <div class=\"col\">精准定位、细节分析高校测评</div>\n        <div class=\"col\">5年以上</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <input type=\"checkbox\">\n          咨询师\n        </div>\n        <div class=\"col\">企业中高级管理人员、团队匹配分析</div>\n        <div class=\"col\">精准定位、细节分析高校测评</div>\n        <div class=\"col\">2年以上</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row textcon\">\n    <div class=\"col col-auto ch\">配置项目组</div>\n    <div class=\"col col-auto\">\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">项目组名称</div>\n        <input class=\"in\" type=\"text\" value=\"青龙智能能力提升项目组\">\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">开始时间</div>\n        <input class=\"in\" type=\"text\" value=\"青龙智能能力提升项目组\">\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">截止时间</div>\n        <input class=\"in\" type=\"text\" value=\"青龙智能能力提升项目组\">\n      </div>\n    </div>\n    <div class=\"col col-auto\">\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">结果反馈形式</div>\n        <input class=\"in\" type=\"text\" value=\"青龙智能能力提升项目组\">\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">授权查看</div>\n        <input class=\"in\" type=\"text\" value=\"青龙智能能力提升项目组\">\n      </div>\n      <div class=\"row t1\">\n        <div class=\"col col-auto tt\">描述</div>\n        <textarea name=\"\" id=\"\" cols=\"30\" rows=\"3\">青龙智能</textarea>\n      </div>\n    </div>\n  </div>\n  <div class=\"im row\">\n      <div class=\"col col-auto imc\" (click)=\"goImport()\">确认创建并导入成员</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-list/product-list.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-list/product-list.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-product-list .l-container {\n  width: calc(100% - 4rem);\n  margin: 80px auto 40px; }\n  app-product-list .l-container .top {\n    justify-content: space-between; }\n  app-product-list .l-container .top span {\n      justify-content: center;\n      align-items: center;\n      display: inline-flex;\n      height: 24px;\n      width: 24px;\n      background: #7e8fbc;\n      border-radius: 100%;\n      margin-right: 0.2rem; }\n  app-product-list .l-container .top .lb {\n      color: #fff; }\n  app-product-list .l-container .top .b {\n      color: #494949;\n      border: 1px solid #494949;\n      background: none; }\n  app-product-list .l-container .set {\n    margin-top: 1rem;\n    border-radius: 6px;\n    background: #fff;\n    padding: 10px; }\n  app-product-list .l-container .set .pz {\n      position: relative;\n      border-radius: 6px;\n      border: 1px solid #ddd;\n      padding: 0 20px 0 10px; }\n  app-product-list .l-container .set .pzz {\n      margin-left: 40px;\n      margin-right: 20px; }\n  app-product-list .l-container .set .pzz::after {\n      position: absolute;\n      top: 50%;\n      right: 1%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      content: '>';\n      color: #ccc; }\n  app-product-list .l-container .chose {\n    background: #fff;\n    margin-top: 10px;\n    padding-bottom: 30px; }\n  app-product-list .l-container .chose .t1 {\n      margin-top: 20px;\n      padding: 10px 0;\n      border-radius: 6px;\n      background: #f8fafc; }\n  app-product-list .l-container .chose .tt {\n      padding-left: 20px; }\n  app-product-list .l-container .chose .ch {\n      padding: 10px;\n      margin-right: 20px; }\n  app-product-list .l-container .chose .tit {\n      padding: 10px;\n      cursor: pointer; }\n  app-product-list .l-container .chose .ys {\n      border-bottom: 1px solid #7e8fbc;\n      color: #7e8fbc; }\n  app-product-list .l-container .chose .ht {\n      padding: 2px 8px;\n      border: 1px solid #494949;\n      border-radius: 6px; }\n  app-product-list .l-container .text {\n    padding-bottom: 30px;\n    background: #fff;\n    margin-top: 10px; }\n  app-product-list .l-container .text .t1 {\n      margin-top: 20px;\n      padding: 10px 0;\n      border-radius: 6px;\n      background: #f8fafc; }\n  app-product-list .l-container .text .tt {\n      padding-left: 20px; }\n  app-product-list .l-container .text .ch {\n      padding: 10px;\n      margin-right: 20px;\n      margin-top: 20px; }\n  app-product-list .l-container .text .tit {\n      padding: 10px;\n      cursor: pointer; }\n  app-product-list .l-container .text .ys {\n      border-bottom: 1px solid #7e8fbc;\n      color: #7e8fbc; }\n  app-product-list .l-container .text .ht {\n      padding: 2px 8px;\n      border: 1px solid #494949;\n      border-radius: 6px; }\n  app-product-list .l-container .text .tt {\n      padding-left: 20px; }\n  app-product-list .l-container .textcon {\n    padding-bottom: 30px;\n    background: #fff;\n    margin-top: 10px; }\n  app-product-list .l-container .textcon .t1 {\n      margin-top: 20px;\n      padding: 10px 0;\n      border-radius: 6px; }\n  app-product-list .l-container .textcon .tt {\n      padding-left: 20px;\n      margin-right: 20px;\n      width: 120px; }\n  app-product-list .l-container .textcon .in {\n      border: 1px solid #ccc;\n      border-radius: 6px;\n      padding-left: 20px;\n      padding-right: 50px; }\n  app-product-list .l-container .textcon .ch {\n      padding: 10px;\n      margin-right: 20px;\n      margin-top: 20px; }\n  app-product-list .l-container .textcon .tit {\n      padding: 10px;\n      cursor: pointer; }\n  app-product-list .l-container .textcon .ys {\n      border-bottom: 1px solid #7e8fbc;\n      color: #7e8fbc; }\n  app-product-list .l-container .textcon .ht {\n      padding: 2px 8px;\n      border: 1px solid #494949;\n      border-radius: 6px; }\n  app-product-list .l-container .textcon .tt {\n      padding-left: 20px; }\n  app-product-list .l-container .im {\n    align-items: center;\n    justify-content: flex-end;\n    margin-top: 10px;\n    background: #fff; }\n  app-product-list .l-container .im .imc {\n      cursor: pointer;\n      background: #7e8fbc;\n      color: #fff;\n      padding: 10px; }\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-list/product-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-list/product-list.component.ts ***!
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
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(router) {
        this.router = router;
        this.lb = 0;
        this.pub = [
            {
                title: '推荐测评'
            },
            {
                title: '所有量表'
            },
            {
                title: '历史测评项目'
            }
        ];
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent.prototype.goImport = function () {
        this.router.navigate(['/user-care/evaluation/product/product-import']);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/pages/user-care/evaluation/product/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/pages/user-care/evaluation/product/product-list/product-list.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-pay/product-pay.component.html":
/*!***************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-pay/product-pay.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-pay works!\n</p>\n\n<div class=\"p-container\">\n  <div class=\"row r1\">\n    <div class=\"row pad pad1\">\n      <div class=\"col \">项目组名</div>\n      <div class=\"col \">产品名</div>\n      <div class=\"col \">量表</div>\n      <div class=\"col \">数量</div>\n      <div class=\"col \">结果反馈形式</div>\n      <div class=\"col \">价格</div>\n    </div>\n    <div class=\"row pad\">\n      <div class=\"col \">青龙智能能力测试</div>\n      <div class=\"col \">鸿途</div>\n      <div class=\"col \">\n        <div class=\"padc\" *ngFor = 'let s of [1,1,1,1]'>管理能力倾向</div>\n      </div>\n      <div class=\"col \">\n        <div class=\"padc\" *ngFor = 'let s of [1,1,1,1]'>15</div>\n      </div>\n      <div class=\"col \">\n        <div class=\"padc\" *ngFor = 'let j of [1,1,1,1]'>机打报告15</div>\n      </div>\n      <div class=\"col\">\n        <div class=\"padc\" *ngFor = 'let m of [1,1,1,1]'><span class=\"red\">900元</span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row r2\">\n    <div class=\"row pad pad1\">\n      <div class=\"col \">项目组名</div>\n      <div class=\"col \">测评师</div>\n      <div class=\"col \">姓名</div>\n      <div class=\"col \">等级</div>\n      <div class=\"col \">产品名称</div>\n      <div class=\"col \">量表</div>\n      <div class=\"col \">数量</div>\n      <div class=\"col \">价格</div>\n    </div>\n    <div class=\"row pad\">\n      <div class=\"col \">青龙智能能力测试</div>\n      <div class=\"col \">大卫</div>\n      <div class=\"col \">\n        <div class=\"padc\" >sumer</div>\n      </div>\n      <div class=\"col \">\n        <div class=\"padc\" >专家</div>\n      </div>\n      <div class=\"col \">\n        <div class=\"padc\" >鸿途</div>\n      </div>\n      <div class=\"col \">\n        <div class=\"padc\" *ngFor = 'let j of [1,1,1,1]'>机打报告15</div>\n      </div>\n      <div class=\"col \">\n        <div class=\"padc\" *ngFor = 'let s of [1,1,1,1]'>15</div>\n      </div>\n      <div class=\"col\">\n        <div class=\"padc\" *ngFor = 'let m of [1,1,1,1]'><span class=\"red\">900元</span></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row r3\">\n    <div class=\" pad\">\n      <div class=\"col \">选择支付方式</div>\n    </div>\n    <div class=\"row b\">\n      <div class=\"img col col-auto\">\n        <img src=\"assets/img/wx-pay.png\" alt=\"\">\n      </div>\n      <div class=\"img col col-auto\">\n        <img src=\"assets/img/ali-pay.png\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"row foot\">\n      合计： <span class=\"m\">3400</span> 元 <span class=\"pay\">确认支付</span>\n    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-pay/product-pay.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-pay/product-pay.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-product-pay .p-container {\n  width: 60%;\n  margin: 80px auto 0; }\n  app-product-pay .p-container .r1, app-product-pay .p-container .r2, app-product-pay .p-container .r3 {\n    background: #fff;\n    margin-bottom: 20px; }\n  app-product-pay .p-container .r1:last-child, app-product-pay .p-container .r2:last-child, app-product-pay .p-container .r3:last-child {\n      margin-bottom: 0; }\n  app-product-pay .p-container .pad {\n    width: 100%;\n    align-items: center;\n    padding: 20px; }\n  app-product-pay .p-container .pad1 {\n    border-bottom: 1px solid #ecedf1; }\n  app-product-pay .p-container .padc {\n    padding: 10px 10px 10px 0; }\n  app-product-pay .p-container .padc .red {\n      display: inline-flex;\n      color: red; }\n  app-product-pay .p-container .r3 .img {\n    margin-right: 20px;\n    border: 1px solid #d4d4d4; }\n  app-product-pay .p-container .r3 .img:last-child {\n      margin-right: 0; }\n  app-product-pay .p-container .r3 .b {\n    width: calc(100% - 40px);\n    margin: 0 auto;\n    padding-top: 30px;\n    border-top: 1px solid #ecedf1; }\n  app-product-pay .p-container .r3 .foot {\n    margin-top: 40px;\n    border-top: 1px solid #ecedf1;\n    width: 100%;\n    color: red;\n    align-items: baseline;\n    justify-content: flex-end; }\n  app-product-pay .p-container .r3 .m {\n    display: inline-flex;\n    font-size: 1.6rem; }\n  app-product-pay .p-container .r3 .pay {\n    position: relative;\n    top: -1px;\n    margin-left: 10px;\n    padding: 10px 30px;\n    display: inline-flex;\n    background: #7e8fbc;\n    color: #fff;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product-pay/product-pay.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product-pay/product-pay.component.ts ***!
  \*************************************************************************************/
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
var ProductPayComponent = /** @class */ (function () {
    function ProductPayComponent() {
    }
    ProductPayComponent.prototype.ngOnInit = function () {
    };
    ProductPayComponent = __decorate([
        core_1.Component({
            selector: 'app-product-pay',
            template: __webpack_require__(/*! ./product-pay.component.html */ "./src/pages/user-care/evaluation/product/product-pay/product-pay.component.html"),
            styles: [__webpack_require__(/*! ./product-pay.component.scss */ "./src/pages/user-care/evaluation/product/product-pay/product-pay.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], ProductPayComponent);
    return ProductPayComponent;
}());
exports.ProductPayComponent = ProductPayComponent;


/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product.module.ts":
/*!******************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var product_component_1 = __webpack_require__(/*! ./product/product.component */ "./src/pages/user-care/evaluation/product/product/product.component.ts");
var product_list_component_1 = __webpack_require__(/*! ./product-list/product-list.component */ "./src/pages/user-care/evaluation/product/product-list/product-list.component.ts");
var product_import_component_1 = __webpack_require__(/*! ./product-import/product-import.component */ "./src/pages/user-care/evaluation/product/product-import/product-import.component.ts");
var product_pay_component_1 = __webpack_require__(/*! ./product-pay/product-pay.component */ "./src/pages/user-care/evaluation/product/product-pay/product-pay.component.ts");
var product_com_component_1 = __webpack_require__(/*! ./product-com/product-com.component */ "./src/pages/user-care/evaluation/product/product-com/product-com.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: product_component_1.ProductComponent
                    },
                    {
                        path: 'product-list',
                        component: product_list_component_1.ProductListComponent
                    },
                    {
                        path: 'product-import',
                        component: product_import_component_1.ProductImportComponent
                    },
                    {
                        path: 'product-pay',
                        component: product_pay_component_1.ProductPayComponent
                    },
                    {
                        path: 'product-com',
                        component: product_com_component_1.ProductComComponent
                    }
                ])
            ],
            declarations: [product_component_1.ProductComponent, product_pay_component_1.ProductPayComponent, product_list_component_1.ProductListComponent, product_import_component_1.ProductImportComponent, product_com_component_1.ProductComComponent]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;


/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product/product.component.html":
/*!*******************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product/product.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"p-container\">\n  <div class=\"row row-end\">\n    <input class=\"in\" type=\"text\" placeholder=\"查询\">\n    <button class=\"btn\" *ngIf = 'act !== 2' (click)=\"goProductList()\">创建项目</button>\n    <button class=\"btn btn-l\" *ngIf = 'act == 2'>取消选择</button>\n    <button class=\"btn\" *ngIf = 'act == 2'>确认选择</button>\n  </div>\n  <div class=\"t-content\">\n    <div class=\"row row-bas\">\n      <h3>我们的测试产品</h3>\n      专业的组合项目节省您的时间\n    </div>\n    <div class=\"row nav-f\" >\n      <div class=\"col col-auto p-nav\" [class.p-act]= \"i === act \"  (click)=\" chose(i)\" *ngFor = 'let b of nav; let i = index'>\n        {{b.title}}\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col col-auto box\" *ngFor = 'let nav of [1,1,1,1,1,1]'>\n        <div class=\"title m-b\">鸿途</div>\n        <div class=\"row m-b\">\n          <div class=\"col col-auto six\">量表：</div>\n          <div class=\"col m-b\">\n            <div class=\"row jsb\">\n              <span class=\"sp\">管理能力倾向</span>\n              <span class=\"sp\">动向</span>\n              <span class=\"sp\">16pf</span>\n            </div>\n            <div class=\"rz row jsb\"><span class=\"sp\">认知行为风格</span></div>\n          </div>\n        </div>\n        <div class=\"m-b six\">测评师：专家、高级咨询师</div>\n        <div class=\"row m-b six\">\n          <div class=\"col col-auto\">受众：</div>\n           <span class=\"col col-auto\">企业中高级管理人员</span> 、<span class=\"col col-auto\">团队匹配分析</span>\n        </div>\n        <div class=\"row space-around\">\n          <img src=\"\" alt=\"\">\n          <div class=\"col col-auto b-c\">共8章 162道 1小时30分</div>\n          <button class=\"btn b-btn\">查看详情</button></div>\n      </div>\n    </div>\n    <div>\n      <div class=\"row row-bas\">\n        <h3>我们的测评师</h3>\n        专业的测评师为您精心测评\n      </div>\n      <div class=\"row bot\">\n        <div class=\"col col-auto w-30\" *ngFor = 'let f of text'>\n          <div><img [src]=\"f.img\" alt=\"\"></div>\n          <div class=\"b-t\">{{f.title}}</div>\n          <div class=\"b-t b-c\">{{f.con}}</div>\n          <div class=\"row cho\">\n            <div class=\"col col-auto\">宏伟专选</div>\n            <div class=\"col col-auto\">宏伟专选</div>\n            <div class=\"col col-auto\">宏伟专选</div>\n            <div class=\"col col-auto\">宏伟专选</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product/product.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product/product.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-product .p-container {\n  background: #fff;\n  width: calc(100% - 4rem);\n  margin: 113px auto 0; }\n  app-product .p-container .six {\n    color: #666666; }\n  app-product .p-container .jsb {\n    justify-content: space-between; }\n  app-product .p-container .b-c {\n    color: #b0b0b0; }\n  app-product .p-container .row-end {\n    position: relative;\n    justify-content: flex-end;\n    padding: 20px 60px 0 0; }\n  app-product .p-container .row-end .btn {\n      position: absolute;\n      top: 80px;\n      background: #7e8fbc;\n      color: #fff;\n      padding: 4px 16px; }\n  app-product .p-container .row-end .btn-l {\n      color: #7e8fbc;\n      border: 1px solid #7e8fbc;\n      background: #fff;\n      position: absolute;\n      right: 180px; }\n  app-product .p-container .in {\n    border-radius: 20px;\n    background: #f5f5f5;\n    padding-left: 5px;\n    border: 0; }\n  app-product .p-container .t-content {\n    width: calc(100% - 360px);\n    margin: 0 auto; }\n  app-product .p-container .t-content .w-30 {\n      width: 30%;\n      text-align: center;\n      border: 1px solid #ccc;\n      border-radius: 6px;\n      margin-right: 20px;\n      padding: 20px 10px;\n      box-shadow: 0 0 10px #ccc; }\n  app-product .p-container .t-content .w-30 .b-t {\n        padding: 10px; }\n  app-product .p-container .t-content .bot {\n      margin-top: 20px;\n      padding-bottom: 100px; }\n  app-product .p-container .t-content .cho {\n      padding: 6px;\n      justify-content: center;\n      width: 80%;\n      margin: 0 auto; }\n  app-product .p-container .t-content .cho div {\n        border: 1px solid #7e8fbc;\n        color: #7e8fbc;\n        border-radius: 6px;\n        padding: 2px 8px;\n        margin-right: 10px;\n        margin-bottom: 10px; }\n  app-product .p-container .t-content .space-around {\n      justify-content: space-around; }\n  app-product .p-container .t-content .row-bas {\n      padding: 30px 0 10px;\n      align-items: baseline;\n      color: #494949; }\n  app-product .p-container .t-content .row-bas h3 {\n        margin-right: 1rem; }\n  app-product .p-container .t-content .nav-f {\n      margin-bottom: 20px; }\n  app-product .p-container .t-content .p-act {\n      color: #7e8fbc;\n      border-bottom: 1px solid #7e8fbc; }\n  app-product .p-container .t-content .p-nav {\n      padding: 10px;\n      margin-right: 2rem;\n      cursor: pointer; }\n  app-product .p-container .t-content .box {\n      padding: 10px;\n      margin-right: 20px;\n      margin-bottom: 20px;\n      border-radius: 6px;\n      box-shadow: 0 0 10px #ccc; }\n  app-product .p-container .t-content .box .m-b {\n        margin-bottom: 10px; }\n  app-product .p-container .t-content .box .m-b .rz {\n          margin-top: 10px; }\n  app-product .p-container .t-content .box .sp {\n        border-radius: 6px;\n        padding: 2px 10px;\n        border: 1px solid  #7e8fbc;\n        color: #7e8fbc;\n        margin-right: 20px; }\n  app-product .p-container .t-content .box .sp:last-child {\n          margin: 0; }\n  app-product .p-container .t-content .box span {\n        display: inline-flex; }\n  app-product .p-container .t-content .b-btn {\n      background: #7e8fbc;\n      color: #fff;\n      padding: 2px 5px;\n      margin-left: 30px; }\n"

/***/ }),

/***/ "./src/pages/user-care/evaluation/product/product/product.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/product/product/product.component.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(router) {
        this.router = router;
        this.act = 0;
        this.text = [
            {
                img: '../../../../../assets/img/doctor.jpg',
                title: '专家',
                con: '更专业精准的测评'
            },
            {
                img: '../../../../../assets/img/doctor.jpg',
                title: '高级咨询师',
                con: '更好帮您测评'
            },
            {
                img: '../../../../../assets/img/doctor.jpg',
                title: '咨询师',
                con: '更专业的测评'
            }
        ];
        this.nav = [
            {
                title: '推荐测评'
            },
            {
                title: '测评品牌'
            },
            {
                title: '所有量表'
            },
            {
                title: '历史测评项目'
            }
        ];
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.chose = function (i) {
        this.act = i;
    };
    ProductComponent.prototype.goProductList = function () {
        this.router.navigate(['/user-care/evaluation/product/product-list']);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/pages/user-care/evaluation/product/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/pages/user-care/evaluation/product/product/product.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ })

}]);
//# sourceMappingURL=user-care-evaluation-product-product-module.js.map