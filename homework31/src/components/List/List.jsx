import ListItem from "../ListItem/ListItem";

function List({ todos }) {
  const handleClick = () => {};

  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          desc={todo.title}
          completed={todo.completed}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}

export default List;
