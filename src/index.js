// index.js
import { addToDo } from "./todo-input.js";
import './styles.css'

let ul = document.getElementById("todo-parent");
let incrementedId = 2;


const variableDump = {
     userPrompt: function(){
        return prompt("enter a todo!")
     },
     userResponse: false,
}
// Function to display user input and add a checkbox
const displayUserInput = function(id) {
    let storedTxt = variableDump.userPrompt();
     
    if(storedTxt !== null){
        variableDump.userResponse = true;
        let createCheckBox = document.createElement("input");
        createCheckBox.type = "checkbox";
        createCheckBox.setAttribute("class", "box");
        let p = document.getElementById(id);
        p.textContent = storedTxt;
    
        // Append the checkbox to the todo item
        p.appendChild(createCheckBox);
    }else {
        return
    }
};
// console.log(displayUserInput())
// Function to create a new to-do list item
const createList = function() {
    if(variableDump.userResponse){
        let newPara = document.createElement("p");
        newPara.textContent = '+ Add Todo!';
        ul.appendChild(newPara);
        newPara.setAttribute("id", incrementedId++);
    }

};

// Add event listener to the 'addToDo' button
ul.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('box')) {

        // Toggle the 'checked' class when checkbox state changes
        e.target.parentNode.classList.toggle('checked');
    }else {
        let ElementId = e.target.id;
        displayUserInput(ElementId);
        createList()
    
    }

});



// Event delegation for dynamically added checkboxes
ul.addEventListener('change', function(e) {
   
});
