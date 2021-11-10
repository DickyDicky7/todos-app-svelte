const activeStateHandler = state => {
  state.yes();
  setTimeout(() => {
    state.no();
  }, 1000);
};
export default activeStateHandler;
