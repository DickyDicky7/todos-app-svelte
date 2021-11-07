<script>
</script>

<button
  class={$$props.class}
  type={$$props.type}
  on:click|preventDefault={$$props.click}
>
  <slot />
</button>

<style type="text/scss">
  @import "./Button.scss";
</style>
