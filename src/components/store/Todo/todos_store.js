import { writable } from "svelte/store";

const createTodos = () => {
  const { subscribe, set, update } = writable([
    { id: String(Math.random()), done: true, text: "Wake up", day: 'Day 1' },
    { id: String(Math.random()), done: false, text: "Say good morning", day: 'Day 2' },
    { id: String(Math.random()), done: false, text: "Brush teeth", day: 'Day 3' },
    { id: String(Math.random()), done: false, text: "Clean face", day: 'Day 4' },
    { id: String(Math.random()), done: false, text: "Take a shower", day: 'Day 5' },
    { id: String(Math.random()), done: false, text: "Go to bed again", day: 'Day 6' },
    { id: String(Math.random()), done: true, text: "Task 1", day: 'Day 1' },
    { id: String(Math.random()), done: false, text: "Task 2", day: 'Day 2' },
    { id: String(Math.random()), done: false, text: "Task 3", day: 'Day 3' },
    { id: String(Math.random()), done: false, text: "Task 4", day: 'Day 4' },
    { id: String(Math.random()), done: false, text: "Task 5", day: 'Day 5' },
    { id: String(Math.random()), done: false, text: "Task 6", day: 'Day 6' },

  ]);

  return {
    subscribe,
    add: newTodo => {
      update(todos => {
        return newTodo.text === ""
          ? todos
          : [
              ...todos,
              {
                id: newTodo.id,
                done: newTodo.done,
                text: newTodo.text.trim(),
                day: newTodo.day
              },
            ];
      });
    },
    clear: () => {
      update(todos => todos.filter(todo => !todo.done));
    },
    update: () => update(todos => todos),
    set,
  };
};

export const todos = createTodos();
