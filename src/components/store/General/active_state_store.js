import { writable } from "svelte/store";

const createActiveState = defaultState => {
  const { subscribe, set, update } = writable(defaultState);

  return {
    subscribe,
    yes: () => set(true),
    no: () => set(false),
    toggle: () => update(curSt => !curSt),
  };
};

// Todo.svelte
export const appTitleState = createActiveState(false);
export const todoRemainingState = createActiveState(false);
// LoginForm.svelte
export const openTitleState = createActiveState(false);
// Navigation.svelte
export const navigationState = createActiveState(false);
