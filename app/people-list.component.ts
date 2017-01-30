import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
     {{person.name}} - wright({{person.weight}}) height({{person.height}})
    </li>
  </ul>
  `
})
export class PeopleListComponent{
  people: Person[] = [
    {name: 'Luke Skywalker', height: 177, weight: 70},
    {name: 'Darth Vader', height: 200, weight: 100},
    {name: 'Han Solo', height: 185, weight: 85},
  ];

}
