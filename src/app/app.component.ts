import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Chapter Four</h1>
    <h2>Navigation And Routing</h2>
    <nav>
      <ul>
        <li><a routerLink="/departments">Departments</a></li>
        <li><a routerLink="/employees">Employees</a></li>
        <li><a routerLink="/test">test</a></li>
        <li><a routerLink="/ChapterOne">ChapterOne</a></li>
        <li><a routerLink="/ChapterTwo">ChapterTwo</a></li>
        <li><a routerLink="/ChapterThree">ChapterThree</a></li>
        <li><a routerLink="/asldkf">Page 404</a></li>
      </ul>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [
    `
    `
  ]
})
export class AppComponent {

  constructor() { }

  ngOnInit() {
  }

}
