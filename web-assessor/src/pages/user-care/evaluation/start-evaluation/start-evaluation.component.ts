import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {StartEvaluationService} from './start-evaluation.service';


@Component({
  selector: 'start-evaluation',
  templateUrl: './start-evaluation.component.html',
  styleUrls: ['./start-evaluation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartEvaluationComponent implements OnInit {

  assessments: any;
  curr_num: any;
  assessment: any;

  constructor(public _router: Router,
              protected service: StartEvaluationService,
              protected activedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activedRoute.params.subscribe((params: Params) => {
      this.assessments = params['ids'];
      this.curr_num = params['index'];
      const id = this.assessments.split(',')[this.curr_num];
      this.getAssessmentDetail(id);
    });
  }

  // 获取量表详情
  getAssessmentDetail(id) {
    this.service.getAssessment(id).then(resp => {
      // console.log('resp', resp);
      this.assessment = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  goAnswer() {
    this._router.navigate(['/user-care/evaluation/answer-evaluation', this.assessments, this.curr_num]);
  }
}
