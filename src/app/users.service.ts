import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = []

  constructor() { 
    this.users.push(new User('Admin', 'admin@email.com', '123456', 'male', 'admin'))
    this.users.push(new User('Santiago', 'santiago@email.com', '123456', 'male', 'customer'))
    this.users.push(new User('Maria', 'maria@email.com', '123456', 'female', 'customer'))
    this.users.push(new User('Pedro', 'pedro@email.com', '123456', 'male', 'guest'))
   }

}
