import { writable } from "svelte/store";

const createError = () => {
  const { subscribe, set, update } = writable({ occur: false, type: null });

  return {
    subscribe,
    checkInput: input => {
      if (input === "") set({ occur: true, type: "eInput" });
    },
    continue: () => set({ occur: false, type: null }),
  };
};

export const error = createError();
