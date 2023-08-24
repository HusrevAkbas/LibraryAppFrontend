import { Component } from '@angular/core';
import { CategoryService } from '@services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categoryList;
  category;

  constructor(private categoryService: CategoryService){}

  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categoryList = data
    })
  }
  getCategoryById(id:number){
    this.categoryService.getCategoryById(id).subscribe(data=>{
      this.category = data;
    })
  }

}
