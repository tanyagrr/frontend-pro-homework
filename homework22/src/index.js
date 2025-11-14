import {addButton, taskInput, tasks, render, saveTasks, loadTasks} from "./utils.js";
import "./styles.css";
import "./styles.scss";

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ text, checked: false });
  taskInput.value = "";
  taskInput.focus();
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

window.addEventListener("load", loadTasks);