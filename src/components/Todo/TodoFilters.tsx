import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoFilterAtom } from "../../stores/todo.module";
import { updateUserIdSelector } from "../../stores/user.module";
import { Button } from "../Button";

const CurrentUser = () => {
  const [userId, setUserId] = useRecoilState(updateUserIdSelector);
  return (
    <div className="h-full items-center flex justify-center mb-2 lg:mb-0">
      <span className="text-gray-200 text-base font-light mr-2">
        current user:
      </span>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(e.currentTarget.valueAsNumber)}
        className="w-12 border-2 rounded focus:outline-none border-lightblue-600 text-black text-right"
      />
    </div>
  );
};

const FilterButtons = () => {
  const setFilterType = useSetRecoilState(todoFilterAtom);
  return (
    <div className="flex justify-between lg:block">
      <Button onClick={() => setFilterType("completed")}>
        Completed Todos
      </Button>
      <Button onClick={() => setFilterType("userId")}>My Todos</Button>
      <Button onClick={() => setFilterType(null)}>All</Button>
    </div>
  );
};

export const TodoFilters = () => {
  return (
    <div className="px-5 py-2">
      <h1 className="text-2xl text-center mb-3">Todo Filters</h1>
      <div className="lg:flex justify-between items-center">
        <CurrentUser />
        <FilterButtons />
      </div>
    </div>
  );
};
