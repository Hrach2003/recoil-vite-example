import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoFilterAtom } from "../../stores/todo.module";
import { updateUserIdSelector } from "../../stores/user.module";

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
          className="w-12 border-2 rounded focus:outline-none border-gray-400 text-black text-right"
        />
      </div>
      <div>
        <button
          className="ml-2 px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:bg-lightblue-800 hover:bg-lightblue-600 text-white focus:ring-4 ring-lightblue-300"
          onClick={() => setFilterType("completed")}
        >
          Completed Todos
        </button>

        <button
          className="ml-2 px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:bg-lightblue-800 hover:bg-lightblue-600 text-white focus:ring-4 ring-lightblue-300"
          onClick={() => setFilterType("userId")}
        >
          My Todos
        </button>
        <button
          className="ml-2 px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:bg-lightblue-800 hover:bg-lightblue-600 text-white focus:ring-4 ring-lightblue-300"
          onClick={() => setFilterType(null)}
        >
          All
        </button>
      </div>
    </div>
  );
};
