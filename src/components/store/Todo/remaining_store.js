import { derived } from "svelte/store";
import { filtered } from "./filtered";
export const remaining = derived(
  filtered,
  $filtered => $filtered.filter(todo => !todo.done).length
);
