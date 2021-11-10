import { derived } from "svelte/store";
import { todos } from "./todos_store";
export const dayOpts = derived(todos, $todos => [
  ...new Set($todos.map(todo => todo.day)),
]);
