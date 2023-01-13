import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  showUsers() {
    const params = new HttpParams().append('page', '1');
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
