import React from "react";
import { useRecoilValue } from "recoil";
import { todoStatisticSelector } from "../../stores/todo.module";

export const TodoStats = () => {
  const { completed, persent, total } = useRecoilValue(todoStatisticSelector);
  return (
    <div className="flex justify-end text-right mb-2">
      <div>
        <p>
          Number of completed todos: {completed}/{total}
        </p>
        <p>Completed: {persent}%</p>
      </div>
    </div>
  );
};
