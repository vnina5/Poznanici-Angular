import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../domain/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private readonly url: string = 'http://localhost:5555/cities';

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.url}`);
  }

  getCityById(id: number): Observable<City> {
    return this.http.get<City>(`${this.url}/${id}`);
  }

  saveCity(city: City): Observable<City> {
    return this.http.post<City>(`${this.url}`, city);
  }

  updateCity(city: City): Observable<City> {
    return this.http.put<City>(`${this.url}/${city.id}`, city);
  }

  deleteCity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
