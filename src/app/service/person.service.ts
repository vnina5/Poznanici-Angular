import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../domain/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly url: string = 'http://localhost:5555/persons';

  persons: Person[] = [
    {
      id: 1,
      firstName: 'Milan',
      lastName: 'Milic',
      JMBG: 1234567890123,
      dateOfBirth: new Date('1990-01-01'),
      ageInMonths: 372,
      height: 180,
      cityOfBirth: 'Belgrade',
      cityOfResidence: 'Belgrade',
      address: 'Jove Ilica 154'
    },
    {
      id: 2,
      firstName: 'Petar',
      lastName: 'Peric',
      JMBG: 1234567890124,
      dateOfBirth: new Date('1991-01-01'),
      ageInMonths: 360,
      height: 170,
      cityOfBirth: 'Belgrade',
      cityOfResidence: 'Belgrade',
      address: 'Bulevar kralja Aleksandra 73'
    }
  ];

  // constructor(private http: HttpClient) { }
  constructor() { }

  getAllPersons(): Observable<Person[]> {
    // return this.http.get<Person[]>(`${this.url}`);
    return new Observable((observer) => {
      observer.next(this.persons);
      observer.complete();
    });
  }

  getPersonById(id: number): Observable<Person> {
    // return this.http.get<Person>(`${this.url}/${id}`);
    return new Observable((observer) => {
      const person = this.persons.find((person) => person.id === id);
      observer.next(person);
      observer.complete();
    });
  }

  savePerson(person: Person): Observable<Person> {
    // return this.http.post<Person>(`${this.url}`, person);
    return new Observable((observer) => {
      person.id = this.persons.length + 1;
      this.persons.push(person);
      observer.next(person);
      observer.complete();
    });
  }

  updatePerson(person: Person): Observable<Person> {
    // return this.http.put<Person>(`${this.url}/${person.id}`, person);
    return new Observable((observer) => {
      const index = this.persons.findIndex((p) => p.id === person.id);
      this.persons[index] = person;
      observer.next(person);
      observer.complete();
    });
  }

  deletePerson(id: number): Observable<void> {
    // return this.http.delete<void>(`${this.url}/${id}`);
    return new Observable((observer) => {
      const index = this.persons.findIndex((person) => person.id === id);
      this.persons.splice(index, 1);
      observer.next();
      observer.complete();
    });
  }
}
