import React, { useRef } from "react";
import { TextInput, Button } from "@mantine/core";
import { IconFilePlus } from "@tabler/icons-react";
import { IconTextPlus } from "@tabler/icons-react";

const TodoGeneratror = ({ todoList }) => {
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
    <div className="todo-generator">
      <TextInput
        icon={<IconTextPlus size={16} />}
        ref={inputRef}
        placeholder="Insert new todo title"
        type="text"
        mr={10}
        mb={10}
        style={{ flex: 1 }}
      />
      <Button leftIcon={<IconFilePlus size={18} />} onClick={onClickHandler}>
        create new todo
      </Button>
    </div>
  );
};

export default TodoGeneratror;
