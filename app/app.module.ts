import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';
import { PersonxDetailsComponent } from './personx-details.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent,PeopleListComponent,PersonDetailsComponent,PersonxDetailsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
