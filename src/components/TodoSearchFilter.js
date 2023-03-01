import React from "react";
import { TextInput, SegmentedControl } from "@mantine/core";
const TodoSearchFilter = ({ setSearch, filter, setFilter }) => {
  return (
    <div className="todo-search-filter">
      <TextInput
        className="abc"
        type="text"
        placeholder="search your todos"
        onChange={(e) => setSearch(e.target.value)}
        pr={10}
        style={{ flex: 1 }}
      />

      <SegmentedControl
        value={filter}
        onChange={setFilter}
        color="blue"
        transitionDuration={500}
        transitionTimingFunction="linear"
        radius="md"
        size="m"
        data={[
          { label: "Complete", value: "complete" },
          { label: "In progress", value: "in progress" },
          { label: "All", value: "all" },
        ]}
      />
    </div>
  );
};

export default TodoSearchFilter;
