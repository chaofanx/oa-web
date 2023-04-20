
export abstract class UserData {
  abstract getData(): any[];
}

export interface User {
  loginId: UserLogin;
  loginType: string;
  rnStr: string;
}

export interface UserLogin {
  createTime: number;
  deptId: number;
  email: string;
  nickname: string;
  openId: string;
  username: string;
  photo: string;
}
