import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbAuthSimpleToken, NbDummyAuthStrategy, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';

import { throwIfAlreadyLoaded } from './module-import-guard';
import {
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
} from './utils';
import { UserData } from './data/users';
import { ElectricityData } from './data/electricity';
import { SmartTableData } from './data/smart-table';
import { UserActivityData } from './data/user-activity';
import { OrdersChartData } from './data/orders-chart';
import { ProfitChartData } from './data/profit-chart';
import { TrafficListData } from './data/traffic-list';
import { EarningData } from './data/earning';
import { OrdersProfitChartData } from './data/orders-profit-chart';
import { TrafficBarData } from './data/traffic-bar';
import { ProfitBarAnimationChartData } from './data/profit-bar-animation-chart';
import { TemperatureHumidityData } from './data/temperature-humidity';
import { SolarData } from './data/solar';
import { TrafficChartData } from './data/traffic-chart';
import { StatsBarData } from './data/stats-bar';
import { CountryOrderData } from './data/country-order';
import { StatsProgressBarData } from './data/stats-progress-bar';
import { VisitorsAnalyticsData } from './data/visitors-analytics';

import { UserService } from './service/users.service';
import { ElectricityService } from './service/electricity.service';
import { SmartTableService } from './service/smart-table.service';
import { UserActivityService } from './service/user-activity.service';
import { OrdersChartService } from './service/orders-chart.service';
import { ProfitChartService } from './service/profit-chart.service';
import { TrafficListService } from './service/traffic-list.service';
import { EarningService } from './service/earning.service';
import { OrdersProfitChartService } from './service/orders-profit-chart.service';
import { TrafficBarService } from './service/traffic-bar.service';
import { ProfitBarAnimationChartService } from './service/profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './service/temperature-humidity.service';
import { SolarService } from './service/solar.service';
import { TrafficChartService } from './service/traffic-chart.service';
import { StatsBarService } from './service/stats-bar.service';
import { CountryOrderService } from './service/country-order.service';
import { StatsProgressBarService } from './service/stats-progress-bar.service';
import { VisitorsAnalyticsService } from './service/visitors-analytics.service';
import { MockDataModule } from './service/mock-data.module';
import { DepartmentData } from './data/department';
import { DepartmentService } from './service/department.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RequestPasswordComponent } from './component/request-password/request-password.component';
import { RouterLinkWithHref } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmCardComponent } from './component/confirm-card/confirm-card.component';

const socialLinks = [
  {
    url: 'https://github.com/chaofanx',
    target: '_blank',
    icon: 'github',
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: ElectricityData, useClass: ElectricityService },
  { provide: SmartTableData, useClass: SmartTableService },
  { provide: UserActivityData, useClass: UserActivityService },
  { provide: OrdersChartData, useClass: OrdersChartService },
  { provide: ProfitChartData, useClass: ProfitChartService },
  { provide: TrafficListData, useClass: TrafficListService },
  { provide: EarningData, useClass: EarningService },
  { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
  { provide: TrafficBarData, useClass: TrafficBarService },
  { provide: ProfitBarAnimationChartData, useClass: ProfitBarAnimationChartService },
  { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
  { provide: SolarData, useClass: SolarService },
  { provide: TrafficChartData, useClass: TrafficChartService },
  { provide: StatsBarData, useClass: StatsBarService },
  { provide: CountryOrderData, useClass: CountryOrderService },
  { provide: StatsProgressBarData, useClass: StatsProgressBarService },
  { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
  { provide: DepartmentData, useClass: DepartmentService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf('guest');
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
    ...NbAuthModule.forRoot({
    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        // token: {
        //   class: NbAuthSimpleToken,
        //   key: 'data',
        // },
        // errors: {
        //   key: 'msg',
        // },
        // baseEndpoint: environment.baseUrl,
        // login: {
        //   redirect: {
        //     success: '/pages/dashboard',
        //     failure: null,
        //   },
        //   endpoint: '/auth/login',
        //   method: 'POST',
        // },
        // register: {
        //   redirect: {
        //     success: '/pages/dashboard',
        //     failure: null,
        //   },
        //   endpoint: '/auth/register',
        //   method: 'post',
        // },
        // logout: {
        //   endpoint: '/auth/logout',
        //   method: 'post',
        // },
        // requestPass: {
        //   endpoint: '/auth/request-pass',
        //   method: 'post',
        // },
        // resetPass: {
        //   endpoint: '/auth/reset-pass',
        //   method: 'post',
        // },
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
        redirectDelay: 0,
        showMessages: {
          success: true,
        },
      },
    },
  }).providers,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,

  {
    provide: NbRoleProvider, useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  SeoService,
  StateService,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbIconModule,
    NbCheckboxModule,
    NbAlertModule,
    FormsModule,
    NbInputModule,
    RouterLinkWithHref,
    NbButtonModule,
    HttpClientModule,
    NbCardModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    RequestPasswordComponent,
    ConfirmCardComponent,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
