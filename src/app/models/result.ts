import { Type } from "@angular/compiler";

export interface Result<T> {
    success: boolean,
    message: String,
    data?: T
}
