import React from "react";
import { Card, Text, Badge, Group, Button, Checkbox } from "@mantine/core";

const Todo = ({ todos, deleteTodo, completeTodo, filter, search }) => {
  const filteredTodos = todos.filter((item) =>
    filter === "active"
      ? !item.isComplete
      : filter === "inactive"
      ? item.isComplete
      : item
  );

  return (
    <div
      style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px ",
      }}
    >
      {filteredTodos
        .filter((item) => {
          return search.toLowerCase() === ""
            ? item
            : item.name.toLowerCase().includes(search);
        })
        .map((todo) => (
          <Card shadow="sm" p="lg" radius="md" withBorder key={todo.id}>
            <Group position="apart" mt="md" mb="xs">
              <Text
                weight={500}
                style={{
                  textDecoration: todo.isComplete ? "line-through" : "none",
                }}
              >
                {todo.name}
              </Text>
              <Badge color={todo.isComplete ? "gray" : "blue"} variant="light">
                {todo.isComplete ? "complete" : "in progress"}
              </Badge>
            </Group>
            <Button
              variant="light"
              color="blue"
              fullWidth
              mt="md"
              radius="md"
              onClick={() => deleteTodo(todo.id)}
            >
              delete
            </Button>
            <Checkbox
              style={{ marginTop: "10px" }}
              label="mark as complete"
              checked={todo.isComplete}
              onChange={() => completeTodo(todo.id)}
            />
          </Card>
        ))}
    </div>
  );
};

export default Todo;
