import { Component } from '@angular/core';

export interface testInterface {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public testArray: Array<testInterface>;

  ngOnInit(){
    this.testArray = [ 
      {name: "Tom", age: 65},
      {name: "John", age: 33},
      {name: "Nancy", age: 45},
      {name: "Joe", age: 12},
      {name: "Sam", age: 15},
      {name: "Adam", age: 20},
      {name: "Martha", age: 25},
      {name: "Zoe", age: 30}
    ];
    
  }
}
