function Item({ id, desc, checked, deleteTask, handleCheckbox }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheckbox(id)}
      />

      <span
        className="todo-item__description"
        style={checked ? { textDecoration: "line-through" } : {}}
      >
        {desc}
      </span>

      <button className="todo-item__delete" onClick={() => deleteTask(id)}>
        Delete
      </button>
    </li>
  );
}

export default Item;
