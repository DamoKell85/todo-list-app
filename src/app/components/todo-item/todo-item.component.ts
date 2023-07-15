import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() task: Task | undefined;
  @Output() update: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();

  onStatusChange(): void {
    this.update.emit(this.task);
  }

  onDelete(): void {
    this.delete.emit(this.task);
  }
}
