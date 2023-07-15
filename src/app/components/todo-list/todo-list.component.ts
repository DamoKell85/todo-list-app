import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo/todo.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.todoService.getTasks();
  }

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: this.generateUniqueId(),
        title: this.newTaskTitle,
        completed: false,
      };
      this.todoService.addTask(newTask);
      this.loadTasks();
      this.newTaskTitle = '';
    }
  }

  updateTask(task: Task): void {
    this.todoService.updateTask(task);
  }

  deleteTask(task: Task): void {
    this.todoService.deleteTask(task);
    this.loadTasks();
  }

  private generateUniqueId(): string {
    // Generate a unique ID (e.g., using a library like uuid)
    // For simplicity, this example uses a timestamp-based approach
    return Date.now().toString();
  }
}
