import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoFilterAtom } from "../services/todo.service";
import { updateUserIdSelector } from "../services/user.service";

export const TodoFilters = () => {
  const [userId, setUserId] = useRecoilState(updateUserIdSelector);
  const setFilterType = useSetRecoilState(todoFilterAtom);
  return (
    <div className="flex items-center">
      <div className="flex-grow">
        Current User:{" "}
        <input
          type="number"
          value={userId}
          onChange={(e) => setUserId(e.currentTarget.valueAsNumber)}
          className="w-12 border-2 rounded focus:outline-none border-indigo-400 text-right"
        />
      </div>
      <div>
        <button
          className="ml-2 px-3 py-2 bg-indigo-700 rounded-md focus:outline-none focus:bg-indigo-800 hover:bg-indigo-600 text-white focus:ring-4 ring-indigo-300"
          onClick={() => setFilterType("completed")}
        >
          Completed Todos
        </button>

        <button
          className="ml-2 px-3 py-2 bg-indigo-700 rounded-md focus:outline-none focus:bg-indigo-800 hover:bg-indigo-600 text-white focus:ring-4 ring-indigo-300"
          onClick={() => setFilterType("userId")}
        >
          My Todos
        </button>
        <button
          className="ml-2 px-3 py-2 bg-indigo-700 rounded-md focus:outline-none focus:bg-indigo-800 hover:bg-indigo-600 text-white focus:ring-4 ring-indigo-300"
          onClick={() => setFilterType(null)}
        >
          All
        </button>
      </div>
    </div>
  );
};
