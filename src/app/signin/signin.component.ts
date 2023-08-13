import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRequest } from '../models/requests/login-request';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(
    private userService: UserService,
    private bookService: BookService
    ){}

  responseData: any;

  signinForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })

  signin ():any{
    let loginRequest:LoginRequest = new LoginRequest(
      this.signinForm.value.username!,
      this.signinForm.value.password!
    )
    this.userService.signin(loginRequest).subscribe(response =>{
      this.userService.user = JSON.stringify( response.data.user)
      this.userService.jwttoken=JSON.stringify( response.data.token)
      this.responseData = response;
      console.log(this.userService.user)
    })
  }

  getBooks(){
    this.bookService.getBooks().subscribe(res=>{
      this.responseData=res
      console.log(JSON.stringify(res))
    });
  }
  log(){
    console.log(this.userService.jwttoken)
  }

}
