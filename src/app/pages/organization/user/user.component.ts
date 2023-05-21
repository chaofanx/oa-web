import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from '../../../core/service/users.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { UserEditComponent } from './user-edit/user-edit.component';
import { RoleRenderComponent } from './role-render.component';
import { ConfirmCardComponent } from '../../../core/component/confirm-card/confirm-card.component';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  settings = {
    mode: 'external',
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
      name: {
        title: '用户名',
        type: 'text',
      },
      mail: {
        title: '邮箱',
        type: 'text',
      },
      phone: {
        title: '电话',
        type: 'text',
      },
      role: {
        title: '角色',
        type: 'custom',
        renderComponent: RoleRenderComponent,
      },
    },
  };

  source: LocalDataSource;

  constructor(
    private service: UserService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit() {
    this.service.getUsers()
      .subscribe((res) => {
        this.source = new LocalDataSource(res);
      });
  }

  onCreate() {
    this.dialogService.open(UserEditComponent, {
      context: {
        isNew: true,
        name: '',
        mail: '',
        phone: '',
      },
    }).onClose
      .subscribe(user => {
        this.service.getUsers().subscribe(data => {
          this.source.load(data);
        });
      });
  }

  onDelete(event) {
    this.dialogService.open(ConfirmCardComponent, {
      context: {
        title: '删除用户',
        content: '确认删除用户？',
        method: () => {
          this.service.deleteUser(event.data.id)
            .subscribe((res) => {
              this.source.remove(event.data);
              this.toastrService.success('删除成功', '提示');
            });
        },
      },
    });
  }

  onEdit(event) {
    this.dialogService.open(UserEditComponent, {
      context: {
        isNew: false,
        name: event.data.name.value,
        mail: event.data.mail.value,
        phone: event.data.phone.value,
      },
    });
  }
}
