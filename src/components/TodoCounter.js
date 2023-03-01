import React from "react";
import { Paper, Text } from "@mantine/core";

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
        <Text>active tasks</Text>
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
        <Text>
          {todoList.filter((item) => item.isComplete === false).length}
        </Text>
      </Paper>
    </div>
  );
};

export default TodoCounter;
