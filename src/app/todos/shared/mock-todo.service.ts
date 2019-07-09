import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockTodoService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {id : 1, title: 'todo 1', completed: false},
      {id : 2, title: 'todo 2', completed: true},
      {id : 3, title: 'todo 3', completed: false},
      {id : 4, title: 'todo 4', completed: false}
    ];
   }

  getTodos():Observable<Todo[]> {
    return of<Todo[]>(this.todos);
  }

  deleteTodo(todo:Todo):Observable<Todo> {
    this.todos = this.todos.filter(t => t.id != todo.id);
    return of<Todo>(todo);
  }

  addTodo(todo:Todo):Observable<Todo> {
    let maxId = 0;
    this.todos.forEach(t => {
      if(t.id > maxId){
        maxId = t.id;
      }
    });
    todo.id = maxId + 1;
    this.todos.push(todo);
    return of<Todo>(todo);
  }
  
  toggleCompleted(todo: Todo):Observable<any> {
    this.todos = this.todos.filter(t => {
      if(t.id == todo.id) {
        return todo;
      }
      else {
        return t;
      }
    });

    return of<Todo>(todo);
  }
}
