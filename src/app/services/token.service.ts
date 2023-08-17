import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService : CookieService) { }

  public getToken(){
    return this.cookieService.get('token');
  }
  public setToken(jwtToken: string){
    this.cookieService.set('token',jwtToken,7,'/',undefined,true,'Strict');
  }
  public deleteToken(){
    this.cookieService.delete('token','/', undefined,true,'Strict')
  }
}
