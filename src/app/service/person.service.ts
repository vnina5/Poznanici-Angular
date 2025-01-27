import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../domain/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private readonly url: string = 'http://localhost:5555/persons';

  constructor(private http: HttpClient) { }

  getAllPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}`);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.url}/${id}`);
  }

  savePerson(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.url}`, person);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.url}/${person.id}`, person);
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
