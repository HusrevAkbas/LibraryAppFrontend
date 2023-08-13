import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private userService: UserService
    ) { }

    // header:HttpHeaders = new HttpHeaders({ 'Access-Control-Allow-Origin': '*','content-type': 'application/json',"Authorization":"Bearer "+this.userService.jwttoken})

  getBooks(): Observable<any>{
    let key = 'Bearer '+ this.userService.jwttoken.replaceAll('"','');
    let header2 = new HttpHeaders().set('Authorization', key)
    console.log(key)
    console.log(header2)
    return this.http.get("http://localhost:8080/api/book/all",{headers:header2});
  }
}
