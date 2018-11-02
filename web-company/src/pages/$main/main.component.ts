import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PageController} from '../../services/controller/controller.service';
import {Http} from '../../services/http/http';

@Component({
  selector: 'div.page-container.main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  constructor(protected _ctrl: PageController, public http: Http) {}

  ngOnInit() {
    const token = localStorage.getItem('Token');
    // console.log('token', token);
    if (token) {
      this.http.requestOptioner.$extend({
        headers: {Authorization: 'Token ' + token}
      }, true);
    }
  }

  onMainPageScroll(y: number) {
    this._ctrl.core._scrollY = y;
  }
}
