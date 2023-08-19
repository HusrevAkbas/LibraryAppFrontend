import { PostRequest } from "./post-request";

export class LoginRequest extends PostRequest{
  constructor(
    public username?:string,
    public password?:string
  ){
    super()
  }
}
