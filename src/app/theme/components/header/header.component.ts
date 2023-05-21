import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { LayoutService } from '../../../core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import { NbAuthService } from '@nebular/auth';
import { User } from '../../../core/data/users';
import { UserService } from '../../../core/service/users.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: User;
  nickname: string;
  picture: string;

  userMenu: NbMenuItem[] = [
    {
      title: '退出登陆',
      link: '/auth/logout',
    },
   ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private authService: NbAuthService) {
    this.userService.getCurrent()
      .subscribe(user => {
        this.user = user;
        this.userMenu.unshift({
          title: this.user.name,
          link: '/profile',
        });
        this.nickname = this.user.name;
        this.picture = this.user.picture;
      });
    // this.authService.onTokenChange()
    //   .subscribe((token: NbAuthJWTToken) => {
    //     if (token.isValid()) {
    //       this.user = token.getPayload();
    //       this.userMenu.unshift({
    //         title: this.user.name,
    //         link: '/profile',
    //       });
    //       this.nickname = this.user.name;
    //       this.picture = this.user.picture;
    //     }
    //   });
  }

  ngOnInit() {
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  showBell() {
    alert(1);
  }
}
