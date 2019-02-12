import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-department-detail",
  template: `
    <p>You selected department Id {{ departmentId }}</p>
    <p>
      <a (click)="goPrevious()"> Previous</a>
      <a (click)="goNext()"> Next</a>
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Can't be change in next click
    // let id = parseInt(this.route.snapshot.paramMap.get("id"));
    // this.departmentId = id;
    // So need to subscribe it.
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get("id"));
      this.departmentId = id;
    });
  }

  goPrevious() {
    let priviousId = this.departmentId - 1;
    this.router.navigate(["/department", priviousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(["/department", nextId]);
  }
}
