import produce from "immer";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { singleTodoSelector, todoListAtom } from "../../stores/todo.module";

export const TodoItem = React.memo(({ id }: { id: number }) => {
  const [todo, setTodo] = useRecoilState(singleTodoSelector(id));
  const setTodoItems = useSetRecoilState(todoListAtom);
  const toggleCompleted = () =>
    setTodo((t) => ({ ...t, completed: !t.completed }));
  const removeTodo = () => {
    setTodoItems((t) =>
      produce(t, (draft) => {
        delete draft[id];
      })
    );
  };
  return (
    <div className="w-full flex">
      <label
        htmlFor={String(todo.id)}
        className="flex rounded-lg bg-gray-900 hover:bg-gray-700 cursor-pointer flex-grow items-center py-2 px-3 justify-between"
      >
        <div>{todo.title}</div>
        <input
          type="checkbox"
          onChange={toggleCompleted}
          id={String(todo.id)}
          checked={todo.completed}
        />
      </label>
      <button
        onClick={removeTodo}
        className="focus:ring-4 ring-opacity-60 text-xl lg:text-2xl text-white ring-red-700 bg-red-800 ml-3 focus:outline-none py-2 px-2 rounded"
      >
        &#9762;
      </button>
    </div>
  );
});
