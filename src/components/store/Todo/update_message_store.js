import { writable } from "svelte/store";

const createUpdateMessage = (defaultMessage) => {
  const { subscribe, set, update } = writable(defaultMessage);

  return {
    subscribe,
    setNew: (newMessage) => set(newMessage),
    setDefault: () => {
      setTimeout(() => {
        set(defaultMessage);
      }, 2000);
    },
  };
};

export const app_title_update_message = createUpdateMessage(
  "What needs to be done?"
);
