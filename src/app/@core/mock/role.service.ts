import { Injectable } from '@angular/core';
import { Role, RoleData } from '../data/role';

@Injectable()
export class RoleService extends RoleData {

  data: Role[] = [{
    id: 1,
    roleName: '普通用户',
    permissions: 'user',
    desc: '普通用户权限',
    defaultPermissions: 'user',
    systemic: true,
  }];

  getData(): Role[] {
    return this.data;
  }
}
