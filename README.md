﻿# TodoApp

This repository contains a simple Todo List application consisting of a backend server (`TodoServer`) built with Express.js and Node.js and a frontend web application (`TodoWebApp`) using HTML, CSS, and JavaScript.

## TodoServer (Backend)

The backend server provides a RESTful API for managing a todo list. It includes endpoints for creating, retrieving, updating, and deleting todo items. The server is built with Express.js and uses in-memory storage to keep things straightforward.

### Features

- **Create Todo:** Add new tasks with a title, description, and auto-generated ID.
- **Retrieve Todo List:** Get a list of all todo items.
- **Retrieve Todo by ID:** Retrieve a specific todo item by its ID.
- **Update Todo:** Modify an existing todo item identified by its ID.
- **Delete Todo:** Remove a todo item by its ID.

### Usage

1. Clone the repository: `git clone https://github.com/aadhil-anwer/TodoApp.git`
2. Navigate to the `TodoServer` directory: `cd TodoServer`
3. Install dependencies: `npm install`
4. Run the server: `npm start`
5. Access the API at http://localhost:3000

## TodoWebApp (Frontend)

The frontend web application provides a user interface for interacting with the todo list. It allows users to view existing tasks, add new tasks, and delete tasks. The web app communicates with the backend server to perform these actions.

### Features

- **View Todos:** Display a list of existing todo items.
- **Add Todo:** Create new tasks with a title and description.
- **Delete Todo:** Remove a todo item with a simple click.

### Usage

- Open the `TodoWebApp` directory in a web browser or deploy it to a web server.

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes for either the backend or frontend, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
