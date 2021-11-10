import { writable, derived } from "svelte/store";
import { todos } from "./todos_store";
export const selection = writable("All");
export const filtered = derived([todos, selection], ([$todos, $selection]) => {
  return $selection === "All"
    ? $todos
    : $todos.filter(todo => todo.day === $selection);
});
