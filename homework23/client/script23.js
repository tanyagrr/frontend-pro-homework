const addButton = document.querySelector(".form__btn");
const taskInput = document.querySelector(".form__input");
const taskWrapper = document.querySelector(".js--todos-wrapper");
let tasks = [];

async function fetchTasks() {
  const response = await fetch("http://localhost:3000/tasks");
  const data = await response.json();
  
  tasks = data;
}

function render() {
  taskWrapper.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = task.checked;
    checkbox.addEventListener("change", () => toggleTask(task.id));

    const span = document.createElement("span");
    span.textContent = task.text;
    span.classList.add("todo-item__description");
    if (task.checked) span.classList.add("todo-item--checked");

    const del = document.createElement("button");
    del.textContent = "Видалити";
    del.classList.add("todo-item__delete");
    del.addEventListener("click", () => deleteTask(task.id));

    li.append(checkbox, span, del);
    taskWrapper.appendChild(li);
  });
}

async function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const newTask = { text, checked: false };
  
  const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask)
  });
  
  await fetchTasks();
  render();
  
  taskInput.value = "";
}

async function deleteTask(id) {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "DELETE"
  });

  await fetchTasks();
  render();
}

async function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  task.checked = !task.checked;

  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  });

  await fetchTasks();
  render();
}

window.addEventListener("load", async () => {
  await fetchTasks();
  render();
});

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});