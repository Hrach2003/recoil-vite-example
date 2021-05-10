import React from "react";
import { useRecoilValue } from "recoil";
import { todoStatisticSelector } from "../../stores/todo.module";
import { Button } from "../Button";
import { LightText } from "../LightText";

const CompletedTotalRatio = () => {
  const { completed, total } = useRecoilValue(todoStatisticSelector);
  return (
    <Button disabled>
      {completed}/{total}
    </Button>
  );
};

const PersentCompleted = () => {
  const { persent } = useRecoilValue(todoStatisticSelector);
  return <Button disabled>{persent}%</Button>;
};

export const TodoStats = () => {
  return (
    <div className="px-5 py-2 space-y-2">
      <h1 className="text-2xl text-center mb-3">Todo Stats</h1>
      <div>
        <p>
          <LightText>number of completed todos: </LightText>
          <CompletedTotalRatio />
        </p>
        <p>
          <LightText>completed: </LightText>
          <PersentCompleted />
        </p>
      </div>
    </div>
  );
};
