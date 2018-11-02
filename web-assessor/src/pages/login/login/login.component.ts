import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  togo = -1 ;
  type = 0;
  mobile = 0;
  constructor(protected router: Router) { }

  ngOnInit() {
  }
  goRegister(){
    this.router.navigate(['/login/register'])
  }
}
