import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {

  constructor(
    private themeService: NbThemeService,
  ) { }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  themes = [
    {
      value: 'default',
      name: '默认',
    },
    {
      value: 'dark',
      name: '黑夜',
    },
    {
      value: 'cosmic',
      name: '宇宙',
    },
    {
      value: 'corporate',
      name: '商务',
    },
  ];

  currentTheme = 'default';

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }
}
