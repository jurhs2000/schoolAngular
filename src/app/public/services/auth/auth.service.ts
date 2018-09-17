import { Injectable } from '@angular/core';
import { HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import { ROUTE } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token: String;
  cachedRequests: Array<HttpRequest<any>> = [];

  setToken() {
    
  }

  getToken() {

  }

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

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}
