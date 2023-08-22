import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Model } from '@models/model';
import { FormRequest } from '@models/requests/form-request';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  @Input() baseForm: FormGroup;
  @Input() formControls: any;
  controlKeys: any[] = []

  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
    // this.baseForm = this.exampleForm()
    this.formControls = this.baseForm.controls
    this.controlKeys = this.getKeys(this.formControls)
    this.log();
  }

  exampleForm(){
    let form = this.fb.group({})
    let subForm = this.fb.group({})
    subForm.addControl("subc1", new FormControl("subp1"))
    form.addControl("c1", new FormControl("p1",Validators.required))
    form.addControl("c2", new FormControl("p2",Validators.required))
    form.addControl("subc2", subForm)
    return form;
  }

  getGroup(group, groupname){
    return group.controls[groupname]
  }


  createForm(model: Model | FormRequest): FormGroup{
    let keys = this.getKeys(model)
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

  getKeys(object){
    return Object.keys(object);
  }

  isFormGroup(input){
    return input instanceof FormGroup;
  }

  isModel(input): boolean {
      return input instanceof Model;
  }

  log(){
    console.log(this.controlKeys)
    console.log(this.baseForm)
    console.log(this.baseForm.controls)
  }

}
