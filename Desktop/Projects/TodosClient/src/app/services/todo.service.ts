import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Todo } from '../models/Todo';
import { Identifiers } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  url:string = "https://jsonplaceholder.typicode.com/todos?_limit=5";

  limit:string = "?_limit=3";

  getTodos() {
    return this.http.get<Todo[]>("../../assets/users.json")
  }

}
