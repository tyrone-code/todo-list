

// index.js
import { addToDo } from "./todo-input.js";
import './styles.css'

let ul = document.getElementById("todo-parent");
// let button = document.getElementById("button");

let incrementedId = 2;
const children = document.querySelectorAll('#todo-parent')


    const makeUserInputTextBox = function(){
        let input = document.createElement("input")
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'user-input');
        return input;
    }
 

    

const displayUserInput = () => {

  const textInput = document.getElementById("user-input");
  if(textInput.value !== ""){
    let paragraph =  document.createElement("p")
    paragraph.textContent  = textInput.value 
    paragraph.setAttribute("id",incrementedId++)
    textInput.replaceWith(paragraph)
      let createCheckBox = document.createElement("input");
      createCheckBox.type = "checkbox";
      createCheckBox.setAttribute("class", "chBox");
      paragraph.appendChild(createCheckBox)
  }else {
    return
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
const createToDoParagraph = function() {
        let newPara = document.createElement("p");
        newPara.textContent = '+ add to do!';
        ul.appendChild(newPara);
        newPara.setAttribute("id", incrementedId++);
        newPara.setAttribute("class", "to-do");

  return newPara.textContent
};

// Add event listener to the 'addToDo' button
ul.addEventListener('click', (e) => {

  if (e.target && e.target.classList.contains('chBox')) {

        // Toggle the 'checked' class when checkbox state changes
        e.target.parentNode.classList.toggle('checked');
    }else {
        let ElementId = e.target.id;
        
        getInputTextBox(ElementId);
    }
// if (e.target.classList.contains('to-do')){

//   }

});



document.addEventListener('keydown', keyPressed);
// let toDoText = createToDoParagraph();


function keyPressed(e) {

  if(e.code === "Enter") {
    displayUserInput()
    let isToDoClass = document.getElementsByClassName('to-do');
    // only if it equals zero make a todoParagraph
    if (isToDoClass.length === 0) {
      createToDoParagraph();

    }else {
      console.log(isToDoClass.length)
    }




    // children.forEach(child => {
    //   console.log(child)
    // }) 
}
}


// Event delegation for dynamically added checkboxes
// button.addEventListener('click', function(e) {
//    alert()
// });


































































