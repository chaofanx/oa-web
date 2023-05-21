import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User, UserData } from '../data/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService extends UserData {

  current: User = {
    id: 1,
    name: '管理员',
    mail: 'chaofanxy@outlook.com',
    phone: '17609949039',
    picture: 'https://my-1251915405.cos.ap-chengdu.myqcloud.com/author.jpg',
    role: '管理员',
  };

  data: User[] = [
    this.current,
  ];

  constructor(
    private httpClient: HttpClient,
  ) {
    super();
  }
  getCurrent(): Observable<User> {
    return of(this.current);
  }

  getUsers(): Observable<User[]> {
    // return this.httpClient.get<Result>('/user/list')
    // .pipe(
    //   map(resp => {
    //     if (!this.data) {
    //       this.data = resp.data;
    //     }
    //     return this.data;
    //   }),
    // );
    return of(this.data);
  }

  deleteUser(id: number): Observable<boolean> {
    this.data = this.data.filter(d => d.id !== id);
    return of(true);
  }

  save(user: User): Observable<User> {
    this.data.push(user);
    return of(user);
  }
}
