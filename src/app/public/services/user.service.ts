import { Injectable } from '@angular/core';
import { ROUTE } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  login(): Promise<Object> {
    let username: string = 'SSIDSchool';
    let password: string = 'secret@school.app';
    let data = new FormData();
    data.append("grant_type", "password")
    data.append("username", "admin");
    data.append("password", "guatemala")
    data.append("scope", "read write")
    let headers: HttpHeaders = new HttpHeaders();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password)); 
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(ROUTE + "/oauth/token", data, { headers: headers }).toPromise()
  }
}
