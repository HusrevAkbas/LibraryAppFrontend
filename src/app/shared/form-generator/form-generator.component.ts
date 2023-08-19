import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from '@models/category';
import { Model } from '@models/model';
import { FormRequest } from '@models/requests/form-request';
import { LoginRequest } from '@models/requests/login-request';
import { PostRequest } from '@models/requests/post-request';
import { RegisterRequest } from '@models/requests/register-request';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  formRequestBody: FormRequest;
  form: FormGroup;
  keys: any[] = []

  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
    this.formRequestBody = new FormRequest();
    this.form = this.createForm(this.formRequestBody);
    this.keys = Object.keys(this.form.controls)
    //this.log();
  }


  createForm(model: Model | FormRequest): FormGroup{
    let keys = Object.keys(model);
    let form = this.fb.group({})
    //chek if model[key] is another model ? y callCreateForm : n add formControl
    keys.forEach(key=>{
      if(this.isModel(model[key])){
        form.addControl(key, this.createForm(model[key]))
      }
      form.addControl(key, new FormControl(""))
    })

    return form;
    }

    addFormControls(group: FormGroup, key){

    }
    isModel(input): boolean {
      return input instanceof Model;
    }

  log(){
    console.log(this.form.controls)
  }

}
