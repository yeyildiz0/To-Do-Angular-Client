import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {  
  todos: Todo[];

  constructor(private todoService:TodoService) {}

  ngOnInit(): void {

    this.todoService.getTodos().subscribe( data => {
      this.todos = data;
    });

    

    // this.todos = [
    //   {
    //     id:1,
    //     title:'Do homework',
    //     completed: false
    //   },
    //   {
    //     id:2,
    //     title:'Wash dishes',
    //     completed: true
    //   },
    //   {
    //     id:3,
    //     title:'Feed your cat',
    //     completed: false
    //   }
    // ]
  }
}
