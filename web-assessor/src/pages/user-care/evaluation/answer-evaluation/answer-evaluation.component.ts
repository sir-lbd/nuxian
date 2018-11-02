import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AnswerEvaluationDialogComponent} from './answer-evaluation-dialog/answer-evaluation-dialog.component';
import {MatSnackBar} from '@angular/material';

// import {EvaluationService} from "../../../$services/evaluation/evaluation.service";
import {AnswerEvaluationService} from './answer-evaluation.service';

declare const Swiper;

export interface OptionOptions {
  id?: number;
  option?: string;
  value?: string;
  selected?: boolean;
}

export interface QuestionOptions {
  id?: number;
  selected?: any;
  type?: string;
  title?: string;
  text?: string;
  type_name?: string;
  title_img?: string;
  option?: any;
  rightkey?: string;
  analysis?: string;
  parent3?: number;
  contents?: any;
  optionsArr?: OptionOptions[];
}

@Component({
  selector: 'answer-evaluation',
  templateUrl: './answer-evaluation.component.html',
  styleUrls: ['./answer-evaluation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnswerEvaluationComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('SwiperAnswer') swiperAnswerDiv: ElementRef;
  ids: any;
  currentContent = 0;


  questionsList: QuestionOptions [];
  // {
  //   type_name: '单选题',
  //   title: '您好！1欢迎您参加“能力倾向测验”（）给出选择力倾向力测验倾向力测验倾向力测验倾向力测验倾向力测验',
  //   title_img: '',
  //   option: '',
  //   selected: -1,
  //   optionsArr: [
  //     {
  //       option: '',
  //       value: '能力倾向测验'
  //     }, {
  //       option: '',
  //       value: '能力倾向测验能力倾向测验'
  //     }, {
  //       option: '',
  //       value: '能力倾向测验能力倾向测验能力倾向测验'
  //     }, {
  //       option: '',
  //       value: '能力倾向测验测验测验'
  //     },
  //   ]
  // },
  // {
  //   type_name: '单选题',
  //   title: '您好！2欢迎您参加“能力倾向测验”（）给出选择力倾向力测验倾向力测验倾向力测验倾向力测验倾向力测验',
  //   title_img: '',
  //   option: '',
  //   selected: -1,
  //   optionsArr: [
  //     {
  //       option: 'A',
  //       value: '能力倾向测验'
  //     }, {
  //       option: 'B',
  //       value: '能力倾向测验能力倾向测验'
  //     }, {
  //       option: 'C',
  //       value: '能力倾向测验能力倾向测验能力倾向测验'
  //     }, {
  //       option: 'D',
  //       value: '能力倾向测验测验测验'
  //     },
  //   ]
  // },
  // {
  //   type_name: '单选题',
  //   title: '您好！3欢迎您参加“能力倾向测验”（）给出选择力倾向力测验倾向力测验倾向力测验倾向力测验倾向力测验',
  //   title_img: '',
  //   option: '',
  //   selected: -1,
  //   optionsArr: [
  //     {
  //       option: '',
  //       value: '能力倾向测验'
  //     }, {
  //       option: '',
  //       value: '能力倾向测验能力倾向测验'
  //     }, {
  //       option: '',
  //       value: '能力倾向测验能力倾向测验能力倾向测验'
  //     }, {
  //       option: '',
  //       value: '能力倾向测验测验测验'
  //     },
  //   ]
  // }
  // ];

  mySwiper: any;
  currentIndex = 0;
  auto = false;
  showNoSelected = false;
  time = 0;
  interval: any;
  progress = 0;
  mProgress = '0%';
  minutes: number;
  seconds: number;
  noAnswer = 0;
  showAlert = false;
  noAnswerArray = [];
  content: any;
  assessments;    // 量表id的字符串组合  1，2，3
  curr_num;       // 当前的量表下标
  contents;       // 题组id的字符串组合  1，2，3

  constructor(public _router: Router,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              protected activedRoute: ActivatedRoute,
              protected service: AnswerEvaluationService) {

  }


  ngOnInit() {

    this.activedRoute.params.subscribe((params: Params) => {
      this.assessments = params['ids'];
      this.curr_num = params['index'];
      // this.contents = params['contents'];
      // 获取当前应该测试的量表id
      const assessmentList = this.assessments.split(',');
      this.service.getAssessment(parseInt(assessmentList[this.curr_num], 10)).then(resp => {
        // console.log('resp', resp);
        resp.assessment_content.forEach(element => {
          element.contents_parent.forEach(item => {
            if (this.contents) {
              this.contents += ',' + item.id;
            } else {
              this.contents = item.id + '';
            }
          });
        });
        this.service.getQuestion(this.contents).then(qResp => {
          // console.log('qResp', qResp);
          this.questionsList = this.dealData(qResp.results);
          // console.log('questionsList', this.questionsList);
        }).catch(err => {
          console.log(err);
        });

        const allTime = resp.consum_time;
        let times = allTime;
        this.interval = setInterval(() => {
          this.time += 1;
          this.progress = this.time * 100 / allTime;
          if (this.progress < 2) {
            this.mProgress = '0px';
          } else if (this.progress > 90) {
            this.mProgress = 'calc(95% - 20px)';
          } else {
            this.mProgress = 'calc(' + this.progress + '% - 20px)';
          }
          if (this.time === allTime) {
            clearInterval(this.interval);
          }
          times -= 1;
          this.minutes = Math.floor(times / 60);
          this.seconds = times % 60;
        }, 1000);


      }).catch(err => {
        console.log(err);
      });
    });

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.mySwiper = new Swiper(this.swiperAnswerDiv.nativeElement, {
        loop: false,
        allowSlidePrev: true,
      });
    }, 1000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  // 转化试题数据
  dealData(data) {
    data.map(item => {
      item.selected = -1;
      item.option = JSON.parse(item.option);
      item.optionsArr = [];
      [item.option['A'], item.option['B'], item.option['C'], item.option['D'], item.option['E']].map((opt, index) => {
        const optionsKey = ['A', 'B', 'C', 'D', 'E'];
        // opt.selected = -1;
        opt && item.optionsArr.push({option: optionsKey[index], value: opt});
      });
      item.type_name = '单选题';
      // console.log(item.optionsArr);
      return item;
    });
    // console.log('data: ', data);
    return data;
  }


  slideToPre() {
    if (this.mySwiper.activeIndex === 0) {
      this.snackBar.open('当前是第一题', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      return;
    }

    this.caculateNo();
    this.mySwiper.slidePrev();
  }

  slideToNext() {
    // console.log('currentIndex', this.currentIndex);
    this.caculateNo();
    if (this.mySwiper.activeIndex + 1 === this.questionsList.length) {
      this.showAlert = true;
      // this.snackBar.open('当前是最后一题', '', {
      //   duration: 2000,
      //   verticalPosition: 'top'
      // });
    }
    if (this.currentIndex <= this.mySwiper.activeIndex) {
      this.currentIndex += 1;
    }
    this.mySwiper.slideNext();
  }

  caculateNo() {
    this.noAnswer = 0;
    this.noAnswerArray = [];
    this.questionsList.forEach((q, index) => {
      if (q.selected === -1) {
        this.noAnswer += 1;
        this.noAnswerArray.push(index);
      }
    });
    // console.log('noAnswerArray', this.noAnswerArray);
  }

  selectAnswer(event) {
    // console.log(event.value);
    // console.log('questionsList', this.questionsList);
    if (this.auto) {
      setTimeout(() => {
        this.slideToNext();
      }, 500);
    }
  }

  clickAuto() {
    this.auto = !this.auto;
  }

  backToCheck() {
    this.mySwiper.slideTo(0);
    this.showAlert = false;
    this.noAnswer = 0;
  }

  toNoAnswer() {
    this.showAlert = false;
    this.mySwiper.slideTo(this.noAnswerArray[0]);
  }

  toQuestion(index: number) {
    this.mySwiper.slideTo(index);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AnswerEvaluationDialogComponent, {
      width: '250px',
      data: {'title': '测评题目'}
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }


  submit() {
    this._router.navigate(['/user-care/view-report/check-report']);
  }

}

