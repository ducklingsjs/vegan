import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  refreshLucky$ = new BehaviorSubject(void 0);
  constructor(private httpClient: HttpClient) {}

  restaurants(): Observable<any> {
    return this.httpClient.get('/assets/db.json');
  }
}
