import { writable } from "svelte/store";

const createSuccess = () => {
  const { subscribe, set, update } = writable({ occur: false, type: null });

  return {
    subscribe,
    checkInput: input => {
      if (input !== "") set({ occur: true, type: "sInput" });
    },
    continue: () => set({ occur: false, type: null }),
  };
};

export const success = createSuccess();
