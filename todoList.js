// It should have a place to store todos
let todoList = {
  todos: [],

  // display todos
  displayTodos: function() {
    // return this.todos.length + " TODOS: " + JSON.stringify(this.todos);

    if (this.todos.length === 0) {
      console.log("No todos");
      console.log("==========");
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        console.log(
          `[${this.todos[i].isCompleted ? "x" : " "}] ${this.todos[i].todo}`
        );
      }
      console.log("==========");
    }
  },

  // add a todo
  addTodo: function(todo) {
    this.todos.push({
      todo,
      isCompleted: false
    });

    console.log(`added: ${todo}`);
  },

  // change a todo
  changeTodo: function(index, todo) {
    this.todos[index].todo = todo;
  },

  // delete a todo
  removeTodo: function(index) {
    this.todos.splice(index, 1);
  },

  // toggle isCompleted
  toggleCompleted: function(index) {
    let todo = this.todos[index];

    // set to false if it is true and vice-versa
    todo.isCompleted = !todo.isCompleted;
  },

  toggleAll: function() {
    let completed = 0;
    let allTodos = this.todos.length;

    for (let i = 0; i < allTodos; i++) {
      this.todos[i].isCompleted ? completed++ : false;
    }

    for (let i = 0; i < allTodos; i++) {
      if (completed === allTodos) {
        // if everything is `true`, make everything `false`
        this.todos[i].isCompleted = false;
      } else if (completed === 0) {
        this.todos[i].isCompleted = true;
      } else {
        //  if (completed < allTodos)
        // otherwise, make everything true
        this.todos[i].isCompleted = true;
      }
    }

    for (let i = 0; i < this.todos.length; i++) {
      console.log(
        `[${this.todos[i].isCompleted ? "x" : " "}] ${this.todos[i].todo}`
      );
    }
    console.log("==========");
  }
};

// Handle events
let handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },

  addTodo: function() {
    var todo = document.getElementById("todoInput");
    todoList.addTodo(todo.value);
    todo.value = "";
  },

  updateTodo: function() {
    var updateTodoPositionInput = document.getElementById(
      "updateTodoPositionInput"
    );
    var updateTodoTextInput = document.getElementById("updateTodoTextInput");

    todoList.changeTodo(
      updateTodoPositionInput.valueAsNumber,
      updateTodoTextInput.value
    );

    updateTodoPositionInput.value = "";
    updateTodoTextInput.value = "";

    todoList.displayTodos();
  },

  toggleCompleted: function() {
    var toggleTodoPositionInput = document.getElementById(
      "toggleTodoPositionInput"
    );

    todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);
  },

  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );

    todoList.removeTodo(deleteTodoPositionInput.valueAsNumber);
  },

  toggleAll: function() {
    todoList.toggleAll();
  }
};
