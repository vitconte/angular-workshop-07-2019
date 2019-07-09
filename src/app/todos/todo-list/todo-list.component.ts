import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todos:Todo[];
  @Output() deleted = new EventEmitter<Todo>();
  @Output() completed = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {}

  deleteTodo(todo:Todo) {
    this.deleted.emit(todo);
  }

  completeTodo(todo: Todo) {
    this.completed.emit(todo);
  }

}
