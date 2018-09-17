import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  /*showAdvertisement(type: String, title: String, description: String): Observable<boolean> {
    let parameters = {
      type: type,
      title: title,
      description: description
    }
    return parameters
  }*/
}
