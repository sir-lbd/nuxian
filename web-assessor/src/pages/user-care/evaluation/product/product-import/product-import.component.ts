import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-import',
  templateUrl: './product-import.component.html',
  styleUrls: ['./product-import.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductImportComponent implements OnInit {

  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  goPay() {
    this.router.navigate(['/user-care/evaluation/product/product-pay'])
  }
}
