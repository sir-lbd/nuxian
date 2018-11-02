import { Injectable } from '@angular/core';
import {Http} from '../../services/http/http';

export interface Framework {
  name?: any;
  company?: any;
  father_id?: any;
}

export interface Label {
  name?: any;
  company?: any;
}

@Injectable({
  providedIn: 'root'
})
export class QualityFileService {

  constructor(protected http: Http) { }

  // 获取组织架构
  getFramework(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('framework', {id: id, limit: 1000}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 添加组织架构
  addFramework(data: any) {
    return new Promise((resolve, reject) => {
      this.http.call('addFramework', data).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 添加标签
  addLabel(data: any) {
    return new Promise((resolve, reject) => {
      this.http.call('addLabel', data).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 修改组织架构
  editFramework(data: any) {
    return new Promise((resolve, reject) => {
      this.http.call('editFramework', data).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 修改标签
  editLabel(data: any) {
    return new Promise((resolve, reject) => {
      this.http.call('editLabel', data).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 删除组织架构
  deleteFramework(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('deleteFramework', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 删除标签
  deleteLabel(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('deleteLabel', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取架构成员列表
  personUsers(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('personUsers', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取标签成员
  labelMembers(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('labelMembers', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 添加成员到标签
  addToLabel(id: any, data: any) {
    return new Promise((resolve, reject) => {
      this.http.call('putLabel', {id: id, staffs: data}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 修改成员
  editPersonUser(data: any) {
    return new Promise((resolve, reject) => {
      this.http.call('editPersonUser', data).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 删除成员
  deletePersonUser(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('deletePersonUser', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

  // 获取公司标签
  getCompanyLabels(id: any) {
    return new Promise((resolve, reject) => {
      this.http.call('companyLabels', {id: id}).then(resp => {
        resolve(resp);
      }).catch(err => {
        reject(err);
      });
    });
  }

}
