import { Component } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';


@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
    <a href="#" (click)="selectPerson(person)">
     {{person.name}} - wright({{person.weight}}) height({{person.height}})
     </a>
    </li>
  </ul>
  <person-details [person]="selectedPerson"></person-details>
  `
})
export class PeopleListComponent {
  people: Person[] = [];
  selectedPerson: Person;
  
  constructor(private _peopleService : PeopleService){
    console.log("DEBUG> PeopleService constructor");
   }
  ngOnInit() {
    console.log("DEBUG> ngOnInit()");
    this.people = this._peopleService.getAll();
  }
  selectPerson(person: Person) {
    console.log("DEBUG> selectPerson()");
    this.selectedPerson = person;
  }
}
