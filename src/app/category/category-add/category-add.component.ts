import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from '@models/category';
import { Model } from '@models/model';
import { CategoryAddRequest } from '@models/requests/category-add-request';
import { CategoryService } from '@services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit{

  form: FormGroup;
  model: Model;
  ignore: any;
  data

  ngOnInit(): void {
    this.form = this.fb.group({})
    this.model = new CategoryAddRequest();
    this.ignore={}
  }


  constructor(private fb: FormBuilder, private categoryService: CategoryService){}

  addCategory(){
    this.categoryService.addCategory(this.form.value).subscribe(data=>{
      this.data = data
      console.log(data)
    })
  }
}
