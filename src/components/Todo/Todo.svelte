<script>
  import Form from "./Form.svelte";
  import TodoList from "./TodoList.svelte";
  import NotifyModal from "../UI/NotifyModal/NotifyModal.svelte";
  import { remaining } from "../store/Todo/remaining_store";
  import { notifyError } from "../store/Todo/notify_error_store";
  import {
    app_title_class,
    todo_remaining_class,
  } from "../store/Todo/update_class_store";
  import { app_title_update_message } from "../store/Todo/update_message_store";
</script>

{#if $notifyError}
  <NotifyModal
    class="got_it"
    title="Hey, hey, hey!"
    content="You cannot leave the form blank, please put something there..."
    buttonText="Got it!"
    click={() => {
      notifyError.continue();
    }}
  />
{/if}

<div id="todo_board">
  <span class={$app_title_class}>{$app_title_update_message}</span>
  <Form />
  <TodoList />
  <span class={$todo_remaining_class}>
    {$remaining === 0
      ? `Seems like there aren't any tasks left.`
      : $remaining === 1
      ? `There is ${$remaining} remaining task`
      : `There are ${$remaining} remaining tasks`}
  </span>
</div>

<style>
  #todo_board {
    padding: 20px 20px;
  }

  #todo_board .app_title {
    position: relative;
    display: block;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    width: 300px;
    padding: 0.5rem;
    border-width: 0 3px 0 3px;
    border-left: solid #fa9284;
    border-right: solid #fa9284;
    color: #fa9284;
    background: #fff;
    transition: 0.25s 0.75s;
    z-index: 1;
  }

  #todo_board .app_title::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: #fa9284;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: center;
    transition: 0.25s 0.75s;
    z-index: -1;
  }

  #todo_board .app_title.update {
    color: #fff;
    transition: 0.25s 0.75s;
  }

  #todo_board .app_title.update::before {
    transform: scaleX(100%);
    transition: 0.25s 0.75s;
  }

  #todo_board .todo_remaining {
    position: relative;
    display: block;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    width: 300px;
    padding: 0.5rem;
    border-width: 0 3px 0 3px;
    border-left: solid #fa9284;
    border-right: solid #fa9284;
    color: #fa9284;
    background: #fff;
    transition: 0.25s;
    z-index: 1;
  }

  #todo_board .todo_remaining::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: #fa9284;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: center;
    transition: 0.25s;
    z-index: -1;
  }

  #todo_board .todo_remaining.update {
    color: #fff;
    transition: 0.25s;
  }

  #todo_board .todo_remaining.update::before {
    transform: scaleX(100%);
    transition: 0.25s;
  }
</style>
