import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-expert-introduction',
  templateUrl: './expert-introduction.component.html',
  styleUrls: ['./expert-introduction.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExpertIntroductionComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit() {
  }
  pay() {
    this._router.navigate(['/user-care/development-counseling/confirm-payment']);
  }
}
