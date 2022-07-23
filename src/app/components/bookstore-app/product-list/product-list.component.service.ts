import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { book } from "./model/book";

@Injectable()

export class bookService {
    private url = "http://localhost:44382/api/bookstore";
    httpOptins = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }
    constructor(private http: HttpClient){}

    getBack(){
        return this.http.get(this.url)
    }
}