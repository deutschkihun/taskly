import React, { useRef, useState } from "react";
import { TextInput, Modal, Button, Group } from "@mantine/core";
import { IconFilePlus } from "@tabler/icons-react";
import { IconTextPlus } from "@tabler/icons-react";
import { IconWindmill } from "@tabler/icons-react";

const TodoGeneratror = ({ todoList }) => {
  const [opened, setOpened] = useState(false);
  const inputRef = useRef();
  const onClickHandler = () => {
    if (inputRef.current.value === "" || !inputRef.current) {
      alert("please insert todo title");
    } else {
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todoList,
          { name: inputRef.current.value, isComplete: false, id: Date.now() },
        ])
      );
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="todo-generator">
        <TextInput
          icon={<IconTextPlus size={16} />}
          ref={inputRef}
          placeholder="Insert content"
          type="text"
          mr={10}
          mb={10}
          style={{ flex: 1 }}
        />
        <Button leftIcon={<IconFilePlus size={18} />} onClick={onClickHandler}>
          Create new todo
        </Button>
      </div>
      <div className="todo-generator-mobile">
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Create new todo"
        >
          <TextInput
            icon={<IconTextPlus size={16} />}
            ref={inputRef}
            placeholder="Insert content"
            type="text"
            fullWidth
            mb={10}
          />
          <Button
            leftIcon={<IconFilePlus size={18} />}
            onClick={onClickHandler}
            fullWidth
          >
            create
          </Button>
        </Modal>

        <Group position="center">
          <Button
            onClick={() => setOpened(true)}
            mb={10}
            fullWidth
            leftIcon={<IconWindmill size={16} />}
          >
            Create todo
          </Button>
        </Group>
      </div>
    </>
  );
};

export default TodoGeneratror;
