import { writable } from "svelte/store";

const createNotifyError = () => {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    test: (newTodo) => {
      if (newTodo.text === "") set(true);
    },
    continue: () => set(false),
  };
};

export const notifyError = createNotifyError();
