import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

declare const Swiper;

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {
  @ViewChild('swiperContainer') _containerRef: ElementRef;
  @Output() scroll = new EventEmitter<any>();

  @Input() set translate(x) {
    this._context.translate = x;
  }

  _context: any;

  constructor(protected router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (this._context) {
          this._context.slideTo(0);
          setTimeout(() => this._context.resize.resizeHandler(), 400);
        }
      }
    });
  }

  ngOnInit() {
    this._context = new Swiper(this._containerRef.nativeElement, {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      mousewheel: true,
      on: {
        setTranslate: x => this.scroll.emit(x),
      }
    });

    setTimeout(() => this._context.resize.resizeHandler(), 400);
  }
}
