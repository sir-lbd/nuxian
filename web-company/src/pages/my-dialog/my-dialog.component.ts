import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {QualityFileService} from "../quality-file/quality-file.service";

class DialogData {
  title: any;
  data: any;
  content: any;
  framework: any;
  select: any;
  label: any;
}

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyDialogComponent implements OnInit {

  selectArray: any;
  members: any;
  array: any;

  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public config: DialogData,
              protected service: QualityFileService) {

  }

  ngOnInit() {
    this.dialogRef.afterOpen().subscribe(resp => {
      // console.log(this.dialogRef._containerInstance._config.data);
      this.config = this.dialogRef._containerInstance._config.data;
      this.selectArray = [];
      this.array = [];
      console.log('config', this.config);
      if (this.config && this.config.label) {
        this.getLabelsMembers(this.config.label);
      }
    });
  }

  // 获取标签组成员
  getLabelsMembers(id: any) {
    this.service.labelMembers(id).then((resp: any) => {
      console.log('resp', resp);
      const members = resp.leaders.concat(resp.staffs);
      console.log('members', members);
      members.forEach(m => {
        this.array.push(m.id);
        this.selectArray.push(m);
      });
    }).catch(err => {
      console.log(err);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectItem(item: any) {
    this.config.select = item;
    // console.log('select', this.config.select);
  }

  selectFramework(event, f: any) {
    this.config.framework.forEach(frame => {
      frame.select = false;
    });
    f.select = !f.select;
    const cList: DOMTokenList = event.target.classList;
    // console.log('cList', cList);
    if (!cList.contains('name')) {
      this.service.personUsers(f.id).then((resp: any) => {
        this.members = resp;
        // console.log('members', this.members);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  addToSelect(f: any) {
    // console.log(f);
    if (this.array.indexOf(f.id) < 0) {
      this.selectArray.push(f);
      this.array.push(f.id);
    } else {
      this.selectArray.forEach((a, index) => {
        if (f.id === a.id) {
          this.selectArray.splice(index, 1);
        }
      });
      this.array.forEach((a, index) => {
        if (f.id === a) {
          this.array.splice(index, 1);
        }
      });
    }
    // console.log('array', this.array);
    // console.log('selectArray', this.selectArray);
  }

  deleteMember(f: any) {
    this.selectArray.forEach((a, index) => {
      if (f.id === a.id) {
        this.selectArray.splice(index, 1);
      }
    });
    this.array.forEach((a, index) => {
      if (f.id === a) {
        this.array.splice(index, 1);
      }
    });
  }
}
