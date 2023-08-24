import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.baseUrl+"/api/category/all")
  }

  getCategoryById(id: number){
    return this.http.get(this.baseUrl+"/api/category/"+id)
  }

  addCategory(category){
    return this.http.post(this.baseUrl+"/api/category/add", category)
  }
}
