import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../Employee';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {

  id: string;
  employee: Employee;
  hasSalary = false;
  updatedSalary = false;
  constructor(public employeeService: EmployeeService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).valueChanges().subscribe(employee => {
      if (employee.salary > 0) {
        this.hasSalary = true;
      }
      this.employee = employee;
      console.log(this.employee);
    });
  }

}
