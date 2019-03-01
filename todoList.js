// It should have a place to store todos
var todoList = {
  todos: [],

  // display todos
  displayTodos: function() {
    return this.todos.length + " TODOS: " + JSON.stringify(this.todos);
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

  toggleCompleted: function(index) {
    let todo = this.todos[index];
    todo.isCompleted = !todo.isCompleted;
  }
};

todoList.addTodo("Get shit done");
todoList.addTodo("Eat breakfast");
todoList.addTodo("Code Code Code");

todoList.changeTodo(1, "Ate bfast");

todoList.toggleCompleted(0);
todoList.toggleCompleted(1);

todoList.removeTodo(2);
console.log(todoList.displayTodos());
