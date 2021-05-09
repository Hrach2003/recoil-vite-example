import React from "react";
import { useRecoilValue } from "recoil";
import { todoFilterSelector } from "../../stores/todo.module";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useRecoilValue(todoFilterSelector);
  return (
    <div className="overflow-y-auto p-4 max-h-full space-y-2">
      {Object.values(todos).map((t) => (
        <TodoItem id={t.id} key={t.id} />
      ))}
    </div>
  );
};
