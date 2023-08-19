import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit{

  @Input() form: FormGroup;
  @Input() keys: any[];

  formGroup: FormGroup
  inkeys: any[];

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.createForm();
    this.inkeys = Object.keys(this.formGroup.controls)
    this.log()
  }

  createForm(){
    this.formGroup = this.fb.group({})
    this.formGroup.addControl("username",new FormControl(""))
    this.formGroup.addControl("password",new FormControl(""))
    this.formGroup.addControl("category",new FormGroup({
      "id": new FormControl("")
    }))
  }

  log(){
    console.log(this.keys)
    console.log(this.formGroup.controls)

  }
}
