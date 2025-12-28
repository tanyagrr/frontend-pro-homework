import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";

function Form({ addTask }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    addTask(value);
    setValue("");
  };

  const handleGetTodos = () => {
    dispatch({ type: "TODOS_FETCH_REQUESTED" });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__input"
          type="text"
          id="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add task"
        />
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      <button
        className="btn btn--secondary"
        type="button"
        onClick={handleGetTodos}
      >
        Get todos
      </button>
    </div>
  );
}

export default Form;
