import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
    <h1>Chapter Three</h1>
    <app-employee-list></app-employee-list>
    <app-employee-detail></app-employee-detail>
    <hr>

    <h1>Chapter Two</h1>
    <!--- Component Interaction --->
    <app-test [parentData]="title" (childEvent)="message=$event"></app-test>
    <p>{{ message }}</p>

    <hr>
    <h1>Chapter One</h1>
    <!--- Data Binding --->
    <h2 [class.text-error]="hasError">{{ "hello " + title }}</h2>
    <h2 [class]="textItalic">haha</h2>
    <h2 class="text-success">haha</h2>
    <h2 [ngClass]="messageClass">Test Class Binding</h2>

    <h2 [style.color]="hasError ? 'red' : 'orange'">Test Style Binding</h2>

    <h2 class="text-success" (click)="sayHello()">Click Me</h2>
    <h2 class="text-success" (click)="doEvent($event)">
      Click Me to Test Event Binding
    </h2>

    <input #myInput type="text" />
    <button (click)="logMyMessage(myInput.value)">Click me to Log</button>
    <button (click)="logMyMessage(myInput)">Click me to Log Element</button>

    <br /><br />
    <p>Test ngModel binding</p>
    <input [(ngModel)]="modelBinding" type="text" />
    {{ modelBinding }}

    <h2 *ngIf="ifShow; else elseBlock">
      Hello Glen
    </h2>

    <ng-template #elseBlock>
      <h2>Hello Veronica</h2>
    </ng-template>

    <div *ngIf="ifShow; then thenBlock; else otherBlock"></div>

    <ng-template #thenBlock>
      <h2>Hello World</h2>
    </ng-template>

    <ng-template #otherBlock>
      <h2>Hello China</h2>
    </ng-template>

    <div [ngSwitch]="switchColor">
      <p *ngSwitchCase="'red'">You choose red color</p>
      <p *ngSwitchCase="'blue'">You choose blue color</p>
      <p *ngSwitchCase="'yellow'">You choose yellow color</p>
      <p *ngSwitchDefault>You didn't choose any color</p>
    </div>

    <ul
      *ngFor="
        let color of forColors;
        index as i;
        first as f;
        last as l;
        odd as o;
        even as e
      "
    >
      <li *ngIf="o">{{ f }} {{ l }} {{ i + " " + color }}</li>
      <li *ngIf="e">{{ f }} {{ l }} {{ i + " : " + color }}</li>
    </ul>
  `,
  styles: [
    `
      .text-error {
        color: red;
      }
      .text-success {
        color: green;
      }
      .text-italic {
        font-style: italic;
      }
    `
  ]
})
export class AppComponent {
  title = "Course";
  message = "";

  modelBinding = "";
  hasError = false;
  textItalic = "text-italic";

  ifShow = false;

  switchColor = "green";

  forColors = ["yellow", "green", "blue", "red", "white"];

  messageClass = {
    "text-error": !this.hasError,
    "text-success": this.hasError,
    "text-italic": this.hasError
  };

  sayHello() {
    alert("Hello");
  }

  doEvent(event) {
    console.log(event.type);
  }

  logMyMessage(value) {
    console.log(value);
  }
}
