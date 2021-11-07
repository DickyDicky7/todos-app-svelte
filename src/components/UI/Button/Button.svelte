<script>
</script>

<button
  class={$$props.class}
  type={$$props.type}
  on:click|preventDefault={$$props.click}
>
  <slot />
</button>

<style lang="scss">
  @import "./Button.scss";
</style>
