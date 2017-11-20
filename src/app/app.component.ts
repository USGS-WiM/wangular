import { Component } from '@angular/core';

export interface testInterface {
  name: string;
  age: number;
  state_id: number;
}
export interface testState {
  id: number;
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public testPeople: Array<testInterface>;
  public testStates: Array<testState>;

  ngOnInit(){
    this.testPeople = [ 
      {name: "Tom", age: 65, state_id: 1},
      {name: "John", age: 33, state_id:2},
      {name: "Nancy", age: 45, state_id:1},
      {name: "Joe", age: 12, state_id:3},
      {name: "Sam", age: 15, state_id:4},
      {name: "Adam", age: 20, state_id:3},
      {name: "Martha", age: 25, state_id:4},
      {name: "Zoe", age: 30, state_id:2}
    ];
    this.testStates = [
      { id: 1, name: "Wisconsin", code: "WI"},
      { id: 2, name: "Minnesota", code: "MN"},
      { id: 3, name: "Illinois", code: "IL"},
      { id: 4, name: "Michigan", code: "MI"}
    ]
  }
}
