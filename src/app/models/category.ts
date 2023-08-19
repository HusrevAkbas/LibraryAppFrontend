import { Model } from "./model";

export class Category extends Model {
  constructor(
    public id?: number,
    public name?: String,
    public description?: String,
    public imageUrl?: String | null
    ){
      super()
    }
}
