import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Task } from '../../models/task';

describe('TodoService', () => {
  let service: TodoService;
  let storage: { [key: string]: string };

  beforeEach(() => {
    storage = {};
    TestBed.configureTestingModule({
      providers: [TodoService, { provide: Storage, useValue: storage }],
    });
    service = TestBed.inject(TodoService);
    localStorage.removeItem('todo-list');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve tasks from local storage', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', completed: false },
      { id: '2', title: 'Task 2', completed: true },
    ];
    localStorage.setItem('todo-list', JSON.stringify(tasks));

    const retrievedTasks = service.getTasks();

    expect(retrievedTasks).toEqual(tasks);
  });

  it('should save tasks to local storage', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', completed: false },
      { id: '2', title: 'Task 2', completed: true },
    ];

    service.saveTasks(tasks);

    const storedTasks = JSON.parse(localStorage.getItem('todo-list') as string);
    expect(storedTasks).toEqual(tasks);
  });

  it('should add a task', () => {
    const task: Task = { id: '1', title: 'Task 1', completed: false };

    service.addTask(task);

    const storedTasks = JSON.parse(localStorage.getItem('todo-list') as string);
    expect(storedTasks.length).toBe(1);
    expect(storedTasks[0]).toEqual(task);
  });

  it('should update a task', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', completed: false },
      { id: '2', title: 'Task 2', completed: true },
    ];
    localStorage.setItem('todo-list', JSON.stringify(tasks));
    const updatedTask: Task = {
      id: '2',
      title: 'Task 2 Updated',
      completed: false,
    };

    service.updateTask(updatedTask);

    const storedTasks: Task[] = JSON.parse(
      localStorage.getItem('todo-list') as string,
    );
    const task = storedTasks.find((t) => t.id === updatedTask.id);
    expect(task).toEqual(updatedTask);
  });

  it('should delete a task', () => {
    const tasks: Task[] = [
      { id: '1', title: 'Task 1', completed: false },
      { id: '2', title: 'Task 2', completed: true },
    ];
    localStorage.setItem('todo-list', JSON.stringify(tasks));
    const taskToDelete: Task = { id: '2', title: 'Task 2', completed: true };

    service.deleteTask(taskToDelete);

    const storedTasks = JSON.parse(localStorage.getItem('todo-list') as string);
    expect(storedTasks.length).toBe(1);
    expect(storedTasks[0]).toEqual(tasks[0]);
  });
});
