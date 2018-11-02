import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LaunchEvaluationService} from '../launch-evaluation.service';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-import-members',
  templateUrl: './import-members.component.html',
  styleUrls: ['./import-members.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImportMembersComponent implements OnInit {

  showAppraiser = false;
  showReport = false;
  num = 0;
  isShow = false;
  id: any;
  product: any;
  assessments: any;
  users: any;
  importData = [];
  report: any;
  appraiser: any;
  appraisers: any;


  constructor(protected router: Router,
              public activatedRoute: ActivatedRoute,
              private service: LaunchEvaluationService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      // console.log('id', this.id);
      this.service.getShopList(this.id).then((shop: any) => {
        // console.log('shop', shop);
        this.report = shop.appraiser_title;
        // this.importData = JSON.parse(shop.detail.toString());
        // console.log('report', this.report);
        // if (this.report > 0) {
        this.service.getAppraiserTitles().then(resp => {
          // console.log('resp', resp);
          this.appraisers = resp;
          this.appraisers.forEach(a => {
            a.label = a.label.split(',');
          });
        }).catch(err => {
          console.log(err);
        });
        // }
        this.service.getProductByID(shop.product).then((resp: any) => {
          // console.log(resp);
          this.product = resp;
          this.service.getAssessmentsByProduct(resp.assessments).then(assessments => {
            this.assessments = assessments;
            // console.log('ass', this.assessments)
            this.assessments.forEach(item => {
              item.short_name = JSON.parse(item.short_name);
            });
            // console.log('assessments', this.assessments);
          }).catch(err => {
            console.log(err);
          });
        }).catch(err => {
          console.log(err);
        });
      }).catch(err => {
        console.log(err);
      });
      // this.report = +params['report'];
      // console.log('id', this.productID);


    });
    this.getAllUsers();
  }

  // 获取所有用户
  getAllUsers() {
    this.service.getAllUsers().then(resp => {
      this.users = resp;
      // console.log('users', this.users);
    }).catch(err => {
      console.log(err);
    });
  }

  selectAppraiser(a: any) {

  }

  addToImport(user) {
    user.added = true;
    this.importData.push({user: user, assessments: this.assessments, appraiser_title: this.report});
    // console.log('importData', this.importData);
  }

  deleteUser(index: number) {
    this.importData[index].user.added = false;
    this.importData.splice(index, 1);
  }

  backTo() {
    // console.log('bb');
    window.history.back(-1);
  }

  importMembers() {
    // console.log('importData', this.importData);
    if (!this.importData.length) {
      this.snackBar.open('请选择成员导入！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      return;
    }
    const test = [];
    this.importData.forEach(data => {
      data.assessmentList = [];
      data.assessments.forEach(a => {
        data.assessmentList.push(a.id);
      })
      test.push({
        user: data.user.id, assessments: data.assessmentList.join(','),
        appraiser_title: data.appraiser_title
      });
    });
    // console.log('test', test);
    this.service.putShopList(this.id, JSON.stringify(test)).then(resp => {
      // console.log('resp', resp);
      this.router.navigate(['/launch-evaluation/create-order', this.id]);
    }).catch(err => {
      console.log(err);
    });
  }

  goCom() {
    this.router.navigate(['/user-care/evaluation/product/product-com']);
  }

  goPayment() {
    this.router.navigate(['/user-care/evaluation/file/payment']);
  }

  goConfig() {
    this.router.navigate(['/launch-evaluation/import-members']);
  }

  goUpList() {
    this.router.navigate(['/launch-evaluation/create-order']);
  }
}
