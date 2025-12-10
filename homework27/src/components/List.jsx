import Item from "./ListItem";

function List({ todos, deleteTask, handleCheckbox }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          id={todo.id}
          desc={todo.task}
          checked={todo.checked}
          deleteTask={deleteTask}
          handleCheckbox={handleCheckbox}
        />
      ))}
    </ul>
  );
}

export default List;
