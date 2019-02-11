import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h3>Employee Detail</h3>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }} {{ employee.name }} {{ employee.age }}</li>
    </ul>
  `,
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
