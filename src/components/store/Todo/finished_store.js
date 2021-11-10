import { derived } from "svelte/store";
import { filtered } from "./filtered";
export const finished = derived(
  filtered,
  $filtered => $filtered.filter(todo => todo.done).length
);
