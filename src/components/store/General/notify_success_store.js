import { writable } from "svelte/store";

const createNotifySuccess = () => {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    checkInput: (inputValue) => {
      if (inputValue !== "") set(true);
    },
    continue: () => set(false),
  };
};

export const notifySuccess_login = createNotifySuccess();
