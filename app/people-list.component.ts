import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'people-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <section>
  <ul>
    <li *ngFor="let person of people">
    <a href="#" [routerLink]="['/persons', person.id]">
     {{person.name}} - wright({{person.weight}}) height({{person.height}})
     </a>
    </li>
  </ul>
  <section *ngIf="errorMessage">
    {{errorMessage}}
  </section>
  </section>
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
  errorMessage: string = '';
  isLoading: boolean = true;
  selectedPerson: Person;
  
  constructor(private _peopleService : PeopleService){
    console.log("DEBUG> PeopleService constructor");
   }

  ngOnInit() {
    console.log("DEBUG> ngOnInit()");
    //this.people = this._peopleService.getAll();
    this._peopleService.getAll().subscribe(
      p => this.people = p,
      e => this.errorMessage = e,
      () => this.isLoading = false);
  }
  
  selectPerson(person: Person) {
    console.log("DEBUG> selectPerson()");
    this.selectedPerson = person;
  }
}
