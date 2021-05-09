import { Todo } from "../types";

export const getAllTodos = async (): Promise<Todo[]> => {
  return fetch("https://jsonplaceholder.typicode.com/todos/").then((d) =>
    d.json()
  );
};
