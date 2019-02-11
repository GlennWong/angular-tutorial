import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Hello {{ name }} , this text is from child component</h2>
  <button (click)="sendToParent()">send To Parent Button</button>
  
  <!-- Pipe -->
  <h3>{{ textTest }}</h3>
  <h3>{{ textTest | lowercase }}</h3>
  <h3>{{ textTest | uppercase }}</h3>
  <h3>{{ textTest | uppercase | titlecase }}</h3>
  <h3>{{ textTest | slice:4:13 }}</h3>
  <h3>{{ person | json }}</h3>
  <h3>{{ 5.678 | number: '1.2-3' }}</h3>
  <h3>{{ 5.678 | number: '3.4-5' }}</h3>
  <h3>{{ 5.678 | number: '3.1-2' }}</h3>
  <h3>{{ 0.2345 | percent }}</h3>
  <h3>{{ 0.2345 | currency }}</h3>
  <h3>{{ 0.2345 | currency: "RMB" }}</h3>
  <h3>{{ 0.2345 | currency: 'RMB': 'code' }}</h3>

  <h3>{{ date }}</h3>
  <h3>{{ date | date: 'short' }}</h3>
  <h3>{{ date | date: 'shortDate' }}</h3>
  <h3>{{ date | date: 'shortTime' }}</h3>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  textTest = "Pipe My Test Case";

  person = {
    "firstName": "glen",
    "lastName": "Wong"
  }

  date = new Date();

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    this.childEvent.emit("This is the message from child component");
  }

}
