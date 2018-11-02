import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {EvaluationService} from '../../$services/evaluation/evaluation.service';
import {AuthService} from '../../$services/auth/auth.service';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluationComponent implements OnInit {

  reports = [];
  // showLoading = true;
  isNoData = false;

  get UserID() {
    return AuthService.UserID;
  }

  constructor(protected _router: Router,
              protected evaluation: EvaluationService,
              protected snackBar: MatSnackBar) {
  }

  ngOnInit() {
    // console.log('User', this.UserID);
    this.evaluation.getMyProductList(this.UserID, true).then((resp: any) => {
      // console.log('resp', resp);
      this.reports = resp.results.map(item => {
        item.icon = '/assets/img/picture-1.png';
        item.assessmentsList = item.assessments.split(',');
        // console.log('item', item);
        return item;
      });
      this.isNoData = true;
      // console.log('reports', this.reports);
    }).catch(err => {
      console.log(err);
    });
  }

  goStartEvaluation(item) {
    // console.log(item);
    item.product.start_date = new Date(item.product.start_date);
    item.product.end_date = new Date(item.product.end_date);
    const now = new Date();
    if (item.product.start_date > now) {
      this.snackBar.open('该测评还未到开始时间！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
    } else if (item.product.end_date < now) {
      this.snackBar.open('该测评已过结束时间！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
    } else {
      this._router.navigate(['/user-care/evaluation/assessment-list', item.product.id, item.assessments, item.curr_num, item.id]);
    }
  }
}
