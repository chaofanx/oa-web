import { Injectable } from '@angular/core';
import { DepartmentData } from '../data/department';

@Injectable()
export class DepartmentService extends DepartmentData {

  data = [{
    id: 1,
    deptName: '部门1',
    tel: '13028583923',
    email: 'mdo@gmail.com',
    desc: '部门描述',
  }];

  getData() {
    return this.data;
  }
}
