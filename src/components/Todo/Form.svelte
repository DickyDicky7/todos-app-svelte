<script>
  import Button from "../UI/Button/Button.svelte";
  import { todos } from "../store/Todo/todos_store";
  import { notifyError } from "../store/Todo/notify_error_store";
  import {
    app_title_class,
    todo_remaining_class,
  } from "../store/Todo/update_class_store";
  import { finished } from "../store/Todo/finished_store";
  import { app_title_update_message } from "../store/Todo/update_message_store";

  let newTodo = "";
</script>

<form
  on:submit|preventDefault={() => {
    todos.add({
      id: String(Math.random()),
      done: false,
      text: newTodo,
    });

    notifyError.test({
      text: newTodo,
    });

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

      notifyError.test({
        text: newTodo,
      });

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

<style>
  form {
    /* display: grid;
    grid-template-areas: 
    'input input'
    'add clear'; */
    display: flex;
    margin: 20px 0;
  }

  form input {
    /* grid-area: input; */
    width: 100%;
    flex-wrap: wrap;
    margin-right: 10px;

    border: 3px solid #384e78;
    outline: none;
    /* transition: 0.25s; */
    color: #384e78;
    font-size: 1rem;
    font-weight: bold;
  }

  /* form input:hover {
    border: 3px solid white;
  } */

  form input:focus {
    border: 3px solid #fff;
  }

  /* form .add {
    grid-area: add;
  } */

  /* form .clear {
    grid-area: clear;
  } */
</style>
