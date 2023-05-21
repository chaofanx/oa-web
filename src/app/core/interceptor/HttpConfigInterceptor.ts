import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const baseUrl = 'http://localhost:8080/api';
    request = request.clone({url: baseUrl + request.url});
    return next.handle(request);
  }
}
