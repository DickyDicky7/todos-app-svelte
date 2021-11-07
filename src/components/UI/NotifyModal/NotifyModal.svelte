<script>
  import Button from "../Button/Button.svelte";
</script>

<div class="backdrop" />
<div class="modal">
  <h2 class={$$props.class}>{$$props.title}</h2>
  <p>{$$props.content}</p>
  <Button class={$$props.class} click={$$props.click}>
    {$$props.buttonText}
  </Button>
</div>

<style type="text/scss">
  @import "./NotifyModal.scss";
</style>
