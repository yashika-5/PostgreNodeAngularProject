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

  getUsers(){
    return  this.http.get<User[]>(this.apiPrefix + '/users');
  }
  addUser(body:User){
    return  this.http.post<User[]>(this.apiPrefix + '/users',body);
  }
  updateUser(id:number,body:User){
    return  this.http.put<User[]>(this.apiPrefix + `/users/${id}`,body);
  }
  getLocalUser() {
    return this.users;
  }
}
