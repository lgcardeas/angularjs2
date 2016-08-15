import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the home page!!"

  constructor() {}

  ngOnInit() {
    console.log("launched HomeComponent");
  }

}
