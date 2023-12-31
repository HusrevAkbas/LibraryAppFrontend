import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from '@book/book-list/book-list.component';
import { RegisterComponent } from './user/register/register.component';
import { SigninComponent } from './user/signin/signin.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { FormGeneratorComponent } from './shared/form-generator/form-generator.component';
import { FormTestComponent } from './shared/form-test/form-test.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';

const routes: Routes = [
  {path : "", component : HomeComponent, title : "Home"},
  {path: "books", component: BookListComponent, title:"Books"},
  {path: "register", component: RegisterComponent, title:"Register"},
  {path: "login", component: SigninComponent, title:"Log in"},
  {path: "book/add", component: BookAddComponent, title:"Add new book"},
  {path: "form", component: FormGeneratorComponent, title:"Created form"},
  {path: "formtest", component: FormTestComponent, title:"Test form"},
  {path: "categories", component: CategoryListComponent, title:"Categories"},
  {path: "category/add", component: CategoryAddComponent, title:"Add new category"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
