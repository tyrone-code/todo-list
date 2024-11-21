// index.js
import { addToDo } from "./todo-input.js";
import './styles.css'

let ul = document.getElementById("todo-parent");
let incrementedId = 2;

// Function to display user input and add a checkbox
let displayUserInput = function(id) {
    let createCheckBox = document.createElement("input");
    createCheckBox.type = "checkbox";
    createCheckBox.setAttribute("class", "box");
    
    let userInput = prompt("Enter a todo!");
    let p = document.getElementById(id);
    p.textContent = userInput;

    // Append the checkbox to the todo item
    p.appendChild(createCheckBox);
};

// Function to create a new to-do list item
let createList = function() {
    let newPara = document.createElement("p");
    newPara.textContent = '+ Add Todo!';
    ul.appendChild(newPara);
    newPara.setAttribute("id", incrementedId++);
    console.log(incrementedId);
};

// Event delegation for dynamically added checkboxes
ul.addEventListener('change', function(e) {
    if (e.target && e.target.classList.contains('box')) {
        // Toggle the 'checked' class when checkbox state changes
        e.target.parentNode.classList.toggle('checked');
    }
});

// Add event listener to the 'addToDo' button
addToDo.addEventListener('click', (e) => {
    let ElementId = e.target.id;
    displayUserInput(ElementId);
    createList()

});
