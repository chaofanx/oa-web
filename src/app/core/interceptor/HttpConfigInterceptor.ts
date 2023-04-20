import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const baseUrl = this.injector.get<string>(APP_BASE_HREF);
    request = request.clone({url: baseUrl + request.url});
    return next.handle(request);
  }
}
