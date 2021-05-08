import produce from "immer";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { singleTodoSelector, todoListAtom } from "../../services/todo.service";

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
    <div className="w-full flex my-3">
      <label
        htmlFor={String(todo.id)}
        className="flex rounded bg-indigo-200 hover:bg-indigo-50 cursor-pointer flex-grow ring-4 items-center py-2 px-3 justify-between"
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
        className="focus:ring-4 text-white ring-red-700 bg-red-800 ml-3 ring-opacity-80 focus:outline-none py-2 px-2 rounded"
      >
        Del
      </button>
    </div>
  );
});
