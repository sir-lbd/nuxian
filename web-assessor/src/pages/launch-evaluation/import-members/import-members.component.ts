import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-import-members',
  templateUrl: './import-members.component.html',
  styleUrls: ['./import-members.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImportMembersComponent implements OnInit {

  win = -1;
  num = 0;
  isShow = false;
  jsy = false;
  jse = false;
  rsb = false;
  cpb = false;

  constructor(protected router: Router) {
  }

  ngOnInit() {
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
  goUpList(){
    this.router.navigate(['/launch-evaluation/create-order']);
  }
}
