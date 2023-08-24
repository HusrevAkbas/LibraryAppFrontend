import { PostRequest } from "./post-request";

export class CategoryAddRequest extends PostRequest {
  constructor(
    public name?: String,
    public description?: String,
    public imageUrl?: String | null
    ){
      super()
    }
}
