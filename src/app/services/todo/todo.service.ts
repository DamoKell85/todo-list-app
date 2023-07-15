import { Injectable } from '@angular/core';
import { TodoItem } from '../../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public getAllTodoListItems(): TodoItem[] {
    const todoItemList: TodoItem[] = JSON.parse(localStorage.getItem('tasks') as string);
    return todoItemList;
  }
}
