import { Component } from '@angular/core';
import { PeopleService } from './people.service';


@Component({
    selector: 'my-app',
    template: `
    <h1>  {{title}}  </h1>
    <people-list>
    `,
  // HERE! This registers the PeopleService 
  // now Angular 2 knows to inject it when required
  providers: [PeopleService]

})
export class AppComponent {
    title: String = 'People List';
}
