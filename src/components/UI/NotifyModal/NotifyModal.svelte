<script>
  import Button from "../Button/Button.svelte";
</script>

<div class="backdrop" />
<div class="modal">
  <h2>{$$props.title}</h2>
  <p>{$$props.content}</p>
  <Button class={$$props.class} click={$$props.click}>
    {$$props.buttonText}
  </Button>
</div>

<style>
  .backdrop {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .modal {
    width: calc(100% - 100px);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  .modal h2 {
    padding: 0.5rem 1.2rem;
    font-size: 2rem;
    background: #e06c78;
    color: #fff;
    border-radius: 30px 30px 0 0;
  }

  .modal p {
    padding: 2rem 1.2rem;
    font-size: 1.2rem;
    background: #fff;
    color: #384e78;
    border-radius: 0 0 30px 30px;
  }
</style>
