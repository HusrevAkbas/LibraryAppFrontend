import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  control
  form:FormGroup

  constructor(private fb: FormBuilder){
  }

  ngOnInit(): void {
    this.createFormControl();
    this.log();
  }

  createFormControl(){
    this.control = new FormControl("");
  }

  log(){
    //console.log(this.form)
    console.log(this.control)
  }

}
