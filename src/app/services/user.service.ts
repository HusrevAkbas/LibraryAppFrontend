import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../models/register-request';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  register(registerRequest: RegisterRequest) :any {
    return this.http.post("http://localhost:8080/api/auth/register", registerRequest);
  }

  signin (loginRequest: LoginRequest):any{
    return this.http.post("http://localhost:8080/api/auth/login", loginRequest);
  }
}
