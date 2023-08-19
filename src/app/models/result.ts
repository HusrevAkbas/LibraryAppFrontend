import { Type } from "@angular/compiler";

export class Result<T> {
  constructor(
    public success: boolean,
    public message: String,
    public data?: T
  ){}
}
