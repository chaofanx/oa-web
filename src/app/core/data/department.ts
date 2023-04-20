export abstract class DepartmentData {
  abstract getData(): Department[];
  abstract getById(id: number): Department;
  abstract insert(dept: Department);
  abstract deleteById(id: number);
}

export interface Department {
  id: number;
  deptName: string;
  tel: string;
  email: string;
  desc: string;
}
