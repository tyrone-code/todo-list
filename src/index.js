

// index.js
import { addToDo } from "./todo-input.js";
import './styles.css'
const todoListParentContainer = document.querySelectorAll(".todo-parent")
let dynamicToDoParentUL;
let IsAddProjectInputLineMade = false;
let IsAddToDoInputLineMade = false;
let  isDynamicToDoParentULmade  = false;
let uniqueID = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

let incrementedID = 0;
const appendProjectsContainer = document.getElementById("append-projects")
let currentTabId = 0;
let panelMainHeading = ""


   //Makes the line so that you can type in text
    const createInputBar = function(){
        let input = document.createElement("input")
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'user-input');
        return input;
    }
 
    const addProjectInputTextBox = function(){
      IsAddProjectInputLineMade = true;
      let input = document.createElement("input")
      input.setAttribute('type', 'text');
      input.setAttribute('id', 'add-project-input');
      input.setAttribute('placeholder', 'Enter project name');
      return input;
      
  }

    

const displayUserTypedText = () => {
  const userTypedText = document.getElementById("user-input");
  if(userTypedText.value !== ""){
    let paragraph =  document.createElement("p")
    paragraph.textContent  = userTypedText.value 
    paragraph.setAttribute("id",uniqueID())
    userTypedText.replaceWith(paragraph)
      let createCheckBox = document.createElement("input");
      createCheckBox.type = "checkbox";
      createCheckBox.setAttribute("class", "chBox");
      paragraph.appendChild(createCheckBox)
  }else {
    return
  }
  }




 
  const projectSideBarDisplayUserInput = () => {

    const userTypedText = document.getElementById("add-project-input");
    if(userTypedText.value !== ""){
      let paragraph =  document.createElement("p")
      paragraph.textContent  = userTypedText.value 
      paragraph.setAttribute("id",++incrementedID)
      userTypedText.replaceWith(paragraph)
      paragraph.setAttribute("class","tab sidebar-text")
       let paragraphText = paragraph.textContent;
       panelMainHeading = paragraphText;
       createDisplayPanel();
    }


    }
    const createDisplayPanel = () => {
      let panelGroupParent = document.getElementsByClassName("panel-group");
      let panelDiv = document.createElement("div");
      let h4 = document.createElement("h4")
      let h3 = document.createElement("h3");
      let ulParent = document.createElement("ul")
      let pTag = document.createElement("p");
  isDynamicToDoParentULmade = true;
      panelDiv.setAttribute("class", "panel todo-list-items");
      ulParent.setAttribute("class", "todo-parent");
      pTag.setAttribute("id", uniqueID());
      pTag.setAttribute("class", "to-do");
      pTag.textContent = '+ Add to do!';


      panelDiv.appendChild(h4);
      panelDiv.appendChild(h3)
      panelDiv.appendChild(ulParent)
      ulParent.appendChild(pTag)
      panelGroupParent[0].appendChild(panelDiv);

     
       h4.textContent = "Press Enter key to confirm";
  
       h3.textContent = panelMainHeading;
      dynamicToDoParentUL = document.querySelectorAll(".todo-parent");
       ulParent.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('chBox')) {
          // Toggle the 'checked' class when checkbox state changes
          e.target.parentNode.classList.toggle('checked');
        } else if (e.target === todoListParentContainer) {
          return;
        } else {
          let ElementId = e.target.id;
          getInputTextBox(ElementId);
        }
      });
  
      
     
  //     <div class="panel todo-list-items">
  //     <h4>Press Enter key to confirm</h4>
  //     <h3>{Name}</h3>
  //     <ul class="todo-parent">
  //         <p id="asd2" class="to-do">+ Add to do!</p>
  
  
  //     </ul>
  // </div>
  console.log(dynamicToDoParentUL)
    }
  
   
let makeProjectParagraph = () => {
  let newH4 = document.createElement("h4");
  newH4.textContent = '+ Add a to do!';
  appendProjectsContainer.appendChild(newH4);
  newH4.setAttribute("id", "add-project");

return newH4.textContent
}
const getInputTextBox = function(id) {
        let  addToDoTextPara = document.getElementById(id);
     addToDoTextPara.replaceWith(createInputBar());
     IsAddToDoInputLineMade = true;

        let createdInputBar = document.getElementById('user-input')
        createdInputBar.focus();
};
const createToDoParagraph = function(num) {
  console.log(currentTabId)
  console.log(dynamicToDoParentUL)
 
        let newPara = document.createElement("p");
        newPara.textContent = '+ Add a to do!';

        newPara.setAttribute("id", uniqueID());
        newPara.setAttribute("class", "to-do");
        console.log(isDynamicToDoParentULmade)
        if(isDynamicToDoParentULmade){

          dynamicToDoParentUL[num].appendChild(newPara);
        }else {
          todoListParentContainer[num].appendChild(newPara);

        }

};



todoListParentContainer.forEach(element => {
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

document.addEventListener('keydown', keyPressed);

 // if  Enter Key Is Pressed
function keyPressed(e) {
  if(e.code === "Enter" && IsAddToDoInputLineMade) {
    displayUserTypedText()
    IsAddToDoInputLineMade = false;
    // only if it equals zero make a todoParagraph
      createToDoParagraph(currentTabId);
      
    // if (isToDoClass.length === 0) {

    // }else {
    //   console.log(isToDoClass.length)
    // }
}
}

document.addEventListener('click', (e) => {

  if(e.target.id === "add-project"){
    let addProjectTextElement = e.target;
addProjectTextElement.replaceWith(addProjectInputTextBox());
let createdInputBar = document.getElementById("add-project-input")
createdInputBar.focus()
    
  }

document.addEventListener('keydown', projectKeyPressed);
function projectKeyPressed(e) {
   
  if(e.code === "Enter" && IsAddProjectInputLineMade) {
    IsAddProjectInputLineMade = false;
    projectSideBarDisplayUserInput()

    makeProjectParagraph()
}
}



});



document.addEventListener('DOMContentLoaded', function(){
  let tabsContainer = document.getElementById("tab-group")
tabsContainer.addEventListener('click', function(event) {
  // Check if the clicked element is a tab (i.e., has the class 'tab')
  if (event.target.classList.contains('tab')) {
    tabSwitch(event);
  }
});

  
  function tabSwitch(event) {
    const tabs = document.getElementsByClassName('tab');
    
    // Remove 'is-active' from the currently active tab
    document.getElementsByClassName('is-active')[0]?.classList.remove('is-active');
    
    // Add 'is-active' to the clicked tab
    event.target.classList.add('is-active');
    
    // Hide the currently shown panel
    document.getElementsByClassName('is-show')[0]?.classList.remove('is-show');
    
    // Find the corresponding panel and show it
    const index = Array.prototype.indexOf.call(tabs, event.target);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
    
    let TabId = (event.target.id);
    currentTabId = TabId;
 }
});





