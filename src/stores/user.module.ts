import { getUserById } from "./../services/user.service";
import { atom, selector } from "recoil";
import { User } from "../types";

const currentUserAtom = atom({
  key: "current-user",
  default: 1,
});

export const updateUserIdSelector = selector<number>({
  key: "current-user-selector",
  get: ({ get }) => {
    return get(currentUserAtom);
  },
  set: ({ set }, id) => {
    if (id > 10 || id <= 0) return;
    set(currentUserAtom, id);
  },
});

export const currentUserInfoSelector = selector({
  key: "current-user-info",
  get: async ({ get }) => {
    const userId = get(currentUserAtom);
    const userData = await getUserById(userId);
    return userData;
  },
});
