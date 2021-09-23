import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class QuestionsService {
  result = new Map();

  questions$: Observable<any> = this.httpClient.get('/assets/questions.json').pipe(shareReplay({ refCount: false }));

  constructor(private router: Router, private httpClient: HttpClient) { }

  restart() {
    this.result = new Map();
  }

  start() {
    this.restart();
    this.openQuestion(0).subscribe();
  }

  openQuestion(id: number): Observable<any> {
    return from(this.router.navigate([`/question/${id}`]));
  }

  // [question, answer] 
  storeResult(id: number, result: [any, any]) {
    this.result.set(id, result);
  }
}
