
export abstract class RoleData {
  abstract getData(): Role[];
}

export interface Role {
  id: number;
  roleName: string;
  permissions: string;
  desc: string;
  defaultPermissions: string;
  systemic: boolean;
}
