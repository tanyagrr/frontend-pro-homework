const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

const tasks = [];

let nextId = 1;

app.use(express.static("client"));

app.get("/", (req, resp) => {
    resp.sendFile("client/index23.html", {root: __dirname});
});

app.get("/tasks", (req, resp) => {
    resp.json(tasks);
});

app.post("/tasks", (req, res) => {
    const newTask = {
        id: nextId++,
        text: req.body.text,
        checked: false
    };
    tasks.push(newTask);
    res.json(newTask);
});

app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    const deleted = tasks.splice(index, 1)[0];
    res.json(deleted);
});

app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    const updated = {
        ...tasks[index],
        ...req.body
    };

    tasks[index] = updated;
    res.json(updated);
});


app.listen(port, () => {
    console.log("App is listening on port: ", + port);
});