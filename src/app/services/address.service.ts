import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Address } from '../models/address.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends BaseService<Address> {

  constructor(http: HttpClient) {
    super(http);
    this.initializeBaseURL('baseApiUrl');
    this.baseURL += '/addresses'; 
  }
  override getAll(): Observable<Address[]> {
    return this.http.get<Address[]>(this.baseURL + '/');
  }

  addAddress(addClientRequest: Address): Observable<Address>{
    return this.http.post<Address>(this.baseURL + '/', addClientRequest);
  }

  getAddress(id: number): Observable<Address>{
    return this.http.get<Address>(this.baseURL + '/' + id);
  }

  updateAddresst(id:number, updateClientRequest: Address): Observable<Address>{
    return this.http.put<Address>(this.baseURL + '/' + id, updateClientRequest);
  }

  deleteAddress(id: number): Observable<Address>{
    return this.http.delete<Address>(this.baseURL + '/' + id);
  }
}
