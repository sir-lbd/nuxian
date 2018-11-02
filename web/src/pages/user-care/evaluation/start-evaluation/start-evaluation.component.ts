import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {StartEvaluationService} from './start-evaluation.service';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'start-evaluation',
  templateUrl: './start-evaluation.component.html',
  styleUrls: ['./start-evaluation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartEvaluationComponent implements OnInit {

  id: any;
  assessments: any;
  curr_num: any;
  assessment: any;
  assessmentID: any;
  testID: any;

  constructor(public _router: Router,
              protected service: StartEvaluationService,
              protected activedRoute: ActivatedRoute,
              protected domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.domSanitizer.bypassSecurityTrustHtml('');
    this.activedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.assessments = params['ids'];
      const num = +params['index'];
      this.testID = +params['test'];
      this.curr_num = num < 0 ? 0 : num;
      this.assessmentID = this.assessments.split(',')[this.curr_num];
      this.getAssessmentDetail(this.assessmentID);
    });
  }

  // 获取量表详情
  getAssessmentDetail(id) {
    this.service.getAssessment(id).then((resp: any) => {
      // console.log('resp', resp);
      resp.description = this.domSanitizer.bypassSecurityTrustHtml(resp.description);
      this.assessment = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  goAnswer() {
    this.postUserTest();
  }

  // 生成测试数据
  postUserTest() {
    if (this.curr_num) {

    }
    this.service.postUserTest(this.testID, new Date()).then((resp: any) => {
      this._router.navigate(['/user-care/evaluation/answer-evaluation', this.id, this.assessments, this.curr_num, this.testID]);
    }).catch(err => {
      console.log('err', err);
    });
  }
}
