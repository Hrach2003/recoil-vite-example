import React from "react";
import { useRecoilValue } from "recoil";
import { todoStatisticSelector } from "../../stores/todo.module";
import { Button } from "../Button";
import { LightText } from "../LightText";

export const TodoStats = () => {
  const { completed, persent, total } = useRecoilValue(todoStatisticSelector);
  return (
    <div className="px-5 py-2 space-y-2">
      <h1 className="text-2xl text-center mb-3">Todo Stats</h1>
      <div>
        <p>
          <LightText>number of completed todos: </LightText>
          <Button disabled>
            {completed}/{total}
          </Button>
        </p>
        <p>
          <LightText>completed: </LightText>
          <Button disabled>{persent}%</Button>
        </p>
      </div>
    </div>
  );
};
