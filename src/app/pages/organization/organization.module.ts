import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { DepartmentComponent } from './department/department.component';
import { OrganizationRoutingModule, routedComponents } from './organization-routing.module';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { ThemeModule } from '../../theme/theme.module';
import { TablesRoutingModule } from '../tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    ...routedComponents,
    OrganizationComponent,
    DepartmentComponent,
    RoleComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    OrganizationRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
})
export class OrganizationModule { }
