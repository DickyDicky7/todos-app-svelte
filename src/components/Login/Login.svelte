<script>
  import LoginForm from "./LoginForm.svelte";
  import NotifyModal from "../UI/NotifyModal/NotifyModal.svelte";
  import { notify } from "../store/General/notify_store";
  import { error } from "../store/General/error_store";
  import { success } from "../store/General/success_store";
</script>

{#if $notify.popUp && $notify.type === "eInput"}
  <NotifyModal
    class="error"
    title="Oops!... Something went wrong"
    content="Account not found or wrong username and password, please check again..."
    buttonText="Got it!"
    click={() => {
      error.continue();
    }}
  />
{/if}

{#if $notify.popUp && $notify.type === "sInput"}
  <NotifyModal
    class="success"
    title="Login successful!"
    content="Please wait..."
    buttonText="Got it!"
    click={() => {
      success.continue();
    }}
  />
{/if}

<div id="login_board">
  <LoginForm />
</div>

<style lang="scss">
  @import "./Login.scss";
</style>
