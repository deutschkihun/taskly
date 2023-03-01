import React, { useRef } from "react";
import { TextInput, Button } from "@mantine/core";
import { IconFilePlus } from "@tabler/icons-react";

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
        ref={inputRef}
        placeholder="insert new todo name"
        type="text"
        style={{ flex: 1, paddingRight: "10px" }}
      />
      <Button
        leftIcon={<IconFilePlus size={18} />}
        onClick={onClickHandler}
        styles={(theme) => ({
          root: {
            "&:hover": {
              backgroundColor: theme.fn.darken("#00acee", 0.05),
            },
          },
        })}
      >
        create new todo
      </Button>
    </div>
  );
};

export default TodoGeneratror;
