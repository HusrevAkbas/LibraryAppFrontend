import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterRequest } from '../models/requests/register-request';
import { LoginRequest } from '../models/requests/login-request';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;

  private _principle: User;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.baseUrl
  }


  public get principle(): User {
    return this._principle;
  }
  public set principle(value: User) {
    this._principle = value;
  }

  register(registerRequest: RegisterRequest) :Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/register`, registerRequest);
  }

  signin (loginRequest: LoginRequest): Observable<any>{
    return this.http.post(`${this.baseUrl}/api/auth/login`, loginRequest);
  }
  getUsers(): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/user/all`);
  }
}
