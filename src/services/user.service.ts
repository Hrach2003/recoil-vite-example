import { atom, selector } from "recoil";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

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
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const userData = (await res.json()) as User;
    return userData;
  },
});
