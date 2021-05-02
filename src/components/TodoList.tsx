import React from "react";
import { useRecoilValue } from "recoil";
import { todoFilterSelector } from "../services/todo.service";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useRecoilValue(todoFilterSelector);
  return (
    <>
      {Object.values(todos).map((t) => (
        <TodoItem id={t.id} key={t.id} />
      ))}
    </>
  );
};
