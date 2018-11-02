import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatPaginatorIntl, MatSnackBar} from '@angular/material';
import {MyPaginator} from '../../$services/data/paginator';
import {Framework, Label, QualityFileService} from '../quality-file.service';
import {AuthService} from '../../$services/auth/auth.service';
import {MyDialogComponent} from '../../my-dialog/my-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlankComponent implements OnInit {

  get UserID() {
    return AuthService.UserID;
  }

  type = 0;
  length = 1;
  pageSize = 6;
  page = 1;

  company: any;
  frameworks: any;
  dialogFramework: any;
  labels: any;
  showAdd = false;
  framework: Framework = {};
  showItems = true;
  selectedItems: any;
  selectedLabels: any;
  showDefault = false;
  label: Label = {};



  constructor(protected matPaginatorIntl: MatPaginatorIntl,
              protected service: QualityFileService,
              protected authService: AuthService,
              protected snackBar: MatSnackBar,
              protected dialog: MatDialog,
              protected router: Router) {
    this.matPaginatorIntl = new MyPaginator(this.matPaginatorIntl).setPaginator();
  }

  ngOnInit() {
    this.frameworks = [];
    if (this.UserID) {
      this.authService.getUser(this.UserID).then((user: any) => {
        this.company = user;
        this.getFramework();
        this.getCompanyLabels();
      }).catch(err => {
        console.log(err);
      });
    }
  }

  // 获取架构
  getFramework() {
    this.frameworks = [];
    this.dialogFramework = [];
    this.service.getFramework(this.company.person_user.company).then((resp: any) => {
      // console.log('resp', resp);
      // this.frameworks = resp;
      resp.company.type = 0;
      this.frameworks[0] = resp.company;
      this.dialogFramework = resp.frameworks;
      resp.frameworks.forEach(f => {
        f.type = 1;
        this.frameworks.push(f);
      });
      resp.members.forEach(m => {
        m.type = 2;
        this.frameworks.push(m);
      });
      if (this.frameworks && this.frameworks.length > 1) {
        this.frameworks[1].show = true;
        this.getFrameworkMembers(this.frameworks[1].id);
      }
      // console.log('frameworks', this.frameworks);
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取标签
  getCompanyLabels() {
    this.labels = [];
    this.service.getCompanyLabels(this.company.person_user.company).then((resp: any) => {
      resp.company.type = 0;
      this.labels[0] = resp.company;
      resp.labels.forEach(label => {
        label.type = 1;
        this.labels.push(label);
      });
      if (this.labels && this.labels.length > 1) {
        this.labels[1].show = true;
        this.getLabelsMembers(this.labels[1].id);
      }
      // console.log('labels', this.labels);
    }).catch(err => {
      console.log(err);
    });
  }

  // 添加子部门
  addSubdivision() {
    if (!this.framework.name) {
      return this.snackBar.open('请输入架构名称！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
    }
    this.framework.company = this.frameworks[0].id;
    // console.log('frameworkName', this.framework);
    this.service.addFramework(this.framework).then((resp: any) => {
      // console.log(resp);
      this.showAdd = false;
      resp.type = 1;
      this.getFramework();
    }).catch(err => {
      console.log(err);
    });

  }

  // 添加标签
  addLabel() {
    if (!this.label.name) {
      return this.snackBar.open('请输入标签名称！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
    }
    this.label.company = this.labels[0].id;
    this.service.addLabel(this.label).then((resp: any) => {
      this.showAdd = false;
      this.getCompanyLabels();
    }).catch(err => {
      console.log(err);
    });
  }

  // 点击选择架构
  selectItem(event: any, f: any) {
    this.frameworks.forEach(item => {
      item.edit = false;
      item.show = false;
    });
    const cList: DOMTokenList = event.target.classList;
    // console.log('cList', cList);
    f.show = true;
    if (cList.contains('iconfont') || cList.contains('mat-button-wrapper')) {
      f.edit = true;
    } else {
      if (f.type === 1) {
        this.showDefault = false;
        this.getFrameworkMembers(f.id);
      }
    }
  }

  // 选择标签
  selectLabel(event: any, f: any) {
    // console.log('f', f);
    this.labels.forEach(item => {
      item.edit = false;
      item.show = false;
    });
    const cList: DOMTokenList = event.target.classList;
    // console.log('cList', cList);
    f.show = true;
    if (cList.contains('iconfont') || cList.contains('mat-button-wrapper')) {
      f.edit = true;
    } else {
      if (f.type === 1) {
        this.showDefault = false;
        this.getLabelsMembers(f.id);
      }
    }
  }

  // 获取架构成员列表
  getFrameworkMembers(id: any) {
    this.selectedItems = [];
    this.service.personUsers(id).then((resp: any) => {
      this.selectedItems = resp.members;
      // console.log('selectedItems', this.selectedItems);
      this.showDefault = true;
    }).catch(err => {
      console.log(err);
    });
  }

  // 获取标签组成员
  getLabelsMembers(id: any) {
    this.selectedLabels = [];
    this.service.labelMembers(id).then((resp: any) => {
      this.selectedLabels = resp;
      this.showDefault = true;
      // console.log('selectedLabels', resp);
    }).catch(err => {
      console.log(err);
    });
  }

  // 添加成员到标签
  addMemberToLabel(f: any) {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      // width: '250px',
      data: {'title': '请选择成员添加', type: 3, label: f.id, framework: this.dialogFramework}
    });
    dialogRef.beforeClose().subscribe(resp => {
      // console.log('resp', resp);
      if (resp && resp.length) {
        const data = resp.join(',');
        this.service.addToLabel(f.id, data).then(res => {
          // console.log('res', res);
          this.getLabelsMembers(f.id);
          f.edit = false;
        }).catch(err => {
          console.log(err);
        });
      }
    });
  }

  // 修改架构名称
  editName(f: any) {
    // console.log('f', f);
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: {'title': '请输入架构名', type: f.type, framework: this.dialogFramework}
    });
    dialogRef.beforeClose().subscribe(resp => {
      // console.log('resp', resp);
      if (f.type === 1) {
        if (resp) {
          const data = {id: f.id, name: resp};
          this.editFramework(data);
        }
      } else if (f.type === 2) {
        if (resp) {
          const data = {id: f.id, framework: resp.id};
          this.editPersonUser(data);
        }
      }
    });
  }

  // 修改标签名
  editLabelName(f: any) {
    // console.log('f', f);
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: {'title': '请输入标签名', type: f.type, framework: []}
    });
    dialogRef.beforeClose().subscribe(resp => {
      // console.log('resp', resp);
      if (f.type === 1) {
        if (resp) {
          const data = {id: f.id, name: resp};
          this.editLabel(data);
        }
      }
    });
  }

  // 删除组织架构或成员
  delete(f: any) {
    // console.log('f', f);
    if (f.type === 1) {
      this.deleteFramework(f.id);
    } else if (f.type === 2) {
      this.deletePersonUser(f.id);
    }
  }

  // 删除标签
  deleteLabel(l: any) {
    // console.log('l', l);
    this.service.deleteLabel(l.id).then(resp => {
      this.snackBar.open('删除成功！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.getCompanyLabels();
    }).catch(err => {
      console.log(err);
    });
  }

  // 查看详情
  toDetail(item: any) {
    this.router.navigate(['/quality-file/label']);
  }


  // 下移
  down(f: any) {
    console.log('f', f);
  }


  // 修改架构
  editFramework(data: any) {
    this.service.editFramework(data).then(resp => {
      // console.log(resp);
      this.snackBar.open('修改成功', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.getFramework();
    }).catch(err => {
      console.log(err);
    });
  }

  // 修改标签
  editLabel(data: any) {
    this.service.editLabel(data).then(resp => {
      // console.log(resp);
      this.snackBar.open('修改成功', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.getCompanyLabels();
    }).catch(err => {
      console.log(err);
    });
  }

  // 删除架构
  deleteFramework(id: any) {
    this.service.deleteFramework(id).then(resp => {
      // console.log(resp);
      this.snackBar.open('删除成功！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.getFramework();
    }).catch(err => {
      console.log(err);
    });
  }

  // 从架构删除成员
  deleteFromFramework(id: any) {
    const data = {id: id, framework: ''};
    this.editPersonUser(data);
  }

  deleteFromLabel(id: any) {
  }


  // 修改成员
  editPersonUser(data: any) {
    this.service.editPersonUser(data).then(resp => {
      // console.log(resp);
      this.snackBar.open('修改成功！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.getFramework();
    }).catch(err => {
      console.log(err);
    });
  }

  // 删除成员
  deletePersonUser(id: any) {
    this.service.deletePersonUser(id).then(resp => {
      // console.log(resp);
      this.snackBar.open('删除成功！', '', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.getFramework();
    }).catch(err => {
      console.log(err);
    });
  }



  paginate(event) {
    // console.log('event', event);
    const page = event.pageIndex + 1;
  }

}
