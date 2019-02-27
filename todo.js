// It should have a place to store todos
var todos = ["item 1", "item 2", "item 3", "item 4", "item 5"];

// It should have a way to display todos
console.log(todos);

// It should have a way to add todos
todos.push("item 6");
console.log(todos);

// It should have a way to change a todo
todos[0] = "first item";
console.log(todos);

// It should have a way to delete a todo
var removed = todos.pop();
console.log(removed); // item 6
console.log(todos);

var removed = todos.shift();
console.log(removed); // first item
console.log(todos);

var removed = todos.splice(0, 2);
console.log(removed);
console.log(todos);
