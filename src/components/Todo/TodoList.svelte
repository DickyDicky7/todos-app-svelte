<script>
  import { todos } from "../store/Todo/todos_store";
  import { filtered } from "../store/Todo/filtered";
</script>

<ul>
  {#each $filtered as todo (todo.id)}
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

<style lang="scss">
  @import "./TodoList.scss";
</style>
