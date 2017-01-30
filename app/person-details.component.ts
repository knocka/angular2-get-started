import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'person-details',
  template: `
  <!-- new syntax for ng-if -->
  <section *ngIf="person">
    <h2>You selected:  {{person.name}}  </h2>
    <h3>Description</h3>
    <p>
       {{person.name}}  weights  {{person.weight}} and is  {{person.height}} tall.
    </p>
  </section>
  `
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
    person: Person;
    sub: any;

    constructor(private peopleService: PeopleService,
               private route: ActivatedRoute){
                 console.log("DEBUG>PersonDetailsComponent.constructor");
    }

    ngOnInit(){
        console.log("DEBUG>PersonDetailsComponent.ngOnInit()");
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          this.person = this.peopleService.get(id);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
}
