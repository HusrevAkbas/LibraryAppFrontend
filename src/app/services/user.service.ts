import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterRequest } from '../models/requests/register-request';
import { LoginRequest } from '../models/requests/login-request';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) {}

  public jwttoken:string ="";

    user:User;

  register(registerRequest: RegisterRequest) :any {
    return this.http.post("http://localhost:8080/api/auth/register", registerRequest);
  }

  signin (loginRequest: LoginRequest):any{
    return this.http.post("http://localhost:8080/api/auth/login", loginRequest);
  }
}
