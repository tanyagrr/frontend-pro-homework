const addButton = document.querySelector("button");
const taskInput = document.querySelector("#task");
const taskContainer = document.querySelector("ul");


addButton.addEventListener("click", function(event) {
    const newTask = document.createElement("li");
    const newTaskText = document.createElement("span");
    newTaskText.textContent = taskInput.value;
    newTask.appendChild(newTaskText);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    newTask.appendChild(deleteButton);
    taskContainer.appendChild(newTask);
    taskInput.value = "";
});

taskContainer.addEventListener("click", function(event) {
    const target = event.target;
    const targetParent = target.parentElement;
    if (target.tagName === "BUTTON") {
        taskContainer.removeChild(targetParent);
    }
});