import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksAsListComponent } from './book/books-as-list/books-as-list.component';

const routes: Routes = [
  {path : "", component : HomeComponent, title : "Home"},
  {path: "books", component: BooksAsListComponent, title:"Books"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
