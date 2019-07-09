import { Component, OnInit } from '@angular/core';
import { Todo } from './shared/todo.model';
import { TodoService } from './shared/todo.service';
//import { MockTodoService } from './shared/mock-todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  //constructor(private todoService:MockTodoService) { }
  constructor(private todoService:TodoService) { }

  ngOnInit() { 
    this.todoService.getTodos()
    .subscribe(data => this.todos = data);
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
       this.todos.push(todo);
     });
  }

  deleteTodo(todo:Todo) {
    this.todoService.deleteTodo(todo)
    .subscribe(data => {
       this.todos = this.todos.filter(t => t.id != todo.id);
     });
  }

  completeTodo(todo: Todo){
    todo.completed = !todo.completed;    
    this.todoService.toggleCompleted(todo).subscribe(
     success => {},
     error => {       
        todo.completed = !todo.completed; 
        this.todos = this.todos.map(t => t.id != todo.id ? t : todo);
      }
     
    )
  }
}
