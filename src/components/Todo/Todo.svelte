<script>
  import Form from "./TodoForm.svelte";
  import TodoList from "./TodoList.svelte";
  import Navigation from "./Navigation.svelte";
  import TodosFilter from "./TodosFilter.svelte";
  import NotifyModal from "../UI/NotifyModal/NotifyModal.svelte";
  import { remaining } from "../store/Todo/remaining_store";
  import { error } from "../store/General/error_store";
  import { notify } from "../store/General/notify_store";
  import {
    appTitleState,
    todoRemainingState,
  } from "../store/General/active_state_store";
  import { appTitleMessage } from "../store/General/message_store";
</script>

{#if $notify.popUp && $notify.type === "eInput"}
  <NotifyModal
    class="error"
    title="Hey, hey, hey!"
    content="You cannot leave the form blank, please put something there..."
    buttonText="Got it!"
    click={() => {
      error.continue();
    }}
  />
{/if}

<div id="todo_board">
  <TodosFilter />
  <span class="app_title" class:active={$appTitleState}>
    {$appTitleMessage}
  </span>
  <Form />
  <TodoList />
  <span class="todo_remaining" class:active={$todoRemainingState}>
    {$remaining === 0
      ? `Seems like there aren't any tasks left.`
      : $remaining === 1
      ? `There is ${$remaining} remaining task`
      : `There are ${$remaining} remaining tasks`}
  </span>
  <Navigation />
</div>

<style lang="scss">
  @import "./Todo.scss";
</style>
