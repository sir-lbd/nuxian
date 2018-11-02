import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

export interface PageItemOptions {
  icon?: {
    selected?: string;
    normal?: string;
  };
  title?: string;
  subtitle?: string;
  url?: string;
  redirect?: boolean;
  selected?: boolean;
  disabled?: boolean;
  click?: () => void;
}

export interface PageMenu {
  title?: string;
  headerImage?: string;
  items?: PageItemOptions[];
}

@Component({
  selector: 'menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuPageComponent implements OnInit {

  // @HostBinding('class.container') _container = true;
  @HostBinding('class.display') _display = false;
  @Input() type = 'content';
  @Input() menu: PageMenu;
  hideMenu = false;

  get selectedItem() {
    return this.menu.items.filter(item => item.selected)[0];
  }

  constructor(protected _router: Router) {
    window.addEventListener('resize', () => {
      this.checkScreen();
    });

    this._router.events.subscribe(e => {
      setTimeout(() => {
        if (e instanceof NavigationEnd) {
          if (!this.menu || !this.menu.items) return;
          this.menu.items = this.menu.items.map(_item => {
            _item.selected = e.urlAfterRedirects.startsWith(_item.url);
            return _item;
          });
        }
      }, 100);
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this._display = true;
      this.checkScreen();
    }, 40);
  }

  checkScreen() {
    const width = document.body.clientWidth;
    this.hideMenu = width < 992;
  }

  selectMenuItem(item: PageItemOptions) {
    this.menu.items = this.menu.items.map(_item => {
      _item.selected = item.title === _item.title && item.subtitle === _item.subtitle && _item.url === item.url;
      return _item;
    });

    if (item.url) {
      if (item.redirect) {
        const a = document.createElement('a');
        a.href = item.url;
        a.click();
      } else {
        this._router.navigate([item.url]);
      }
    }
    item.click && item.click();
  }

}
