import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../core/service/users.service';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { User } from '../../../../core/data/users';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-user-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnDestroy {

  @Input() isNew: boolean = false;
  @Input() name: string = '';
  @Input() mail: string = '';
  @Input() phone: string = '';

  userForm = this.fb.group({
    name: [this.name, Validators.required],
    mail: [this.mail, Validators.email],
    phone: [this.phone, Validators.pattern('[0-9]{7,11}')],
  });

  constructor(
    private userService: UserService,
    private ref: NbDialogRef<UserEditComponent>,
    private fb: FormBuilder,
    private toastrService: NbToastrService,
  ) {
  }

  ngOnDestroy(): void {
    this.ref.close();
  }

  submit(): void {
    const user = this.userForm.value as User;
    this.userService.save(user).subscribe(u => {
      this.toastrService.success('提交成功', '提示');
    });
    this.ref.close(user);
  }
}
