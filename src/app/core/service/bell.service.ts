import { Injectable } from '@angular/core';
import { Bell } from '../data/bell';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BellService {

  data: Bell[] = [
    {
      title: '会议通知',
      content: '您有一个新会议',
    },
  ];

  constructor() { }

  addOne(bell: Bell): Observable<boolean> {
    this.data.push(bell);
    return of(true);
  }

  getData(): Observable<Bell[]> {
    return of(this.data);
  }
}
