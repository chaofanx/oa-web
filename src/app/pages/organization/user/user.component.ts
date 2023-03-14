import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from '../../../@core/mock/users.service';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {

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
      name: {
        title: '用户名',
        type: 'string',
      },
      picture: {
        title: '头像',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: UserService) {
    const data = this.service.getUsers();
    data.subscribe((res) => {
      this.source.load(res);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
