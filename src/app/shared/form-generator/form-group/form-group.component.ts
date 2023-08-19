import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Model } from '@models/model';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit{

  @Input() form: FormGroup;
  @Input() keys: any[];
  @Output() formEvent = new EventEmitter();

  formGroup: FormGroup
  subKeys
  inkeys: any[];

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.formGroup = this.form;
    this.keys = this.getKeys(this.formGroup)
    // this.createForm();
    // this.inkeys = Object.keys(this.formGroup.controls)
  }

  sendForm(){
    this.formEvent.emit(this.formGroup)
    this.log()
  }
  setSubKeys(){

  }

  createForm(){
    this.formGroup = this.fb.group({})
    this.formGroup.addControl("username",new FormControl(""))
    this.formGroup.addControl("password",new FormControl(""))
    this.formGroup.addControl("category",new FormGroup({
      "id": new FormControl("")
    }))
  }

  isGroup(input){
    return input instanceof FormGroup;
  }

  getKeys(form): any[]{
    return Object.keys(form.controls);
  }
  log(){
    console.log(this.getKeys(this.formGroup))
    console.log(this.formGroup.controls)

  }
}
