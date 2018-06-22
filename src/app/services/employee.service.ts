import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Employee } from './../Employee';

@Injectable()
export class EmployeeService {

  employees: AngularFireList<any>;
  employee: AngularFireObject<any>;

  constructor(public af: AngularFireDatabase) {
    this.employees = this.af.list('/employees/employees') as AngularFireList<Employee[]>;
   }

   getEmployees() {
     return this.employees;
   }

   addEmployee(employee: Employee) {
     return this.employees.push(employee);
   }

   getEmployee(id: string) {
     this.employee = this.af.object('/employees/employees/' + id) as AngularFireObject<Employee>;
     return this.employee;
   }

   updateEmployee(id: string, employee: Employee) {
     return this.employees.update(id, employee);
  }
}
