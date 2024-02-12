import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonsService {
  personsChanged = new Subject<string[]>();
  private persons: string[];

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http
      .get<any>('https://swapi.dev/api/people')
      .pipe(
        map((response) =>
          response.results.map((character: any) => character.name)
        )
      )
      .subscribe((starwarsChars) => this.personsChanged.next(starwarsChars));
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter((person) => person !== name);
    this.personsChanged.next(this.persons);
  }
}
