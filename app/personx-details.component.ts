import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'personx-details',
  template: `
  <!-- new syntax for ng-if -->
  <section *ngIf="personx">
    <h2>You selected:  {{personx.name}}  </h2>
    <h3>Description</h3>
    <p>
       {{personx.name}}  weights  {{personx.weight}} and is  {{personx.height}} tall.
    </p>
  </section>
  `
})
export class PersonxDetailsComponent {
    @Input() personx: Person;
 
}
