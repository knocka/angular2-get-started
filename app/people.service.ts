import { Injectable } from '@angular/core';
import { Person } from './person';
//import { SomeOtherService } from './some-other.service';

const PEOPLE : Person[] = [
      {id: 1, name: 'Luke Skywalker', height: 177, weight: 70},
      {id: 2, name: 'Darth Vader', height: 200, weight: 100},
      {id: 3, name: 'Han Solo', height: 185, weight: 85},
    ];


@Injectable()
export class PeopleService{
  //constructor(private _someOtherService: SomeOtherService){}
  getAll() : Person[] {
    console.log("DEBUG> getAll()");
    return PEOPLE;
  }
  get(id: number) : Person {
    return PEOPLE.find(p => p.id === id);
  }
}