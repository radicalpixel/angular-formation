import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';


@Injectable()
export class ChronometersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = Date.now();
    return next.handle(request).pipe(
      finalize(() => {
        console.log(`${request.method}::${request.url} took:${Date.now() - start}ms`)
      })
    )
  }
}
