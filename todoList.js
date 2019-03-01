// It should have a place to store todos
var todoList = {
  todos: [],

  // display todos
  displayTodos: function() {
    // return this.todos.length + " TODOS: " + JSON.stringify(this.todos);

    if (this.todos.length === 0) {
      console.log("No Todos!");
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        console.log(
          `[${this.todos[i].isCompleted ? "x" : " "}] ${this.todos[i].todo}`
        );
      }
    }
  },

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
    let allTodos = this.todos.length;

    for (let i = 0; i < allTodos; i++) {
      this.todos[i].isCompleted ? completed++ : false;
    }

    for (let i = 0; i < allTodos; i++) {
      if (completed === allTodos) {
        // if everything is `true`, make everything `false`
        this.todos[i].isCompleted = false;
      } else {
        //  if (completed < allTodos)
        // otherwise, make everything true
        this.todos[i].isCompleted = true;
      }
    }
  }
};

todoList.addTodo("Get shit done");
todoList.addTodo("Eat breakfast");
todoList.addTodo("Code Code Code");

todoList.changeTodo(0, "Getting shit done!");

todoList.toggleCompleted(1);
todoList.toggleCompleted(2);

// todoList.removeTodo(2);
console.log(todoList.displayTodos());

// console.log(todoList.toggleAll());
// console.log(todoList.displayTodos());

// console.log(todoList.toggleAll());
// console.log(todoList.displayTodos());
