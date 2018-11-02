import { Injectable } from '@angular/core';
import {Http} from '../../../services/http/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static get UserID() {
    const current = localStorage.getItem('UserCurrent');
    if (current) {
      const user = JSON.parse(current);
      return user.UserID;
    } else {
      return 0;
    }
  }

  constructor(public http: Http) { }

  isLogin() {
    const token = localStorage.getItem('Token');
    const userStr = localStorage.getItem('UserCurrent');
    if (userStr) {
      const userP: any = JSON.parse(userStr);
      // console.log('userP', userP);
      const now = new Date();
      const time = new Date(userP.time);
      const gap = Math.floor((now.getTime() - time.getTime()) / (60 * 1000));
      if (gap < 240) {
        if (token) {
          localStorage.setItem('Token', token);
          const user = JSON.stringify({ UserID: userP.UserID, time: new Date() });
          localStorage.setItem('UserCurrent', user);
          this.http.requestOptioner.$extend({
            headers: {Authorization: 'Token ' + token}
          }, true);
          return true;
        } else {
          localStorage.setItem('Token', '');
          localStorage.setItem('UserCurrent', '');
          return false;
        }
      } else {
        localStorage.setItem('Token', '');
        localStorage.setItem('UserCurrent', '');
        return false;
      }
    } else {
      localStorage.setItem('Token', '');
      localStorage.setItem('UserCurrent', '');
      return false;
    }
  }

  // 登录
  login(username: any, password: any) {
    return new Promise((resolve, reject) => {
      this.http.call('login', {
        username: username,
        password: password,
        client: 0
      }).then(resp => {
        // console.log(resp);
        if (resp.error_code === 0) {
          localStorage.setItem('Token', resp.token);
          localStorage.setItem('UserID', resp.user_id);
          const user = JSON.stringify({ UserID: resp.user_id, time: new Date() });
          localStorage.setItem('UserCurrent', user);
          this.http.requestOptioner.$extend({
            headers: {Authorization: 'Token ' + resp.token}
          }, true);
          resolve(resp);
        } else {
          reject(resp);
        }
      }).catch(err => {
        reject(err);
      });
    });
  }

  getUser(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('user', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }
}



