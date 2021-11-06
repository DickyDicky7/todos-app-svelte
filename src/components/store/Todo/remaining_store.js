import { derived } from "svelte/store";
import { todos } from "./todos_store";

export const remaining = derived(
  todos,
  ($todos) => $todos.filter((todo) => !todo.done).length
);
