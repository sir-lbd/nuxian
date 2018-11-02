import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {
  act = 0;
  text = [
    {
      img: '../../../../../assets/img/doctor.jpg',
      title: '专家',
      con: '更专业精准的测评'
    },
    {
      img: '../../../../../assets/img/doctor.jpg',
      title: '高级咨询师',
      con: '更好帮您测评'
    },
    {
      img: '../../../../../assets/img/doctor.jpg',
      title: '咨询师',
      con: '更专业的测评'

    }
  ]
  nav = [
    {
      title: '推荐测评'
    },
    {
      title: '测评品牌'
    }
    ,
    {
      title: '所有量表'
    }
    ,
    {
      title: '历史测评项目'
    }
  ];
  constructor( protected router: Router) { }

  ngOnInit() {
  }
  chose(i){
    this.act = i
  }
  goProductList(){
    this.router.navigate(['/user-care/evaluation/product/product-list'])
  }
}
