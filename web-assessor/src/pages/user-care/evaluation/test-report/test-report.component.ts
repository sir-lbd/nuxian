import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestReportComponent implements OnInit {

  constructor(public _router: Router, public location: PlatformLocation) {
  }

  ngOnInit() {
  }

  back() {
    window.history.back(-1);
  }


  goDetailReport() {
    this._router.navigate(['/user-care/evaluation/test-detail-report']);
  }

  goSelectAssessor() {
    this._router.navigate(['user-care/development-counseling/expert-introduction']);
  }
}
