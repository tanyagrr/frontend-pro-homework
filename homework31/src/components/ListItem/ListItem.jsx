import { useDispatch } from "react-redux";
import { isCheckedChanged } from "../../store/rootReducer";
import { deleted } from "../../store/rootReducer";
import { edited } from "../../store/rootReducer";
import { useState } from "react";
import "./ListItem.css";

function ListItem({ desc, id, completed }) {
  const dispatch = useDispatch();

  const [isInput, setisInput] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (id) => {
    dispatch(isCheckedChanged(id));
  };

  const handleClickDelete = (id) => {
    dispatch(deleted(id));
  };

  const handleClickEdit = () => {
    setValue(desc);
    setisInput(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    dispatch(edited({ id, value }));
    setisInput(false);
  };

  return (
    <li className={isInput ? "todo-item todo-item--editing" : "todo-item"}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => handleChange(id)}
      />
      {isInput === true ? (
        <form className="todo-item__edit-form" onSubmit={handleEdit}>
          <input
            className="todo-item__edit-input"
            type="text"
            id="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button className="btn" type="submit">
            Done
          </button>
        </form>
      ) : (
        <span
          className={
            completed
              ? "todo-item__description checked"
              : "todo-item__description"
          }
        >
          {desc}
        </span>
      )}
      {!isInput && (
        <button className="btn" type="button" onClick={handleClickEdit}>
          Edit
        </button>
      )}
      <button
        className="btn btn--danger"
        type="button"
        onClick={() => handleClickDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ListItem;
