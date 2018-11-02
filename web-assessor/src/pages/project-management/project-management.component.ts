import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectManagementService} from './project-management.service';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectManagementComponent implements OnInit {

  types = [true, true];
  products: any;

  constructor(protected router: Router, protected service: ProjectManagementService) {
  }

  ngOnInit() {
    this.getProduct();
  }

  // 获取产品列表
  getProduct() {
    this.service.getProductList(1).then((resp: any) => {
      // console.log('resp', resp);
      this.products = resp;
    }).catch(err => {
      console.log(err);
    });
  }

  goFile() {
    this.router.navigate(['/user-care/evaluation/file']);
  }
  goTest() {
    this.router.navigate(['/project-rider']);
  }

}
