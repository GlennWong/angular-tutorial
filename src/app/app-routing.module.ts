import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DepartmentListComponent } from "./department-list/department-list.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTwoComponent } from './chapter-two/chapter-two.component';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  { path: "", redirectTo: '/departments', pathMatch: 'full' },
  { path: "departments", component: DepartmentListComponent },
  { path: "department/:id", component: DepartmentDetailComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "test", component: TestComponent },
  { path: "ChapterOne", component: ChapterOneComponent },
  { path: "ChapterTwo", component: ChapterTwoComponent },
  { path: "ChapterThree", component: ChapterThreeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [DepartmentListComponent, EmployeeListComponent]