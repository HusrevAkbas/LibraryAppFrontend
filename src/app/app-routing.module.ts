import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from '@book/book-list/book-list.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { BookAddComponent } from './book/book-add/book-add.component';

const routes: Routes = [
  {path : "", component : HomeComponent, title : "Home"},
  {path: "books", component: BookListComponent, title:"Books"},
  {path: "register", component: RegisterComponent, title:"Register"},
  {path: "login", component: SigninComponent, title:"Log in"},
  {path: "book/add", component: BookAddComponent, title:"Add new book"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
