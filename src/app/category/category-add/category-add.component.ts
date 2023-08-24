import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit{

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({})
  }


  constructor(private fb: FormBuilder){}
}
