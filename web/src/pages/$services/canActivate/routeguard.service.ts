import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, public authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    // 当前路由名称
    const path = route.routeConfig.path;
    // console.log('path', path);
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = ['user-care',
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
    const isLogin = this.authService.isLogin();  // 是否登录

    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0) {
      if (!isLogin) {
        // 未登录，跳转到login
        this.router.navigate(['auth/login']);
        return false;
      } else {
        // 已登录，跳转到当前路由
        return true;
      }
    }
    // 当前路由是login时
    if (path === 'auth/login') {
      if (!isLogin) {
        // 未登录，跳转到当前路由
        return true;
      } else {
        // 已登录，跳转到home
        this.router.navigate(['user-care/evaluation']);
        return false;
      }
    }
  }
}
