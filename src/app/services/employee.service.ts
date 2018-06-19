import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Employee } from './../Employee';

@Injectable()
export class EmployeeService {

  employees: AngularFireList<any>;
  Employee: AngularFireObject<any>;

  constructor(public af: AngularFireDatabase) {
    this.employees = this.af.list('/employees/employees') as AngularFireList<Employee[]>;
   }

   getEmployees() {
     return this.employees;
   }
}
