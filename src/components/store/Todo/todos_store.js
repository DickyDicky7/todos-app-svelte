import { writable } from "svelte/store";

const createTodos = () => {
  const { subscribe, set, update } = writable([
    { id: String(Math.random()), done: true, text: "Wake up" },
    { id: String(Math.random()), done: false, text: "Say good morning" },
    { id: String(Math.random()), done: false, text: "Brush teeth" },
    { id: String(Math.random()), done: false, text: "Clean face" },
    { id: String(Math.random()), done: false, text: "Take a shower" },
    { id: String(Math.random()), done: false, text: "Go to bed again" },
  ]);

  return {
    subscribe,
    add: (newTodo) => {
      update((todos) => {
        return newTodo.text === ""
          ? todos
          : [
              ...todos,
              {
                id: newTodo.id,
                done: newTodo.done,
                text: newTodo.text.trim(),
              },
            ];
      });
    },
    clear: () => {
      update((todos) => todos.filter((todo) => !todo.done));
    },
    update: () => update((todos) => todos),
    set,
  };
};

export const todos = createTodos();
