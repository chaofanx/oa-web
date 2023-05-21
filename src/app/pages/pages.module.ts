import { NgModule } from '@angular/core';
import { NbCardModule, NbMenuModule, NbSelectModule } from '@nebular/theme';

import { ThemeModule } from '../theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbSelectModule,
    NbCardModule,
  ],
  declarations: [
    PagesComponent,
    SettingComponent,
  ],
})
export class PagesModule {
}
