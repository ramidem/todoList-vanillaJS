# Watch and Code

## Vanilla JS To Do

### User Stories

**Version 1 - Arrays**

- It should have a place to store todos
- It should have a way to display todos
- It should have a way to add todos
- It should have a way to change a todo
- It should have a way to delete a todo

**Version 2 - Functions**

- It should have a `function` to display todos
- It should have a `function` to add new todos
- It should have a `function` to change a todo
- It should have a `function` to delete a todo

**Version 3 - Objects**

- It should store the todos array on an `object`
- It should have a `displayTodos` method
- It should have a `addTodo` method
- It should have a `changeTodo` method
- It should have a `deleteTodo` method

**Version 4 - Booleans**

- `todoList.addTodo` should add objects
- `todoList.changeTodo` should change the `todoText` property
- `todoList.toggleCompleted` should flip the completed property

**Version 5 - Loops of Logic**

- `displayTodos` should show `.todo`
- `displayTodos` should show if `todos` is empty
- `displayTodos` should show `.completed`

**Version 6 - Thinking in Code**

- `.toggleAll`: if everything is `true`, make everything `false`
- `.toggleAll`: otherwise, make everything `true`

**Version 7 - HTML and the DOM**

- There should be a "Display Todos" button and a "Toggle All" button in the app
- Clicking "Display Todos" should run `todoList.displayTodos`
- Clicking "Toggle All" should run `todoList.toggleAll`

**Version 8 - Getting Data from Inputs**

- There should be a button for adding todos
- There should be a button for changing todos
- There should be a button for deleting todos
- There should be a button for toggling todos

**Version 9 - Escape from the Console**

- There should be an `li` element for every todo
- Each `li` element should contain todo text
- Each `li` element should show completed

**Version 10 - Click to Delete**

- There should be a way to create delete buttons
- There should be a delete button for each todo
- Each `li` should have an `id` that has the todo position
- Delete buttons should have access to the todo `id`
- Clicking delete should update `todoList.todos` and the DOM
