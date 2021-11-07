import { writable } from "svelte/store";

const createLoginPermission = () => {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    ok: (notifySuccess_login) => {
      setTimeout(() => {
        set(notifySuccess_login);
      }, 5000);
    },
  };
};

export const login_permission = createLoginPermission();
