import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private tokenService: TokenService
  ){

  }
  ngOnInit(){
    this.createForm();
  }

  newBook;

  createForm(){
    this.bookForm = this.formBuilder.group({
      id:  ["", Validators.min(0)],
      name: ["", Validators.required],
      author: ["", Validators.required],
      userEntity: this.formBuilder.group({
        id: 5
      }),
      publisher: ["", Validators.required],
      publishDate: ["", Validators.required, Validators],
      publishPlace: ["", Validators.required],
      pageCount: ["", [Validators.required, Validators.min(0)]],
      available: true,
      category: this.formBuilder.group({
        id: 2
      }),
      isbn10: [""],
      isbn13: [""],
      assetNumber: [""],
      imageUrl: "",
      quantity: ["", [Validators.min(0)]]
    })
  }

  addBook(){
    alert(JSON.stringify(this.bookForm.value))
    this.bookService.addBook(this.bookForm.value).subscribe(res=>{
      this.newBook = res
    });
  }

  seeToken(){
    console.log(this.tokenService.getToken())
  }

}
