<script>
  import { navigationState } from "../store/General/active_state_store";
  import Button from "../UI/Button/Button.svelte";
  import toggleStateHandler from "../handler/toggleStateHandler";
  import permissionHandler from "../handler/permissionHandler";
</script>

<div class="navigation" class:active={$navigationState}>
  <Button
    class="toggle-navigation"
    type="button"
    click={() => {
      toggleStateHandler(navigationState);
    }}
  />
  <Button
    class="logout"
    type="button"
    click={() => {
      permissionHandler(false);
    }}
  >
    Logout
  </Button>
</div>

<style lang="scss">
  @import "./Navigation.scss";
</style>
