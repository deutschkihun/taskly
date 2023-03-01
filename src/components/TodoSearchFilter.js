import React from "react";
import { TextInput, SegmentedControl } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const TodoSearchFilter = ({ setSearch, filter, setFilter }) => {
  return (
    <div className="todo-search-filter">
      <TextInput
        placeholder="Search"
        icon={<IconSearch size={16} />}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        style={{ flex: 1 }}
        pr={10}
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
