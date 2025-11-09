const $addButton = $(".form__btn");
const $taskInput = $(".form__input");
const $taskWrapper = $(".js--todos-wrapper");
let tasks = [];

function render() {
  $taskWrapper.empty();

  tasks.forEach((task, index) => {
    const $li = $("<li>").addClass("todo-item");

    const $checkbox = $("<input>")
      .attr("type", "checkbox")
      .addClass("checkbox")
      .prop("checked", task.checked)
      .on("change", () => toggleTask(index));

    const $span = $("<span>")
      .addClass("todo-item__description flex-grow-1")
      .text(task.text)
      .css("cursor", "pointer")
      .on("click", () => showTaskModal(task.text));


    if (task.checked) {
      $span.addClass("todo-item--checked");
    }

    const $deleteBtn = $("<button>")
      .addClass("todo-item__delete")
      .text("Видалити")
      .on("click", () => deleteTask(index));

    $li.append($checkbox, $span, $deleteBtn);
    $taskWrapper.append($li);
  });
}

function addTask() {
  const text = $taskInput.val().trim();
  if (!text) return;

  tasks.push({ text, checked: false });
  $taskInput.val("").focus();
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

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  render();
}

$addButton.on("click", addTask);

$taskInput.on("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});

$(window).on("load", loadTasks);

function showTaskModal(text) {
  
  document.querySelector("#taskModal .modal-body").textContent = text;

  const modal = new bootstrap.Modal(document.getElementById("taskModal"));
  modal.show();
}