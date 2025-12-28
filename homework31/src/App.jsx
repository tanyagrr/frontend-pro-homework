import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { added } from "./store/rootReducer";
import { deletedAll } from "./store/rootReducer";

function App() {
  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const addTask = (taskText) => {
    dispatch(added(taskText));
  };

  const handleClick = () => {
    dispatch(deletedAll());
  };

  return (
    <main className="container">
      <h1>to do list</h1>
      <Form addTask={addTask} />
      <List todos={state} />
      {state.length > 0 && (
        <div className="clear-wrapper">
          <button
            className="btn btn--danger"
            type="button"
            onClick={() => handleClick()}
          >
            Clear
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
