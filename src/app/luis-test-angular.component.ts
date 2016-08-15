import { Component } from '@angular/core';
import { HomeComponent } from './home/index';

@Component({
  moduleId: module.id,
  selector: 'luis-test-angular-app',
  templateUrl: 'luis-test-angular.component.html',
  styleUrls: ['luis-test-angular.component.css'],
  directives: [HomeComponent]
})
export class LuisTestAngularAppComponent {
  title = 'luis-test-angular!!!';
}
