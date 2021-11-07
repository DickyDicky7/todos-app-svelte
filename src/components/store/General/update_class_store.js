import { writable } from "svelte/store";

const createUpdateClass = (defaultClass) => {
  const { subscribe, set, update } = writable(defaultClass);

  return {
    subscribe,
    onUpdate: () => set(`${defaultClass} update`),
    offUpdate: () => {
      setTimeout(() => {
        set(`${defaultClass}`);
      }, 1000);
    },
  };
};

export const app_title_class = createUpdateClass("app_title");
export const todo_remaining_class = createUpdateClass("todo_remaining");

export const open_title_class = createUpdateClass("open_title");
