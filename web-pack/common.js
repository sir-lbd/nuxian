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
                client: 0
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
        var nextRoute = ['user-care',
            'evaluation',
            'view-report',
            'development-counseling',
            'user-care/evaluation/assessment-list/:id/:ids/:index/:test',
            'user-care/evaluation/start-evaluation/:id/:ids/:index/:test',
            'user-care/evaluation/answer-evaluation/:id/:ids/:index/:test',
            'user-care/view-report/check-report/:ids/:id/:test',
            'user-care/development-counseling/confirm-payment/:id',
            'user-care/evaluation/test-report',
            'user-care/view-report/report-detail/:ids/:id/:test',
            'user-care/development-counseling/expert-introduction',
            'mine',
            'mine/record-details/:id'];
        var isLogin = this.authService.isLogin(); // 是否登录
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
                this.router.navigate(['user-care/evaluation']);
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

/***/ "./src/pages/$services/evaluation/evaluation.service.ts":
/*!**************************************************************!*\
  !*** ./src/pages/$services/evaluation/evaluation.service.ts ***!
  \**************************************************************/
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
var EvaluationService = /** @class */ (function () {
    function EvaluationService(http) {
        this.http = http;
    }
    EvaluationService.prototype.getMyProductList = function (user, isNull) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('userTestList', { end_date__isnull: isNull, user: user, limit: 1000 }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取产品表数据
    EvaluationService.prototype.getProductList = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('product', { user_id: user }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 根据id获取产品
    EvaluationService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('product', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取量表数据
    EvaluationService.prototype.getAssessmentList = function (ids) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('assessment', { id__in: ids }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取章节
    EvaluationService.prototype.getContentList = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('ContentList', { 'assessment': id }).then(function (resp) {
                if (resp && resp.results[0]) {
                    resp.results[0].content_get.forEach(function (q) {
                        q.option = JSON.parse(q.option);
                        q.answers = [];
                        q.selected = '';
                        for (var o in q.option) {
                            q.answers.push({ 'option': o, 'title': q.option[o].title, 'is_fill': q.option[o].is_fill });
                        }
                    });
                }
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    EvaluationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], EvaluationService);
    return EvaluationService;
}());
exports.EvaluationService = EvaluationService;


/***/ }),

/***/ "./src/pages/user-care/evaluation/start-evaluation/start-evaluation.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/pages/user-care/evaluation/start-evaluation/start-evaluation.service.ts ***!
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
var http_1 = __webpack_require__(/*! ../../../../services/http/http */ "./src/services/http/http.ts");
var StartEvaluationService = /** @class */ (function () {
    function StartEvaluationService(http) {
        this.http = http;
    }
    StartEvaluationService.prototype.getAssessment = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('assessmentDetail', { id: id }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 生成测试记录
    StartEvaluationService.prototype.postUserTest = function (id, start_date) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                id: id,
                start_date: _this.formatDate(start_date)
            };
            _this.http.call('UserTest', data).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    StartEvaluationService.prototype.formatDate = function (date) {
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
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    };
    StartEvaluationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], StartEvaluationService);
    return StartEvaluationService;
}());
exports.StartEvaluationService = StartEvaluationService;


/***/ }),

/***/ "./src/pages/user-care/view-report/check-report/check-report.service.ts":
/*!******************************************************************************!*\
  !*** ./src/pages/user-care/view-report/check-report/check-report.service.ts ***!
  \******************************************************************************/
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
var CheckReportService = /** @class */ (function () {
    function CheckReportService(http) {
        this.http = http;
    }
    // 获取报告列表
    CheckReportService.prototype.getReportType = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('appraiserTitle').then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 获取系统配置
    CheckReportService.prototype.getSystemConfig = function (field_name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('systemConfig', { field_name: field_name }).then(function (resp) {
                resolve(resp.results[0]);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    // 创建订单
    CheckReportService.prototype.createOrder = function (appraiser_title_id, price, product_id, user_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.call('createOrder', {
                appraiser_title_id: appraiser_title_id,
                price: price,
                product_id: product_id,
                user_id: user_id
            }).then(function (resp) {
                resolve(resp);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    CheckReportService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], CheckReportService);
    return CheckReportService;
}());
exports.CheckReportService = CheckReportService;


/***/ })

}]);
//# sourceMappingURL=common.js.map