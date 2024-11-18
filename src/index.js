
// index.js
import {addToDo} from "./todo-input.js";
import './styles.css'

let ul = document.getElementById("todo-parent");

let incrementedId = 2
let displayUserInput = function(id){

    let userInput = prompt("enter a todo!");
    let li = document.getElementById(id);
    li.textContent = userInput;
    // ul.appendChild(li);


}


let createList = function(){

    let newListItem = document.createElement("li");
    newListItem.textContent = '+ add to do!';
    ul.appendChild(newListItem);
    newListItem.setAttribute("id",incrementedId++);
    console.log(incrementedId);
}


let displayTodo = function(){

};





addToDo.addEventListener('click', (e) => {
    let ElementId = e.target.id
    displayUserInput(ElementId);
    createList();

    })