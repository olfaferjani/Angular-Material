import { Component, OnInit, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({

  imports: [BrowserAnimationsModule,MatButtonModule, MatCheckboxModule],
  
  
})
export class PizzaPartyAppModule { }
@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let x=0;
  }

}
