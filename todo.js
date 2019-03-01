// It should have a place to store todos
var todoList = {
  todos: ["item 1", "item 2", "item 3", "item 4", "item 5"],

  // display todos
  displayTodos: function() {
    return this.todos.length + " TODOS: " + this.todos;
  },

  // add a todo
  addTodo: function(todo) {
    this.todos.push(todo);
  },

  // change a todo
  changeTodo: function(index, newTodo) {
    this.todos[index] = newTodo;
  },

  // delete a todo
  removeTodo: function(index) {
    this.todos.splice(index, 1);
  }
};

console.log(todoList.displayTodos());

console.log(todoList.addTodo("Get shit done"));
console.log(todoList.changeTodo(4, "Get shit done"));
console.log(todoList.removeTodo(0));
console.log(todoList.removeTodo(0));

console.log(todoList.displayTodos());
