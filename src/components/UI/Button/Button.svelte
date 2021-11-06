<script>
</script>

<button
  class={$$props.class}
  type={$$props.type}
  on:click|preventDefault={$$props.click}
>
  <slot />
</button>

<style>
  button {
    width: 100px;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0 10px 0 10px;
    outline: none;
  }

  .add {
    /* grid-area: add; */
    position: relative;
    border-width: 0 0 0 3px;
    border-left: solid #6aab9c;
    background: #fff;
    color: #6aab9c;
    font-size: 1rem;
    transition: 0.25s;
    z-index: 1;
  }

  .add::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #6aab9c;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.25s;
    z-index: -1;
  }

  .add:hover {
    color: #fff;
    transition: 0.25s;
  }

  .add:hover::before {
    transform: scaleX(100%);
    transition: 0.25s;
  }

  .clear {
    /* grid-area: clear; */
    position: relative;
    border-width: 0 0 0 3px;
    border-left: solid #e06c78;
    background: #fff;
    color: #e06c78;
    font-size: 1rem;
    transition: 0.25s;
    z-index: 1;
  }

  .clear::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #e06c78;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.25s;
    z-index: -1;
  }

  .clear:hover {
    color: #fff;
    transition: 0.25s;
  }

  .clear:hover::before {
    transform: scaleX(100%);
    transition: 0.25s;
  }

  .got_it {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1rem;
    border-radius: 30px;

    border: 3px solid #e06c78;
    background: #e06c78;
    color: #fff;
    transition: 0.25s;
  }

  .got_it:hover {
    background: #fff;
    color: #e06c78;
  }
</style>
