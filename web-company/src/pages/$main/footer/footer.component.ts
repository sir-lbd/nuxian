import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {PageController} from '../../../services/controller/controller.service';

export interface FooterMenuItem {
  title?: string;
  url?: string;
  redirect?: boolean;
}

@Component({
  selector: 'page-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {
  smaller: boolean;
  addPadding: boolean;

  menu: FooterMenuItem[] = [
    {
      title: '中心简介',
      url: 'https://www.qeec.cn/kssp/aboutus.html?type=aboutus_introduction',
      redirect: true,
    },
    {
      title: '法律法规',
      url: 'https://www.qeec.cn/kssp/aboutus.html?type=aboutus_law',
      redirect: true,
    },
    {
      title: '联系我们',
      url: 'https://www.qeec.cn/kssp/aboutus.html?type=contact',
      redirect: true,
    },
    {
      title: '合作展示',
      url: 'https://www.qeec.cn/kssp/partners-display.html',
      redirect: true,
    },
  ];

  @HostBinding('style.display') get display() {
    return this._ctrl.core._sliderSmaller ? 'block' : 'none';
  }

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
    this.smaller = width < 768;
    this.addPadding = width < 576;
  }

  selectMenuItem(item: FooterMenuItem) {
    if (item.url) {
      if (item.redirect) {
        const a = document.createElement('a');
        a.href = item.url;
        a.click();
      } else {
        this._router.navigate([item.url]);
      }
    }
  }

}
