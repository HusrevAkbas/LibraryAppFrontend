import { User } from "@models/user";
import { PostRequest } from "./post-request";
import { Category } from "@models/category";

export class BookAddRequest extends PostRequest{
  constructor(
    name?: String,
    author?: String,
    user?: User,
    publisher?: String,
    publishDate?: number,
    publishPlace?: String,
    pageCount?: number,
    available?: boolean,
    category?: Category,
    isbn10?: String,
    isbn13?: String,
    assetNumber?: String,
    imageUrl?: String,
    quantity?: number
  ){
    super()
  }
}
