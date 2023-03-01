import React, { useState } from "react";
import {
  TextInput,
  SegmentedControl,
  Modal,
  Button,
  Group,
} from "@mantine/core";

import { IconSearch } from "@tabler/icons-react";
import { IconDoorEnter } from "@tabler/icons-react";

const TodoSearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const [opened, setOpened] = useState(false);
  const taskFilter = (
    <SegmentedControl
      value={filter}
      onChange={setFilter}
      color="blue"
      transitionDuration={500}
      transitionTimingFunction="linear"
      radius="md"
      fullWidth
      size="m"
      data={[
        { label: "Complete", value: "complete" },
        { label: "In progress", value: "in progress" },
        { label: "All", value: "all" },
      ]}
    />
  );

  const searchInput = (
    <TextInput
      placeholder="Search"
      icon={<IconSearch size={16} />}
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ flex: 1 }}
      mr={10}
    />
  );

  return (
    <>
      <div className="todo-search-filter">
        {searchInput}
        {taskFilter}
      </div>
      <div className="todo-search-filter-mobile">
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Filter option"
        >
          {searchInput}
          <div style={{ marginTop: "10px" }}>{taskFilter}</div>
        </Modal>
        <Group position="center">
          <Button
            onClick={() => setOpened(true)}
            mb={10}
            style={{ flex: 1 }}
            leftIcon={<IconDoorEnter size={16} />}
          >
            Open filter option
          </Button>
        </Group>
      </div>
    </>
  );
};

export default TodoSearchFilter;
