import Item from "./ListItem";

function List({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Item key={todo.id} id={todo.id} desc={todo.task} />
      ))}
    </ul>
  );
}

export default List;
