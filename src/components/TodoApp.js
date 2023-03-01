import React, { useState, useEffect } from "react";
import { Title } from "@mantine/core";
import TodoList from "./TodoList";
import TodoSearchFilter from "./TodoSearchFilter";
import TodoCounter from "./TodoCounter";
import TodoGeneratror from "./TodoGeneratror";

const TodoApp = () => {
  const [search, setSearch] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTodoList(JSON.parse(localStorage.getItem("todos")) ?? []);
  }, [todoList]);

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };

  const completeTodo = (id) => {
    let newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    localStorage.setItem("todos", JSON.stringify(newTodoList));
  };

  return (
    <>
      <Title order={3} size="h1" align="center" mb={20}>
        Taskly
      </Title>
      <TodoCounter todoList={todoList} />
      <TodoSearchFilter
        setFilter={setFilter}
        filter={filter}
        setSearch={setSearch}
        search={search}
      />
      <TodoGeneratror todoList={todoList} />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
        filter={filter}
        search={search}
      />
    </>
  );
};

export default TodoApp;
