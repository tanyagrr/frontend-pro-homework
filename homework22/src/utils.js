export const addButton = document.querySelector(".form__btn");
export const taskInput = document.querySelector(".form__input");
const taskWrapper = document.querySelector(".js--todos-wrapper");
export let tasks = [];

export function render() {
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

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  render();
}