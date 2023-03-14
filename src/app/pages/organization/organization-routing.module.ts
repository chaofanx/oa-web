import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { DepartmentComponent } from './department/department.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { OrganizationComponent } from './organization.component';

const routes: Routes = [{
  path: '',
  component: OrganizationComponent,
  children: [
    {
      path: 'dept',
      component: DepartmentComponent,
    },
    {
      path: 'role',
      component: RoleComponent,
    },
    {
      path: 'user',
      component: UserComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationRoutingModule { }

export const routedComponents = [
  DepartmentComponent,
];
