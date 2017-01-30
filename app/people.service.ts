import { Injectable } from '@angular/core';
import { Person } from './person';
//import { SomeOtherService } from './some-other.service';


@Injectable()
export class PeopleService{
  //constructor(private _someOtherService: SomeOtherService){}
  getAll() : Person[] {
    console.log("DEBUG> getAll()");
    return [
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ];
  }
}