<script>
  import Todo from "./components/Todo/Todo.svelte";
  import PageLoad from "./components/PageLoad/PageLoad.svelte";

  let pageIsLoaded = false;
  setTimeout(() => {
    pageIsLoaded = true;
  }, 3000);
</script>

<PageLoad {pageIsLoaded} />
<Todo />

<style>
</style>
