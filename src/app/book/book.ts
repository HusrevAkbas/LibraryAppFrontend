import { Category } from "../category/category";
import { User } from "../user/user";

export interface Book {
  id: number,
  name: String,
  author: String,
  user: User,
  publisher: String,
  publishDate: number,
  publishPlace: String,
  pageCount: number,
  available: boolean
  category: Category,
  isbn10: String,
  isbn13: String,
  assetNumber: String,
  imageUrl: String,
  quantity: number
}
