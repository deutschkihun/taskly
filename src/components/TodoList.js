import React, { useState, useRef, useEffect } from "react";
import {
  TextInput,
  SegmentedControl,
  Title,
  Button,
  Paper,
  Text,
} from "@mantine/core";
import { IconFilePlus } from "@tabler/icons-react";
import Todo from "./Todo";

const TodoList = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(JSON.parse(localStorage.getItem("todos")));
  const [value, setValue] = useState("all");

  const inputRef = useRef();
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("todos")));
  }, []);

  const onClickHandler = () => {
    if (inputRef.current.value === "" || !inputRef.current) {
      alert("please insert todo title");
    } else {
      const todos = !data ? [] : data;
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...todos,
          { name: inputRef.current.value, isComplete: false, id: Date.now() },
        ])
      );
      setData([
        ...todos,
        {
          name: inputRef.current.value,
          id: Date.now(),
          isComplete: false,
        },
      ]);
      inputRef.current.value = "";
    }
  };

  const deleteTodo = (id) => {
    const removedArr = data.filter((todo) => todo.id !== id);
    setData(removedArr);
    localStorage.setItem("todos", JSON.stringify(removedArr));
  };

  const completeTodo = (id) => {
    let updatedTodos = data.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setData(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <>
      <div>
        <Title order={3}>Taskly</Title>
        <Paper
          shadow="md"
          p="lg"
          radius="md"
          withBorder
          style={{ margin: "10px 0" }}
        >
          <Text>
            number of active todo:
            {data == null
              ? 0
              : data.filter((item) => item.isComplete === false).length}
          </Text>
        </Paper>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <TextInput
            type="text"
            placeholder="search your todos"
            onChange={(e) => setSearch(e.target.value)}
            style={{ flex: 1, paddingRight: "10px" }}
          />

          <SegmentedControl
            value={value}
            onChange={setValue}
            color="blue"
            transitionDuration={500}
            transitionTimingFunction="linear"
            radius="m"
            size="m"
            data={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
              { label: "All", value: "all" },
            ]}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
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
              height: 36,
              "&:hover": {
                backgroundColor: theme.fn.darken("#00acee", 0.05),
              },
            },

            leftIcon: {
              marginRight: 15,
            },
          })}
        >
          create new todo
        </Button>
      </div>

      <Todo
        todos={data ?? []}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        filter={value}
        search={search}
      />
    </>
  );
};

export default TodoList;
