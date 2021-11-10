<script>
  import { dayOpts } from "../store/Todo/day_options_store";
  import { selection } from "../store/Todo/filtered";
</script>

<select
  on:change={selection.set($selection)}
  bind:value={$selection}
  name="days"
  id="days"
>
  <option value="All">All</option>
  {#each $dayOpts as dayOpt}
    <option value={dayOpt}>{dayOpt}</option>
  {/each}
</select>

<style lang="scss">
  @import "./TodosFilter.scss";
</style>
