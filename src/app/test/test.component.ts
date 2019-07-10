import { Component, OnInit } from '@angular/core';

export class PizzaPartyAppModule { }
@Component({
  selector: 'app-test',
  template:`
  <h2>
     welcome {{name}}
  </h2>
  <h2 class="text-success">congratulations</h2>
  <h2 [class]="successClass">congratulations</h2>
  <h2 [ngClass]="messageClasses" >congratulations</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">congratulations</h2>
  <h2 [ngStyle]="titleStyles">congratulations 1</h2>
  <button (click)="onClick()">greet</button>
  {{greeting}}
  <input [(ngModel)]="name" type="text">
  {{name}}
  
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">you picked red color</div>
    <div *ngSwitchCase="'blue'">you picked blue color</div>
    <div *ngSwitchCase="'green'">you picked green color</div>
    <div *ngSwitchDefault>pick again</div>
  </div>
  
  <div *ngFor="let color of colors; index as i">
    <h2>{{i}} {{color}}</h2>
  </div>
  <h2>{{name}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | uppercase}}</h2>
  <h2>{{message | titlecase}}</h2>
  <h2>{{person | json}}</h2>
  <h2>{{0.25 | percent}}</h2>
  <h2>{{0.25 | currency}}</h2>
  `,
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }


  `]
})
export class TestComponent implements OnInit {

 
  public colors=["red","blue","yellow"]
  public color="orange";
  public name="olfa";
  public message="welcome to pts qa";
  
  public successClass="text-success"
  
  public hasError= false;
  public isSpecial= true;
  public messageClasses={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyles={
    color:'blue',
    fontStyle:"italic"
  }
  public person={
    "firstname":"olfa",
    "lastname":"ferjani"
  }
  public greeting=''
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log('welcome to codevolution')
    this.greeting='welcome to codevolution'
  }

}
