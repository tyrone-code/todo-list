// Select the button
const button = document.getElementById("myButton");
const todoList = document.getElementById("todo-list");

let todos = [];
// Add event listener
button.addEventListener("click", function () {
  const todo = prompt("Enter a todo:");
  const newTodo = new Todo(todo);
  todos.push(newTodo);
  todoList.innerHTML = todos
    .map((t) => `<li>${t.todoDiscriptionKey}</li>`)
    .join("");
});

function getUserInput() {
  const userInput = prompt("Enter todo:");
  return userInput;
}

function Todo(todoDiscriptionValue) {
  this.todoDiscriptionKey = todoDiscriptionValue;
}

// console.log(todo1.todoDiscriptionKey);
