import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-department-list",
  template: `
    <h3>
      Department list
    </h3>
    <ul>
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
      {{ department.id }} {{ department.name }}
      </li>
    </ul>
  `,
  styles: [
    `
    .selected {
      color: red;
    }
    `
  ]
})
export class DepartmentListComponent implements OnInit {
  public selectedId;

  departments = [
    { id: 1, name: "Amazon" },
    { id: 2, name: "Google" },
    { id: 3, name: "MS" },
    { id: 4, name: "Apple" }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get("id"));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    this.router.navigate(['department', department.id])
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}
