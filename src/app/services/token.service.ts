import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  handle(token: any) {
    this.set(token);
    console.log(this.isValid());
  }

  set(token: any) {
    return localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    return localStorage.removeItem('token');
  }

  isValid() {
    const token = this.get();
    if (token) {
      return ("http://127.0.0.1:8000/api/login_user")?true:false;
    }
    return false;
  }

  loggedIn(){
    return this.isValid()
  }

}
