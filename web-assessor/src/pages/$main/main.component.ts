import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PageController} from '../../services/controller/controller.service';

@Component({
  selector: 'div.page-container.main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  constructor(protected _ctrl: PageController) {}

  ngOnInit() {
  }

  onMainPageScroll(y: number) {
    this._ctrl.core._scrollY = y;
  }
}
