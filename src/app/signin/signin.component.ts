import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRequest } from '../models/requests/login-request';
import { BookService } from '../services/book.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(
    private userService: UserService,
    private bookService: BookService,
    private tokenService: TokenService
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
      this.userService.user = response.data.user
      this.tokenService.setToken(JSON.stringify(response.data.token).replaceAll('"',''))
      this.responseData = response;
      console.log(this.userService.user)
    })
  }

  getBooks(){
    this.bookService.getBooks().subscribe(res=>{
      this.responseData=res
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.responseData = res;
    });
  }
  log(){
    console.log(this.tokenService.getToken())
  }

}
