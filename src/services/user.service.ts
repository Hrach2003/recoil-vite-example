import { User } from "../types";
export const getUserById = async (userId: number): Promise<User> => {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then((d) => d.json());
};
