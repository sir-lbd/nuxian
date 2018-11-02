(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quality-file-quality-file-module"],{

/***/ "./src/pages/my-dialog/my-dialog.component.html":
/*!******************************************************!*\
  !*** ./src/pages/my-dialog/my-dialog.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"config?.type === 1\">\n  <h1 mat-dialog-title>{{config.title}}</h1>\n  <div mat-dialog-content>\n    <input matInput [(ngModel)]=\"config.data\">\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">取消</button>\n    <button mat-button [mat-dialog-close]=\"config.data\" cdkFocusInitial>确定</button>\n  </div>\n</div>\n<div *ngIf=\"config?.type === 2\">\n  <h1 mat-dialog-title>{{config.title}}</h1>\n  <div mat-dialog-content>\n    <p>请选择架构</p>\n    <mat-list>\n      <mat-list-item class=\"row item\" [class.cover]=\"f.id === config?.select?.id\" *ngFor=\"let f of config?.framework\"\n                     (click)=\"selectItem(f)\">\n        <span class=\"col\">{{f?.name}}</span>\n        <span class=\"col col-auto\" *ngIf=\"f.id === config?.select?.id\">√</span>\n      </mat-list-item>\n    </mat-list>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">取消</button>\n    <button mat-button [mat-dialog-close]=\"config.select\" cdkFocusInitial>确定</button>\n  </div>\n</div>\n<div *ngIf=\"config?.type === 3\">\n  <h1 mat-dialog-title>{{config.title}}</h1>\n  <div mat-dialog-content>\n    <div class=\"row\">\n      <div class=\"col col-auto l-col\">\n        <div class=\"title\">架构成员列表</div>\n        <div class=\"per-frame\" *ngFor=\"let f of config?.framework\"\n                       (click)=\"selectFramework($event, f)\">\n          <div class=\"row item\">\n            <div class=\"col col-auto\" [class.img-c]=\"!f.select\" [class.select]=\"f.select\">\n              <img src=\"assets/img/folder.png\">\n            </div>\n            <span class=\"col\" >{{f?.name}}</span>\n          </div>\n          <mat-list class=\"row\" *ngIf=\"f?.id === members?.id\">\n            <mat-list-item class=\"row member\" *ngFor=\"let m of members?.members\" (click)=\"addToSelect(m)\">\n              <span class=\"col name\">{{m?.person_user?.name}}</span>\n              <span class=\"col col-auto\" *ngIf=\"array.indexOf(m?.id) >= 0\">√</span>\n            </mat-list-item>\n          </mat-list>\n        </div>\n      </div>\n      <div class=\"col col-auto l-col\">\n        <div class=\"title\">已选择成员</div>\n        <mat-list>\n          <mat-list-item class=\"row item\" *ngFor=\"let f of selectArray\">\n            <span class=\"col\">\n              <span *ngIf=\"f?.person_user?.name\">{{f?.person_user?.name}}</span>\n              <span *ngIf=\"!f?.person_user?.name\">{{f?.name}}</span>\n            </span>\n            <div class=\"col col-auto\">\n              <img src=\"assets/img/delete.png\" (click)=\"deleteMember(f)\">\n            </div>\n          </mat-list-item>\n        </mat-list>\n      </div>\n    </div>\n\n  </div>\n  <div mat-dialog-actions class=\"row\">\n    <button mat-button class=\"col\" (click)=\"onNoClick()\">取消</button>\n    <button mat-button class=\"col\" [mat-dialog-close]=\"array\" cdkFocusInitial>确定</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/my-dialog/my-dialog.component.scss":
/*!******************************************************!*\
  !*** ./src/pages/my-dialog/my-dialog.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-my-dialog .item:hover {\n  background: #eeeeee; }\n\napp-my-dialog .cover {\n  background: #eeeeee; }\n\napp-my-dialog .mat-dialog-container {\n  height: 50vh !important; }\n\napp-my-dialog .l-col {\n  width: 200px;\n  position: relative;\n  border: 1px solid #eeeeee;\n  border-radius: 3px; }\n\napp-my-dialog .l-col .title {\n    padding: 10px;\n    text-align: center; }\n\napp-my-dialog .l-col .per-frame {\n    padding: 10px 5px 10px 20px; }\n\napp-my-dialog .l-col .per-frame .member:hover {\n      cursor: pointer;\n      background: #eeeeee; }\n\napp-my-dialog .l-col .item {\n    cursor: pointer;\n    position: relative;\n    padding: 10px 5px; }\n\napp-my-dialog .l-col .img-c::after {\n    position: absolute;\n    top: 50%;\n    left: -20px;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    content: '';\n    border-top: 6px solid transparent;\n    border-left: 6px solid #5a72a0;\n    border-bottom: 6px solid transparent; }\n\napp-my-dialog .l-col .select::after {\n    position: absolute;\n    top: 50%;\n    left: -20px;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    content: '';\n    border-right: 6px solid transparent;\n    border-top: 6px solid #5a72a0;\n    border-left: 6px solid transparent; }\n"

/***/ }),

/***/ "./src/pages/my-dialog/my-dialog.component.ts":
/*!****************************************************!*\
  !*** ./src/pages/my-dialog/my-dialog.component.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var quality_file_service_1 = __webpack_require__(/*! ../quality-file/quality-file.service */ "./src/pages/quality-file/quality-file.service.ts");
var DialogData = /** @class */ (function () {
    function DialogData() {
    }
    return DialogData;
}());
var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialogRef, config, service) {
        this.dialogRef = dialogRef;
        this.config = config;
        this.service = service;
    }
    MyDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dialogRef.afterOpen().subscribe(function (resp) {
            // console.log(this.dialogRef._containerInstance._config.data);
            _this.config = _this.dialogRef._containerInstance._config.data;
            _this.selectArray = [];
            _this.array = [];
            console.log('config', _this.config);
            if (_this.config && _this.config.label) {
                _this.getLabelsMembers(_this.config.label);
            }
        });
    };
    // 获取标签组成员
    MyDialogComponent.prototype.getLabelsMembers = function (id) {
        var _this = this;
        this.service.labelMembers(id).then(function (resp) {
            console.log('resp', resp);
            var members = resp.leaders.concat(resp.staffs);
            console.log('members', members);
            members.forEach(function (m) {
                _this.array.push(m.id);
                _this.selectArray.push(m);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    MyDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MyDialogComponent.prototype.selectItem = function (item) {
        this.config.select = item;
        // console.log('select', this.config.select);
    };
    MyDialogComponent.prototype.selectFramework = function (event, f) {
        var _this = this;
        this.config.framework.forEach(function (frame) {
            frame.select = false;
        });
        f.select = !f.select;
        var cList = event.target.classList;
        // console.log('cList', cList);
        if (!cList.contains('name')) {
            this.service.personUsers(f.id).then(function (resp) {
                _this.members = resp;
                // console.log('members', this.members);
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    MyDialogComponent.prototype.addToSelect = function (f) {
        var _this = this;
        // console.log(f);
        if (this.array.indexOf(f.id) < 0) {
            this.selectArray.push(f);
            this.array.push(f.id);
        }
        else {
            this.selectArray.forEach(function (a, index) {
                if (f.id === a.id) {
                    _this.selectArray.splice(index, 1);
                }
            });
            this.array.forEach(function (a, index) {
                if (f.id === a) {
                    _this.array.splice(index, 1);
                }
            });
        }
        // console.log('array', this.array);
        // console.log('selectArray', this.selectArray);
    };
    MyDialogComponent.prototype.deleteMember = function (f) {
        var _this = this;
        this.selectArray.forEach(function (a, index) {
            if (f.id === a.id) {
                _this.selectArray.splice(index, 1);
            }
        });
        this.array.forEach(function (a, index) {
            if (f.id === a) {
                _this.array.splice(index, 1);
            }
        });
    };
    MyDialogComponent = __decorate([
        core_1.Component({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/pages/my-dialog/my-dialog.component.html"),
            styles: [__webpack_require__(/*! ./my-dialog.component.scss */ "./src/pages/my-dialog/my-dialog.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            DialogData,
            quality_file_service_1.QualityFileService])
    ], MyDialogComponent);
    return MyDialogComponent;
}());
exports.MyDialogComponent = MyDialogComponent;


/***/ }),

/***/ "./src/pages/quality-file/blank/blank.component.html":
/*!***********************************************************!*\
  !*** ./src/pages/quality-file/blank/blank.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quality row\">\n  <div class=\"col col-auto b-left\">\n    <!--<img class=\"zs\" src=\"assets/img/l-3.png\" alt=\"\">-->\n    <div class=\"row btn-out\">\n      <div class=\"col btn\" [class.s-btn]=\"type === 0\" (click)=\"type = 0\">组织架构</div>\n      <div class=\"col btn\" [class.s-btn]=\"type === 1\" (click)=\"type = 1\">标签组</div>\n    </div>\n    <div class=\"b-con\" *ngIf=\"type === 0\">\n      <div *ngIf=\"frameworks && frameworks?.length\">\n        <div class=\"row item\" [class.in-item]=\"f.type !== 0\" *ngFor=\"let f of frameworks; let i = index;\"\n             [class.cover]=\"f.show\" (click)=\"selectItem($event, f)\">\n          <div class=\"col col-auto\">\n            <img class=\"h-i\" *ngIf=\"f.type !== 2\" src=\"assets/img/folder.png\">\n            <img class=\"h-i\" *ngIf=\"f.type === 2\" src=\"assets/img/icon-4.png\">\n          </div>\n          <div class=\"col\">\n            <span>{{f.name}}</span>\n          </div>\n          <div class=\"col col-auto\">\n            <i class=\"iconfont icon-more\" *ngIf=\"f.show\" (click)=\"f.edit = !f.edit\"></i>\n          </div>\n          <div class=\"operation\" *ngIf=\"f?.edit\">\n            <mat-list>\n              <mat-list-item *ngIf=\"f.type === 0\">\n                <button mat-button (click)=\"showAdd = true; f.edit = false;\">添加组织架构</button>\n              </mat-list-item>\n              <mat-list-item *ngIf=\"f.type === 1\">\n                <button mat-button (click)=\"editName(f)\">修改名称</button>\n              </mat-list-item>\n              <mat-list-item *ngIf=\"f.type === 2\">\n                <button mat-button (click)=\"editName(f)\">加入组织架构</button>\n              </mat-list-item>\n              <mat-list-item *ngIf=\"f.type !== 0\">\n                <button mat-button (click)=\"delete(f)\">删除</button>\n              </mat-list-item>\n              <mat-list-item *ngIf=\"f.type !== 0\">\n                <button mat-button (click)=\"down(f)\">下移</button>\n              </mat-list-item>\n            </mat-list>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"b-con\" *ngIf=\"type === 1\">\n      <div *ngIf=\"labels && labels?.length\">\n        <div class=\"row item\" [class.in-item]=\"f.type !== 0\" *ngFor=\"let f of labels; let i = index;\"\n             [class.cover]=\"f.show\" (click)=\"selectLabel($event, f)\">\n          <div class=\"col col-auto\">\n            <img class=\"h-i\" src=\"assets/img/folder.png\">\n          </div>\n          <div class=\"col\">\n            <span>{{f.name}}</span>\n          </div>\n          <div class=\"col col-auto\">\n            <i class=\"iconfont icon-more\" *ngIf=\"f.show\" (click)=\"f.edit = !f.edit\"></i>\n          </div>\n          <div class=\"operation\" *ngIf=\"f?.edit\">\n            <mat-list>\n              <mat-list-item *ngIf=\"f.type === 0\">\n                <button mat-button (click)=\"showAdd = true; f.edit = false;\">添加标签</button>\n              </mat-list-item>\n              <mat-list-item  *ngIf=\"f.type !== 0\">\n                <button mat-button (click)=\"editLabelName(f)\">修改名称</button>\n              </mat-list-item>\n              <mat-list-item *ngIf=\"f.type !== 0\">\n                <button mat-button (click)=\"addMemberToLabel(f)\">添加成员</button>\n              </mat-list-item>\n              <mat-list-item *ngIf=\"f.type !== 0\">\n                <button mat-button (click)=\"deleteLabel(f)\">删除</button>\n              </mat-list-item>\n              <mat-list-item *ngIf=\"f.type !== 0\">\n                <button mat-button (click)=\"down(f)\">下移</button>\n              </mat-list-item>\n            </mat-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"b-right\">\n    <div class=\"f-change\">\n      <div class=\"row title\" >\n        <div class=\"col\">沐贤测评</div>\n        <div class=\"col col-auto in-c\">\n          <input type=\"text\" placeholder=\"\">\n          <img src=\"assets/img/search.png\">\n        </div>\n      </div>\n      <div *ngIf=\"type === 0\">\n        <button mat-button class=\"bt1\">添加成员</button>\n        <button mat-button class=\"bt1\">批量导入</button>\n        <!--<button mat-button class=\"bt1\">、设置所在标签</button>-->\n        <button mat-button class=\"bt1 del\">批量删除</button>\n      </div>\n      <div class=\"f-content\" *ngIf=\"type === 0\">\n        <div class=\"row f-tit\" >\n          <mat-checkbox class=\"col ma\"></mat-checkbox>\n          <div class=\"col\">姓名</div>\n          <div class=\"col\">职位</div>\n          <div class=\"col\">效率</div>\n          <div class=\"col\">风格</div>\n          <div class=\"col\">动力</div>\n          <div class=\"col\">心理健康</div>\n          <div class=\"col\">操作</div>\n        </div>\n        <div *ngIf=\"selectedItems && selectedItems?.length && showDefault\">\n          <div class=\"row f-tit\" [class.f-cons]=\"i % 2 === 0\" *ngFor='let item of selectedItems; let i = index'>\n            <mat-checkbox class=\"col\"></mat-checkbox>\n            <div class=\"col\">{{item?.person_user?.name}}</div>\n            <div class=\"col\">经理</div>\n            <div class=\"col\">效率量表1</div>\n            <div class=\"col\">风格量表1</div>\n            <div class=\"col\">动力量表</div>\n            <div class=\"col\">心里量表</div>\n            <div class=\"col cz\">\n              <i class=\"iconfont icon-more\" (click)=\"item.show = !item.show\"></i>\n              <div class=\"operation members\" *ngIf=\"item?.show\">\n                <mat-list>\n                  <mat-list-item><button class=\"btn1\" mat-button (click)=\"deleteFromFramework(item.id)\">删除</button></mat-list-item>\n                  <mat-list-item><button class=\"btn2\" mat-button (click)=\"toDetail(item)\">查看详情</button></mat-list-item>\n                </mat-list>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"no-data\" *ngIf=\"(!selectedItems || !selectedItems?.length) && showDefault\">暂无成员</div>\n      </div>\n      <div class=\"f-content\" *ngIf=\"type === 1\">\n        <div class=\"row f-tit\" >\n          <mat-checkbox class=\"col ma\"></mat-checkbox>\n          <div class=\"col\">姓名</div>\n          <div class=\"col\">职位</div>\n          <div class=\"col\">效率</div>\n          <div class=\"col\">风格</div>\n          <div class=\"col\">动力</div>\n          <div class=\"col\">心理健康</div>\n          <div class=\"col\">操作</div>\n        </div>\n        <div *ngIf=\"selectedLabels && (selectedLabels?.staffs?.length ||  selectedLabels?.leaders?.length) && showDefault\">\n          <div class=\"row f-tit\" [class.f-cons]=\"i % 2 === 0\" *ngFor='let item of selectedLabels?.leaders; let i = index'>\n            <mat-checkbox class=\"col\"></mat-checkbox>\n            <div class=\"col\">{{item?.person_user?.name}}</div>\n            <div class=\"col\">上级</div>\n            <div class=\"col\">效率量表1</div>\n            <div class=\"col\">风格量表1</div>\n            <div class=\"col\">动力量表</div>\n            <div class=\"col\">心里量表</div>\n            <div class=\"col cz\">\n              <i class=\"iconfont icon-more\" (click)=\"item.show = !item.show\"></i>\n              <div class=\"operation members\" *ngIf=\"item?.show\">\n                <mat-list>\n                  <mat-list-item><button class=\"btn1\" mat-button (click)=\"deleteFromLabel(item.id)\">删除</button></mat-list-item>\n                  <mat-list-item><button class=\"btn2\" mat-button (click)=\"toDetail(item)\">查看详情</button></mat-list-item>\n                </mat-list>\n              </div>\n            </div>\n          </div>\n          <div class=\"row f-tit\" [class.f-cons]=\"i % 2 === 0\" *ngFor='let item of selectedLabels?.staffs; let i = index'>\n            <mat-checkbox class=\"col\"></mat-checkbox>\n            <div class=\"col\">{{item?.name}}</div>\n            <div class=\"col\">下级</div>\n            <div class=\"col\">效率量表1</div>\n            <div class=\"col\">风格量表1</div>\n            <div class=\"col\">动力量表</div>\n            <div class=\"col\">心里量表</div>\n            <div class=\"col cz\">\n              <i class=\"iconfont icon-more\" (click)=\"item.show = !item.show\"></i>\n              <div class=\"operation members\" *ngIf=\"item?.show\">\n                <mat-list>\n                  <mat-list-item><button class=\"btn1\" mat-button (click)=\"deleteFromLabel(item.id)\">删除</button></mat-list-item>\n                  <mat-list-item><button class=\"btn2\" mat-button (click)=\"toDetail(item)\">查看详情</button></mat-list-item>\n                </mat-list>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"no-data\"\n             *ngIf=\"(!selectedLabels || (!selectedLabels?.staffs?.length &&  !selectedLabels?.leaders?.length)) && showDefault\">\n          暂无成员\n        </div>\n      </div>\n    </div>\n    <!--<div class=\"page-footer\">-->\n      <!--<mat-paginator [length]=\"length\" [pageSize]=\"pageSize\" (page)=\"paginate($event)\"-->\n                     <!--[hidePageSize]=\"false\"></mat-paginator>-->\n      <!--<div class=\"current-page\">当前页数：<span>{{page}}</span></div>-->\n\n    <!--</div>-->\n  </div>\n</div>\n\n<div class=\"alert-model\" *ngIf=\"showAdd\" [class.slipUp]=\"showAdd\" >\n  <div class=\"a-content slipUp\" >\n    <div>\n      <i class=\"material-icons close\" (click)=\"showAdd = false\">close</i>\n      <div class=\"title\" *ngIf=\"type === 0\">添加架构</div>\n      <div class=\"title\" *ngIf=\"type === 1\">添加标签</div>\n      <div class=\"tips\">\n        <input placeholder=\"请输入架构名称\" *ngIf=\"type === 0\" [(ngModel)]=\"framework.name\">\n        <input placeholder=\"请输入标签名称\" *ngIf=\"type === 1\" [(ngModel)]=\"label.name\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col\" >\n          <button mat-button class=\"l-b\" (click)=\"showAdd = false\">取消</button>\n        </div>\n        <div class=\"col\">\n          <button mat-button class=\"r-b\" *ngIf=\"type === 0\" (click)=\"addSubdivision()\">确定</button>\n          <button mat-button class=\"r-b\" *ngIf=\"type === 1\" (click)=\"addLabel()\">确定</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/quality-file/blank/blank.component.scss":
/*!***********************************************************!*\
  !*** ./src/pages/quality-file/blank/blank.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-blank .b-r {\n  border-right: 1px solid #445279;\n  background: #edf1fc; }\n\napp-blank .btn-out {\n  border: 1px solid #7e8fbc;\n  border-radius: 5px;\n  width: 80%;\n  margin: 10px auto; }\n\napp-blank .btn-out .btn {\n    width: 90px;\n    color: #7e8fbc;\n    border-radius: 5px;\n    background: #fff;\n    height: 100%; }\n\napp-blank .btn-out .s-btn {\n    background: #7e8fbc;\n    color: #ffffff; }\n\napp-blank .quality {\n  width: calc(100% - 4rem);\n  margin: 120px auto 50px;\n  background: #fff;\n  border-radius: 10px; }\n\napp-blank .quality .b-left {\n    width: 320px;\n    border-right: 1px solid #eeeeee; }\n\napp-blank .quality .b-left .add {\n      margin: 20px 0 20px 30px;\n      font-size: 2rem;\n      color: #7e8fbc;\n      font-weight: lighter;\n      width: 20px;\n      min-width: 20px;\n      padding: 0;\n      height: 30px;\n      min-height: 30px !important;\n      line-height: 30px; }\n\napp-blank .quality .b-left .btn-1, app-blank .quality .b-left .btn-2 {\n      border: 1px solid #8f9bbc;\n      border-radius: 6px; }\n\napp-blank .quality .b-left .btn-1 {\n      margin-left: 20px; }\n\napp-blank .quality .b-left .act {\n      background: #7e8fbc;\n      color: #fff; }\n\napp-blank .quality .b-left .b-con {\n      border-top: 1px solid #eeeeee;\n      margin-top: 20px;\n      margin-bottom: 40px; }\n\napp-blank .quality .b-left .b-con .cover {\n        background: #eeeeee; }\n\napp-blank .quality .b-left .b-con .item {\n        padding: 10px 10px 10px 30px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        vertical-align: middle;\n        position: relative;\n        cursor: pointer; }\n\napp-blank .quality .b-left .b-con .item span {\n          margin-left: 10px; }\n\napp-blank .quality .b-left .b-con .item .h-i {\n          width: 20px; }\n\napp-blank .quality .b-left .b-con .item:hover {\n        background: #eeeeee; }\n\napp-blank .quality .b-left .b-con .in-item {\n        padding: 10px 10px 10px 50px; }\n\napp-blank .quality .b-left .b-con .b-title {\n        position: relative;\n        cursor: pointer;\n        padding: 10px 0 10px 0; }\n\napp-blank .quality .b-left .b-con .b-title .n-div {\n          padding-left: 60px; }\n\napp-blank .quality .b-left .b-con .ysj::before {\n        content: '';\n        width: 10px;\n        height: 10px;\n        position: absolute;\n        left: 30px;\n        top: 15px;\n        border: 7px solid transparent;\n        border-left-color: #7e8fbc; }\n\napp-blank .quality .b-left .b-con .xsj::before {\n        content: '';\n        width: 10px;\n        height: 10px;\n        position: absolute;\n        left: 30px;\n        top: 18px;\n        border: 7px solid transparent;\n        border-top-color: #7e8fbc; }\n\napp-blank .quality .b-left .b-con .b-title2 {\n        position: relative;\n        cursor: pointer;\n        padding: 10px 90px; }\n\napp-blank .quality .b-left .b-con .b-title2 .twomen {\n          position: absolute;\n          border: 1px solid #eee;\n          border-radius: 6px;\n          right: 0;\n          z-index: 2;\n          background: #fff; }\n\napp-blank .quality .b-left .b-con .b-title2 .twomen .rnav {\n            padding: 10px;\n            color: #26261f; }\n\napp-blank .quality .b-left .b-con .b-title2 .twomen .rnav:last-child {\n              color: #85798b; }\n\napp-blank .operation {\n  position: absolute;\n  background: #ffffff;\n  border: 1px solid #eeeeee;\n  border-radius: 3px;\n  top: 110%;\n  right: -20px;\n  z-index: 1; }\n\napp-blank .operation .mat-button {\n    z-index: 2;\n    text-align: left; }\n\napp-blank .members button {\n  top: 0 !important;\n  position: relative !important; }\n\napp-blank .no-data {\n  width: 100%;\n  padding: 20px;\n  text-align: center; }\n\napp-blank .b-right {\n  width: calc(100% - 320px);\n  padding: 0 20px; }\n\napp-blank .f-change .title {\n  position: relative;\n  border-bottom: 1px solid #eeeeee;\n  align-items: center;\n  padding: 20px;\n  margin-bottom: 20px; }\n\napp-blank .f-change .title .in-c {\n    position: relative; }\n\napp-blank .f-change .title .in-c input {\n      width: 200px;\n      border: 1px solid #eeeeee;\n      border-radius: 15px;\n      height: 30px;\n      line-height: 30px;\n      background: #f5f5f5;\n      padding-left: 35px; }\n\napp-blank .f-change .title .in-c img {\n      position: absolute;\n      left: 10px;\n      top: 5px; }\n\napp-blank .f-change .bt1 {\n  color: #8f9bbc;\n  border-radius: 6px;\n  border: 1px solid #8f9bbc;\n  margin-right: 20px; }\n\napp-blank .f-change .bt1:last-child {\n    margin-right: 0;\n    color: red;\n    border-color: red; }\n\napp-blank .f-change .del {\n  border-color: Red;\n  color: red; }\n\napp-blank .f-change .f-content {\n  margin: 20px 0;\n  border-radius: 8px; }\n\napp-blank .f-change .f-content .ma {\n    background: #f8fafc;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\napp-blank .f-change .f-content .pd10 {\n    padding: 10px 0; }\n\napp-blank .f-change .f-content .f-tit {\n    text-align: center;\n    background: #f8fafc;\n    padding: 20px 0;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\napp-blank .f-change .f-content .f-cons {\n    background: #fffcfa; }\n\napp-blank .f-change .f-content .icon-more::before {\n    font-size: 22px; }\n\napp-blank .f-change .f-content .cz {\n    position: relative; }\n\napp-blank .f-change .f-content .cz .btn1, app-blank .f-change .f-content .cz .btn2 {\n      position: absolute;\n      color: red; }\n\napp-blank .f-change .f-content .cz .btn1 {\n      top: -25px; }\n\napp-blank .f-change .f-content .cz .btn2 {\n      bottom: -25px; }\n\napp-blank .page-footer {\n  bottom: 0;\n  width: 100%;\n  margin: 0 auto;\n  overflow: hidden; }\n\napp-blank .page-footer .mat-paginator {\n    float: right;\n    font-size: 1rem; }\n\napp-blank .page-footer .current-page {\n    float: right;\n    height: 56px;\n    line-height: 55px;\n    font-size: 1rem;\n    color: rgba(0, 0, 0, 0.54);\n    margin-right: 10px; }\n\napp-blank .page-footer .current-page span {\n      margin-left: 10px; }\n\napp-blank .alert-model {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 10;\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-perspective: 1300px;\n  perspective: 1300px; }\n\napp-blank .alert-model.slipUp {\n  opacity: 1;\n  -webkit-animation-name: dialogFaceSlipToUp;\n  animation-name: dialogFaceSlipToUp; }\n\napp-blank .alert-model.slipBottom {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-animation-name: dialogFaceSlipToBottom;\n  animation-name: dialogFaceSlipToBottom; }\n\napp-blank .a-content {\n  position: fixed;\n  background: #ffffff;\n  width: 430px;\n  margin: 0 auto;\n  top: 30%;\n  left: calc(50% - 215px);\n  z-index: 11;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 6px;\n  text-align: center;\n  -webkit-animation-duration: 500ms;\n  animation-duration: 500ms;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%; }\n\napp-blank .a-content .close {\n    position: absolute;\n    right: 10px;\n    top: 10px; }\n\napp-blank .a-content .title {\n    width: 100%;\n    font-size: 1.5rem;\n    color: #7e8fbc;\n    padding: 16px; }\n\napp-blank .a-content .title span {\n      margin-left: 10px; }\n\napp-blank .a-content .t-u-t {\n    height: 40px;\n    line-height: 40px;\n    padding: 0;\n    color: #7e8fbc; }\n\napp-blank .a-content .row {\n    padding: 16px;\n    width: 80%;\n    margin: 0 auto;\n    font-size: 1.3rem;\n    color: #333333; }\n\napp-blank .a-content .row .col span {\n      margin: 0 5px; }\n\napp-blank .a-content .row .col .no {\n      color: #7e8fbc; }\n\napp-blank .a-content .row .col .c-b {\n      background: url('t-b.png') no-repeat;\n      display: inline-block;\n      width: 40px;\n      height: 40px;\n      line-height: 40px;\n      color: #fff; }\n\napp-blank .a-content .row .col .l-t {\n      font-size: 1rem;\n      color: #999999; }\n\napp-blank .a-content .t-tips {\n    color: #333;\n    padding-top: 16px; }\n\napp-blank .a-content .tips {\n    width: 100%;\n    padding: 16px;\n    color: #999999; }\n\napp-blank .a-content .tips input {\n      border: 1px solid #eeeeee;\n      border-radius: 5px;\n      padding: 5px 10px; }\n\napp-blank .a-content button {\n    height: 35px;\n    line-height: 35px;\n    border-radius: 5px; }\n\napp-blank .a-content .b-c {\n    padding: 16px; }\n\napp-blank .a-content .l-b {\n    color: #7e8fbc;\n    border: 1px solid #7e8fbc; }\n\napp-blank .a-content .r-b {\n    background: #7e8fbc;\n    color: #fff; }\n\napp-blank .a-content.slipUp {\n  -webkit-transform: rotateX(0deg);\n  transform: rotateX(0deg);\n  -webkit-animation-name: contentSlipToUp;\n  animation-name: contentSlipToUp; }\n\napp-blank .a-content.slipBottom {\n  -webkit-transform: rotateX(90deg);\n  transform: rotateX(90deg);\n  -webkit-animation-name: contentSlipToBottom;\n  animation-name: contentSlipToBottom; }\n\n@-webkit-keyframes dialogFaceSlipToUp {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes dialogFaceSlipToUp {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes dialogFaceSlipToBottom {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes dialogFaceSlipToBottom {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes dialogSlipToUp {\n  0% {\n    top: 100%;\n    opacity: 0.3; }\n  100% {\n    top: 50%;\n    opacity: 1; } }\n\n@keyframes dialogSlipToUp {\n  0% {\n    top: 100%;\n    opacity: 0.3; }\n  100% {\n    top: 50%;\n    opacity: 1; } }\n\n@-webkit-keyframes dialogSlipToBottom {\n  0% {\n    top: 50%;\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n  100% {\n    top: 100%;\n    opacity: 0.3;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0); } }\n\n@keyframes dialogSlipToBottom {\n  0% {\n    top: 50%;\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%); }\n  100% {\n    top: 100%;\n    opacity: 0.3;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0); } }\n\n@-webkit-keyframes contentSlipToUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); } }\n\n@keyframes contentSlipToUp {\n  0% {\n    opacity: 0;\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); }\n  100% {\n    opacity: 1;\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); } }\n\n@-webkit-keyframes contentSlipToBottom {\n  0% {\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n  60% {\n    -webkit-transform: rotateX(60deg);\n    transform: rotateX(60deg); }\n  100% {\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); } }\n\n@keyframes contentSlipToBottom {\n  0% {\n    -webkit-transform: rotateX(0deg);\n    transform: rotateX(0deg); }\n  60% {\n    -webkit-transform: rotateX(60deg);\n    transform: rotateX(60deg); }\n  100% {\n    -webkit-transform: rotateX(90deg);\n    transform: rotateX(90deg); } }\n"

/***/ }),

/***/ "./src/pages/quality-file/blank/blank.component.ts":
/*!*********************************************************!*\
  !*** ./src/pages/quality-file/blank/blank.component.ts ***!
  \*********************************************************/
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
var paginator_1 = __webpack_require__(/*! ../../$services/data/paginator */ "./src/pages/$services/data/paginator.ts");
var quality_file_service_1 = __webpack_require__(/*! ../quality-file.service */ "./src/pages/quality-file/quality-file.service.ts");
var auth_service_1 = __webpack_require__(/*! ../../$services/auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
var my_dialog_component_1 = __webpack_require__(/*! ../../my-dialog/my-dialog.component */ "./src/pages/my-dialog/my-dialog.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var BlankComponent = /** @class */ (function () {
    function BlankComponent(matPaginatorIntl, service, authService, snackBar, dialog, router) {
        this.matPaginatorIntl = matPaginatorIntl;
        this.service = service;
        this.authService = authService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.router = router;
        this.type = 0;
        this.length = 1;
        this.pageSize = 6;
        this.page = 1;
        this.showAdd = false;
        this.framework = {};
        this.showItems = true;
        this.showDefault = false;
        this.label = {};
        this.matPaginatorIntl = new paginator_1.MyPaginator(this.matPaginatorIntl).setPaginator();
    }
    Object.defineProperty(BlankComponent.prototype, "UserID", {
        get: function () {
            return auth_service_1.AuthService.UserID;
        },
        enumerable: true,
        configurable: true
    });
    BlankComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.frameworks = [];
        if (this.UserID) {
            this.authService.getUser(this.UserID).then(function (user) {
                _this.company = user;
                _this.getFramework();
                _this.getCompanyLabels();
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    // 获取架构
    BlankComponent.prototype.getFramework = function () {
        var _this = this;
        this.frameworks = [];
        this.dialogFramework = [];
        this.service.getFramework(this.company.person_user.company).then(function (resp) {
            // console.log('resp', resp);
            // this.frameworks = resp;
            resp.company.type = 0;
            _this.frameworks[0] = resp.company;
            _this.dialogFramework = resp.frameworks;
            resp.frameworks.forEach(function (f) {
                f.type = 1;
                _this.frameworks.push(f);
            });
            resp.members.forEach(function (m) {
                m.type = 2;
                _this.frameworks.push(m);
            });
            if (_this.frameworks && _this.frameworks.length > 1) {
                _this.frameworks[1].show = true;
                _this.getFrameworkMembers(_this.frameworks[1].id);
            }
            // console.log('frameworks', this.frameworks);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取标签
    BlankComponent.prototype.getCompanyLabels = function () {
        var _this = this;
        this.labels = [];
        this.service.getCompanyLabels(this.company.person_user.company).then(function (resp) {
            resp.company.type = 0;
            _this.labels[0] = resp.company;
            resp.labels.forEach(function (label) {
                label.type = 1;
                _this.labels.push(label);
            });
            if (_this.labels && _this.labels.length > 1) {
                _this.labels[1].show = true;
                _this.getLabelsMembers(_this.labels[1].id);
            }
            // console.log('labels', this.labels);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 添加子部门
    BlankComponent.prototype.addSubdivision = function () {
        var _this = this;
        if (!this.framework.name) {
            return this.snackBar.open('请输入架构名称！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
        }
        this.framework.company = this.frameworks[0].id;
        // console.log('frameworkName', this.framework);
        this.service.addFramework(this.framework).then(function (resp) {
            // console.log(resp);
            _this.showAdd = false;
            resp.type = 1;
            _this.getFramework();
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 添加标签
    BlankComponent.prototype.addLabel = function () {
        var _this = this;
        if (!this.label.name) {
            return this.snackBar.open('请输入标签名称！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
        }
        this.label.company = this.labels[0].id;
        this.service.addLabel(this.label).then(function (resp) {
            _this.showAdd = false;
            _this.getCompanyLabels();
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 点击选择架构
    BlankComponent.prototype.selectItem = function (event, f) {
        this.frameworks.forEach(function (item) {
            item.edit = false;
            item.show = false;
        });
        var cList = event.target.classList;
        // console.log('cList', cList);
        f.show = true;
        if (cList.contains('iconfont') || cList.contains('mat-button-wrapper')) {
            f.edit = true;
        }
        else {
            if (f.type === 1) {
                this.showDefault = false;
                this.getFrameworkMembers(f.id);
            }
        }
    };
    // 选择标签
    BlankComponent.prototype.selectLabel = function (event, f) {
        // console.log('f', f);
        this.labels.forEach(function (item) {
            item.edit = false;
            item.show = false;
        });
        var cList = event.target.classList;
        // console.log('cList', cList);
        f.show = true;
        if (cList.contains('iconfont') || cList.contains('mat-button-wrapper')) {
            f.edit = true;
        }
        else {
            if (f.type === 1) {
                this.showDefault = false;
                this.getLabelsMembers(f.id);
            }
        }
    };
    // 获取架构成员列表
    BlankComponent.prototype.getFrameworkMembers = function (id) {
        var _this = this;
        this.selectedItems = [];
        this.service.personUsers(id).then(function (resp) {
            _this.selectedItems = resp.members;
            // console.log('selectedItems', this.selectedItems);
            _this.showDefault = true;
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 获取标签组成员
    BlankComponent.prototype.getLabelsMembers = function (id) {
        var _this = this;
        this.selectedLabels = [];
        this.service.labelMembers(id).then(function (resp) {
            _this.selectedLabels = resp;
            _this.showDefault = true;
            // console.log('selectedLabels', resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 添加成员到标签
    BlankComponent.prototype.addMemberToLabel = function (f) {
        var _this = this;
        var dialogRef = this.dialog.open(my_dialog_component_1.MyDialogComponent, {
            // width: '250px',
            data: { 'title': '请选择成员添加', type: 3, label: f.id, framework: this.dialogFramework }
        });
        dialogRef.beforeClose().subscribe(function (resp) {
            // console.log('resp', resp);
            if (resp && resp.length) {
                var data = resp.join(',');
                _this.service.addToLabel(f.id, data).then(function (res) {
                    // console.log('res', res);
                    _this.getLabelsMembers(f.id);
                    f.edit = false;
                }).catch(function (err) {
                    console.log(err);
                });
            }
        });
    };
    // 修改架构名称
    BlankComponent.prototype.editName = function (f) {
        var _this = this;
        // console.log('f', f);
        var dialogRef = this.dialog.open(my_dialog_component_1.MyDialogComponent, {
            width: '250px',
            data: { 'title': '请输入架构名', type: f.type, framework: this.dialogFramework }
        });
        dialogRef.beforeClose().subscribe(function (resp) {
            // console.log('resp', resp);
            if (f.type === 1) {
                if (resp) {
                    var data = { id: f.id, name: resp };
                    _this.editFramework(data);
                }
            }
            else if (f.type === 2) {
                if (resp) {
                    var data = { id: f.id, framework: resp.id };
                    _this.editPersonUser(data);
                }
            }
        });
    };
    // 修改标签名
    BlankComponent.prototype.editLabelName = function (f) {
        var _this = this;
        // console.log('f', f);
        var dialogRef = this.dialog.open(my_dialog_component_1.MyDialogComponent, {
            width: '250px',
            data: { 'title': '请输入标签名', type: f.type, framework: [] }
        });
        dialogRef.beforeClose().subscribe(function (resp) {
            // console.log('resp', resp);
            if (f.type === 1) {
                if (resp) {
                    var data = { id: f.id, name: resp };
                    _this.editLabel(data);
                }
            }
        });
    };
    // 删除组织架构或成员
    BlankComponent.prototype.delete = function (f) {
        // console.log('f', f);
        if (f.type === 1) {
            this.deleteFramework(f.id);
        }
        else if (f.type === 2) {
            this.deletePersonUser(f.id);
        }
    };
    // 删除标签
    BlankComponent.prototype.deleteLabel = function (l) {
        var _this = this;
        // console.log('l', l);
        this.service.deleteLabel(l.id).then(function (resp) {
            _this.snackBar.open('删除成功！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            _this.getCompanyLabels();
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 查看详情
    BlankComponent.prototype.toDetail = function (item) {
        this.router.navigate(['/quality-file/label']);
    };
    // 下移
    BlankComponent.prototype.down = function (f) {
        console.log('f', f);
    };
    // 修改架构
    BlankComponent.prototype.editFramework = function (data) {
        var _this = this;
        this.service.editFramework(data).then(function (resp) {
            // console.log(resp);
            _this.snackBar.open('修改成功', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            _this.getFramework();
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 修改标签
    BlankComponent.prototype.editLabel = function (data) {
        var _this = this;
        this.service.editLabel(data).then(function (resp) {
            // console.log(resp);
            _this.snackBar.open('修改成功', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            _this.getCompanyLabels();
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 删除架构
    BlankComponent.prototype.deleteFramework = function (id) {
        var _this = this;
        this.service.deleteFramework(id).then(function (resp) {
            // console.log(resp);
            _this.snackBar.open('删除成功！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            _this.getFramework();
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 从架构删除成员
    BlankComponent.prototype.deleteFromFramework = function (id) {
        var data = { id: id, framework: '' };
        this.editPersonUser(data);
    };
    BlankComponent.prototype.deleteFromLabel = function (id) {
    };
    // 修改成员
    BlankComponent.prototype.editPersonUser = function (data) {
        var _this = this;
        this.service.editPersonUser(data).then(function (resp) {
            // console.log(resp);
            _this.snackBar.open('修改成功！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            _this.getFramework();
        }).catch(function (err) {
            console.log(err);
        });
    };
    // 删除成员
    BlankComponent.prototype.deletePersonUser = function (id) {
        var _this = this;
        this.service.deletePersonUser(id).then(function (resp) {
            // console.log(resp);
            _this.snackBar.open('删除成功！', '', {
                duration: 2000,
                verticalPosition: 'top'
            });
            _this.getFramework();
        }).catch(function (err) {
            console.log(err);
        });
    };
    BlankComponent.prototype.paginate = function (event) {
        // console.log('event', event);
        var page = event.pageIndex + 1;
    };
    BlankComponent = __decorate([
        core_1.Component({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/pages/quality-file/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/pages/quality-file/blank/blank.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [material_1.MatPaginatorIntl,
            quality_file_service_1.QualityFileService,
            auth_service_1.AuthService,
            material_1.MatSnackBar,
            material_1.MatDialog,
            router_1.Router])
    ], BlankComponent);
    return BlankComponent;
}());
exports.BlankComponent = BlankComponent;


/***/ }),

/***/ "./src/pages/quality-file/file-author/file-author.component.html":
/*!***********************************************************************!*\
  !*** ./src/pages/quality-file/file-author/file-author.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-author row\">\n  <div class=\"title\">\n    <button mat-button [class.act]=\" ac === i\" *ngFor = 'let p of people; let i = index' (click)=\" ac = i\">{{p.title}}</button>\n    <input type=\"text\" value=\"查询\">\n  </div>\n  <div class=\"row bt\">\n    <button mat-button class=\"three\"  *ngFor = 'let p of people2; let i = index' >{{p.title}}</button>\n  </div>\n  <div class=\"bt\" *ngIf = 'ac === 0'>\n    <div class=\"conten row bt mt color1\"  >\n      <div class=\"col tc p10\"><mat-checkbox disabled=\"false\"></mat-checkbox></div>\n      <div class=\"col p10\" *ngFor=\" let x of pcxm\"> {{x.title}}</div>\n    </div>\n    <div class=\"conten row bt mt color2\">\n      <div class=\"col tc p10\"><mat-checkbox></mat-checkbox></div>\n      <div class=\"col p10 \" *ngFor=\" let x of pcxm2\"> {{x.title}}</div>\n      <div class=\"col p10 last\" (click)=\" open = true\">\n        <span class=\"op\" (click)=\"opens()\"><i class=\"iconfont icon-more\"></i></span>\n        <div class=\"last-b col\" *ngIf = 'isOpen '>\n          <button mat-button  class=\"red\">删除</button>\n          <button mat-button  class=\"red\">编辑授权人</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bt\" *ngIf = 'ac === 1'>\n    <div class=\"conten row bt mt color1\"  >\n      <div class=\"col tc p10\"><mat-checkbox></mat-checkbox></div>\n      <div class=\"col p10\" *ngFor=\" let x of pcxm\"> {{x.title}}</div>\n    </div>\n    <div class=\"conten row bt mt color2\">\n      <div class=\"col tc p10\"><input type=\"checkbox\"></div>\n      <div class=\"col p10 \" *ngFor=\" let x of pcxm2\"> {{x.title}}</div>\n      <div class=\"col p10 last\" >\n        <span class=\"op\" (click)=\"opens()\"><i class=\"iconfont icon-more\"></i></span>\n        <div class=\"last-b col\"  *ngIf = 'isOpen'>\n          <button mat-button  class=\"red\">删除</button>\n          <button mat-button  class=\"red\">编辑授权人</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/quality-file/file-author/file-author.component.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/quality-file/file-author/file-author.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-file-author .bt {\n  width: 100%; }\n\napp-file-author .mt {\n  margin-top: 10px;\n  align-items: center; }\n\napp-file-author .mt .op .icon-more:before {\n    font-size: 26px; }\n\napp-file-author .tc {\n  text-align: center; }\n\napp-file-author .p10 {\n  padding: 10px; }\n\napp-file-author .color1 {\n  background: #f8fafc; }\n\napp-file-author .color2 {\n  background: #fffcfa; }\n\napp-file-author .file-author .title {\n  width: 100%;\n  position: relative;\n  padding-top: 10px;\n  border-bottom: 1px solid #d4d4d4; }\n\napp-file-author .file-author .title input {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    border: 1px solid #d4d4d4;\n    background: #f5f5f5;\n    border-radius: 6px;\n    padding-left: 10px; }\n\napp-file-author .file-author .title .act {\n    color: #7e8fbc;\n    border-bottom: 1px solid #7e8fbc; }\n\napp-file-author .file-author .three {\n  margin-top: 20px;\n  margin-right: 20px;\n  border-radius: 6px; }\n\napp-file-author .file-author .three:nth-child(2) {\n    border: 1px solid #7e8fbc;\n    color: #7e8fbc; }\n\napp-file-author .file-author .three:nth-child(3) {\n    border: 1px solid red;\n    color: red; }\n\napp-file-author .file-author .three:last-child {\n    background: #f1efef;\n    border-color: #f1efef;\n    color: #999;\n    margin-right: 0; }\n\napp-file-author .file-author .conten .last {\n  position: relative; }\n\napp-file-author .file-author .conten .last .last-b {\n    position: absolute;\n    right: -50px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n\napp-file-author .file-author .conten .last .last-b .red {\n      color: red; }\n"

/***/ }),

/***/ "./src/pages/quality-file/file-author/file-author.component.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/quality-file/file-author/file-author.component.ts ***!
  \*********************************************************************/
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
var FileAuthorComponent = /** @class */ (function () {
    function FileAuthorComponent() {
        this.isOpen = false;
        this.ac = 0;
        this.people = [
            { title: '授权人' },
            { title: '被授权人' },
        ];
        this.people2 = [
            { title: '修改' },
            { title: '批量删除' },
            { title: '保存' },
        ];
        this.pcxm = [
            { title: '评测项目' },
            { title: '部门' },
            { title: '职务' },
            { title: '可被查看' },
            { title: '操作' },
        ];
        this.pcxm2 = [
            { title: '青龙智能能力提升' },
            { title: '研发部' },
            { title: '总监' },
            { title: '金世华' },
        ];
    }
    FileAuthorComponent.prototype.ngOnInit = function () {
    };
    FileAuthorComponent.prototype.opens = function () {
        this.isOpen = !this.isOpen;
    };
    FileAuthorComponent = __decorate([
        core_1.Component({
            selector: 'app-file-author',
            template: __webpack_require__(/*! ./file-author.component.html */ "./src/pages/quality-file/file-author/file-author.component.html"),
            styles: [__webpack_require__(/*! ./file-author.component.scss */ "./src/pages/quality-file/file-author/file-author.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FileAuthorComponent);
    return FileAuthorComponent;
}());
exports.FileAuthorComponent = FileAuthorComponent;


/***/ }),

/***/ "./src/pages/quality-file/file-label/file-label.component.html":
/*!*********************************************************************!*\
  !*** ./src/pages/quality-file/file-label/file-label.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\" com row\">\n  <div class=\"col col-auto left\">\n    <div class=\"left-title\" [class.act] = 'color === i' (click)=\"goDetail(i)\"   *ngFor = 'let t of left; let i = index;'><img [src]=\"t.img\" alt=\"\"> {{t.title}}</div>\n  </div>\n  <div class=\"col right\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/quality-file/file-label/file-label.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/quality-file/file-label/file-label.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-file-label .lb {\n  color: #999; }\n\napp-file-label .bb {\n  background: #e1e6ef; }\n\napp-file-label .com {\n  width: calc(100% - 4rem);\n  margin: 113px auto 0;\n  background: #fff;\n  border-radius: 10px; }\n\napp-file-label .left {\n  width: 320px;\n  border-right: 1px solid #999999; }\n\napp-file-label .left .left-title {\n    cursor: pointer; }\n\napp-file-label .left div {\n    padding: 10px 20px; }\n\napp-file-label .left div img {\n      margin-right: 1rem; }\n\napp-file-label .left .act {\n    border-right: 1px solid #445279;\n    background: #edf1fc;\n    color: #7e8fbc; }\n\napp-file-label .right {\n  width: calc(100% - 320px);\n  padding: 0 20px; }\n\napp-file-label .right .right-title {\n    border-bottom: 1px solid #999;\n    align-items: center;\n    padding: 10px 20px;\n    margin-bottom: 2%; }\n\napp-file-label .right .right-list .right-list-list {\n    margin-right: 20px;\n    margin-bottom: 20px;\n    position: relative;\n    box-shadow: 0 0 10px #999;\n    border-radius: 10px; }\n\napp-file-label .right .right-list .right-list-list:last-child {\n      margin-right: 0; }\n\napp-file-label .right .right-list .right-list-list .t-nav {\n      padding: 20px; }\n\napp-file-label .right .right-list .right-list-list .cs {\n      padding: 0 20px 10px; }\n\napp-file-label .right .right-list .right-list-list .cs div {\n        color: #666;\n        padding: 2px 0; }\n\napp-file-label .right .right-list .right-list-list .cs .comb {\n        text-align: center; }\n\napp-file-label .right .right-list .right-list-list .cs .comb .wsq {\n          margin-top: 10px;\n          border-radius: 10px;\n          border: 1px solid #a1a1a1;\n          color: #a1a1a1; }\n\napp-file-label .right .right-list .right-list-list .cs .comb .ckbg {\n          margin-top: 10px;\n          border-radius: 10px;\n          border: 1px solid #7e8fbc;\n          color: #7E8FBC; }\n\napp-file-label .right .right-list .right-list-list .posa {\n      position: absolute;\n      top: 0;\n      right: 0;\n      border-radius: 0 10px 0 0;\n      background: #8894af;\n      color: #fff;\n      padding: 2px; }\n\napp-file-label .right .right-list .right-list-list .posb {\n      position: absolute;\n      top: 0;\n      right: 0;\n      border-radius: 0 10px 0 0;\n      background: #5cb5d8;\n      color: #fff;\n      padding: 2px; }\n\napp-file-label .right .right-list .right-list-list .p-img {\n      margin-right: 10px; }\n"

/***/ }),

/***/ "./src/pages/quality-file/file-label/file-label.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/quality-file/file-label/file-label.component.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var FileLabelComponent = /** @class */ (function () {
    function FileLabelComponent(router) {
        this.router = router;
        this.color = 0;
        this.left = [
            { title: '', img: 'assets/img/list.png' },
            { title: '评测报告', img: 'assets/img/icon-1.png' },
            { title: '用户信息', img: 'assets/img/icon-4.png' },
            { title: '授权范围', img: 'assets/img/icon-1.png' },
            { title: '权限管理', img: 'assets/img/icon-1.png' },
        ];
        this.routers = [
            { url: 'quality-file' },
            { url: 'quality-file/file-see' },
            { url: 'quality-file/file-author' },
            { url: 'quality-file/file-permiss' },
        ];
    }
    FileLabelComponent.prototype.ngOnInit = function () {
    };
    FileLabelComponent.prototype.goDetail = function (i) {
        this.color = i;
        if (i === 1) {
            console.log(1);
            this.router.navigate(["" + this.routers[0].url]);
        }
        if (i === 2) {
            console.log(2);
            this.router.navigate(["" + this.routers[1].url]);
        }
        if (i === 3) {
            console.log(3);
            this.router.navigate(["" + this.routers[2].url]);
        }
        if (i === 4) {
            console.log(3);
            this.router.navigate(["" + this.routers[3].url]);
        }
    };
    FileLabelComponent = __decorate([
        core_1.Component({
            selector: 'app-file-label',
            template: __webpack_require__(/*! ./file-label.component.html */ "./src/pages/quality-file/file-label/file-label.component.html"),
            styles: [__webpack_require__(/*! ./file-label.component.scss */ "./src/pages/quality-file/file-label/file-label.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], FileLabelComponent);
    return FileLabelComponent;
}());
exports.FileLabelComponent = FileLabelComponent;


/***/ }),

/***/ "./src/pages/quality-file/file-permiss/file-permiss.component.html":
/*!*************************************************************************!*\
  !*** ./src/pages/quality-file/file-permiss/file-permiss.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-permiss\">\n  <div class=\"title row\">孙先生</div>\n  <div class=\"tog row\">\n    <button mat-button *ngFor = 'let b of button; let i = index' (click)=\"goBlank(i)\" >{{b.title}}</button>\n  </div>\n  <div class=\"row p-con\">\n    <div class=\"col col-auto pleft\">\n      <div class=\"nav-left\" [class.act1] = 'i % 2 === 0' [class.act2] = 'i % 2 === 1' *ngFor = 'let n of name; let i = index'>{{n.title}}</div>\n    </div>\n    <div class=\"col  p-right\">\n      <div class=\"nav-left\" [class.act1] = 'i % 2 === 0' [class.act2] = 'i % 2 === 1' *ngFor = 'let n of name; let i = index'>\n        <span>{{n.title}}</span>\n        <mat-checkbox></mat-checkbox>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/quality-file/file-permiss/file-permiss.component.scss":
/*!*************************************************************************!*\
  !*** ./src/pages/quality-file/file-permiss/file-permiss.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-file-permiss .title {\n  border-bottom: 1px solid #999;\n  align-items: center;\n  padding: 10px 20px;\n  margin-bottom: 20px; }\n\napp-file-permiss .tog button:nth-child(1) {\n  border: 1px solid #8f9bbc;\n  border-radius: 6px;\n  color: #8f9bbc;\n  margin-right: 20px; }\n\napp-file-permiss .tog button:nth-child(2) {\n  border: 1px solid #f1efef;\n  border-radius: 6px;\n  color: #999;\n  background: #f1efef; }\n\napp-file-permiss .p-con {\n  margin-top: 20px; }\n\napp-file-permiss .p-con .pleft {\n    width: 240px;\n    border-right: 1px solid #999; }\n\napp-file-permiss .p-con .pleft .nav-left {\n      padding: 10px;\n      text-align: center; }\n\napp-file-permiss .p-con .p-right .nav-left {\n    padding: 10px; }\n\napp-file-permiss .p-con .p-right .nav-left span {\n      display: inline-flex;\n      width: 100px;\n      margin-left: 40px; }\n\napp-file-permiss .p-con .act1 {\n    background: #f8fafc; }\n\napp-file-permiss .p-con .act2 {\n    background: #fffcfa; }\n"

/***/ }),

/***/ "./src/pages/quality-file/file-permiss/file-permiss.component.ts":
/*!***********************************************************************!*\
  !*** ./src/pages/quality-file/file-permiss/file-permiss.component.ts ***!
  \***********************************************************************/
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
var FilePermissComponent = /** @class */ (function () {
    function FilePermissComponent(router) {
        this.router = router;
        this.button = [
            { title: '修改', url: '/quality-file/blank' },
            { title: '保存' },
        ];
        this.name = [
            { title: '权限名称' },
            { title: '项目管理' },
            { title: '发起评测' },
            { title: '素质档案' },
            { title: '发起评测' },
            { title: '素质档案' },
        ];
    }
    FilePermissComponent.prototype.ngOnInit = function () {
    };
    FilePermissComponent.prototype.goBlank = function (i) {
        if (i === 0) {
            this.router.navigate([this.button[0].url]);
        }
    };
    FilePermissComponent = __decorate([
        core_1.Component({
            selector: 'app-file-permiss',
            template: __webpack_require__(/*! ./file-permiss.component.html */ "./src/pages/quality-file/file-permiss/file-permiss.component.html"),
            styles: [__webpack_require__(/*! ./file-permiss.component.scss */ "./src/pages/quality-file/file-permiss/file-permiss.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], FilePermissComponent);
    return FilePermissComponent;
}());
exports.FilePermissComponent = FilePermissComponent;


/***/ }),

/***/ "./src/pages/quality-file/file-report/file-report.component.html":
/*!***********************************************************************!*\
  !*** ./src/pages/quality-file/file-report/file-report.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col right\">\n  <div class=\"right-title row\">孙先生</div>\n  <div class=\"row right-list\">\n    <div class=\"col col-auto right-list-list\" *ngFor='let item of [1,1,1,1]'>\n      <!--<span class=\"posa\">分析中</span>-->\n      <span class=\"posb\">已完成</span>\n      <div class=\"row t-nav bb\">\n        <img class=\"col col-auto p-img\" src=\"assets/img/picture-1.png\" alt=\"\">\n        <div class=\"col col-auto\">\n          <h5>能力评测</h5>\n          <div class=\"lb\">能力水平初步测试</div>\n        </div>\n      </div>\n      <div class=\"cs\">\n        <div>\n          <span>检测日期：</span> <span>2018-5-5</span>\n        </div>\n        <div>\n          <span>测试章节：</span> <span>第四章</span>\n        </div>\n        <div>\n          <span>测验用时：</span> <span>1小时20分0秒</span>\n        </div>\n        <div>\n          <span>实体数量：</span> <span>197</span>\n        </div>\n        <div class=\"comb\">\n          <!--<button mat-button  class=\"wsq\">未授权</button>-->\n          <button mat-button class=\"ckbg\">查看报告</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/pages/quality-file/file-report/file-report.component.scss":
/*!***********************************************************************!*\
  !*** ./src/pages/quality-file/file-report/file-report.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-file-report .right {\n  width: calc(100%);\n  padding: 0 20px; }\n  app-file-report .right .right-title {\n    border-bottom: 1px solid #999;\n    align-items: center;\n    padding: 10px 20px;\n    margin-bottom: 20px; }\n  app-file-report .right .right-list .right-list-list {\n    margin-right: 20px;\n    margin-bottom: 20px;\n    position: relative;\n    box-shadow: 0 0 10px #999;\n    border-radius: 10px; }\n  app-file-report .right .right-list .right-list-list:last-child {\n      margin-right: 0; }\n  app-file-report .right .right-list .right-list-list .t-nav {\n      padding: 20px;\n      align-items: center; }\n  app-file-report .right .right-list .right-list-list .cs {\n      padding: 0 20px 10px; }\n  app-file-report .right .right-list .right-list-list .cs div {\n        color: #666;\n        padding: 2px 0; }\n  app-file-report .right .right-list .right-list-list .cs .comb {\n        text-align: center; }\n  app-file-report .right .right-list .right-list-list .cs .comb .wsq {\n          margin-top: 10px;\n          border-radius: 10px;\n          border: 1px solid #a1a1a1;\n          color: #a1a1a1; }\n  app-file-report .right .right-list .right-list-list .cs .comb .ckbg {\n          margin-top: 10px;\n          border-radius: 10px;\n          border: 1px solid #7e8fbc;\n          color: #7E8FBC; }\n  app-file-report .right .right-list .right-list-list .posa {\n      position: absolute;\n      top: 0;\n      right: 0;\n      border-radius: 0 10px 0 0;\n      background: #8894af;\n      color: #fff;\n      padding: 2px; }\n  app-file-report .right .right-list .right-list-list .posb {\n      position: absolute;\n      top: 0;\n      right: 0;\n      border-radius: 0 10px 0 0;\n      background: #5cb5d8;\n      color: #fff;\n      padding: 2px; }\n  app-file-report .right .right-list .right-list-list .p-img {\n      margin-right: 10px; }\n"

/***/ }),

/***/ "./src/pages/quality-file/file-report/file-report.component.ts":
/*!*********************************************************************!*\
  !*** ./src/pages/quality-file/file-report/file-report.component.ts ***!
  \*********************************************************************/
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
var FileReportComponent = /** @class */ (function () {
    function FileReportComponent() {
    }
    FileReportComponent.prototype.ngOnInit = function () {
    };
    FileReportComponent = __decorate([
        core_1.Component({
            selector: 'app-file-report',
            template: __webpack_require__(/*! ./file-report.component.html */ "./src/pages/quality-file/file-report/file-report.component.html"),
            styles: [__webpack_require__(/*! ./file-report.component.scss */ "./src/pages/quality-file/file-report/file-report.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FileReportComponent);
    return FileReportComponent;
}());
exports.FileReportComponent = FileReportComponent;


/***/ }),

/***/ "./src/pages/quality-file/file-see/file-see.component.html":
/*!*****************************************************************!*\
  !*** ./src/pages/quality-file/file-see/file-see.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"file-see\">\n  <div class=\"title\">孙先生</div>\n  <button mat-button class=\"change\">修改</button>\n  <button mat-button class=\"del\">删除</button>\n  <button mat-button class=\"sav\">保存</button>\n  <div class=\"sec row\">\n    <img class=\"col col-auto\" src=\"assets/img/doctor.jpg\" alt=\"\">\n    <div class=\"sec-div col col-auto\">\n      <div><span>ID：</span><input type=\"text\"></div>\n      <div><span>姓名：</span><input type=\"text\"></div>\n      <div><span>手机号：</span><input type=\"text\"></div>\n    </div>\n  </div>\n  <div class=\"row thr\">\n    <div class=\"col thr-left\">\n      <div>\n        <span>性别：</span> <input type=\"text\">\n      </div>\n      <div>\n        <span>身份证：</span> <input type=\"text\">\n      </div>\n      <div>\n        <span>民族：</span> <input type=\"text\">\n      </div>\n      <div>\n        <span>婚姻状况：</span>\n        <select>\n          <option>未婚</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col thr-left\">\n      <div>\n        <span>年龄：</span> <input type=\"text\">\n      </div>\n      <div class=\"row com-s\">\n        <span>籍贯：</span>\n        <select>\n          <option>黑龙江</option>\n        </select>\n        <select>\n          <option>哈尔滨</option>\n        </select>\n        <select>\n          <option>道外区</option>\n        </select>\n      </div>\n      <div>\n        <span>学历：</span>\n        <select class=\"\">\n          <option>博士</option>\n        </select>\n      </div>\n      <div class=\"row com-s\">\n        <span>婚姻状况：</span>\n        <select>\n          <option>未婚</option>\n        </select>\n        <select>\n          <option>未婚</option>\n        </select>\n        <select>\n          <option>未婚</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"for-left row\">\n    <div class=\"col thr-left bo0\">\n      <div>\n        <span>职务：</span> <input type=\"text\">\n      </div>\n      <div>\n        <span>司龄：</span> <input type=\"text\">\n      </div>\n      <div>\n        <span>身份：</span>\n        <select>\n          <option>上级</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col thr-left bo0\">\n      <div class=\"com-s row \">\n        <span>组织架构：</span>\n        <div class=\"col col-auto coms-i\" *ngFor = 'let jj of [1,1]'>\n          <img src=\"assets/img/l-1.png\" alt=\"\">\n          <select >\n            <option>黑龙江</option>\n          </select>\n        </div>\n        <span  class=\"changes\">修改</span>\n      </div>\n      <div class=\"com-s row \">\n        <span>标签组：</span>\n        <div class=\"col col-auto coms-i\" *ngFor = 'let jj of [1,1]'>\n          <img src=\"assets/img/l-1.png\" alt=\"\">\n          <select >\n            <option>黑龙江</option>\n          </select>\n        </div>\n        <span  class=\"changes\">修改</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/pages/quality-file/file-see/file-see.component.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/quality-file/file-see/file-see.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-file-see span {\n  display: inline-flex; }\n\napp-file-see .bo0 {\n  border-bottom: 0 !important; }\n\napp-file-see input, app-file-see select {\n  border-radius: 6px;\n  border: 1px solid #d4d4d4;\n  padding-left: 10px;\n  width: 300px; }\n\napp-file-see .file-see {\n  width: calc(100%);\n  padding: 0 20px; }\n\napp-file-see .file-see .title {\n    border-bottom: 1px solid #999;\n    align-items: center;\n    padding: 10px 20px;\n    margin-bottom: 20px; }\n\napp-file-see .file-see .change, app-file-see .file-see .sav, app-file-see .file-see .del {\n    border: 1px solid;\n    border-radius: 6px;\n    margin-right: 20px; }\n\napp-file-see .file-see .change:last-child, app-file-see .file-see .sav:last-child, app-file-see .file-see .del:last-child {\n      margin-right: 0; }\n\napp-file-see .file-see .change, app-file-see .file-see .del {\n    border-color: #8f9bbc;\n    color: #8f9bbc; }\n\napp-file-see .file-see .sav {\n    border-color: #f1efef;\n    background: #f1efef;\n    color: #999; }\n\napp-file-see .file-see .sec {\n    margin: 20px 0; }\n\napp-file-see .file-see .sec .sec-div div {\n      align-items: center;\n      margin-bottom: 10px; }\n\napp-file-see .file-see .sec .sec-div div:last-child {\n        margin-bottom: 0; }\n\napp-file-see .file-see .sec img {\n      border-radius: 6px;\n      margin-right: 20px; }\n\napp-file-see .file-see .sec span {\n      width: 100px; }\n\napp-file-see .file-see .thr span, app-file-see .file-see .for-left span {\n    width: 100px; }\n\napp-file-see .file-see .thr .changes, app-file-see .file-see .for-left .changes {\n    cursor: pointer;\n    color: #7e8fbc; }\n\napp-file-see .file-see .thr .thr-left, app-file-see .file-see .for-left .thr-left {\n    border-bottom: 1px solid #d4d4d4; }\n\napp-file-see .file-see .thr .thr-left div, app-file-see .file-see .for-left .thr-left div {\n      margin-bottom: 20px; }\n\napp-file-see .file-see .thr .thr-left div:last-child, app-file-see .file-see .for-left .thr-left div:last-child {\n        margin-bottom: 40px; }\n\napp-file-see .file-see .thr .thr-left div:first-child, app-file-see .file-see .for-left .thr-left div:first-child {\n        margin-top: 20px; }\n\napp-file-see .file-see .thr .thr-left .com-s, app-file-see .file-see .for-left .thr-left .com-s {\n      align-items: center; }\n\napp-file-see .file-see .thr .thr-left .com-s select, app-file-see .file-see .for-left .thr-left .com-s select {\n        width: 90px;\n        margin-right: 15px; }\n\napp-file-see .file-see .thr .thr-left .com-s select:last-child, app-file-see .file-see .for-left .thr-left .com-s select:last-child {\n          margin-right: 0; }\n\napp-file-see .file-see .thr .thr-left .coms-i, app-file-see .file-see .for-left .thr-left .coms-i {\n      padding: 4px;\n      margin-bottom: 0;\n      border-radius: 6px;\n      border: 1px solid #d4d4d4;\n      margin-right: 20px; }\n\napp-file-see .file-see .thr .thr-left .coms-i select, app-file-see .file-see .for-left .thr-left .coms-i select {\n        border-color: transparent;\n        width: 90px;\n        margin-right: 15px; }\n\napp-file-see .file-see .thr .thr-left .coms-i select:last-child, app-file-see .file-see .for-left .thr-left .coms-i select:last-child {\n          margin-right: 0; }\n"

/***/ }),

/***/ "./src/pages/quality-file/file-see/file-see.component.ts":
/*!***************************************************************!*\
  !*** ./src/pages/quality-file/file-see/file-see.component.ts ***!
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FileSeeComponent = /** @class */ (function () {
    function FileSeeComponent() {
    }
    FileSeeComponent.prototype.ngOnInit = function () {
    };
    FileSeeComponent = __decorate([
        core_1.Component({
            selector: 'app-file-see',
            template: __webpack_require__(/*! ./file-see.component.html */ "./src/pages/quality-file/file-see/file-see.component.html"),
            styles: [__webpack_require__(/*! ./file-see.component.scss */ "./src/pages/quality-file/file-see/file-see.component.scss")],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [])
    ], FileSeeComponent);
    return FileSeeComponent;
}());
exports.FileSeeComponent = FileSeeComponent;


/***/ }),

/***/ "./src/pages/quality-file/quality-file.module.ts":
/*!*******************************************************!*\
  !*** ./src/pages/quality-file/quality-file.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var file_label_component_1 = __webpack_require__(/*! ./file-label/file-label.component */ "./src/pages/quality-file/file-label/file-label.component.ts");
var blank_component_1 = __webpack_require__(/*! ./blank/blank.component */ "./src/pages/quality-file/blank/blank.component.ts");
var file_report_component_1 = __webpack_require__(/*! ./file-report/file-report.component */ "./src/pages/quality-file/file-report/file-report.component.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var file_see_component_1 = __webpack_require__(/*! ./file-see/file-see.component */ "./src/pages/quality-file/file-see/file-see.component.ts");
var file_author_component_1 = __webpack_require__(/*! ./file-author/file-author.component */ "./src/pages/quality-file/file-author/file-author.component.ts");
var file_permiss_component_1 = __webpack_require__(/*! ./file-permiss/file-permiss.component */ "./src/pages/quality-file/file-permiss/file-permiss.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var my_dialog_component_1 = __webpack_require__(/*! ../my-dialog/my-dialog.component */ "./src/pages/my-dialog/my-dialog.component.ts");
var QualityFileModule = /** @class */ (function () {
    function QualityFileModule() {
    }
    QualityFileModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                material_1.MatPaginatorModule,
                material_1.MatListModule,
                forms_1.FormsModule,
                material_1.MatDialogModule,
                material_1.MatFormFieldModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: blank_component_1.BlankComponent,
                    },
                    {
                        path: 'label',
                        component: file_label_component_1.FileLabelComponent,
                        children: [
                            {
                                path: '',
                                component: file_report_component_1.FileReportComponent
                            },
                            {
                                path: 'file-see',
                                component: file_see_component_1.FileSeeComponent,
                            },
                            {
                                path: 'file-author',
                                component: file_author_component_1.FileAuthorComponent,
                            },
                            {
                                path: 'file-permiss',
                                component: file_permiss_component_1.FilePermissComponent,
                            }
                        ]
                    },
                ])
            ],
            declarations: [file_label_component_1.FileLabelComponent, blank_component_1.BlankComponent, file_report_component_1.FileReportComponent,
                file_see_component_1.FileSeeComponent, file_author_component_1.FileAuthorComponent, file_permiss_component_1.FilePermissComponent, my_dialog_component_1.MyDialogComponent],
            entryComponents: [my_dialog_component_1.MyDialogComponent],
            providers: [my_dialog_component_1.MyDialogComponent]
        })
    ], QualityFileModule);
    return QualityFileModule;
}());
exports.QualityFileModule = QualityFileModule;


/***/ }),

/***/ "./src/pages/quality-file/quality-file.service.ts":
/*!********************************************************!*\
  !*** ./src/pages/quality-file/quality-file.service.ts ***!
  \********************************************************/
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
var QualityFileService = /** @class */ (function () {
    function QualityFileService(http) {
        this.http = http;
    }
    // 获取组织架构
    QualityFileService.prototype.getFramework = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('framework', { id: id, limit: 1000 }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 添加组织架构
    QualityFileService.prototype.addFramework = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('addFramework', data).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 添加标签
    QualityFileService.prototype.addLabel = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('addLabel', data).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 修改组织架构
    QualityFileService.prototype.editFramework = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('editFramework', data).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 修改标签
    QualityFileService.prototype.editLabel = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('editLabel', data).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 删除组织架构
    QualityFileService.prototype.deleteFramework = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('deleteFramework', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 删除标签
    QualityFileService.prototype.deleteLabel = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('deleteLabel', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取架构成员列表
    QualityFileService.prototype.personUsers = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('personUsers', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取标签成员
    QualityFileService.prototype.labelMembers = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('labelMembers', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 添加成员到标签
    QualityFileService.prototype.addToLabel = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('putLabel', { id: id, staffs: data }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 修改成员
    QualityFileService.prototype.editPersonUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('editPersonUser', data).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 删除成员
    QualityFileService.prototype.deletePersonUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('deletePersonUser', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取公司标签
    QualityFileService.prototype.getCompanyLabels = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('companyLabels', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    QualityFileService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], QualityFileService);
    return QualityFileService;
}());
exports.QualityFileService = QualityFileService;


/***/ })

}]);
//# sourceMappingURL=quality-file-quality-file-module.js.map