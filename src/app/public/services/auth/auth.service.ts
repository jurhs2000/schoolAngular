import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  cachedRequests: Array<HttpRequest<any>> = [];

  getToken() {

  }

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

}
