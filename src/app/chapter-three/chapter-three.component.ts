import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-three',
  template: `

  <h1>Chapter Three</h1>
  <h2>Service and Http observable</h2>
  <app-employee-list></app-employee-list>
  <app-employee-detail></app-employee-detail>
  <hr />

  `,
  styles: []
})
export class ChapterThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
