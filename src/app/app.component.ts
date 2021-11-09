import { Component } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
  <child-comp
  [userName]="name"
  [userAge]="age"
  ></child-comp>
  <input type="text" [(ngModel)]="name"><br/>
  <input type="number" [(ngModel)]="age" />
  `,
})
export class AppComponent {
  name: string = "Том"
  age: number = 24
}
