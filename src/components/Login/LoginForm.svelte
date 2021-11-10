<script>
  import Button from "../UI/Button/Button.svelte";
  import { openTitleState } from "../store/General/active_state_store";
  import { openTitleMessage } from "../store/General/message_store";
  import { error } from "../store/General/error_store";
  import { success } from "../store/General/success_store";
  import activeStateHandler from "../handler/activeStateHandler";
  import manualMessageHandler from "../handler/manualMessageHandler";
  import permissionHandler from "../handler/permissionHandler";

  let newUsername = "";
  let newPassword = "";
</script>

<form
  on:submit|preventDefault={() => {
    error.checkInput(newUsername.trim() && newPassword.trim());
    success.checkInput(newUsername.trim() && newPassword.trim());
    permissionHandler(newUsername.trim() && newPassword.trim());
    newUsername = "";
    newPassword = "";
  }}
>
  <h2 class="open_title" class:active={$openTitleState}>
    {$openTitleMessage}
  </h2>
  <label for="username">Username</label>
  <input
    type="text"
    bind:value={newUsername}
    id="username"
    placeholder="Enter username..."
    on:focus|preventDefault={() => {
      manualMessageHandler(openTitleMessage, "What is your username?");
      activeStateHandler(openTitleState);
    }}
    on:focusout|preventDefault={() => {
      manualMessageHandler(openTitleMessage, "Welcome");
      activeStateHandler(openTitleState);
    }}
  />
  <label for="password">Password</label>
  <input
    type="password"
    bind:value={newPassword}
    id="password"
    placeholder="Enter password..."
    on:focus|preventDefault={() => {
      manualMessageHandler(openTitleMessage, "What is your password?");
      activeStateHandler(openTitleState);
    }}
    on:focusout|preventDefault={() => {
      manualMessageHandler(openTitleMessage, "Welcome");
      activeStateHandler(openTitleState);
    }}
  />
  <Button
    class="login"
    type="button"
    click={() => {
      error.checkInput(newUsername.trim() && newPassword.trim());
      success.checkInput(newUsername.trim() && newPassword.trim());
      permissionHandler(newUsername.trim() && newPassword.trim());
      newUsername = "";
      newPassword = "";
    }}
  >
    Login
  </Button>
</form>

<style lang="scss">
  @import "./LoginForm.scss";
</style>
