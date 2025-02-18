// index.js
import { addToDo } from "./todo-input.js";
import './styles.css';

let uniqueID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

let incrementedID = 0;
let currentTabId = 0;
let panelMainHeading = "";
let dynamicToDoParentUL;
let isAddProjectInputLineMade = false;
let IsAddToDoInputLineMade = false;
let isDynamicToDoParentULmade = false;
const todoListParentContainer = document.querySelectorAll(".todo-parent");
const appendProjectsContainer = document.getElementById("append-projects");

// Create Input Bar for To-Do and Project
const createInputBar = function() {
  
  let input = document.createElement("input");
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'user-input');
  return input;
};
const addProjectInputTextBox = function() {
  isAddProjectInputLineMade = true;
  let input = document.createElement("input");
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'add-project-input');
  input.setAttribute('placeholder', 'Enter project name');
  return input;
};


// Delete a to-do;






// Create Project Panel
const createDisplayPanel = () => {
  let panelGroupParent = document.getElementsByClassName("panel-group");
  let panelDiv = document.createElement("div");
  let h4 = document.createElement("h4");
  let h3 = document.createElement("h2");
  let ulParent = document.createElement("ul");
  let pTag = document.createElement("p");
  let deleteProject = document.createElement('button');

  



  isDynamicToDoParentULmade = true;
  
  panelDiv.setAttribute("class", "panel todo-list-items");
  ulParent.setAttribute("class", "todo-parent");
  deleteProject.innerText = 'Delete Entire Project'

  deleteProject.setAttribute('class', 'project-delete-btn')

  pTag.setAttribute("id", uniqueID());
  pTag.setAttribute("class", "to-do");
  pTag.textContent = '+ Add a to do!';
  ulParent.appendChild(deleteProject)

  panelDiv.appendChild(h4);
  panelDiv.appendChild(h3);
  panelDiv.appendChild(ulParent);
  ulParent.appendChild(pTag);
  panelGroupParent[0].appendChild(panelDiv);


  
  h4.textContent = "Press Enter key to confirm";
  h3.textContent = panelMainHeading;

  dynamicToDoParentUL = document.querySelectorAll(".todo-parent");
  
  ulParent.addEventListener('click', function(e) {
    if((e.target.classList.contains('project-delete-btn'))){
      let delButton = e.target.parentNode
      delButton.remove();
      incrementedID--;
      console.log(incrementedID)
      document.querySelector(".is-show").remove();
      document.querySelector(".is-active").remove();

  
    }
    else if((e.target.classList.contains('delete-btn'))){
      let delButton = e.target.parentNode
      delButton.remove();
    }
    else if (e.target && e.target.classList.contains('chBox')) {
      // Toggle the 'checked' class when checkbox state changes
      e.target.parentNode.classList.toggle('checked');
    } else if (!e.target.classList.contains("paragraph-class") && !e.target.classList.contains("todo-parent")) {
      let ElementId = e.target.id;
      getInputTextBox(ElementId);
    } else {
      return
    }
   
  });

};

// Make Project Paragraph
let makeProjectParagraph = () => {
  let newH4 = document.createElement("h4");
  newH4.textContent = '+ Add a project!';
  appendProjectsContainer.appendChild(newH4);
  newH4.setAttribute("id", "add-project");
  
  return newH4.textContent;
};

// Display To-Do User Input Text
const displayUserTypedText = () => {
  const userTypedText = document.getElementById("user-input");

  if (userTypedText.value.trim() !== "") { // Check for non-empty input
    let paragraph = document.createElement("p");
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete'


 
    paragraph.textContent = userTypedText.value;
    paragraph.setAttribute("id", uniqueID());
    paragraph.setAttribute('class', 'paragraph-class');
    deleteButton.setAttribute('class', 'delete-btn')
    // Create checkbox and append to paragraph
    let createCheckBox = document.createElement("input");
    createCheckBox.type = "checkbox";
    createCheckBox.setAttribute("class", "chBox");


    paragraph.appendChild(createCheckBox);
    paragraph.appendChild(deleteButton)

    // Replace input with paragraph in the DOM
    userTypedText.replaceWith(paragraph);

    // You can add any additional actions here (like creating a todo)
    createToDoParagraph(currentTabId);
    
    // Reset the flag variables or state if necessary
    IsAddToDoInputLineMade = false;
  } else {
    alert("Enter A To Do!"); // Show alert if input is empty
  }
};



 
// Project Side Bar Display User Input
const projectSideBarDisplayUserInput = () => {
  const userTypedText = document.getElementById("add-project-input");
  if(userTypedText.value.trim() !== ""){

    let paragraph =  document.createElement("p");
   
    paragraph.textContent  = userTypedText.value;
    paragraph.setAttribute("id", ++incrementedID);
    let paragraphText = paragraph.textContent;
    panelMainHeading = paragraphText;
    paragraph.setAttribute("class","tab sidebar-text");

    
    userTypedText.replaceWith(paragraph);



    createDisplayPanel();
    makeProjectParagraph();
    isAddProjectInputLineMade = false;


  }else {
    alert("Enter A project name!");
  }
 
};

// Get Input Text Box for To-Do
const getInputTextBox = function(id) {
  let addToDoTextPara = document.getElementById(id);
  addToDoTextPara.replaceWith(createInputBar());
  IsAddToDoInputLineMade = true;

  let createdInputBar = document.getElementById('user-input');

  createdInputBar.focus();

};

// Create To-Do Paragraph
const createToDoParagraph = function(num) {
  let newPara = document.createElement("p");
  newPara.textContent = '+ Add a to do!';
  newPara.setAttribute("id", uniqueID());
  newPara.setAttribute("class", "to-do");
  
  if(isDynamicToDoParentULmade) {
    dynamicToDoParentUL[num].appendChild(newPara);

  } else {
    todoListParentContainer[num].appendChild(newPara);
  }
};

// Event Listener for To-Do Interaction
todoListParentContainer.forEach(element => {
  
  element.addEventListener('click', (e) => {
    if((e.target.classList.contains('delete-btn'))){
      let delButton = e.target.parentNode
      delButton.remove();
    }
    else if (e.target && e.target.classList.contains('chBox')) {
      // Toggle the 'checked' class when checkbox state changes
      e.target.parentNode.classList.toggle('checked');
    } else if ((!e.target.classList.contains("paragraph-class") && !e.target.classList.contains("todo-parent"))) {
      let ElementId = e.target.id;
      getInputTextBox(ElementId);
    } else {
      return;
    }



  });
});

// Key Down Event for To-Do
document.addEventListener('keydown', function (e) {
  if (e.code === "Enter" && IsAddToDoInputLineMade) {
    displayUserTypedText();
  }
});

// Click Event for Project Input-
document.addEventListener('click', (e) => {
  if(e.target.id === "add-project") {
    let addProjectTextElement = e.target;
    addProjectTextElement.replaceWith(addProjectInputTextBox());
    let createdInputBar = document.getElementById("add-project-input");
    createdInputBar.focus();
  }
  
});



document.addEventListener('keydown', function (e) {
  if (e.code === "Enter" && isAddProjectInputLineMade) {
    projectSideBarDisplayUserInput();

  }
});




// Tab Switching Logic
document.addEventListener('DOMContentLoaded', function() {
  let tabsContainer = document.getElementById("tab-group");
  tabsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('tab')) {
      tabSwitch(event);
    }
  });

  function tabSwitch(event) {
    const tabs = document.getElementsByClassName('tab');
    document.getElementsByClassName('is-active')[0]?.classList.remove('is-active');
    event.target.classList.add('is-active');
    
    document.getElementsByClassName('is-show')[0]?.classList.remove('is-show');
    
    const index = Array.prototype.indexOf.call(tabs, event.target);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
    
    let TabId = event.target.id;
    currentTabId = TabId;
  }
});
