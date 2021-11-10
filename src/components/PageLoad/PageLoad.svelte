<script></script>

<div class={`page_load ${$$props.pageIsLoaded ? "end_load" : "still_load"}`} />

<style>
  .page_load {
    width: 100vw;
    height: 100vh;
    position: fixed;
    user-select: none;
  }

  .page_load.still_load {
    background: #5874dc;
    z-index: 9999;
  }

  .page_load.end_load {
    animation: slide-out-bottom 6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  @keyframes slide-out-bottom {
    0% {
      z-index: 9999;
      background: #5874dc;
      transform: translateY(0);
      /* opacity: 1; */
    }
    100% {
      background: #5874dc;
      transform: translateY(9999px);
      /* opacity: 0; */
    }
  }
</style>
