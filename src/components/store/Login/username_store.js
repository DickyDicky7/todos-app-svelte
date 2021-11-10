import { writable } from "svelte/store";

const createUsername = () => {
  const { subscribe, set, update } = writable('');

  return {
        subscribe,
        update
  }
};
