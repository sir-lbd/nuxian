import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {PageController} from '../../../services/controller/controller.service';
import {Router} from '@angular/router';

export interface HeaderMenuItem {
  title?: string;
  url?: string;
  click?: () => void;
  selected?: boolean;
  disabled?: boolean;
  redirect?: boolean;
  submenu?: HeaderMenuItem[];
}

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  // @HostBinding('style.background') get background() {
  //   return this._ctrl.core.$headerBackground;
  // }

  @HostBinding('style.height') get height() {
    return this._ctrl.core.$headerHeight + 'px';
  }

  get isBlack() {
    return this._ctrl.core.$headerRate >= 1;
  }

  menuSmaller = false;
  logoSmaller = false;
  menu: HeaderMenuItem[] = [
    {
      title: '项目管理',
      url: '/project-rider'
    }
  ];

  showInfo = false;

  pages = ['/mine/user-info', '/mine/evaluation-records'];

  constructor(protected _ctrl: PageController, protected _router: Router) {
    window.addEventListener('resize', () => {
      this.checkScreen();
    });
  }

  ngOnInit() {
    this.checkScreen();
  }

  checkScreen() {
    const width = document.body.clientWidth;
    this.menuSmaller = width < 970;
    this.logoSmaller = width < 440;
  }

  selectMenuItem(item: HeaderMenuItem, subItem?: HeaderMenuItem) {
    this.menu = this.menu.map(_item => {
      _item.selected = item.url === _item.url && item.title === _item.title;
      if (_item.submenu && subItem) {
        _item.submenu = _item.submenu.map(_subItem => {
          _subItem.selected = subItem.url === _subItem.url && subItem.title === _subItem.title;
          return _subItem;
        });
      }
      return _item;
    });

    const workItem = subItem || item;

    if (workItem.url) {
      if (workItem.redirect) {
        const a = document.createElement('a');
        a.href = workItem.url;
        a.click();
      } else {
        this._router.navigate([workItem.url]);
      }
    }
    workItem.click && workItem.click();
  }

  toInfo(index: number) {
    // console.log('index', index);
    if (this.pages[index]) {
      this._router.navigate([this.pages[index]]);
    }
  }

  aboutMine() {
    this._router.navigate(['./user-info/basic']);
  }
}
