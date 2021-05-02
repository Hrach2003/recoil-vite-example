import { atom, selector } from "recoil";
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
