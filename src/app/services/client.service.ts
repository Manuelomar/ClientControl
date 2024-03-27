import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Client } from '../models/client.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService<Client> {

  constructor(http: HttpClient) {
    super(http);
    this.initializeBaseURL('baseApiUrl');
    this.baseURL += '/clients'; 
  }
  override getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL + '/');
  }

  addClient(addClientRequest: Client): Observable<Client>{
    return this.http.post<Client>(this.baseURL + '/', addClientRequest);
  }

  getClient(id: number): Observable<Client>{
    return this.http.get<Client>(this.baseURL + '/' + id);
  }

  updateClient(id:number, updateClientRequest: Client): Observable<Client>{
    return this.http.put<Client>(this.baseURL + '/' + id, updateClientRequest);
  }

  deleteClient(id: number): Observable<Client>{
    return this.http.delete<Client>(this.baseURL + '/' + id);
  }
}
