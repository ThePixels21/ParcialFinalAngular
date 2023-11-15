import { Injectable } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: User[] = []

  constructor(private usersService: UsersService) { 
    this.users = this.usersService.users
    console.log(this.users.length)
   }

  onLogin(email: String, password: String): boolean {
    var res = false
    this.users.forEach(user => {
      if(user.email == email && user.password == password){
        sessionStorage.setItem('role', user.role)
        sessionStorage.setItem('email', user.email)
        sessionStorage.setItem('name', user.name)
        sessionStorage.setItem('gender', user.gender)
        res =  true
      }
    });
    return res
  }

}
