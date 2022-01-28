import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [];
   apiPrefix : string = "http://localhost:3300";
  constructor(private http: HttpClient, private router: Router) { }

  getUser(){
  return  this.http.get<User[]>(this.apiPrefix + '/users');
  }
}
