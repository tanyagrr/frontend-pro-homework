import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { added } from "./store/rootReducer";

function App() {
  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTask = (taskText) => {
    dispatch(added(taskText));
  };

  return (
    <main className="container">
      <h1>to do list</h1>
      <Form addTask={addTask} />
      <List todos={state} />
      <div className="footer">Total: {state.length}</div>
    </main>
  );
}

export default App;
