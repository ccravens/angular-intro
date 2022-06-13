import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  constructor(private httpClient: HttpClient) {}

  generateNumbers(): Observable<number> {
    return of(1, 2, 3);
  }

  getHelloWorld(): Observable<{ hello: string }> {
    return this.httpClient.get<{ hello: string }>(
      'http://mockbin.org/bin/6c9dd375-2359-4fed-9702-3feb809138fb'
    );
  }
}
