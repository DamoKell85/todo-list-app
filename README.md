# Todo List Application

This is a simple Todo List Application built using Angular. It allows users to add, update, and delete tasks, and persists the tasks in local storage.

## Getting Started

To run the application locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:
```
git clone <repository-url>
```


2. Change into the project directory:
```
cd todo-list-app
```

3. Install the dependencies:
```
npm install
```

### Running the Application

Run the following command to start the development server:

```
ng serve
```

After the server starts, you can access the application by opening your browser and navigating to `http://localhost:4200`.

### Usage

- On the home page, you will see a list of tasks, including their title and status (completed or not completed).
- To add a new task, enter the task title in the input field at the top and click the "Add Task" button. The task will be added to the list.
- To mark a task as completed or not completed, click the checkbox next to the task.
- To edit a task's title, click the edit button next to the task, make the desired changes in the input field, and click the "Save" button.
- To delete a task, click the delete button next to the task.
- The tasks are automatically saved in local storage, so they will be preserved even if you refresh the page.

### Features

- Add tasks with validation to ensure the title is not empty.
- Mark tasks as completed or not completed.
- Edit task titles.
- Delete tasks.
- Tasks are persisted in local storage.
- Additional features (bonus):
  - Sorting or filtering functionality for the task list.
  - Animations to enhance the user experience.
  - Drag-and-drop functionality to reorder tasks.

## Technologies Used

- Angular
- Angular CLI
- Angular Forms
- Angular Services
- Local Storage
- Tailwind CSS

## Contributing

Contributions to this project are welcome. Feel free to open issues and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was created as a coding challenge for a job application.
- The Angular framework and its documentation were instrumental in building this application.



