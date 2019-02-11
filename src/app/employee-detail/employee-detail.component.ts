import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-detail",
  template: `
    <h3>Employee Detail</h3>
    {{ errorMsg }}
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }} {{ employee.name }} {{ employee.age }}</li>
    </ul>
  `,
  styleUrls: ["./employee-detail.component.scss"]
})
export class EmployeeDetailComponent implements OnInit {
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
