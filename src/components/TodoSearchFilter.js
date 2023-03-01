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

  return (
    <>
      <div className="todo-search-filter">
        <TextInput
          placeholder="Search"
          icon={<IconSearch size={16} />}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1 }}
          mr={10}
        />

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
      </div>
      <div className="todo-search-filter-mobile">
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Filter option"
        >
          <TextInput
            placeholder="Search"
            icon={<IconSearch size={16} />}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
            style={{ flex: 1 }}
            mt={10}
            fullWidth
          />
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
