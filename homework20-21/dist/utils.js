"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$taskInput = exports.$addButton = void 0;
exports.loadTasks = loadTasks;
exports.render = render;
exports.saveTasks = saveTasks;
exports.tasks = void 0;
var $addButton = exports.$addButton = $(".form__btn");
var $taskInput = exports.$taskInput = $(".form__input");
var $taskWrapper = $(".js--todos-wrapper");
var tasks = exports.tasks = [];
function render() {
  $taskWrapper.empty();
  tasks.forEach(function (task, index) {
    var $li = $("<li>").addClass("todo-item");
    var $checkbox = $("<input>").attr("type", "checkbox").addClass("checkbox").prop("checked", task.checked).on("change", function () {
      return toggleTask(index);
    });
    var $span = $("<span>").addClass("todo-item__description flex-grow-1").text(task.text).css("cursor", "pointer").on("click", function () {
      return showTaskModal(task.text);
    });
    if (task.checked) {
      $span.addClass("todo-item--checked");
    }
    var $deleteBtn = $("<button>").addClass("todo-item__delete").text("Видалити").on("click", function () {
      return deleteTask(index);
    });
    $li.append($checkbox, $span, $deleteBtn);
    $taskWrapper.append($li);
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
function showTaskModal(text) {
  document.querySelector("#taskModal .modal-body").textContent = text;
  var modal = new bootstrap.Modal(document.getElementById("taskModal"));
  modal.show();
}
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks() {
  exports.tasks = tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  render();
}