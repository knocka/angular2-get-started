import { Injectable } from '@angular/core';

//import { SomeOtherService } from './some-other.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from './person';

/*
const PEOPLE: Person[] = [
  { id: 1, name: 'Luke Skywalker', height: 177, weight: 70 },
  { id: 2, name: 'Darth Vader', height: 200, weight: 100 },
  { id: 3, name: 'Han Solo', height: 185, weight: 85 },
];
*/

@Injectable()
export class PeopleService {
  private baseUrl: string = 'http://swapi.co/api';
  //constructor(private _someOtherService: SomeOtherService){}
  constructor(private http: Http) { }

  //getAll(): Promise<Person[]> {
  getAll(): Observable<Person[]> {
    let people$ = this.http
      .get(`${this.baseUrl}/people`, { headers: this.getHeaders() })
      .map(mapPersons);
    return people$;
  }

  get(id: number): Observable<Person> {
    let person$ = this.http
      .get(`${this.baseUrl}/people/${id}`, { headers: this.getHeaders() })
      .map(mapPerson)
      .catch(handleError);
    return person$;
  }
  save(person: Person): Observable<Response> {
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this.http
      .put(`${this.baseUrl}/people/${person.id}`, 
           JSON.stringify(person), 
           { headers: this.getHeaders() });
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

  function mapPersons(response: Response): Person[] {
       //throw new Error('ups! Force choke!');
    // The response of the API has a results
    // property with the actual results
    return response.json().results.map(toPerson);
  }

function toPerson(r: any): Person {
  let person = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: r.mass,
    height: r.height,
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData: any) {
  let extractedId = personData.url.replace('http://swapi.co/api/people/', '').replace('/', '');
  return parseInt(extractedId);
}

function mapPerson(response: Response): Person {
  // toPerson looks just like in the previous example
  return toPerson(response.json());
}

// this could also be a private method of the component class
function handleError(error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  //return Promise.reject(errorMsg);
  return Observable.throw(errorMsg);
}
/*
getAllX() : Person[]{
  console.log("DEBUG> getAll()");
  return PEOPLE.map(p => this.clone(p));
  //return PEOPLE;
}

getX(id: number) : Person {
  //return PEOPLE.find(p => p.id === id);
  return this.clone(PEOPLE.find(p => p.id === id));
}
saveX(person: Person){
  let originalPerson = PEOPLE.find(p => p.id === person.id);
  if (originalPerson) Object.assign(originalPerson, person);
  // saved muahahaha
}

  private clone(object: any){
  // hack
  console.log("DEBUG> clone()");
  return JSON.parse(JSON.stringify(object));
}
*/
