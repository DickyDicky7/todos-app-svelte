import { writable } from "svelte/store";

const createMessage = defaultMessage => {
  const { subscribe, set, update } = writable(defaultMessage);

  return {
    subscribe,
    setNew: newMessage => set(newMessage),
    setDefault: () => set(defaultMessage),
  };
};

export const appTitleMessage = createMessage("What needs to be done?");
export const openTitleMessage = createMessage("Welcome");
