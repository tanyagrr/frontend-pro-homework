const addButton = document.querySelector(".form__btn");
const taskInput = document.querySelector(".form__input");
const taskWrapper = document.querySelector(".js--todos-wrapper");
let tasks = [];

function addTask() {
    if (taskInput.value.trim() === "") {
        return;
    }
    const newTask = document.createElement("li");
    newTask.classList.add("todo-item");
    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.classList.add("checkbox");
    newTask.appendChild(checkboxInput);
    const newTaskText = document.createElement("span");
    newTaskText.textContent = taskInput.value;
    newTaskText.classList.add("todo-item__description");
    newTask.appendChild(newTaskText);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add("todo-item__delete");
    newTask.appendChild(deleteButton);
    taskWrapper.appendChild(newTask);
    taskInput.value = "";
    taskInput.focus();
    saveTasks();
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

taskWrapper.addEventListener("click", function(event) {
    const target = event.target;
    const targetParent = target.parentElement;
    if (target.tagName === "BUTTON") {
        taskWrapper.removeChild(targetParent);
    }

    if (target.type === "checkbox") {
        const taskText = target.nextElementSibling;
        taskText.classList.toggle("todo-item--checked", target.checked);
    }
    saveTasks();
});

function saveTasks() {
    tasks = [];
    if (taskWrapper.childElementCount > 0) {
        for (let i = 0; i < taskWrapper.childElementCount; i++) {
            let task = {};
            const liEl = taskWrapper.children[i];
            task = {text: `${liEl.children[1].textContent}`, checked: liEl.children[0].checked};
            tasks.push(task);
        }   
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
}

function loadTasks() {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    for (let task of tasks) {
        const newTask = document.createElement("li");
        newTask.classList.add("todo-item");
        const checkboxInput = document.createElement("input");
        checkboxInput.setAttribute("type", "checkbox");
        checkboxInput.checked = task.checked;
        checkboxInput.classList.add("checkbox");
        newTask.appendChild(checkboxInput);
        const newTaskText = document.createElement("span");
        newTaskText.textContent = task.text;
        newTaskText.classList.add("todo-item__description");
        if (task.checked) {
            newTaskText.classList.add("todo-item--checked");
        }
        newTask.appendChild(newTaskText);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити";
        deleteButton.classList.add("todo-item__delete");
        newTask.appendChild(deleteButton);
        taskWrapper.appendChild(newTask);
        taskInput.value = "";
        taskInput.focus();
        saveTasks();
    }
}

window.addEventListener("load", loadTasks);
