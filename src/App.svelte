<script>
  import Todo from "./components/Todo/Todo.svelte";
  import PageLoad from "./components/PageLoad/PageLoad.svelte";
  import Login from "./components/PageLogin&Logout/Login/Login.svelte";
  import { login_permission } from "./components/store/PageLogin&Logout/Login/login_permisson.store";

  let pageIsLoaded = false;
  setTimeout(() => {
    pageIsLoaded = true;
  }, 3000);

  const component = [Login, PageLoad, Todo];
</script>

{#if $login_permission}
  <Todo />
{:else}
  <PageLoad {pageIsLoaded} />
  <Login />
{/if}

<style>
</style>
