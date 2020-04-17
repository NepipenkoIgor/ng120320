import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { BASE_URL_TOKEN } from './config';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable()
export class CustomInterceptorService implements HttpInterceptor {

  constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = req.headers
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00');
    const jsonReq = req.clone(
      {
        headers,
        url: `${this.baseUrl}${req.url}`
      }
    );

    return next.handle(jsonReq)
      .pipe(
        filter(this.isHttpResponse),
        map((res) => res.clone({body: res?.body?.data})),
        catchError((err) => {
          console.log(err);
          return of(new HttpResponse({body: null}));
        })
      );
  }

  private isHttpResponse(event: HttpEvent<any>): event is  HttpResponse<any> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
