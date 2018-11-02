(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/pages/$services/auth/auth.service.ts":
/*!**************************************************!*\
  !*** ./src/pages/$services/auth/auth.service.ts ***!
  \**************************************************/
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
var http_1 = __webpack_require__(/*! ../../../services/http/http */ "./src/services/http/http.ts");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    Object.defineProperty(AuthService, "UserID", {
        get: function () {
            var current = localStorage.getItem('UserCurrent');
            // console.log('current', current)
            if (current) {
                var user = JSON.parse(current);
                return user.UserID;
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.isLogin = function () {
        var token = localStorage.getItem('Token');
        var userStr = localStorage.getItem('UserCurrent');
        if (userStr) {
            var userP = JSON.parse(userStr);
            // console.log('userP', userP);
            var now = new Date();
            var time = new Date(userP.time);
            var gap = Math.floor((now.getTime() - time.getTime()) / (60 * 1000));
            if (gap < 240) {
                if (token) {
                    localStorage.setItem('Token', token);
                    var user = JSON.stringify({ UserID: userP.UserID, time: new Date() });
                    localStorage.setItem('UserCurrent', user);
                    this.http.requestOptioner.$extend({
                        headers: { Authorization: 'Token ' + token }
                    }, true);
                    return true;
                }
                else {
                    localStorage.setItem('Token', '');
                    localStorage.setItem('UserCurrent', '');
                    return false;
                }
            }
            else {
                localStorage.setItem('Token', '');
                localStorage.setItem('UserCurrent', '');
                return false;
            }
        }
        else {
            localStorage.setItem('Token', '');
            localStorage.setItem('UserCurrent', '');
            return false;
        }
    };
    // 登录
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('login', {
                username: username,
                password: password,
                client: 1
            }).then(function (resp) {
                // console.log(resp);
                if (resp.error_code === 0) {
                    localStorage.setItem('Token', resp.token);
                    localStorage.setItem('UserID', resp.user_id);
                    var user = JSON.stringify({ UserID: resp.user_id, time: new Date() });
                    localStorage.setItem('UserCurrent', user);
                    _this.http.requestOptioner.$extend({
                        headers: { Authorization: 'Token ' + resp.token }
                    }, true);
                    resolve(resp);
                }
                else {
                    reject(resp);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.getUser = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('user', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/pages/$services/canActivate/routeguard.service.ts":
/*!***************************************************************!*\
  !*** ./src/pages/$services/canActivate/routeguard.service.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var auth_service_1 = __webpack_require__(/*! ../auth/auth.service */ "./src/pages/$services/auth/auth.service.ts");
var RouteGuardService = /** @class */ (function () {
    function RouteGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    RouteGuardService.prototype.canActivate = function (route, state) {
        // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
        // 当前路由名称
        var path = route.routeConfig.path;
        // console.log('path', path);
        // nextRoute: 设置需要路由守卫的路由集合
        var nextRoute = ['project-management',
            'launch-evaluation',
            'management',
            'quality-file',
            'create-project-group',
            'import-members/:id',
            'create-order/:id',
            'payment/:id'
        ];
        var isLogin = this.authService.isLogin(); // 是否登录
        // console.log('isLogin', isLogin);
        // console.log('nextRoute.indexOf(path) >= 0', nextRoute.indexOf(path) >= 0);
        // 当前路由是nextRoute指定页时
        if (nextRoute.indexOf(path) >= 0) {
            if (!isLogin) {
                // 未登录，跳转到login
                this.router.navigate(['auth/login']);
                return false;
            }
            else {
                // 已登录，跳转到当前路由
                return true;
            }
        }
        // 当前路由是login时
        if (path === 'auth/login') {
            if (!isLogin) {
                // 未登录，跳转到当前路由
                return true;
            }
            else {
                // 已登录，跳转到home
                this.router.navigate(['project-management']);
                return false;
            }
        }
    };
    RouteGuardService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
    ], RouteGuardService);
    return RouteGuardService;
}());
exports.RouteGuardService = RouteGuardService;


/***/ }),

/***/ "./src/pages/$services/data/paginator.ts":
/*!***********************************************!*\
  !*** ./src/pages/$services/data/paginator.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MyPaginator = /** @class */ (function () {
    function MyPaginator(matPaginatorIntl) {
        this.matPaginatorIntl = matPaginatorIntl;
        this.length = 10;
    }
    MyPaginator.prototype.setPaginator = function () {
        // 設定顯示笔數資訊文字
        this.matPaginatorIntl.getRangeLabel = function (page, pageSize, length) {
            if (length === 0 || pageSize === 0) {
                return "\u5171 " + Math.ceil(length / 10) + " \u9875"; // ，当前第${page + 1}页
            }
            length = Math.max(length, 0);
            var startIndex = page * pageSize;
            var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            return "\u5171 " + Math.ceil(length / 10) + " \u9875"; // ，当前第${page + 1}页
        };
        // 設定其他顯示資訊文字
        this.matPaginatorIntl.itemsPerPageLabel = '每页条数：';
        this.matPaginatorIntl.nextPageLabel = '下一页';
        this.matPaginatorIntl.previousPageLabel = '上一页';
        this.matPaginatorIntl.firstPageLabel = '移到首页';
        this.matPaginatorIntl.lastPageLabel = '移到尾页';
        return this.matPaginatorIntl;
    };
    return MyPaginator;
}());
exports.MyPaginator = MyPaginator;


/***/ }),

/***/ "./src/pages/project-management/project-management.service.ts":
/*!********************************************************************!*\
  !*** ./src/pages/project-management/project-management.service.ts ***!
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
var http_1 = __webpack_require__(/*! ../../services/http/http */ "./src/services/http/http.ts");
var ProjectManagementService = /** @class */ (function () {
    function ProjectManagementService(http) {
        this.http = http;
    }
    // 获取产品
    ProjectManagementService.prototype.getProductList = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('products', data).then(function (resp) {
                resolve(resp.results);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    ProjectManagementService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProjectManagementService);
    return ProjectManagementService;
}());
exports.ProjectManagementService = ProjectManagementService;


/***/ })

}]);
//# sourceMappingURL=common.js.map