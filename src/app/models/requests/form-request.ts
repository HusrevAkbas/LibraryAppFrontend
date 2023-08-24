import { Category } from "@models/category";
import { PostRequest } from "./post-request";

export class FormRequest extends PostRequest{
  constructor(
    public username?:String,
    public password?:String,
    public category:Category=new Category()
  ){
    super()
  }
}
