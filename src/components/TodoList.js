import React, { useState, useRef, useEffect } from "react";
import { SegmentedControl } from "@mantine/core";
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
  };

  return (
    <>
      <div>
        <h3>Insert your todo </h3>
        <h3>
          number of active todo:
          {data == null
            ? 0
            : data.filter((item) => item.isComplete === false).length}
        </h3>
        <input
          type="text"
          placeholder="search your todos"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div>
          <SegmentedControl
            value={value}
            onChange={setValue}
            color="blue"
            transitionDuration={500}
            transitionTimingFunction="linear"
            radius="lg"
            size="lg"
            data={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
              { label: "All", value: "all" },
            ]}
          />
        </div>

        <input ref={inputRef} placeholder="insert keyword" />
        <button onClick={onClickHandler}>create your todo </button>
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
