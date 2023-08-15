import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  bookList: Book[] = [];
  constructor(private bookService: BookService){
    this.bookService.getAllBooks().subscribe((res:any)=>{
      this.bookList = res.data;
      console.log(res);
    });
  }
}
