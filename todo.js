// It should have a place to store todos
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];

// display todos
function displayTodos() {
  return `${todos.length} Todos: ${todos}`;
}

// add todos
function addTodos(todo) {
  todos.push(todo);
}

// change a todo
function changeTodo(index, newTodo) {
  todos[index] = newTodo;
}

// delete a todo
function removeTodo(index) {
  todos.splice(index, 1);
}

addTodos("get shit done!");
changeTodo(0, "first todo");
removeTodo(3);
console.log(displayTodos());
