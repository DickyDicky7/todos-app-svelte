import { writable } from "svelte/store";

const createNotifyError = () => {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    checkInput: (inputValue) => {
      if (inputValue === "") set(true);
    },
    continue: () => set(false),
  };
};

export const notifyError = createNotifyError();
