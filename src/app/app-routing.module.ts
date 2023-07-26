import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book/book-list/book-list.component';

const routes: Routes = [
  {path : "", component : HomeComponent, title : "Home"},
  {path: "books", component: BookListComponent, title:"Books"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
