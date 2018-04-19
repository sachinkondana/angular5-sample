import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor() {
    console.log("constructor is called");
  }

  ngOnInit(){
    console.log("ngOnInit is called");
  }
}
