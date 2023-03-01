import React from "react";
import { Paper, Title } from "@mantine/core";

const TodoCounter = ({ todoList }) => {
  return (
    <div className="todo-counter">
      <Paper
        shadow="md"
        p="lg"
        radius="md"
        withBorder
        mb={20}
        mr={10}
        style={{ flex: 10 }}
      >
        <Title align="center" order={3}>
          active tasks
        </Title>
      </Paper>
      <Paper
        shadow="md"
        p="lg"
        radius="md"
        align="center"
        withBorder
        mb={20}
        style={{ flex: 1 }}
      >
        <Title align="center" order={3}>
          {todoList.filter((item) => item.isComplete === false).length}
        </Title>
      </Paper>
    </div>
  );
};

export default TodoCounter;
