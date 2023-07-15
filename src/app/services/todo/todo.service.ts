import { Injectable } from '@angular/core';
import { Task } from '../../models/task';
import { sortBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  private readonly storageKey = 'todo-list';

  getTasks(): Task[] {
    const tasksJson = localStorage.getItem(this.storageKey);
    return tasksJson ? sortBy(JSON.parse(tasksJson), 'id') : [];
  }

  saveTasks(tasks: Task[]): void {
    const tasksJson = JSON.stringify(tasks);
    localStorage.setItem(this.storageKey, tasksJson);
  }

  addTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  updateTask(task: Task): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      this.saveTasks(tasks);
    }
  }

  deleteTask(task: Task): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.saveTasks(tasks);
    }
  }
}