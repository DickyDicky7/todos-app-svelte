<script>
  import Todo from "./components/Todo/Todo.svelte";
  import PageLoad from "./components/PageLoad/PageLoad.svelte";
  import Login from "./components/Login/Login.svelte";
  import { permission } from "./components/store/Login/permisson.store";

  let pageIsLoaded = false;
  setTimeout(() => {
    pageIsLoaded = true;
  }, 3000);

  const component = [Login, PageLoad, Todo];
</script>

{#if $permission}
  <Todo />
{:else}
  <PageLoad {pageIsLoaded} />
  <Login />
{/if}

<style>
</style>
