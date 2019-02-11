import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
@Component({
  selector: "app-employee-list",
  template: `
    <h3>Employee List</h3>
    {{ errorMsg }}
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
  styleUrls: ["./employee-list.component.scss"]
})
export class EmployeeListComponent implements OnInit {
  public employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe(
        data => (this.employees = data),
        error => (this.errorMsg = error)
      );
  }
}
