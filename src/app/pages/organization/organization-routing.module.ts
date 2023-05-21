import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { DepartmentComponent } from './department/department.component';
import { UserComponent } from './user/user.component';
import { OrganizationComponent } from './organization.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { RoleRenderComponent } from './user/role-render.component';

const routes: Routes = [{
  path: '',
  component: OrganizationComponent,
  children: [
    {
      path: 'dept',
      component: DepartmentComponent,
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
  UserComponent,
  UserEditComponent,
  RoleRenderComponent,
  OrganizationComponent,
];
