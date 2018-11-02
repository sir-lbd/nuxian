import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EvaluationService} from '../../../$services/evaluation/evaluation.service';

// @ts-ignore
@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssessmentListComponent implements OnInit {
  ids: any;
  index: number;
  assessments: any;

  constructor(protected _router: Router, protected activatedRouter: ActivatedRoute, protected evaluation: EvaluationService) {
  }

  ngOnInit() {
    this.ids = this.activatedRouter.snapshot.paramMap.get('ids');
    this.index = +this.activatedRouter.snapshot.paramMap.get('index');
    this.evaluation.getAssessmentList(this.ids).then((assessments: any) => {
      this.assessments = assessments.results;
    }).catch(err => {
      console.log(err);
    });
  }

  back() {
    window.history.back(-1);
  }

  toTest() {
    this._router.navigate(['user-care/evaluation/start-evaluation', this.ids, this.index]);
  }

}
