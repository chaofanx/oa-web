import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { DepartmentService } from '../../../core/service/department.service';
import { Department } from '../../../core/data/department';

@Component({
  selector: 'ngx-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent {
  settings = {
    actions: {
      position: 'right',
      columnTitle: '操作',
    },
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

  constructor(
    private service: DepartmentService,
  ) {
    this.service.getData()
      .subscribe(data => {
        this.source.load(data);
      });
  }

  onDeleteConfirm(event) {
    const data = event.data as Department;
    if (window.confirm('确定要删除部门吗?')) {
      this.service.deleteById(data.id);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  save(event) {
    const data = event.data as Department;
    if (window.confirm('确定要保存吗?')) {
      this.service.save(data);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
