<script>
  import Button from "../UI/Button/Button.svelte";
  import { todos } from "../store/Todo/todos_store";
  import { error } from "../store/General/error_store";
  import {
    appTitleState,
    todoRemainingState,
  } from "../store/General/active_state_store";
  import { finished } from "../store/Todo/finished_store";
  import { appTitleMessage } from "../store/General/message_store";
  import activeStateHandler from "../handler/activeStateHandler";
  import autoMessageHandler from "../handler/autoMessageHandler";

  let newTodo = "";
</script>

<form
  on:submit|preventDefault={() => {
    todos.add({
      id: String(Math.random()),
      done: false,
      text: newTodo,
    });
    error.checkInput(newTodo);
    autoMessageHandler(
      appTitleMessage,
      newTodo === "" ? "No tasks added" : "Task added"
    );
    activeStateHandler(appTitleState);
    activeStateHandler(todoRemainingState);
    newTodo = "";
  }}
>
  <input
    type="text"
    bind:value={newTodo}
    placeholder="Hey! Put something here.."
  />
  <Button
    class="add"
    type="button"
    click={() => {
      todos.add({
        id: String(Math.random()),
        done: false,
        text: newTodo,
      });
      error.checkInput(newTodo);
      autoMessageHandler(
        appTitleMessage,
        newTodo === "" ? "No tasks added" : "Task added"
      );
      activeStateHandler(appTitleState);
      activeStateHandler(todoRemainingState);
      newTodo = "";
    }}
  >
    Add
  </Button>
  <Button
    class="clear"
    type="button"
    click={() => {
      autoMessageHandler(
        appTitleMessage,
        $finished === 0
          ? "No tasks cleared"
          : $finished === 1
          ? "Task cleared"
          : `${$finished} tasks cleared`
      );
      todos.clear();
      activeStateHandler(appTitleState);
      activeStateHandler(todoRemainingState);
    }}
  >
    Clear
  </Button>
</form>

<style lang="scss">
  @import "./TodoForm.scss";
</style>
