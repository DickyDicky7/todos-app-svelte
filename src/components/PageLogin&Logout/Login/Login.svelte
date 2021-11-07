<script>
  import LoginForm from "./LoginForm.svelte";
  import NotifyModal from "../../UI/NotifyModal/NotifyModal.svelte";
  import { notifyError } from "../../store/General/notify_error_store";
  import { notifySuccess_login } from "../../store/General/notify_success_store";
</script>

{#if $notifyError}
  <NotifyModal
    class="error"
    title="Oops!... Something went wrong"
    content="Account not found or wrong username and password, please check again..."
    buttonText="Got it!"
    click={() => {
      notifyError.continue();
    }}
  />
{/if}

{#if $notifySuccess_login}
  <NotifyModal
    class="success"
    title="Login successful"
    content="Please wait..."
    buttonText="Got it!"
    click={() => {
      notifySuccess_login.continue();
    }}
  />
{/if}

<div id="login_board">
  <LoginForm />
</div>

<style type="text/scss">
  @import "./Login.scss";
</style>
