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

    remove(animals: Animal[], animal: Animal) {
      return animals.filter((a) => animal.name !== a.name);
    }

    getAll(): Observable<Animal[]> {
        return this.HttpClient.get<Animal[]>(this.apiUrl);
    }
}
