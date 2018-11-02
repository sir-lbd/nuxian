import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {EvaluationService} from '../../$services/evaluation/evaluation.service';

@Component({
  selector: 'div.sub-page.evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EvaluationComponent implements OnInit {

  reports = [];

  constructor(protected _router: Router, protected evaluation: EvaluationService) {
  }

  ngOnInit() {
    this.evaluation.getProductList(1).then((resp: any) => {
      // console.log('resp', resp);
      this.reports = resp.results.map(item => {
        item.icon = '/assets/img/picture-1.png';
        item.status = '未完成';
        return item;
      });
    }).catch(err => {
      console.log(err);
    });
  }

  goStartEvaluation(item) {
    this._router.navigate(['/user-care/evaluation/assessment-list', item.assessments, item.curr_num]);
  }
}
