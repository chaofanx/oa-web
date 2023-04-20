import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    firstName: '测试1',
    lastName: '测试2',
    username: '用户名',
    email: 'test@gmail.com',
    age: '1',
  }, {
    id: 2,
    firstName: '测试3',
    lastName: '测试4',
    username: '用户2',
    email: 'test2@gmail.com',
    age: '1',
  }];

  getData() {
    return this.data;
  }
}
