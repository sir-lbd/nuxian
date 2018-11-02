(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-management-project-management-module"],{

/***/ "./src/pages/project-management/project-management.component.html":
/*!************************************************************************!*\
  !*** ./src/pages/project-management/project-management.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<menu-page [menu]=\"menu\" [type]=\"'router'\">-->\n\n<!--</menu-page>-->\n<div class=\"page containers\">\n  <div class=\"row b-img\">\n    <div class=\"col col-4\">\n      <div class=\"tit\">\n        <h4>精益人才测评商用解决方案</h4>\n        <div class=\"bot\"></div>\n        <h5>只需两步，便捷管理精益测评项目！</h5>\n        <h5>真量表配合好专家才是商用好测评！</h5>\n        <div class=\"col text\">\n          <div>1.创建标准规范的组织成员素质档案。</div>\n          <div>2.配置量表、专家、报告形式等项目基本要素。</div>\n          <div>3.选择受测人员并提交生成订单。</div>\n          <div>4.监控测评项目进度并分析测评结果。</div>\n        </div>\n        <div class=\"row butt\">\n          <button mat-button class=\"btn bt1\">创建档案</button>\n          <button mat-button class=\" btn\">配置测评</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col com-col\">\n      <img class=\"computer\" src=\"assets/img/computer.png\">\n    </div>\n\n  </div>\n  <div class=\"contain\">\n    <div class=\"project\">\n      <div class=\"title row\">\n        <h2>项目管理</h2>\n        您所创建的项目都在这里\n      </div>\n      <div class=\"nav\">\n        <button mat-button class=\" cpp\" [class.cp]=types[0] (click)=\"types[0] = true\">测评中</button>\n        <button mat-button class=\"cpp\" [class.cp]=!types[0] (click)=\"getProduct(0); types[0] = false\">测评完成</button>\n        <button mat-button class=\"cpp por\" (click)=\"getProduct(1)\">查看更多</button>\n      </div>\n\n      <!--<div class=\"c-c\">-->\n      <!--<div class=\"wrapper\" data-anim=\"base wrapper\">-->\n      <!--<div class=\"circle\" data-anim=\"base left\"></div>-->\n      <!--<div class=\"circle\" data-anim=\"base right\"></div>-->\n      <!--</div>-->\n      <!--</div>-->\n\n\n      <div class=\"row out-list\">\n        <div class=\"list col col-auto\" *ngFor='let item of products'>\n          <div class=\"title \">{{item?.name}}</div>\n          <div class=\"i-c\">\n            <div class=\"date pad10 clb\"><img src=\"assets/img/l-3.png\"><span>{{item?.create_time | date: 'yyyy-MM-dd hh:mm:ss'}}</span>\n            </div>\n            <div class=\"date pad10 clb\"><img src=\"assets/img/l-2.png\"><span>{{item?.end_time| date: 'yyyy-MM-dd hh:mm:ss'}}</span>\n            </div>\n            <div class=\"text pad10\"><img src=\"assets/img/l-1.png\">{{item?.products_describe}}</div>\n          </div>\n          <div class=\"row cen\">\n            <div class=\"col col-auto\"  *ngFor='let l of [1,1,1,1]'>\n              <div class=\"circle\" >15%</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"contain\">\n    <div class=\"project\">\n      <div class=\"title row\">\n        <h2>咨询中心</h2>\n        专业产品与丰富咨询解决您不同需求\n      </div>\n      <div class=\"nav\">\n        <button mat-button class=\"cpp \" [class.cp]=types[1] (click)=\"types[1] = true\">产品交流</button>\n        <button mat-button class=\"cpp \" [class.cp]=!types[1] (click)=\"types[1] = false\">沙龙互动</button>\n      </div>\n      <div class=\"row out-list\">\n        <div class=\"col col-auto list item\" *ngFor='let l of news'>\n          <div class=\" row\">\n            <div class=\"col col-auto l-img\"><img [src]=\"l?.img\"></div>\n            <div class=\"col right\">\n              <div class=\"titles\">{{l?.title}}</div>\n              <div>{{l?.tips}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/project-management/project-management.component.scss":
/*!************************************************************************!*\
  !*** ./src/pages/project-management/project-management.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-project-management .containers .b-img {\n  color: #fff;\n  height: 570px;\n  width: 100%;\n  background-image: url(\"/assets/img/top-bg.png\");\n  background-size: 100% 100%; }\n  app-project-management .containers .b-img .com-col {\n    position: relative; }\n  app-project-management .containers .b-img .com-col .computer {\n      position: absolute;\n      bottom: -12%;\n      width: 80%;\n      right: 0; }\n  app-project-management .containers .b-img .tit {\n    padding: 90px 0 0 110px; }\n  app-project-management .containers .b-img .tit .text {\n      margin-top: 20px; }\n  app-project-management .containers .b-img .bot {\n    width: 80px;\n    margin: 20px 0;\n    border-bottom: 2px solid #fff; }\n  app-project-management .containers .b-img .butt {\n    margin-top: 40px; }\n  app-project-management .containers .b-img .butt button {\n      height: 40px;\n      line-height: 40px;\n      min-height: 30px !important;\n      border-radius: 5px; }\n  app-project-management .containers .b-img .butt .btn {\n      border: 1px solid #fff;\n      color: #fff;\n      background: transparent;\n      width: 9rem; }\n  app-project-management .containers .b-img .butt .bt1 {\n      margin-right: 20px; }\n  app-project-management .containers .contain {\n  position: relative;\n  margin-top: 9rem;\n  padding-left: 50px; }\n  app-project-management .containers .contain .project .l-img {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 200px;\n    height: 200px; }\n  app-project-management .containers .contain .project .title {\n    color: #333333;\n    align-items: baseline;\n    padding: 10px;\n    border-bottom: 1px solid #eeeeee; }\n  app-project-management .containers .contain .project .title h2 {\n      margin-right: 20px; }\n  app-project-management .containers .contain .project .i-c {\n    padding: 0 17px;\n    border-bottom: 1px solid #eee; }\n  app-project-management .containers .contain .project .nav {\n    position: relative;\n    margin: 10px 0; }\n  app-project-management .containers .contain .project .nav .cpp {\n      background: none;\n      padding: 10px 20px 10px 10px;\n      outline: none; }\n  app-project-management .containers .contain .project .nav .por {\n      position: absolute;\n      right: 20px;\n      border: 1px solid red;\n      border-radius: 6px;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      padding: 0;\n      color: red; }\n  app-project-management .containers .contain .project .nav .cp {\n      color: #5a72a0;\n      border-bottom: 1px solid #5a72a0; }\n  app-project-management .containers .contain .project .out-list {\n    margin-top: 20px; }\n  app-project-management .containers .contain .project .out-list .clb {\n      border-bottom: 1px solid #eeeeee; }\n  app-project-management .containers .contain .project .out-list .pad10 {\n      color: #989898;\n      padding: 10px 0; }\n  app-project-management .containers .contain .project .out-list .pad10 img {\n        margin-right: 10px; }\n  app-project-management .containers .contain .project .out-list .item {\n      width: 48%;\n      padding: 10px; }\n  app-project-management .containers .contain .project .out-list .list {\n      margin: 20px 20px 0 0;\n      border-radius: 5px;\n      box-shadow: 0 0 10px #ccc; }\n  app-project-management .containers .contain .project .out-list .list .row {\n        margin-bottom: 20px; }\n  app-project-management .containers .contain .project .out-list .list .right {\n        padding: 0 0 0 20px;\n        color: #989898; }\n  app-project-management .containers .contain .project .out-list .list .right .titles {\n          color: #333333;\n          align-items: baseline;\n          font-weight: 600;\n          font-size: 1.6rem;\n          padding: 10px; }\n  app-project-management .containers .contain .project .out-list .list .cen {\n        justify-content: space-around;\n        padding: 10px; }\n  app-project-management .containers .contain .project .out-list .list .cen .circle {\n          background: #edf1fc;\n          width: 40px;\n          height: 40px;\n          line-height: 40px;\n          text-align: center;\n          border-radius: 50%; }\n  app-project-management .containers .contain .project .out-list .list .po {\n        position: absolute;\n        bottom: 0; }\n  app-project-management .c-c {\n  width: 100%;\n  height: 100px; }\n  app-project-management .c-c .wrapper {\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    clip: rect(0px, 100px, 100px, 50px); }\n  app-project-management .c-c .circle {\n    width: 80px;\n    height: 80px;\n    border: 10px solid green;\n    border-radius: 50px;\n    position: absolute;\n    clip: rect(0px, 50px, 100px, 0px); }\n  app-project-management .c-c div[data-anim~=base] {\n    -webkit-animation-iteration-count: 1;\n    -webkit-animation-fill-mode: forwards;\n    -webkit-animation-timing-function: linear; }\n  app-project-management .c-c .wrapper[data-anim~=wrapper] {\n    -webkit-animation-duration: 0.01s;\n    -webkit-animation-delay: 3s;\n    -webkit-animation-name: close-wrapper; }\n  app-project-management .c-c .circle[data-anim~=left] {\n    -webkit-animation-duration: 6s;\n    -webkit-animation-name: left-spin; }\n  app-project-management .c-c .circle[data-anim~=right] {\n    -webkit-animation-duration: 3s;\n    -webkit-animation-name: right-spin; }\n  @-webkit-keyframes right-spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(180deg); } }\n  @-webkit-keyframes left-spin {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg); } }\n  @-webkit-keyframes close-wrapper {\n  to {\n    clip: rect(auto, auto, auto, auto); } }\n  app-project-management .full {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5); }\n  app-project-management .full .con {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background: #ffffff;\n    border-radius: 5px;\n    width: 500px; }\n  app-project-management .full .con .t {\n      text-align: center;\n      padding: 10px 0;\n      font-size: 1.3rem;\n      border-bottom: 1px solid #eeeeee; }\n  app-project-management .full .con .c {\n      padding: 30px 50px; }\n  app-project-management .full .con .b-c {\n      border-top: 1px solid #eee; }\n  app-project-management .full .con .b-c button {\n        width: 100%;\n        height: 50px;\n        border-radius: 0; }\n  app-project-management .full .con .b-c .cancel {\n        border-top: 1px solid #eeeeee;\n        color: #7e8fbc; }\n  app-project-management .full .con .b-c .confirm {\n        background: #7e8fbc;\n        color: #ffffff; }\n"

/***/ }),

/***/ "./src/pages/project-management/project-management.component.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/project-management/project-management.component.ts ***!
  \**********************************************************************/
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
var project_management_service_1 = __webpack_require__(/*! ./project-management.service */ "./src/pages/project-management/project-management.service.ts");
var auth_service_1 = __webpack_require__(/*! ../$services/auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
var ProjectManagementComponent = /** @class */ (function () {
    function ProjectManagementComponent(router, service) {
        this.router = router;
        this.service = service;
        this.types = [true, true];
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.news = [
            {
                title: '精准招聘',
                img: 'assets/img/news-1.png',
                tips: '认知+行为+性格+心理健康全方位评估,多种测评工具帮助企业精准识别人才，提高人才竞争力。多维度、自定义满足不同企业不同岗位需求'
            },
            {
                title: '鸿途、昂途',
                img: 'assets/img/news-2.png',
                tips: '鸿途、昂途是以心理学与人力资源实践为基础建立的一体化测评系统，适用于中高层人才选拔、晋升和配置工作。帮助企业科学看待人才，建立清晰高效的选拔标准，洞察员工价值与降低潜在风险。'
            },
            {
                title: '团队诊断',
                img: 'assets/img/news-3.png',
                tips: '多层级、多岗位人才管理测评工具，旨在对团队人才配置状况进行调查与盘点。帮助企业在招聘、关键岗位选拔与配置，以及高潜人才职业规划与发展做出决策。'
            },
        ];
        this.showAlert = false;
    }
    Object.defineProperty(ProjectManagementComponent.prototype, "UserID", {
        get: function () {
            return auth_service_1.AuthService.UserID;
        },
        enumerable: true,
        configurable: true
    });
    ProjectManagementComponent.prototype.ngOnInit = function () {
        if (this.UserID) {
            this.getProduct(0);
        }
    };
    // 获取产品列表
    ProjectManagementComponent.prototype.getProduct = function (type) {
        var _this = this;
        if (type === 0) {
            var data = { brand: 0, scene: 0, limit: 16, user_id: this.UserID };
            this.service.getProductList(data).then(function (resp) {
                // console.log('resp', resp);
                _this.products = resp;
            }).catch(function (err) {
                console.log(err);
            });
        }
        if (type === 1) {
            var data = { brand: 0, scene: 0, limit: 16, user_id: this.UserID };
            this.service.getProductList(data).then(function (resp) {
                // console.log('resp', resp);
                _this.products = resp;
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    ProjectManagementComponent.prototype.download = function () {
        this.showAlert = false;
        window.open('http://muxian-sms.wei7star.com/static/information.xlsx');
    };
    ProjectManagementComponent.prototype.toNext = function () {
        this.router.navigate(['/launch-evaluation']);
    };
    ProjectManagementComponent = __decorate([
        core_1.Component({
            selector: 'app-project-management',
            template: __webpack_require__(/*! ./project-management.component.html */ "./src/pages/project-management/project-management.component.html"),
            styles: [__webpack_require__(/*! ./project-management.component.scss */ "./src/pages/project-management/project-management.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router, project_management_service_1.ProjectManagementService])
    ], ProjectManagementComponent);
    return ProjectManagementComponent;
}());
exports.ProjectManagementComponent = ProjectManagementComponent;


/***/ }),

/***/ "./src/pages/project-management/project-management.module.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/project-management/project-management.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var components_module_1 = __webpack_require__(/*! ../../components/components.module */ "./src/components/components.module.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var project_management_component_1 = __webpack_require__(/*! ./project-management.component */ "./src/pages/project-management/project-management.component.ts");
var ProjectManagementModule = /** @class */ (function () {
    function ProjectManagementModule() {
    }
    ProjectManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                components_module_1.ComponentsModule,
                material_1.MatButtonModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: project_management_component_1.ProjectManagementComponent,
                    }
                ])
            ],
            declarations: [project_management_component_1.ProjectManagementComponent]
        })
    ], ProjectManagementModule);
    return ProjectManagementModule;
}());
exports.ProjectManagementModule = ProjectManagementModule;


/***/ })

}]);
//# sourceMappingURL=project-management-project-management-module.js.map