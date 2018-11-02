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

import {AnswerEvaluationService} from './answer-evaluation.service';
import {AuthService} from '../../../$services/auth/auth.service';

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
  @ViewChild('SwiperPractice') swiperPractice: ElementRef;

  get UserID() {
    return AuthService.UserID;
  }

  ids: any;
  id: any;
  practice: any;
  questionsList: QuestionOptions [];
  assessmentList: any;
  currentAssessment: any;
  mySwiper: any;
  practiceSwiper: any;
  currentIndex = 0; // 已经达到的最后的位置坐标
  auto = true;
  showNoSelected = false;
  time = 0;
  interval: any;
  progress = 0;
  mProgress = '0%';
  minutes: number;
  seconds: number;
  noAnswer = 0;
  showAlert = false;
  noAnswerArray = []; // 未答题位置数组
  content: any;
  assessments;
  testID: any;
  assessmentID: any;
  curr_num;       // 当前的量表下标
  contents;       // 题组id的字符串组合  1，2，3
  oneConsumeTime = 0; // 单个题耗时
  consumeHours = 0; // 总耗时-小时
  consumeMinutes = 0; // 总耗时-分钟
  consumeSeconds = 0; // 总耗时-秒
  tenMinutes = 10;
  tenSeconds = 0;
  tenInterval: any;
  showLoading = true;
  showPractice = false;
  showStart = false;
  hasNoAnswer = false; // 到过最后一题且有未答题
  isBack = false;

  constructor(public _router: Router,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              protected activedRoute: ActivatedRoute,
              protected service: AnswerEvaluationService) {

  }


  ngOnInit() {
    this.activedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.assessments = params['ids'];
      this.curr_num = +params['index'];
      this.testID = +params['test'];
      // console.log('testID', this.testID);
      // this.contents = params['contents'];
      // 获取当前应该测试的量表id
      this.assessmentList = this.assessments.split(',');
      // console.log('assessmentList', this.assessmentList)
      this.service.getAssessment(parseInt(this.assessmentList[this.curr_num], 10)).then(resp => {
        // console.log('resp', resp);
        this.currentAssessment = resp;
        // console.log('currentAssessment', this.currentAssessment);
        resp.assessment_content.forEach(element => {
          element.contents_parent.forEach(item => {
            if (this.contents) {
              this.contents += ',' + item.id;
            } else {
              this.contents = item.id + '';
            }
          });
        });
        this.getPractice();
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
        observer: true
      });
      this.practiceSwiper = new Swiper(this.swiperPractice.nativeElement, {
        loop: false,
        allowSlidePrev: true,
        observer: true
      });
    }, 1000);
  }

  // 获取练习题
  getPractice() {
    this.practice = [];
    this.service.getPractice(this.contents).then(resp => {
      this.practice = resp;
      console.log(resp);
      this.practice = this.dealData(resp);
      // console.log('practice', this.practice);
      if (this.practice.length) {
        this.showPractice = true;
      } else {
        // this.showStart = true;
        this.getQuestions();
      }
      this.showLoading = false;
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取正式试题
  getQuestions() {
    this.showLoading = true;
    this.showPractice = false;
    this.showStart = false;
    this.service.getQuestion(this.contents).then(qResp => {
      // console.log('qResp', qResp);
      this.questionsList = this.dealData(qResp.results);
      this.showLoading = false;
      this.caculateNo();
      // console.log('questionsList', this.questionsList);
    }).catch(err => {
      console.log(err);
    });

    const allTime = this.currentAssessment.consum_time;
    // const allTime = 10;
    let times = allTime;
    this.interval = setInterval(() => {
      this.time += 1;
      this.oneConsumeTime += 1;
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
        this.showAlert = true;
        if (this.assessmentList.length > (this.curr_num + 1)) { // 未答完所有量表
          // 十分钟倒计时
          this.executeTenInterval();
        }
      }
      times -= 1;
      this.minutes = Math.floor(times / 60);
      this.seconds = times % 60;
    }, 1000);
  }

  // 转化试题数据
  dealData(data) {
    data.map(item => {
      item.selected = '';
      // console.log('item', item);
      item.option = JSON.parse(item.option);
      item.optionsArr = [];
      [item.option['A'], item.option['B'], item.option['C'], item.option['D'], item.option['E']].map((opt, index) => {
        const optionsKey = ['A', 'B', 'C', 'D', 'E'];
        opt && item.optionsArr.push({option: optionsKey[index], value: opt});
      });
      item.type_name = '单选题';
      // console.log(item.optionsArr);
      return item;
    });
    // console.log('data: ', data);
    return data;
  }

  // 上一题
  slideToPre() {
    this.oneConsumeTime = 0;
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

  // 下一题
  slideToNext() {
    this.caculateNo();
    // console.log('noAnswerArray', this.noAnswerArray);

    // 当前题答题时间清空重新计算
    this.oneConsumeTime = 0;
    // 更新当前进度，最大不超过题目数量
    if (this.currentIndex <= this.mySwiper.activeIndex) {
      this.currentIndex += 1;
    }

    if (this.mySwiper.activeIndex + 1 === this.questionsList.length) { // 当前是最后一道题的处理
      this.showAlert = true;
      if (this.noAnswerArray.length) {
        this.hasNoAnswer = true;
      }
      if (this.assessmentList.length > (this.curr_num + 1)) { // 未答完所有量表
        // 十分钟倒计时
        this.executeTenInterval();
      } else { // 答完所有量表
        this.getConsumeTimes();
      }
    } else { // 当前不是最后一道题
      // 没有未答题
      if (!this.noAnswerArray.length) {
        if (this.isBack) {
          this.mySwiper.slideNext();
        } else {
          this.showAlert = true;
          if (this.assessmentList.length > (this.curr_num + 1)) { // 未答完所有量表
            // 十分钟倒计时
            this.executeTenInterval();
          } else { // 答完所有量表
            this.getConsumeTimes();
          }
        }
      } else {
        // 到过最后一题且有过未答题
        if (this.hasNoAnswer) {
          if (this.isBack) {
            this.mySwiper.slideNext();
          } else {
            if (this.noAnswerArray.length) {
              // 下一道未答题
              this.mySwiper.slideTo(this.noAnswerArray[0]);
            } else {
              // 下一题
              this.mySwiper.slideNext();
            }
          }
        } else {
          // 下一题
          this.mySwiper.slideNext();
        }
      }
    }


  }

  // 答完一个量表之后的十分钟倒计时
  executeTenInterval() {
    if (!this.tenInterval) {
      let times = 10 * 60;
      this.tenInterval = setInterval(() => {
        times -= 1;
        this.tenMinutes = Math.floor(times / 60);
        this.tenSeconds = times % 60;
        if (times === 0) {
          clearInterval(this.tenInterval);
        }
      }, 1000);
    }

  }

  // 计算未答题数量
  caculateNo() {
    this.noAnswer = 0;
    this.noAnswerArray = [];
    this.questionsList.forEach((q, index) => {
      if (q.selected === '') {
        this.noAnswer += 1;
        this.noAnswerArray.push(index);
      }
    });
    // console.log('noAnswerArray', this.noAnswerArray);
  }

  // 选择答案自动提交答案
  selectAnswer(event, question, type: number) {
    // console.log('type', type);
    if (type) {
      this.answerQuestion(question.id, this.testID, event.value);
    } else {
      if (this.practiceSwiper.activeIndex + 1 === this.practice.length) {
        this.showStart = true;
      } else {
        setTimeout(() => {
          this.practiceSwiper.slideNext();
        }, 200);
      }
    }
  }

  // 提交答案
  answerQuestion(question_id: any, test_id: any, answer: any) {
    this.service.answerQuestion(this.UserID, question_id, test_id,
      this.assessmentList[this.curr_num], answer,
      this.oneConsumeTime).then(resp => {
      // console.log('resp', resp);
      if (this.auto) {
        setTimeout(() => {
          this.slideToNext();
        }, 200);
      }
    }).catch(err => {
      console.log('err', err);
    });
  }

  // 继续答题
  toContinue() {
    this.testCurrentNum();
    if (this.assessmentList.length > (this.curr_num + 1)) {
      this._router.navigate(['/user-care/evaluation/start-evaluation', this.id, this.assessments, this.curr_num + 1, this.testID]);
    }
  }

  // 自动下一题
  clickAuto() {
    this.auto = !this.auto;
  }

  // 返回检查
  backToCheck() {
    this.mySwiper.slideTo(0);
    this.showAlert = false;
    this.noAnswer = 0;
    if (this.tenInterval) {
      this.tenMinutes = 10;
      this.tenSeconds = 0;
      clearInterval(this.tenInterval);
    }
  }

  // 继续练习
  backToPractice() {
    this.getPractice();
    this.showPractice = true;
    this.showStart = false;
    this.practiceSwiper.slideTo(0);
  }

  // 跳转未答题
  toNoAnswer() {
    this.showAlert = false;
    this.mySwiper.slideTo(this.noAnswerArray[0]);
    // console.log('noAnswerArray', this.noAnswerArray);
  }

  // 提交生成报告
  submit() {
    this.postUserTest();
    this.testCurrentNum();
    this._router.navigate(['/user-care/view-report/check-report', this.assessments, this.id, this.testID]);
  }

  // 答题完成更新测试表数据
  postUserTest() {
    this.assessmentID = this.assessmentList[this.curr_num];
    // console.log('id', this.assessmentID);
    this.service.postUserTest(this.testID, new Date()).then((resp: any) => {
      // console.log('resp', resp);
      this.testID = resp.id;
    }).catch(err => {
      console.log('err', err);
    });
  }

  // 更新当前量表进度
  testCurrentNum() {
    this.service.testCurrentNum(this.testID, this.curr_num).then(resp => {
      // console.log('resp', resp);
    }).catch(err => {
      console.log('err', err);
    });
  }


  // 获取总耗时
  getConsumeTimes() {
    this.service.consumeTime(this.testID).then((resp: any) => {
      // console.log('resp', resp);
      const consumeTimes = resp.consum_time;
      this.consumeHours = Math.floor(consumeTimes / (60 * 60));
      this.consumeMinutes = Math.floor(consumeTimes / 60) % 60;
      this.consumeSeconds = consumeTimes % (60);
    }).catch(err => {
      console.log('err', err);
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    if (this.tenInterval) {
      clearInterval(this.tenInterval);
    }
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
}

