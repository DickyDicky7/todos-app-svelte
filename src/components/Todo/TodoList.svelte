<script>
  import { todos } from "../store/Todo/todos_store";
</script>

<ul>
  {#each $todos as todo (todo.id)}
    <li>
      <input
        type="checkbox"
        bind:checked={todo.done}
        on:change={todos.update}
      />
      <div class="container">
        <textarea type="text" bind:value={todo.text} />
        <span class="bottom-underline" />
      </div>
    </li>
  {/each}
</ul>

<style type="text/scss">
  @import "./TodoList.scss";
</style>
