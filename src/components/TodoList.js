import React from "react";
import { Card, Text, Badge, Group, Button, Checkbox } from "@mantine/core";

const TodoList = ({ todoList, deleteTodo, completeTodo, filter, search }) => {
  const filteredTodos = todoList
    .filter((item) =>
      filter === "in progress"
        ? !item.isComplete
        : filter === "complete"
        ? item.isComplete
        : item
    )
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search);
    });

  return (
    <div className="todo">
      {filteredTodos.map((todo) => (
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          key={todo.id}
          style={{ opacity: todo.isComplete ? 0.5 : 1 }}
        >
          <Group position="apart" mt="md" mb="xs">
            <Text
              weight={500}
              style={{
                textDecoration: todo.isComplete ? "line-through" : "none",
                lineBreak: "anywhere",
              }}
            >
              {todo.name}
            </Text>
            <Badge color={todo.isComplete ? "gray" : "blue"} variant="light">
              {todo.isComplete ? "complete" : "in progress"}
            </Badge>
          </Group>
          <Button
            onClick={() => deleteTodo(todo.id)}
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
          >
            delete
          </Button>
          <Checkbox
            mt={10}
            label="mark as complete"
            checked={todo.isComplete}
            onChange={() => completeTodo(todo.id)}
          />
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
