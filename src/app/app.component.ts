import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Chapter Four</h1>
    <h2>Navigation And Routing</h2>
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/departments">Departments</a></li>
        <li><a routerLink="/employees">Employees</a></li>
        <li><a routerLink="/test">test</a></li>
        <li><a routerLink="/asldkf">Page 404</a></li>
        <li><a routerLink="/ChapterOne">Chapter One</a></li>
        <li><a routerLink="/ChapterTwo">Chapter Two</a></li>
        <li><a routerLink="/ChapterThree">Chapter Three</a></li>
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
