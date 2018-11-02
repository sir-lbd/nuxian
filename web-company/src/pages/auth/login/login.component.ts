import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../$services/auth/auth.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  togo = 1;
  username = 'ceping';
  password = 'ql12345678';
  constructor(protected router: Router,
              public service: AuthService,
              public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
    this.service.login(this.username, this.password).then(resp => {
      this.snackBar.open('登录成功', '', {
        duration: 2000,
        verticalPosition: 'top'
      })
      this.router.navigate(['project-management']);
    }).catch(err => {
      console.log(err);
      if (err && err.msg) {
        this.snackBar.open(err.msg, '', {
          duration: 2000,
          verticalPosition: 'top'
        });
      }

    });
  }

  goRegister() {
    this.router.navigate(['/auth/register']);
  }

}
