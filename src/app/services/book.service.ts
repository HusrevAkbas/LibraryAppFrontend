import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private tokenService: TokenService
    ) { }

    headers = new HttpHeaders({
      'Authorization': 'Bearer '+ this.tokenService.getToken()
    })
  getBooks(): Observable<any>{
    return this.http.get("http://localhost:8080/api/book/all");
  }
}
