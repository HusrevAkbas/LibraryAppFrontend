import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '@models/category';
import { Model } from '@models/model';
import { FormRequest } from '@models/requests/form-request';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css']
})
export class FormGeneratorComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() model: Model;
  @Input() ignoreProperties: any;
  formControls;
  properties: any[];
  controlKeys: any[];

  constructor(private fb: FormBuilder){
  }
  ngOnInit(): void {
    this.createForm(this.model, this.form, this.ignoreProperties)
    // this.controlKeys.forEach(key=> console.log( typeof this.model[key]))
    this.formControls = this.form.controls;
    this.controlKeys = Object.keys(this.formControls);
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


  createForm(model: Model | FormRequest, formGroup: FormGroup, ignore: any[]): FormGroup{
    //1 get model property names
    this.properties = this.getOwnPropertyNamesFromObject(model);

    let ignorePropertyArray = this.getOwnPropertyNamesFromObject(ignore)
    console.log(ignorePropertyArray)
    //2 set formGroup for model property
    this.properties.forEach((key)=>{
        if(this.isModel(this.model[key])){
          const nestedGroup = this.fb.group({})
          formGroup.addControl(key, nestedGroup)
        } else {
          if(!ignorePropertyArray.includes(key)){
            formGroup.addControl(key,new FormControl(model[key]||''))
          }
        }
    })
    //3 set formControl for primitives

    return formGroup;
  }

  getKeys(object){
    return Object.keys(object);
  }

  getOwnPropertyNamesFromObject(model: any){
    return Object.getOwnPropertyNames(model);
  }

  isFormGroup(input){
    return input instanceof FormGroup;
  }

  isModel(input): boolean {
      return input instanceof Model;
  }

  log(){
    // console.log(this.model)
    // console.log(this.controlKeys)
    // console.log(this.form)
    console.log(this.form.controls)
  }

}
