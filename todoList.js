// It should have a place to store todos
let todoList = {
  todos: [],

  // add a todo
  addTodo: function(todo) {
    this.todos.push({
      todo,
      isCompleted: false
    });
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
    let todos = this.todos;

    todos.forEach(function(todo) {
      todo.isCompleted ? completed++ : false;
    });

    todos.forEach(function(todo) {
      if (completed === todos.length) {
        // if everything is `true`, make everything `false`
        todo.isCompleted = false;
      } else if (completed === 0) {
        todo.isCompleted = true;
      } else {
        //  if (completed < allTodos)
        // otherwise, make everything true
        todo.isCompleted = true;
      }
    });
  }
};

// Handle events
let handlers = {
  addTodo: function() {
    var todo = document.getElementById("todoInput");
    todoList.addTodo(todo.value);
    todo.value = "";

    view.displayTodos();
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

    view.displayTodos();
  },

  toggleCompleted: function() {
    var toggleTodoPositionInput = document.getElementById(
      "toggleTodoPositionInput"
    );

    todoList.toggleCompleted(toggleTodoPositionInput.valueAsNumber);

    view.displayTodos();
  },

  deleteTodo: function(index) {
    todoList.removeTodo(index);
    view.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();

    view.displayTodos();
  }
};

let view = {
  displayTodos: function() {
    var todosUl = document.getElementById("todo-app");
    todosUl.innerHTML = "";

    todoList.todos.forEach(function(todo, index) {
      var todoLi = document.createElement("li");

      todoLi.id = index;
      todoLi.textContent = todo.isCompleted
        ? `[x] ${todo.todo}`
        : `[ ] ${todo.todo}`;
      todoLi.appendChild(this.createDeleteButton());

      todosUl.appendChild(todoLi);
    }, this); // createDeleteButton()
  },

  createDeleteButton: function() {
    var deleteTodoBtn = document.createElement("button");

    deleteTodoBtn.textContent = "x";
    deleteTodoBtn.className = "deleteButton";

    return deleteTodoBtn;
  },

  eventListener: function() {
    var todoUl = document.querySelector("ul");

    todoUl.addEventListener("click", function(e) {
      var elementClicked = e.target;

      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};
