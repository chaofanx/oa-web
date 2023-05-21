import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  mail: string;
  phone: string;
  picture: string;
  role: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract deleteUser(id: number): Observable<any>;
  abstract save(user: User): Observable<User>;
}
