import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '@models/category';
import { Model } from '@models/model';
import { FormRequest } from '@models/requests/form-request';
import { PostRequest } from '@models/requests/post-request';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  parentForm: FormGroup;
  parentModel: Model;
  parentIgnore: any;

  constructor(
    private fb: FormBuilder
    ){

    // let subForm = this.fb.group({
    //   "subc1":["subp1",Validators.required],
    //   "subc2":["subp2",Validators.required]
    // })
    // this.parentForm = this.fb.group({
    //   "c1":["p1",Validators.required],
    //   "c2":["p2",Validators.required],
    //   "c5":subForm
    // })
  }
  ngOnInit(): void {

    this.parentIgnore = {
      'password': 1,
      'category': {
        'id':1,
        'imageUrl':2
      }
    }
    this.parentForm = this.fb.group({})
    this.parentModel = new Category();
  }

  log(){
    console.log(this.parentForm.value)
  }
}
