import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'person-details',
  templateUrl: 'app/person-details.component.html',    // <=== update this
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
    person: Person;
    sub: any;
    professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];

    constructor(private peopleService: PeopleService,
               private route: ActivatedRoute,
               private router: Router){
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

    savePersonDetails(){
        alert(`saved!!! ${JSON.stringify(this.person)}`);
        this.peopleService.save(this.person);
    }

    gotoPeoplesList(){
        this.router.navigateByUrl('/persons');
    }

}
