import { Injectable } from '@angular/core';

import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {

    private apiUrl = 'http://localhost:3000/animals';

    constructor(private HttpClient: HttpClient ) {}

    remove(id: number) {
      return this.HttpClient.delete<Animal>(`${this.apiUrl}/${id}`);
    }

    getAll(): Observable<Animal[]> {
        return this.HttpClient.get<Animal[]>(this.apiUrl);
    }

    getItem(id: number): Observable<Animal> {
        return this.HttpClient.get<Animal>(`${this.apiUrl}/${id}`);
    }
}
