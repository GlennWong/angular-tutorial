import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-two',
  template: `

  <h1>Chapter Two</h1>
  <h2>Components Interaction And Pipe</h2>
  <app-test [parentData]="title" (childEvent)="message = $event"></app-test>
  <p>{{ message }}</p>
  <hr />

  `,
  styles: []
})
export class ChapterTwoComponent implements OnInit {
  title = "Course";
  message = "";
  constructor() { }

  ngOnInit() {
  }

}
