import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  bookList: Book[] | undefined;
  constructor(private bookService: BookService){
    this.bookService.getBooks().subscribe((res:any)=>{
      this.bookList = res.data;
      console.log(res);
    });
  }
}
