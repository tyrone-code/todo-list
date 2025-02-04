

// index.js
import { addToDo } from "./todo-input.js";
import './styles.css'
const todoListParentContainer = document.querySelectorAll(".todo-parent")
let addProjectInputBar = false;
let inputBoxMade = false;
let incrementedId = 2;
const appendProjectsContainer = document.getElementById("append-projects")
const isActive = document.getElementsByClassName("is-active");
let currentTabId = 0;



    const makeUserInputTextBox = function(){
        let input = document.createElement("input")
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'user-input');
        return input;
    }
 
    const addProjectInputTextBox = function(){
      addProjectInputBar = true;
      let input = document.createElement("input")
      input.setAttribute('type', 'text');
      input.setAttribute('id', 'add-project-input');
      input.setAttribute('placeholder', 'Enter project name');
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
 
  const projectSideBarDisplayUserInput = () => {

    const textInput = document.getElementById("add-project-input");
    if(textInput.value !== ""){
      let paragraph =  document.createElement("p")
      paragraph.textContent  = textInput.value 
      paragraph.setAttribute("id",incrementedId++)
      textInput.replaceWith(paragraph)
      paragraph.setAttribute("class","sidebar-text")
        // let createCheckBox = document.createElement("input");
        // createCheckBox.type = "checkbox";
        // createCheckBox.setAttribute("class", "chBox");
        // paragraph.appendChild(createCheckBox)
    }else {
      return
    }
    }
   
let makeProjectParagraph = () => {
  let newH4 = document.createElement("h4");
  newH4.textContent = '+ Add project';
  appendProjectsContainer.appendChild(newH4);
  newH4.setAttribute("id", "add-project");
  // newPara.setAttribute("class", "to-do");

return newH4.textContent
}
// Function to display user input and add a checkbox
const getInputTextBox = function(id) {
  inputBoxMade = true;
        let  addToDoTextPara = document.getElementById(id);
     addToDoTextPara.replaceWith(makeUserInputTextBox());
        let createdInput = document.getElementById('user-input')
        createdInput.focus();
};
// Function to create a new to-do list item
const createToDoParagraph = function(num) {
        let newPara = document.createElement("p");
        newPara.textContent = '+ Add task';
        todoListParentContainer[num].appendChild(newPara);
        
        newPara.setAttribute("id", incrementedId++);
        newPara.setAttribute("class", "to-do");


};

// Add event listener to the 'addToDo' button


todoListParentContainer.forEach(element => {
  console.log(element)
element.addEventListener('click', (e) => {

  if (e.target && e.target.classList.contains('chBox')) {

        // Toggle the 'checked' class when checkbox state changes
        e.target.parentNode.classList.toggle('checked');
    }else if (e.target === todoListParentContainer) {
      return
    }else {
      let ElementId = e.target.id;
        
      getInputTextBox(ElementId);
    }


});

});


document.addEventListener('click', (e) => {

  if(e.target.id === "add-project"){
    let addProjectTextElement = e.target;
addProjectTextElement.replaceWith(addProjectInputTextBox());
let createdInputBar = document.getElementById("add-project-input")
createdInputBar.focus()
    
  }

document.addEventListener('keydown', projectKeyPressed);
function projectKeyPressed(e) {
   
  if(e.code === "Enter" && addProjectInputBar) {
    addProjectInputBar = false;
    projectSideBarDisplayUserInput()

    makeProjectParagraph()
}
}



});
// sidebarText.addEventListener('click', function(event) {
//   let targetElement = event.target;  // Get the element that was clicked
//   alert(targetElement.id);  // Logs the ID of the clicked element
// });



document.addEventListener('DOMContentLoaded', function(){
  const tabs = document.getElementsByClassName('tab');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch);
  }

  function tabSwitch(event){
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
    let targetId = event.target.id;
    currentTabId = targetId;
    console.log(currentTabId)
    return targetId;
  };
});


document.addEventListener('keydown', keyPressed);
// let toDoText = createToDoParagraph();


function keyPressed(e) {
  if(e.code === "Enter" && inputBoxMade) {
    displayUserInput()
    inputBoxMade = false;
    let isToDoClass = document.getElementsByClassName('to-do');
    // only if it equals zero make a todoParagraph

      createToDoParagraph(currentTabId);
      
    // if (isToDoClass.length === 0) {

    // }else {
    //   console.log(isToDoClass.length)
    // }
}
}