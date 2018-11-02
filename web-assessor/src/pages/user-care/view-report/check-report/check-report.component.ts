import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html',
  styleUrls: ['./check-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckReportComponent implements OnInit {

  openList = true;
  report = -1;

  constructor(public _router: Router, public location: PlatformLocation) {
  }

  ngOnInit() {
  }

  selectReport(event) {
    this.report = event.value;
  }


  back() {
    window.history.back(-1);
  }

  backToHome() {
    this._router.navigate(['/user-care/evaluation']);
  }

  confirmToPay() {
    this._router.navigate(['/user-care/development-counseling/confirm-payment']);
  }

  goDetailReport() {
    this._router.navigate(['/user-care/view-report/report-detail']);
  }

  goSelectAssessor() {
    this._router.navigate(['user-care/development-counseling/expert-introduction']);
  }


}
