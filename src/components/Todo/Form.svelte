<script>
  import Button from "../UI/Button/Button.svelte";
  import { todos } from "../store/Todo/todos_store";
  import { notifyError } from "../store/General/notify_error_store";
  import {
    app_title_class,
    todo_remaining_class,
  } from "../store/General/update_class_store";
  import { finished } from "../store/Todo/finished_store";
  import { app_title_update_message } from "../store/General/update_message_store";

  let newTodo = "";
</script>

<form
  on:submit|preventDefault={() => {
    todos.add({
      id: String(Math.random()),
      done: false,
      text: newTodo,
    });

    notifyError.checkInput(newTodo);

    app_title_update_message.setNew(
      newTodo === "" ? "No tasks added" : "Task added"
    );
    app_title_update_message.setDefault();

    app_title_class.onUpdate();
    app_title_class.offUpdate();

    todo_remaining_class.onUpdate();
    todo_remaining_class.offUpdate();

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

      notifyError.checkInput(newTodo);

      app_title_update_message.setNew(
        newTodo === "" ? "No tasks added" : "Task added"
      );
      app_title_update_message.setDefault();

      app_title_class.onUpdate();
      app_title_class.offUpdate();

      todo_remaining_class.onUpdate();
      todo_remaining_class.offUpdate();

      newTodo = "";
    }}
  >
    Add
  </Button>
  <Button
    class="clear"
    type="button"
    click={() => {
      app_title_update_message.setNew(
        $finished === 0
          ? "No tasks cleared"
          : $finished === 1
          ? "Task cleared"
          : `${$finished} tasks cleared`
      );
      app_title_update_message.setDefault();

      todos.clear();

      app_title_class.onUpdate();
      app_title_class.offUpdate();

      todo_remaining_class.onUpdate();
      todo_remaining_class.offUpdate();
    }}
  >
    Clear
  </Button>
</form>

<style lang="scss">
  @import "./Form.scss";
</style>
