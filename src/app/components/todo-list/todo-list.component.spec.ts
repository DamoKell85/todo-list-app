import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Task } from '../../models/task';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      providers: [TodoService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
    localStorage.removeItem('todo-list');
  });

  it('should load tasks from service on initialization', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', completed: false },
      { id: '2', title: 'Task 2', completed: true }
    ];
    spyOn(todoService, 'getTasks').and.returnValue(tasks);

    component.ngOnInit();

    expect(component.tasks).toEqual(tasks);
  });

  it('should add a new task', () => {
    const newTaskTitle = 'New Task';
    const newTask: Task = { id: Date.now().toString(), title: newTaskTitle, completed: false };
    spyOn(todoService, 'addTask');

    component.newTaskTitle = newTaskTitle;
    component.addTask();

    expect(todoService.addTask).toHaveBeenCalledWith(newTask);
    expect(component.newTaskTitle).toBe('');
  });

  it('should update a task', () => {
    const task: Task = { id: '1', title: 'Task 1', completed: false };
    spyOn(todoService, 'updateTask');

    component.updateTask(task);

    expect(todoService.updateTask).toHaveBeenCalledWith(task);
  });

  it('should delete a task', () => {
    const task: Task = { id: '1', title: 'Task 1', completed: false };
    spyOn(todoService, 'deleteTask');

    component.deleteTask(task);

    expect(todoService.deleteTask).toHaveBeenCalledWith(task);
    expect(component.tasks.length).toBe(0);
  });
});
