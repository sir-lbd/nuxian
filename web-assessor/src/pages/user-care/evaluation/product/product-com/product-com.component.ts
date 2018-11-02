import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-com',
  templateUrl: './product-com.component.html',
  styleUrls: ['./product-com.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComComponent implements OnInit {
  com = 1;
  bot = 0;
  bot2 = 0;
  com1 = 0;
  sj1 = [
    {
      tit: '公司信息'
    },
    {
      tit: '账号信息'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
