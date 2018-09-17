import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROUTE } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: String) {
    return this.http.get(API_ROUTE + url);
  }
  
  getOne(url: String, params: Number) {
    return this.http.get(API_ROUTE + url + "/" + params)
  }

  post(url: String, body: Object) {
    return this.http.post(API_ROUTE + url, body)
  }

  put(url: String, params: Number, body: Object) {
    return this.http.put(API_ROUTE + url + "/" + params, body)
  }
  
  patch(url: String, params: Number, body: Object) {
    return this.http.patch(API_ROUTE + url + "/" + params, body)
  }

  delete(url: String, params: Number) {
    return this.http.delete(API_ROUTE + url + "/" + params)
  }
}
