import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { RegisterRequest } from '../models/requests/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  responseData: any;

  constructor(private userService: UserService){}
  registerForm = new FormGroup({
    username : new FormControl(""),
    email : new FormControl(""),
    password : new FormControl("")
  })

  register(){
    let registerRequest:RegisterRequest = new RegisterRequest(
      this.registerForm.value.username!,
      this.registerForm.value.email!,
      this.registerForm.value.password!,
    );
    this.userService.register(registerRequest).subscribe(response => {
      this.responseData = response.data;
      console.log(this.responseData);
    })
  }


}
