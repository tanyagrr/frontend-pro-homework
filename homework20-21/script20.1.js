import {$addButton, $taskInput, tasks, render, saveTasks, loadTasks} from "./utils.js";

function addTask() {
  const text = $taskInput.val().trim();
  if (!text) return;

  tasks.push({ text, checked: false });
  $taskInput.val("").focus();
  saveTasks();
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