import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    alert(token)
    let authRequest = req;
    if(token.length!=0){
      authRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    console.log(authRequest.headers)
    return next.handle(authRequest);
    throw new Error('Method not implemented.');
  }
}
