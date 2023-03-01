import React, { useRef, useState } from "react";
import { TextInput, Modal, Button, Group } from "@mantine/core";
import { IconFilePlus } from "@tabler/icons-react";
import { IconTextPlus } from "@tabler/icons-react";
import { IconWindmill } from "@tabler/icons-react";

const TodoGeneratror = ({ todoList }) => {
  const [opened, setOpened] = useState(false);
  const inputRef = useRef();
  const modalInputRef = useRef();
  const onClickHandler = () => {
    const ref = opened ? modalInputRef : inputRef;
    if (ref.current.value === "" || !ref.current) {
      alert("please insert task");
    } else {
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todoList,
          {
            name: ref.current.value,
            isComplete: false,
            id: Date.now(),
          },
        ])
      );
      ref.current.value = "";
      if (opened) setOpened(!opened);
    }
  };

  return (
    <>
      <div className="todo-generator">
        <TextInput
          icon={<IconTextPlus size={16} />}
          ref={inputRef}
          placeholder="Insert task"
          type="text"
          mr={10}
          mb={10}
          style={{ flex: 1 }}
        />
        <Button leftIcon={<IconFilePlus size={18} />} onClick={onClickHandler}>
          Create new task
        </Button>
      </div>
      <div className="todo-generator-mobile">
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Create new task"
        >
          <TextInput
            icon={<IconTextPlus size={16} />}
            ref={modalInputRef}
            placeholder="Insert task"
            type="text"
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
            Create new task
          </Button>
        </Group>
      </div>
    </>
  );
};

export default TodoGeneratror;
