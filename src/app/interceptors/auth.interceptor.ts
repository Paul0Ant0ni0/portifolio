import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public readonly CLIENT_ID: string = '51524480c55ef36';
  public readonly BASE_URL: string = 'https://api.imgur.com/3/';

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneRequest = request.clone({
      headers: request.headers.set("Authorization", `Client-ID: ${this.CLIENT_ID}`)
    });
    return next.handle(cloneRequest);
  }


}
