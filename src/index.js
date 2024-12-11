

// index.js
import { addToDo } from "./todo-input.js";
import './styles.css'

let ul = document.getElementById("todo-parent");
// let button = document.getElementById("button");

let incrementedId = 2;


const globalVariables = {
     userPrompt: function(){
        return prompt("enter a todo!")
     },
     userResponse: false,
}

    const makeUserInputTextBox = function(){
        let input = document.createElement("input")
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'user-input');
        return input;
    }
 

    

const displayUserInput = () => {
  const textInput = document.getElementById("user-input");
 let paragraph =  document.createElement("p")
  paragraph.textContent  = textInput.value 
  paragraph.setAttribute("id",incrementedId++)
  textInput.replaceWith(paragraph)
  if(paragraph !== null){
    let createCheckBox = document.createElement("input");
    createCheckBox.type = "checkbox";
    createCheckBox.setAttribute("class", "box");
    paragraph.appendChild(createCheckBox)
  }
 

}


// Function to display user input and add a checkbox
const getInputTextBox = function(id) {
        let  addToDoTextPara = document.getElementById(id);
     addToDoTextPara.replaceWith(makeUserInputTextBox());
        let createdInput = document.getElementById('user-input')
        createdInput.focus();
};
// Function to create a new to-do list item
const createList = function() {
        let newPara = document.createElement("p");
        newPara.textContent = '+ Add Todo!';
        ul.appendChild(newPara);
        newPara.setAttribute("id", incrementedId++);
  
};

// Add event listener to the 'addToDo' button
ul.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('box')) {

        // Toggle the 'checked' class when checkbox state changes
        e.target.parentNode.classList.toggle('checked');
    }else {
        let ElementId = e.target.id;
        getInputTextBox(ElementId);
        createList()
    
    }

});

document.addEventListener('keydown', keyPressed);

function keyPressed(e) {
  if(e.code === "Enter") {
    displayUserInput()
}
}

// Event delegation for dynamically added checkboxes
// button.addEventListener('click', function(e) {
//    alert()
// });


































































