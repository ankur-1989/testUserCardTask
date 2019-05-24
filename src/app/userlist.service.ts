import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http: Http) { }

  getUserList( ) {

     return this.http.get('https://reqres.in/api/users' + '?page=' + 1);
  }

  getSingleUser(id) {
    return this.http.get('https://reqres.in/api/users/' + id);
  }
}
