import { Injectable } from '@angular/core';
import { HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import { ROUTE } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { GlobalService } from '../../../shared/utils/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private globalService: GlobalService
  ) { }

  cachedRequests: Array<HttpRequest<any>> = [];

  login(data: any) {
    let body = new URLSearchParams();
    body.set("grant_type", "password")
    body.set("username", data.user);
    body.set("password", data.password)
    body.set("scope", "read write")
    let headers = new HttpHeaders()
    headers = headers.append("Authorization", "Basic U1NJRFNjaG9vbDpzZWNyZXRAc2Nob29sLmFwcA==")
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(ROUTE + "/oauth/token", body.toString(), { headers: headers }).toPromise().then((res: any) => {
      this.tokenService.setToken(res.access_token, data.remember)
      this.router.navigate(['home'])
    }, err => {
      //this.globalService.showAdvertisement()
    })
  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}
