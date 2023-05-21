import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NbAuthResult,
  NbLoginComponent,
} from '@nebular/auth';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends NbLoginComponent {

  login() {
    this.errors = [];
    this.messages = [];
    this.submitted = true;

    this.service.authenticate(this.strategy, this.user)
      .subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess() || true) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getMessages();
      }

      const redirect = result.getRedirect();
      if (redirect || true) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
      this.cd.detectChanges();
    });
  }

}
