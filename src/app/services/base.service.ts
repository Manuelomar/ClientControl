import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  protected baseURL!: string;

  constructor(protected http: HttpClient) {
    this.initializeBaseURL('baseApiUrl');
  }

  initializeBaseURL(baseApiUrlKey: keyof typeof environment): void {
    const value = environment[baseApiUrlKey];
    if (typeof value === 'string') {
      this.baseURL = value;
    } else {
      throw new Error(`El valor para ${String(baseApiUrlKey)} no es una cadena.`);
    }
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseURL);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseURL}/${id}`);
  }

  add(item: T): Observable<T> {
    return this.http.post<T>(this.baseURL, item);
  }

  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.baseURL}/${id}`, item);
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.baseURL}/${id}`);
  }
}
