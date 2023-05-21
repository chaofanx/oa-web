import { Injectable } from '@angular/core';
import { Department } from '../data/department';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {

  private data: Department[] = [
    {
      id: 1,
      deptName: '技术部',
      tel: '123456789',
      email: 'example@qq.com',
      desc: '技术部',
    },
    {
      id: 2,
      deptName: '人事部',
      tel: '123456789',
      email: 'example@qq.com',
      desc: '人事部',
    },
  ];

  constructor(
    private httpClient: HttpClient,
  ) { }

  getData(): Observable<Department[]> {
    return of(this.data);
  }

  deleteById(id: number) {
    const index = this.data.findIndex(dept => dept.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  getById(id: number): Observable<Department> {
    return of(this.data.find(dept => dept.id === id));
  }

  insert(dept: Department): Observable<boolean> {
    this.data.push(dept);
    return of(true);
  }

  save(dept: Department): Observable<boolean> {
    const index = this.data.findIndex(d => d.id === dept.id);
    if (index !== -1) {
      this.data[index] = dept;
    }
    return of(true);
  }
}
