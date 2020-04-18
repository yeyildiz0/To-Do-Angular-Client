import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  constructor() { }

  ngOnInit(): void {
  }

  setClasses() {
    return {
      todo:true,
      isCompleted: this.todo.completed
    }
  }

  todoToggle() {
    this.todo.completed = !this.todo.completed;
  }

}
