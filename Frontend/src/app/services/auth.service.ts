import { Injectable } from '@angular/core';
import { Constants } from '../Helper/constants';
import { asapScheduler } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  isAuthenticated(): boolean {
    return !!localStorage[Constants.USER_KEY];
  }

  isAdmin(): boolean {
    if (this.user.role == 'Admin') {
      return true;
    }
    return false;

  }

  get user():User
  {
    return JSON.parse(localStorage.getItem(Constants.USER_KEY))as  User ;
  }
}
