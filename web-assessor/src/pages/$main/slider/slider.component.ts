import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {PageController} from '../../../services/controller/controller.service';

@Component({
  selector: 'page-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {

  @HostBinding('style.height')
  get height() {
    return this._ctrl.core.$sliderHeight + 'px';
  }

  constructor(protected _ctrl: PageController) {
  }

  ngOnInit() {
  }

}
