import { useState } from "react";

function Form({ addTask }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    addTask(value);
    setValue("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        id="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add task"
      />
      <button className="form__btn" type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
