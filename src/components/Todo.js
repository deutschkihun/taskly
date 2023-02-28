import React from "react";

const Todo = ({ todos, deleteTodo, completeTodo, filter, search }) => {
  const filteredTodos = todos.filter((item) =>
    filter === "active"
      ? !item.isComplete
      : filter === "inactive"
      ? item.isComplete
      : item
  );

  return (
    <div style={{ marginTop: "20px" }}>
      {filteredTodos
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search);
        })
        .map((todo) => (
          <div key={todo.id}>
            <p
              style={{
                textDecoration: todo.isComplete ? "line-through" : "none",
              }}
            >
              {todo.name}
            </p>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => completeTodo(todo.id)}
            />
            <button type="text" onClick={() => deleteTodo(todo.id)}>
              delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default Todo;
