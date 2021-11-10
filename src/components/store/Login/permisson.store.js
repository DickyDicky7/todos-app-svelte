import { writable } from "svelte/store";

const createPermission = () => {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    yes: () => set(true),
    no: () => set(false),
  };
};

export const permission = createPermission();
