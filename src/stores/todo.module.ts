import { getAllTodos } from "./../services/todo.service";
import { updateUserIdSelector } from "./user.module";
import produce from "immer";
import { atom, selector, selectorFamily } from "recoil";
import { Todo } from "../types";

export const todoListAtom = atom({
  key: "todo-list",
  default: selector({
    key: "todo-list-selector",
    get: async () => {
      const data = await getAllTodos();
      return Object.fromEntries(data.map((t) => [t.id, t]));
    },
  }),
});

export const singleTodoSelector = selectorFamily<Todo, number>({
  key: "single-todo-element",
  get: (id) => ({ get }) => {
    const todos = get(todoListAtom);
    return todos[id];
  },
  set: (id) => ({ set, get }, updatedTodo) => {
    const todos = get(todoListAtom);
    const updated = produce(todos, (draft) => {
      draft[id] = updatedTodo as Todo;
    });
    set(todoListAtom, updated);
  },
});

export const todoStatisticSelector = selector({
  key: "todo-statistic",
  get: ({ get }) => {
    const todos = get(todoFilterSelector);
    const completed = todos.filter((t) => t.completed);
    const persentSompleted = Math.round(
      (completed.length / todos.length) * 100
    );
    return {
      completed: completed.length,
      persent: persentSompleted,
      total: todos.length,
    };
  },
});

export const todoFilterAtom = atom<keyof Todo | null>({
  key: "todo-filter-field",
  default: null,
});

export const todoFilterSelector = selector({
  key: "todo-filter",
  get: ({ get }) => {
    const todos = Object.values(get(todoListAtom));
    const filterType = get(todoFilterAtom);
    switch (filterType) {
      case "completed":
        return todos.filter((t) => t.completed);
      case "userId":
        const userId = get(updateUserIdSelector);
        return todos.filter((t) => t.userId === userId);
      default:
        return todos;
    }
  },
});
