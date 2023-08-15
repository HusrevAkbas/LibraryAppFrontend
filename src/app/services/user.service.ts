import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterRequest } from '../models/requests/register-request';
import { LoginRequest } from '../models/requests/login-request';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenService : TokenService
  ) {}

    private _principle: User;
    
  public get principle(): User {
    return this._principle;
  }
  public set principle(value: User) {
    this._principle = value;
  }
    headers = new HttpHeaders({
      'Authorization': 'Bearer '+ this.tokenService.getToken()
    })

  register(registerRequest: RegisterRequest) :any {
    return this.http.post("http://localhost:8080/api/auth/register", registerRequest);
  }

  signin (loginRequest: LoginRequest):any{
    return this.http.post("http://localhost:8080/api/auth/login", loginRequest);
  }
  getUsers(): Observable<any>{
    return this.http.get("http://localhost:8080/api/user/all");
  }
}
