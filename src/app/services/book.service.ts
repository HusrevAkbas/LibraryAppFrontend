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
  getAllBooks(): Observable<any>{
    return this.http.get("http://localhost:8080/api/book/all");
  }
  getBookById(id:number): Observable<any>{
    return this.http.get("http://localhost:8080/api/book/"+id);
  }
  getBookByUserId(id: number){
    return this.http.get("http://localhost:8080/api/book/user/"+id);
  }

  addBook(book: Book){
    return this.http.post('http://localhost:8080/api/book/add', book)
  }
}
