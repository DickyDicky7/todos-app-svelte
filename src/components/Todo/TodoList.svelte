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

<style>
  ul {
    display: grid;
    gap: 30px 0;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 1rem 1rem;
    font-size: 1.5rem;
  }

  ul li {
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  ul li input[type="checkbox"] {
    appearance: none;
    border: 3px solid #384e78;
    margin: 0 10px 0 0;
    position: relative;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  ul li input[type="checkbox"]:checked::before {
    content: "";
    position: absolute;
    bottom: 12%;
    left: 50%;
    width: 5px;
    height: 20px;
    border: solid #6aab9c;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  ul li textarea[type="text"] {
    background: #fff;
    color: #384e78;
    border: none;
    outline: none;
    min-width: 250px;
    max-height: 50px;
    text-align: center;
    font-weight: bold;
    font-size: 0.9rem;
  }

  ul li textarea[type="text"]::-webkit-scrollbar {
    width: 3px;
  }

  ul li textarea[type="text"]::-webkit-scrollbar-thumb {
    width: 6px;
    height: 6px;
    background: #384e78;
    border-radius: 50%;
  }

  ul li textarea[type="text"]::-webkit-scrollbar-track {
    background: #fff;
  }

  /* ul li textarea[type="text"]:focus {
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
  } */

  ul li .container {
    position: relative;
    max-height: 53px;
    z-index: 0;
  }

  ul li .container .bottom-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #384e78;
    transform: scaleX(0);
    transform-origin: center;
    transition: 0.25s;
    z-index: 1;
  }

  ul li .container:hover .bottom-underline {
    transform: scaleX(1);
    transition: 0.25s 0.25s;
  }
</style>
