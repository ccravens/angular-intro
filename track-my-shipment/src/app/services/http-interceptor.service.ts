import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (environment.mock) {
      return of(
        new HttpResponse({
          status: 200,
          body: {
            payload: { hello: 'world-mock' },
          },
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
