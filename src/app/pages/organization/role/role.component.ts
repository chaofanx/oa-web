import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { RoleData } from '../../../core/data/role';

@Component({
  selector: 'ngx-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent {

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
      roleName: {
        title: '角色名称',
        type: 'string',
      },
      permissions: {
        title: '权限',
        type: 'string',
      },
      desc: {
        title: '描述',
        type: 'string',
      },
      defaultPermissions: {
        title: '默认权限',
        type: 'string',
      },
      systemic: {
        title: '是否系统内置',
        type: 'boolean',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: RoleData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


}
