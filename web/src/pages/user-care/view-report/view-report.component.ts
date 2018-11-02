import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {EvaluationService} from '../../$services/evaluation/evaluation.service';
import {AuthService} from "../../$services/auth/auth.service";

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewReportComponent implements OnInit {

  get UserID() {
    return AuthService.UserID;
  }

  reports = [];

  isNoData = false;

  constructor(public router: Router, protected evaluation: EvaluationService) {
  }

  ngOnInit() {
    this.evaluation.getMyProductList(this.UserID, false).then((resp: any) => {
      this.reports = resp.results.map(item => {
        item.icon = '/assets/img/picture-1.png';
        item.assessmentsList = item.assessments.split(',');
        // console.log('item', item);
        return item;
      });
      this.isNoData = true;
    }).catch(err => {
      console.log(err);
    });
  }

  checkReport(report: any) {
    // console.log('report', report);
    this.router.navigate(['/user-care/view-report/check-report', report.assessments, report.product.id, report.id]);
  }

}
