<script>
  import Button from "../../UI/Button/Button.svelte";
  import { open_title_class } from "../../store/General/update_class_store";
  import { open_title_update_message } from "../../store/General/update_message_store";
  import { notifyError } from "../../store/General/notify_error_store";
  import { notifySuccess_login } from "../../store/General/notify_success_store";
  import { login_permission } from "../../store/PageLogin&Logout/Login/login_permisson.store";

  let newUsername = "";
  let newPassword = "";
</script>

<form
  on:submit|preventDefault={() => {
    notifyError.checkInput(newUsername.trim() && newPassword.trim());
    notifySuccess_login.checkInput(newUsername.trim() && newPassword.trim());
    login_permission.ok($notifySuccess_login);

    newUsername = "";
    newPassword = "";
  }}
>
  <h2 class={$open_title_class}>{$open_title_update_message}</h2>
  <label for="username">Username</label>
  <input
    type="text"
    bind:value={newUsername}
    id="username"
    placeholder="Enter username..."
    on:focus|preventDefault={() => {
      open_title_update_message.setNew("What is your username?");

      open_title_class.onUpdate();
      open_title_class.offUpdate();
    }}
    on:focusout|preventDefault={() => {
      open_title_update_message.setNew("Welcome");

      open_title_class.onUpdate();
      open_title_class.offUpdate();
    }}
  />
  <label for="password">Password</label>
  <input
    type="password"
    bind:value={newPassword}
    id="password"
    placeholder="Enter password..."
    on:focus|preventDefault={() => {
      open_title_update_message.setNew("What is your password?");

      open_title_class.onUpdate();
      open_title_class.offUpdate();
    }}
    on:focusout|preventDefault={() => {
      open_title_update_message.setNew("Welcome");

      open_title_class.onUpdate();
      open_title_class.offUpdate();
    }}
  />
  <Button
    class="login"
    type="button"
    click={() => {
      notifyError.checkInput(newUsername.trim() && newPassword.trim());
      notifySuccess_login.checkInput(newUsername.trim() && newPassword.trim());
      login_permission.ok($notifySuccess_login);

      newUsername = "";
      newPassword = "";
    }}
  >
    Login
  </Button>
</form>

<style type="text/scss">
  @import "./LoginForm.scss";
</style>
