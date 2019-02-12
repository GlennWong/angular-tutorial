import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-department-list",
  template: `
    <h3>
      Department list
    </h3>
    <ul>
      <li (click)="onSelect(department)" *ngFor="let department of departments">
      {{ department.id }} {{ department.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  departments = [
    { id: 1, name: "Amazon" },
    { id: 2, name: "Google" },
    { id: 3, name: "MS" },
    { id: 4, name: "Apple" }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelect(department) {
    this.router.navigate(['department', department.id])
  }
}
