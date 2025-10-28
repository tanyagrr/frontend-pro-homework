// SOLUTION 2

const addButton = document.querySelector(".form__btn");
const taskInput = document.querySelector(".form__input");
const taskWrapper = document.querySelector(".js--todos-wrapper");
let tasks = [];

function render() {
  taskWrapper.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = task.checked;
    checkbox.addEventListener("change", () => toggleTask(index));

    const span = document.createElement("span");
    span.textContent = task.text;
    span.classList.add("todo-item__description");
    if (task.checked) span.classList.add("todo-item--checked");

    const del = document.createElement("button");
    del.textContent = "Видалити";
    del.classList.add("todo-item__delete");
    del.addEventListener("click", () => deleteTask(index));

    li.append(checkbox, span, del);
    taskWrapper.appendChild(li);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ text, checked: false });
  taskInput.value = "";
  taskInput.focus();
  saveTasks();
  render();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  render();
}

function toggleTask(index) {
  tasks[index].checked = !tasks[index].checked;
  saveTasks();
  render();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  render();
}

window.addEventListener("load", loadTasks);


// SOLUTION 1

/* const addButton = document.querySelector(".form__btn");
const taskInput = document.querySelector(".form__input");
const taskWrapper = document.querySelector(".js--todos-wrapper");
let tasks = [];

const createLi = () => {
  const newTask = document.createElement("li");
  newTask.classList.add("todo-item");
  return newTask;
}

const createCheckbox = () => {
  const checkboxInput = document.createElement("input");
  checkboxInput.setAttribute("type", "checkbox");
  checkboxInput.classList.add("checkbox");
  return checkboxInput;
}

const createTaskText = () => {
  const newTaskText = document.createElement("span");
  newTaskText.textContent = taskInput.value;
  newTaskText.classList.add("todo-item__description");
  return newTaskText;
}

const createDeleteButton = () => {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Видалити";
  deleteButton.classList.add("todo-item__delete");
  return deleteButton;
}

function addTask() {
    if (taskInput.value.trim() === "") return;

    const newTask = createLi();
    newTask.append(createCheckbox(), createTaskText(), createDeleteButton());
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
        const newTask = createLi();
        const checkboxInput = createCheckbox();
        checkboxInput.checked = task.checked;
        newTask.appendChild(checkboxInput);
        const newTaskText = createTaskText();
        newTaskText.textContent = task.text;
        if (task.checked) {
            newTaskText.classList.add("todo-item--checked");
        }
        newTask.appendChild(newTaskText);
        newTask.appendChild(createDeleteButton());
        taskWrapper.appendChild(newTask);
        taskInput.value = "";
        taskInput.focus();
    }
}

window.addEventListener("load", loadTasks); */