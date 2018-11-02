(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["management-management-module"],{

/***/ "./src/pages/management/blank/blank.component.html":
/*!*********************************************************!*\
  !*** ./src/pages/management/blank/blank.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"quality row\" >\n  <div class=\"col col-auto b-left\">\n    <img class=\"zs\" src=\"assets/img/l-3.png\" alt=\"\">\n    <div class=\"col b-con\">\n      <div class=\"b-title \"  [class.ysj] = 'n.open === false'\n           [class.xsj] = 'n.open === true'\n           [class.act2] = 'i === num'\n           *ngFor = 'let n of nav; let i = index'  >\n        <div class=\"n-div\" (click)=\"chose(i)\">\n          <img [src]=\"n.logo\" alt=\"\">\n          {{n.title}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"b-right\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/pages/management/blank/blank.component.scss":
/*!*********************************************************!*\
  !*** ./src/pages/management/blank/blank.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-blank .b-r {\n  border-right: 2px solid #8a93ab;\n  background: #a9b1c8; }\n\napp-blank .quality {\n  width: calc(100% - 4rem);\n  margin: 113px auto 0;\n  background: #fff;\n  border-radius: 10px; }\n\napp-blank .quality .b-left {\n    width: 320px;\n    border-right: 1px solid #999; }\n\napp-blank .quality .b-left .zs {\n      margin: 20px 0 20px 20px; }\n\napp-blank .quality .b-left .act2 {\n      background: #edf1fc;\n      color: #7e8fbc;\n      border-right: 1px solid #445279; }\n\napp-blank .quality .b-left .b-con {\n      margin-top: 20px;\n      margin-bottom: 40px; }\n\napp-blank .quality .b-left .b-con .b-title {\n        position: relative;\n        cursor: pointer;\n        padding: 16px 0; }\n\napp-blank .quality .b-left .b-con .b-title .n-div {\n          padding-left: 60px;\n          position: relative; }\n\napp-blank .quality .b-left .b-con .ysj::before {\n        content: '';\n        width: 10px;\n        height: 10px;\n        position: absolute;\n        left: 30px;\n        top: 18px;\n        border: 7px solid transparent;\n        border-left-color: #7e8fbc; }\n\napp-blank .quality .b-left .b-con .xsj::before {\n        content: '';\n        width: 10px;\n        height: 10px;\n        position: absolute;\n        left: 30px;\n        top: 18px;\n        border: 7px solid transparent;\n        border-top-color: #7e8fbc; }\n\napp-blank .quality .b-right {\n    width: calc(100% - 320px);\n    padding: 20px; }\n"

/***/ }),

/***/ "./src/pages/management/blank/blank.component.ts":
/*!*******************************************************!*\
  !*** ./src/pages/management/blank/blank.component.ts ***!
  \*******************************************************/
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
var BlankComponent = /** @class */ (function () {
    function BlankComponent(router) {
        this.router = router;
        this.num = 0;
        this.nav = [
            {
                open: false,
                title: '职位管理',
                logo: 'assets/img/folder.png',
                url: 'management',
                childrens: [
                    {
                        logo: 'assets/img/folder.png',
                        title: '技术一'
                    },
                    {
                        logo: 'assets/img/folder.png',
                        title: '技术二'
                    }
                ]
            },
            {
                open: false,
                logo: 'assets/img/folder.png',
                title: '权限管理',
                url: 'management/permission'
            }
        ];
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent.prototype.chose = function (i) {
        this.nav[i].open = !this.nav[i].open;
        this.num = i;
        this.router.navigate([this.nav[i].url]);
    };
    BlankComponent = __decorate([
        core_1.Component({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/pages/management/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/pages/management/blank/blank.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], BlankComponent);
    return BlankComponent;
}());
exports.BlankComponent = BlankComponent;


/***/ }),

/***/ "./src/pages/management/management.module.ts":
/*!***************************************************!*\
  !*** ./src/pages/management/management.module.ts ***!
  \***************************************************/
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
var blank_component_1 = __webpack_require__(/*! ./blank/blank.component */ "./src/pages/management/blank/blank.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var position_component_1 = __webpack_require__(/*! ./position/position.component */ "./src/pages/management/position/position.component.ts");
var permission_component_1 = __webpack_require__(/*! ./permission/permission.component */ "./src/pages/management/permission/permission.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ManagementModule = /** @class */ (function () {
    function ManagementModule() {
    }
    ManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatMenuModule,
                material_2.MatPaginatorModule,
                material_2.MatButtonModule,
                material_2.MatCheckboxModule,
                material_2.MatListModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: blank_component_1.BlankComponent,
                        children: [
                            {
                                path: '',
                                component: position_component_1.PositionComponent
                            },
                            {
                                path: 'permission',
                                component: permission_component_1.PermissionComponent
                            }
                        ]
                    }
                ])
            ],
            declarations: [blank_component_1.BlankComponent, position_component_1.PositionComponent, permission_component_1.PermissionComponent],
        })
    ], ManagementModule);
    return ManagementModule;
}());
exports.ManagementModule = ManagementModule;


/***/ }),

/***/ "./src/pages/management/management.service.ts":
/*!****************************************************!*\
  !*** ./src/pages/management/management.service.ts ***!
  \****************************************************/
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
var ManagementService = /** @class */ (function () {
    function ManagementService(http) {
        this.http = http;
    }
    // 。。。。。。。。。。。。。。。。。。。。权限。。。。。。。。。
    //获取职位管理
    ManagementService.prototype.getPositionList = function (offset) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('position', { offset: offset }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    //添加职位
    // @ts-ignore
    ManagementService.prototype.addPossition = function (postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('postPosition', postData).then(function (resp) {
                resolve(resp);
                console.log('data', resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 更改授权
    // @ts-ignore
    ManagementService.prototype.putPossition = function (putData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('putPosition', putData).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 。。。。。。。。。。。。。。。。。。。。。。职位。。。。。。。。。
    //获取权限管理
    ManagementService.prototype.getPermissionList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('permission').then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    ManagementService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ManagementService);
    return ManagementService;
}());
exports.ManagementService = ManagementService;


/***/ }),

/***/ "./src/pages/management/permission/permission.component.html":
/*!*******************************************************************!*\
  !*** ./src/pages/management/permission/permission.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"f-change\">\n  <div >\n    <div class=\"title\" >\n      <span>权限</span>\n    </div>\n    <div class=\"c-con row\">\n      <div class=\"col \" *ngFor = 'let p of peo; let i = index'>{{p.title}}</div>\n    </div>\n    <div class=\"f-content\">\n      <div class=\"row \">\n        <div class=\"col pd10 f-tit\" *ngFor = 'let p of peo[0].title1; let i = index'>{{p.title}}</div>\n      </div>\n      <div class=\"row f-cons\" *ngFor = 'let p of peo; let i = index'\n           [style.background]=\"i % 2  ? '#fffcfa': '#f8fafc' \">\n        <div class=\"col  pd10 \" *ngFor = 'let c of p.title2; let i = index'>{{c.title}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/management/permission/permission.component.scss":
/*!*******************************************************************!*\
  !*** ./src/pages/management/permission/permission.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-permission .f-change .title {\n  justify-content: space-between;\n  position: relative;\n  border-bottom: 1px solid #999;\n  align-items: center;\n  padding: 10px 20px;\n  margin-bottom: 20px; }\n  app-permission .f-change .title span {\n    display: inline-flex; }\n  app-permission .f-change .title input {\n    position: absolute;\n    right: 0;\n    width: 252px;\n    top: 0;\n    border-radius: 8px;\n    border: 1px solid #ccc;\n    padding-left: 10px; }\n  app-permission .f-change .bt1 {\n  color: #8f9bbc;\n  border-radius: 6px;\n  border: 1px solid #8f9bbc;\n  margin-right: 20px; }\n  app-permission .f-change .bt1:last-child {\n    margin-right: 0;\n    color: red;\n    border-color: red; }\n  app-permission .f-change .del {\n  border-color: Red;\n  color: red; }\n  app-permission .f-change .f-content {\n  margin: 20px 0;\n  border-radius: 8px; }\n  app-permission .f-change .f-content .ma {\n    background: #f8fafc;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  app-permission .f-change .f-content .pd10 {\n    padding: 20px 0;\n    border: 1px solid #eee; }\n  app-permission .f-change .f-content .f-tit {\n    text-align: center;\n    background: #f8fafc; }\n  app-permission .f-change .f-content .f-cons {\n    text-align: center;\n    background: #fffcfa;\n    align-items: center; }\n  app-permission .f-change .f-content .f-cons .icon-more::before {\n      font-size: 22px; }\n  app-permission .f-change .f-content .cz {\n    position: relative; }\n  app-permission .f-change .f-content .cz .btn1, app-permission .f-change .f-content .cz .btn2 {\n      position: absolute;\n      color: red; }\n  app-permission .f-change .f-content .cz .btn1 {\n      top: -25px; }\n  app-permission .f-change .f-content .cz .btn2 {\n      bottom: -25px; }\n"

/***/ }),

/***/ "./src/pages/management/permission/permission.component.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/management/permission/permission.component.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var management_service_1 = __webpack_require__(/*! ../management.service */ "./src/pages/management/management.service.ts");
var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(service) {
        this.service = service;
        this.more = false;
        this.peo = [
            {
                title1: [
                    {
                        title: '权限名称'
                    },
                    {
                        title: ''
                    },
                    {
                        title: ''
                    },
                    {
                        title: ''
                    },
                    {
                        title: ''
                    }
                ]
            },
            {
                title2: [
                    {
                        title: '项目管理'
                    },
                    {
                        title: '项目管理'
                    },
                    {
                        title: '项目管理'
                    },
                    {
                        title: '项目管理'
                    },
                    {
                        title: '项目管理'
                    }
                ],
            },
            {
                title2: [
                    {
                        title: '项目管理'
                    },
                    {
                        title: '项目管理'
                    },
                    {
                        title: '项目管理'
                    },
                    {
                        title: '项目管理'
                    },
                    {
                        title: '项目管理'
                    }
                ],
            },
        ];
    }
    PermissionComponent.prototype.ngOnInit = function () {
        console.log('peo', this.peo);
        //获取权限列表
        this.service.getPermissionList().then(function (resp) {
            // console.log('PermissionList', this.permissionList)
        });
    };
    PermissionComponent = __decorate([
        core_1.Component({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/pages/management/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.scss */ "./src/pages/management/permission/permission.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [management_service_1.ManagementService])
    ], PermissionComponent);
    return PermissionComponent;
}());
exports.PermissionComponent = PermissionComponent;


/***/ }),

/***/ "./src/pages/management/position/position.component.html":
/*!***************************************************************!*\
  !*** ./src/pages/management/position/position.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<script src=\"position.component.ts\"></script>-->\n<div class=\"f-change\">\n  <div>\n    <div class=\"title\">\n      <span>职位</span>\n    </div>\n    <div class=\"row addDiv\">\n      <button mat-button class=\"bt1 col col-auto\" (click)=\"open = !open\">添加职位</button>\n      <div class=\"col addtit\" *ngIf=\" open \">\n        <input class=\"addIn \" name=\"name\" [(ngModel)]=\" postData.name\" placeholder=\"职位\">\n        <input class=\"addIn \" name=\"company\" [(ngModel)]=\" postData.company\" placeholder=\"权限数\">\n        <input class=\"addIn \" name=\"permissions\" [(ngModel)]=\" permissions\" placeholder=\"公司\">\n        <button mat-button class=\"adbtn\" (click)=\"addPossition()\">确定</button>\n      </div>\n\n    </div>\n\n    <div class=\"c-con row\">\n      <div class=\"col \" *ngFor='let p of peo; let i = index'>{{p.title}}</div>\n    </div>\n    <div class=\"f-content\">\n\n      <div class=\"row \">\n        <mat-checkbox class=\"col ma\" disabled=\"q\"></mat-checkbox>\n        <div class=\"col pds f-tit\" *ngFor='let t of title1; let i = index'>{{t.title}}</div>\n      </div>\n\n\n      <div class=\"row pds f-cons\" *ngFor='let p of positionList?.results; let i = index'\n           [style.background]=\"i % 2  ? '#f8fafc': '#fffcfa' \">\n        <mat-checkbox class=\"col\" [checked]=\" i === cmun  \"></mat-checkbox>\n        <!--<div class=\"col \">{{p.name}}</div>-->\n        <!--<div class=\"col \">{{p.company}}</div>-->\n\n        <input class=\"col change\" [class.act]='i === cmun '\n               [disabled]=' i !== cmun  ' type=\"text\"\n               [(ngModel)]='p.name'>\n        <input class=\"col change\" [class.act]='i === cmun '\n               [disabled]=\" i !== cmun  \" type=\"text\"\n               [(ngModel)]='p.company'>\n\n        <div class=\"col cz\">\n          <i class=\"iconfont icon-more\" (click)=\"moreC(i)\"></i>\n          <div class=\"box\" *ngIf='i === cmun '>\n            <button class=\"btn2\" mat-button (click)=\"putPossition(p)\">更改授权人\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row p-foot\">\n    <span>当前页：{{pageIndex + 1}} </span>\n    <mat-paginator [length]=\"length\"\n                   [pageSize]=\"10\"\n                   [showFirstLastButtons]=true\n                   (page)=\" paginate($event)\"\n    >\n    </mat-paginator>\n  </div>\n  <!--。。。。。。。。。。。。。。。-->\n</div>\n<div class=\"twindow\" *ngIf='false'>\n  <div class=\"c-conter\">\n    <div class=\"win-div\">\n      <button mat-button class=\"sure\" (click)=\"openw = !openw\">确认</button>\n      <button mat-button class=\"shit\" (click)=\"openw = !openw\">取消</button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/pages/management/position/position.component.scss":
/*!***************************************************************!*\
  !*** ./src/pages/management/position/position.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-position .f-change .addDiv {\n  align-items: center; }\n  app-position .f-change .addDiv .addIn {\n    border-radius: 6px;\n    border: 1px solid #ccc;\n    padding: 2px;\n    text-align: center;\n    height: 37.2px;\n    margin-left: 80px; }\n  app-position .f-change .addDiv .adbtn {\n    color: red;\n    border: 1px solid red;\n    border-radius: 6px;\n    margin-left: 80px; }\n  app-position .f-change .title {\n  justify-content: space-between;\n  position: relative;\n  border-bottom: 1px solid #999;\n  align-items: center;\n  padding: 10px 20px;\n  margin-bottom: 20px; }\n  app-position .f-change .title span {\n    display: inline-flex; }\n  app-position .f-change .title input {\n    position: absolute;\n    right: 0;\n    width: 252px;\n    top: 0;\n    border-radius: 8px;\n    border: 1px solid #ccc;\n    padding-left: 10px; }\n  app-position .f-change .bt1 {\n  color: #8f9bbc;\n  border-radius: 6px;\n  border: 1px solid #8f9bbc;\n  margin-right: 20px; }\n  app-position .f-change .bt1:last-child {\n    margin-right: 0;\n    color: red;\n    border-color: red; }\n  app-position .f-change .f-content {\n  margin: 20px 0;\n  border-radius: 8px; }\n  app-position .f-change .f-content .ma {\n    background: #f8fafc;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  app-position .f-change .f-content .pds {\n    padding: 20px 0; }\n  app-position .f-change .f-content .f-tit {\n    text-align: center;\n    background: #f8fafc;\n    padding: 20px 0; }\n  app-position .f-change .f-content .f-cons {\n    text-align: center;\n    background: #fffcfa;\n    align-items: center; }\n  app-position .f-change .f-content .f-cons .icon-more::before {\n      font-size: 22px; }\n  app-position .f-change .f-content .f-cons .change {\n      text-align: center;\n      border: 0;\n      background: transparent; }\n  app-position .f-change .f-content .f-cons .act {\n      color: red; }\n  app-position .f-change .f-content .cz {\n    position: relative; }\n  app-position .f-change .f-content .cz .btn1, app-position .f-change .f-content .cz .btn2 {\n      position: absolute;\n      color: red; }\n  app-position .f-change .f-content .cz .btn2 {\n      bottom: 0px;\n      right: 60px; }\n  app-position .f-change .btn-end {\n  justify-content: flex-end; }\n  app-position .f-change .btn-end .pageb {\n    border: 1px solid #ccc;\n    border-radius: 6px;\n    background: #f1efef;\n    margin-left: 20px; }\n  app-position .f-change .btn-end .disbtn {\n    background: #fff;\n    color: #000; }\n  app-position .f-change .btn-end .lastB {\n    margin-left: 0;\n    border-radius: 0 6px 6px 0; }\n  app-position .f-change .btn-end .inB {\n    margin-left: 20px;\n    width: 100px; }\n  app-position .f-change .p-foot {\n  align-items: center;\n  font-size: 14px;\n  justify-content: flex-end; }\n  .twindow {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8); }\n  .twindow .c-conter {\n    width: 600px;\n    height: 600px;\n    position: relative;\n    border-radius: 6px;\n    border-color: #ccc;\n    background: #fff;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  .twindow .c-conter .win-div {\n      padding: 10px 0;\n      position: absolute;\n      bottom: 0;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n  .twindow .c-conter .win-div .sure {\n        background: #8f9bbc;\n        color: #fff;\n        border: 1px transparent;\n        border-radius: 6px;\n        margin-right: 10px; }\n  .twindow .c-conter .win-div .shit {\n        margin-left: 10px;\n        border: 1px solid #ccc;\n        border-radius: 6px; }\n"

/***/ }),

/***/ "./src/pages/management/position/position.component.ts":
/*!*************************************************************!*\
  !*** ./src/pages/management/position/position.component.ts ***!
  \*************************************************************/
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
var management_service_1 = __webpack_require__(/*! ../management.service */ "./src/pages/management/management.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var paginator_1 = __webpack_require__(/*! ../../$services/data/paginator */ "./src/pages/$services/data/paginator.ts");
var http_1 = __webpack_require__(/*! ../../../services/http/http */ "./src/services/http/http.ts");
var PositionComponent = /** @class */ (function () {
    function PositionComponent(service, matPaginatorIntl, snackBar, http) {
        this.service = service;
        this.matPaginatorIntl = matPaginatorIntl;
        this.snackBar = snackBar;
        this.http = http;
        //翻页
        this.length = 1;
        this.pageSize = 10;
        this.pageIndex = 0;
        //弹窗
        this.openw = false;
        this.active = false;
        this.open = false;
        this.cmun = -1;
        this.title1 = [
            {
                title: '职位'
            },
            {
                title: '权限数'
            },
            {
                title: '操作'
            }
        ];
        this.permissions = '';
        this.postData = {
            name: '',
            company: '',
            permissions: []
        };
        this.putData = {
            id: 0,
            name: '',
            company: '',
            permissions: []
        };
        this.matPaginatorIntl = new paginator_1.MyPaginator(this.matPaginatorIntl).setPaginator();
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        //获取职位列表
        this.service.getPositionList().then(function (resp) {
            _this.positionList = resp;
            // this.length = Math.ceil(this.positionList.count / 10);
            _this.length = resp.count;
            // console.log('length', this.length)
        });
    };
    // 添加职位
    PositionComponent.prototype.addPossition = function () {
        this.postData.permissions.push(this.permissions);
        if (!this.postData || !this.postData.name) {
            return this.snackBar.open('请填写完整', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
        }
        this.service.addPossition(this.postData).then(function (resp) {
        });
        this.open = !this.open;
        // console.log('blank',this.postData);
        this.postData = {};
        this.permissions = '';
    };
    ;
    PositionComponent.prototype.moreC = function (i) {
        this.cmun = i;
    };
    // 更改职位
    PositionComponent.prototype.putPossition = function (p) {
        var _this = this;
        this.putData = p;
        this.service.putPossition(this.putData).then(function (resp) {
            return _this.snackBar.open('更改成功', '', {
                duration: 2000,
                verticalPosition: 'top',
            });
        });
        // console.log('put', this.putData)
    };
    //翻页
    PositionComponent.prototype.paginate = function (event) {
        var _this = this;
        console.log('event', event);
        this.pageIndex = event.pageIndex;
        this.service.getPositionList((this.pageIndex) * 10).then(function (resp) {
            _this.positionList = resp;
        });
    };
    PositionComponent = __decorate([
        core_1.Component({
            selector: 'app-position',
            template: __webpack_require__(/*! ./position.component.html */ "./src/pages/management/position/position.component.html"),
            styles: [__webpack_require__(/*! ./position.component.scss */ "./src/pages/management/position/position.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [management_service_1.ManagementService,
            material_1.MatPaginatorIntl,
            material_1.MatSnackBar,
            http_1.Http])
    ], PositionComponent);
    return PositionComponent;
}());
exports.PositionComponent = PositionComponent;


/***/ })

}]);
//# sourceMappingURL=management-management-module.js.map