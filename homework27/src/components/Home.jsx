import { useEffect, useState } from "react";
import MyForm from "./Form.jsx";
import List from "./List.jsx";

function Home() {
  const getInitialState = () => {
    const storedValue = localStorage.getItem("todos");
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return [];
  };

  const [todos, setTodos] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (taskText) => {
    if (!taskText.trim()) return;

    setTodos((prev) => [
      ...prev,
      {
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
        task: taskText,
        checked: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheckbox = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <main className="container">
      <h1>to do list</h1>
      <MyForm addTask={addTask} />
      <List
        todos={todos}
        setTodos={setTodos}
        deleteTask={deleteTask}
        handleCheckbox={handleCheckbox}
      />
    </main>
  );
}

export default Home;
