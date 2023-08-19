import { PostRequest } from "./post-request";

export class RegisterRequest extends PostRequest {
  constructor(
    public username?:string,
    public email?:string,
    public password?:string
  ){
    super();
  }
}
