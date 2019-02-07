import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Hello {{ name }} , this text is from child component</h2>
  <button (click)="sendToParent()">send To Parent Button</button>
  
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    this.childEvent.emit("This is the message from child component");
  }

}
