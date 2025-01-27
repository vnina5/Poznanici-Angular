import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../domain/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly url: string = 'http://localhost:5555/addresses';

  constructor(private http: HttpClient) { }

  getAllAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.url}`);
  }

  getAddressById(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.url}/${id}`);
  }

  saveAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(`${this.url}`, address);
  }

  updateAddress(address: Address): Observable<Address> {
    return this.http.put<Address>(`${this.url}/${address.id}`, address);
  }

  deleteAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
