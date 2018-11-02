import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

class PageControllerCore {
  _sliderSmaller = false;
  _scrollY = 0;

  $headerHeight = 80;

  get $100vh() {
    return document.body.clientHeight;
  }

  get $100vw() {
    return document.body.clientWidth;
  }

  get $sliderHeight() {
    return this._sliderSmaller ? this.$100vh * 0.4 : this.$100vh;
  }

  get $headerRate() {
    return -this._scrollY / (this.$sliderHeight - this.$headerHeight);
  }

  get $headerBackground() {
    if (this._scrollY > 0) {
      return 'rgba(0,0,0,0)';
    } else {
      return `rgba(51,51,51,${this.$headerRate})`;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class PageController {
  private static _core = new PageControllerCore();
  private _self = PageController;

  get core() {
    return this._self._core;
  }

  constructor(protected router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.core._sliderSmaller = e.urlAfterRedirects.length > 1;
      }
    });
  }
}
