import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService extends BaseService<Company> {

  constructor(http: HttpClient) {
    super(http);
    this.initializeBaseURL('baseApiUrl');
    this.baseURL += '/companies/company'; 
  }

  override getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.baseURL + '/');
  }

  addCompany(addCompanyRequest: Company): Observable<Company>{
    return this.http.post<Company>(this.baseURL + '/', addCompanyRequest);
  }

  getCompany(id: number): Observable<Company>{
    return this.http.get<Company>(this.baseURL + '/' + id);
  }

  updateCompany(id:number, updateCompanyRequest: Company): Observable<Company>{
    return this.http.put<Company>(this.baseURL + '/' + id, updateCompanyRequest);
  }

  deleteCompany(id: number): Observable<Company>{
    return this.http.delete<Company>(this.baseURL + '/' + id);
  }
}
