import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../services/employee.service';
import { Employee } from './../../Employee';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id: string;
  employee: Employee;
  constructor(public employeeService: EmployeeService, public router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).valueChanges().subscribe(employee => {
      this.employee = employee;
    });
  }

  mySubmit({value, valid}: {value: Employee, valid: boolean}) {
    if (!valid) {
      this.router.navigate(['employee/' + this.id + '/edit']);
      // console.log('not correct data');
    } else {
      this.employeeService.updateEmployee(this.id, value);
      this.router.navigate(['employee/' + this.id]);
      // console.log(this.employee);
    }
  }

}
