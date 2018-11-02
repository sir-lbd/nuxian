import {CanActivate} from "@angular/router";

export class Guard implements CanActivate {
  canActivate() {
    let logined: boolean = Math.random() < 0.5;
    if (!logined) {
      console.log('用户未登入',logined)
    }
    return logined
  }
}
