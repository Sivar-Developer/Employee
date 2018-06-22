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
  showSalaryUpdate = false;
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

  updateSalaryEmployee(id: string) {
    this.employeeService.updateEmployee(this.id, this.employee);
    this.router.navigate(['/employee/' + this.id]);
  }

  myDelete() {
    if (confirm('Are you sure?')) {
      this.employeeService.deleteEmployee(this.id);
      this.router.navigate(['/']);
    }
  }

}
