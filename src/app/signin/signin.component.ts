import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginRequest } from '../models/login-request';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private userService: UserService){}

  responseData;

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
      this.responseData = response;
    })
  }

}
