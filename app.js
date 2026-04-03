// Class definitions
class Todo {
  constructor(todoDiscriptionValue) {
    this.todoDiscriptionKey = todoDiscriptionValue;
  }
}

class NewProject {
  constructor(projectNameValue) {
    this.projectNameKey = projectNameValue;
    this.todosArrKey = [];
  }
  addTodo(userInput) {
    this.todosArrKey.push(userInput);
  }
}

// DOM elements
const clickForTodo = document.getElementById("add-todo");
const defaultTodoList = document.getElementById("todo-list-default");
const newProjectBtn = document.getElementById("new-project");
const container = document.getElementById("container");

// Data arrays
let todosArr = [];
let projectsArr = [];

// Event listeners

clickForTodo.addEventListener("click", function () {
  const todo = prompt("Enter a todo:");
  const newTodoObj = new Todo(todo);
  todosArr.push(newTodoObj);
  defaultTodoList.innerHTML = todosArr
    .map((t) => `<li>${t.todoDiscriptionKey}</li>`)
    .join("");
});

newProjectBtn.addEventListener("click", function () {
  const projectName = prompt("Enter the project name:");
  const newProjectsObj = new NewProject(projectName);
  projectsArr.push(newProjectsObj);

  const div = document.createElement("div");
  div.innerHTML = `
            <h3>${newProjectsObj.projectNameKey}</h3>
            <button id="add-todo">click for todo</button>
            <ul id="todo-list"></ul>
        `;
  container.appendChild(div);

  const newButton = div.querySelector("#add-todo");
  const ul = div.querySelector("#todo-list");

  newButton.addEventListener("click", function () {
    const todo = prompt("Enter a todo:");
    newProjectsObj.addTodo(todo);

    ul.innerHTML = "";
    newProjectsObj.todosArrKey.forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo;
      ul.appendChild(li);
    });
  });
});
