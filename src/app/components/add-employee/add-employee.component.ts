import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './../../Employee';
import { EmployeeService } from './../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    phone: 0,
    salary: 0
  };
  constructor(public employeeService: EmployeeService, public router: Router) { }

  ngOnInit() {
  }

  mySubmit({value, valid}: {value: Employee, valid: boolean}) {
    if (!valid) {
      this.router.navigate(['employee/add']);
      // console.log('not correct data');
    } else {
      this.employeeService.addEmployee(value);
      this.router.navigate(['/']);
      // console.log(this.employee);
    }
  }

}
