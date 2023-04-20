import { Injectable } from '@angular/core';
import { Department, DepartmentData } from '../data/department';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DepartmentService extends DepartmentData {

  private data: Department[];

  constructor(private httpClient: HttpClient) {
    super();
  }

  getData() {
    this.httpClient.get<Department[]>('/dept').subscribe(data => {
      this.data = data;
    });
    return this.data;
  }

  deleteById(id: number) {
  }

  getById(id: number): Department {
    return undefined;
  }

  insert(dept: Department) {
  }
}
