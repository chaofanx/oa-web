import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DepartmentData } from '../../../@core/data/department';

@Component({
  selector: 'ngx-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      deptName: {
        title: '部门名称',
        type: 'string',
      },
      tel: {
        title: '部门类型',
        type: 'string',
      },
      email: {
        title: '部门邮件',
        type: 'string',
      },
      desc: {
        title: '部门描述',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: DepartmentData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除部门吗?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
