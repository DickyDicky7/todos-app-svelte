<script>
  import Form from "./Form.svelte";
  import TodoList from "./TodoList.svelte";
  import NotifyModal from "../UI/NotifyModal/NotifyModal.svelte";
  import { remaining } from "../store/Todo/remaining_store";
  import { notifyError } from "../store/General/notify_error_store";
  import {
    app_title_class,
    todo_remaining_class,
  } from "../store/General/update_class_store";
  import { app_title_update_message } from "../store/General/update_message_store";
</script>

{#if $notifyError}
  <NotifyModal
    class="error"
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

<style type="text/scss">
  @import "./Todo.scss";
</style>
