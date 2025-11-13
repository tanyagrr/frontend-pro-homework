"use strict";

var _utils = require("./utils.js");
function addTask() {
  var text = _utils.$taskInput.val().trim();
  if (!text) return;
  _utils.tasks.push({
    text: text,
    checked: false
  });
  _utils.$taskInput.val("").focus();
  (0, _utils.saveTasks)();
  (0, _utils.render)();
}
_utils.$addButton.on("click", addTask);
_utils.$taskInput.on("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
$(window).on("load", _utils.loadTasks);