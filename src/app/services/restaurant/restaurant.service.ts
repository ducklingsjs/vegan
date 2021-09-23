import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private httpClient: HttpClient) {}

  restaurants(): Observable<any> {
    return this.httpClient.get('/assets/db.json');
  }
}
