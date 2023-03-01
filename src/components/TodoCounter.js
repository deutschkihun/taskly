import React from "react";
import { Paper, Text } from "@mantine/core";

const TodoCounter = ({ todoList }) => {
  return (
    <Paper shadow="md" p="lg" radius="md" withBorder mb={20}>
      <Text>
        number of active tasks:
        {todoList.filter((item) => item.isComplete === false).length}
      </Text>
    </Paper>
  );
};

export default TodoCounter;
