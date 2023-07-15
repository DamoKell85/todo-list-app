import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import { Task } from '../../models/task';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let emittedTask: Task;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    emittedTask = {} as Task;
    component.task = {
      id: '1',
      title: 'Task 1',
      completed: false,
    };
    component.taskUpdated.subscribe((task: Task) => (emittedTask = task));
    component.taskDeleted.subscribe((task: Task) => (emittedTask = task));
    fixture.detectChanges();
  });

  it('should emit task when task is updated', () => {
    const updatedTask: Task = {
      id: '1',
      title: 'Updated Task',
      completed: true,
    };

    component.task.title = updatedTask.title;
    component.task.completed = updatedTask.completed;
    component.updateTask();

    expect(emittedTask).toEqual(updatedTask);
  });

  it('should emit task when task is deleted', () => {
    component.deleteTask();

    expect(emittedTask).toEqual(component.task);
  });
});
