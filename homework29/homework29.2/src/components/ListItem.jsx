function Item({ desc }) {
  return (
    <li className="todo-item">
      <span className="todo-item__description">{desc}</span>
    </li>
  );
}

export default Item;
