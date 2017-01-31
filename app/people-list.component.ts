import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';


@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
    <a href="#" [routerLink]="['/persons', person.id]">
     {{person.name}} - wright({{person.weight}}) height({{person.height}})
     </a>
    </li>
  </ul>
  <b>
   <ul>
    <li *ngFor="let person1 of people" (click)="selectPerson(person1)">
     {{person1.name}} - wright({{person1.weight}}) height({{person1.height}})
    </li>
  </ul>
  <personx-details [personx]="selectedPerson"></personx-details>
  `
})

export class PeopleListComponent implements OnInit{
  people: Person[] = [];
  selectedPerson: Person;
  
  constructor(private _peopleService : PeopleService){
    console.log("DEBUG> PeopleService constructor");
   }

  ngOnInit() {
    console.log("DEBUG> ngOnInit()");
    //this.people = this._peopleService.getAll();
    this._peopleService.getAll().subscribe(p => this.people = p)
  }
  
  selectPerson(person: Person) {
    console.log("DEBUG> selectPerson()");
    this.selectedPerson = person;
  }
}
