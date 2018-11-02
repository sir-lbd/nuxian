import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectManagementService} from './project-management.service';
import {AuthService} from "../$services/auth/auth.service";

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectManagementComponent implements OnInit {

  get UserID() {
    return AuthService.UserID;
  }

  types = [true, true];
  color = 'primary';
  mode = 'determinate';
  value = 50;
  products: any;
  news = [
    {
      title: '精准招聘',
      img: 'assets/img/news-1.png',
      tips: '认知+行为+性格+心理健康全方位评估,多种测评工具帮助企业精准识别人才，提高人才竞争力。多维度、自定义满足不同企业不同岗位需求'
    },
    {
      title: '鸿途、昂途',
      img: 'assets/img/news-2.png',
      tips: '鸿途、昂途是以心理学与人力资源实践为基础建立的一体化测评系统，适用于中高层人才选拔、晋升和配置工作。帮助企业科学看待人才，建立清晰高效的选拔标准，洞察员工价值与降低潜在风险。'
    },
    {
      title: '团队诊断',
      img: 'assets/img/news-3.png',
      tips: '多层级、多岗位人才管理测评工具，旨在对团队人才配置状况进行调查与盘点。帮助企业在招聘、关键岗位选拔与配置，以及高潜人才职业规划与发展做出决策。'
    },
  ];

  showAlert = false;

  constructor(protected router: Router, protected service: ProjectManagementService) {
  }

  ngOnInit() {
    if (this.UserID) {
      this.getProduct(0);
    }
  }

  // 获取产品列表
  getProduct(type?: number) {

    if (type === 0) {
      const data = {brand: 0, scene: 0, limit: 16, user_id: this.UserID};
      this.service.getProductList(data).then((resp: any) => {
        // console.log('resp', resp);
        this.products = resp;
      }).catch(err => {
        console.log(err);
      });
    }
    if (type === 1) {
      const data = {brand: 0, scene: 0, limit: 16, user_id: this.UserID};
      this.service.getProductList(data).then((resp: any) => {
        // console.log('resp', resp);
        this.products = resp;
      }).catch(err => {
        console.log(err);
      });
    }


  }


  download() {
    this.showAlert = false;
    window.open('http://muxian-sms.wei7star.com/static/information.xlsx');
  }

  toNext() {
    this.router.navigate(['/launch-evaluation']);
  }

}
