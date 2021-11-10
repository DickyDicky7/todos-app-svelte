import { derived } from "svelte/store";
import { error } from "./error_store";
import { success } from "./success_store";

export const notify = derived([error, success], ([$error, $success]) => {
  return {
    popUp: $error.occur || $success.occur,
    type: $error.type || $success.type,
  };
});
