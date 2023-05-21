import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Powered by <b><a href="https://chaofan.xyz" target="_blank">李超凡</a></b>
    </span>
    <div class="socials">
      <a href="https://github.com/chaofanx" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
