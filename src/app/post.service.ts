import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostService {

    constructor(private http: HttpClient) {}

    fetchAll() {
      return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    }

    fetch(url: string) {
      return this.http.get(url);
    }
}
