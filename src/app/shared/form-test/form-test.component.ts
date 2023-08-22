import { Component, KeyValueDiffers } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent {

  parentForm: FormGroup;

  constructor(
    private fb: FormBuilder
    ){

    let subForm = this.fb.group({
      "subc1":["subp1",Validators.required],
      "subc2":["subp2",Validators.required]
    })
    this.parentForm = this.fb.group({
      "c1":["p1",Validators.required],
      "c2":["p2",Validators.required],
      "c5":subForm
    })
  }

  log(){
    console.log(this.parentForm.value)
  }
}
