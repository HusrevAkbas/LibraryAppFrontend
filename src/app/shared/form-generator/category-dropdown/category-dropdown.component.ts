import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '@services/category.service';

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent implements OnInit {

  response;
  errorResult;
  successResultData;

  @Input() categoryForm: FormGroup;

  constructor(private categoryService: CategoryService){}
  ngOnInit(): void {
    console.log(this.categoryForm)
    this.getCategories();
    this.setFormGroup(this.categoryForm);
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(res=>{
      this.response = res;
      if(this.response['success']){
        this.successResultData = this.response.data
      } else {
        this.errorResult = this.response
      }
    })
  }
  setFormGroup(formGroup: FormGroup){
    formGroup.addControl("id", new FormControl(''));
  }

}
