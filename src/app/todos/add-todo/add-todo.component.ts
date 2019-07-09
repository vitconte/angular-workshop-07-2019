import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() added: EventEmitter<Todo> = new EventEmitter();

  title:string;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    let todo : Todo;
    todo = new Todo();
    todo.title = this.title;
    todo.completed = false;

    this.added.emit(todo);
  }
}
