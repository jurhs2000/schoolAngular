import { Injectable } from '@angular/core';
import { Encryption } from '../../../shared/utils/encryption';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private encryption: Encryption,
    private router: Router
  ) { }

  token: string;

  setToken(token: String, remember: Boolean) {
    this.token = this.encryption.encrypt(token)
    if(remember) {
      localStorage.setItem("data", this.token)
    }else {
      sessionStorage.setItem("data", this.token)
    }
  }

  getToken(): any {
    if (localStorage.getItem("data")) {
      return localStorage.getItem("data")
    }if (sessionStorage.getItem("data")) {
      return sessionStorage.getItem("data")
    }else {
      return
    }
  }

  removeToken() {
    localStorage.removeItem("data")
    sessionStorage.removeItem("data")
    this.router.navigate(["/"])
  }
}
