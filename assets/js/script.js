var buttonEl = document.querySelector("#save-task"); // button
var tasksToDoEl = document.querySelector("#tasks-to-do"); // ul



var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  }

  buttonEl.addEventListener("click", createTaskHandler);

// steps:
//Create a new task item.
//Styte the new task item.
//Add the text.
//Append this element to the task list.