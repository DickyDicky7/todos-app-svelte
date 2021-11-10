const autoMessageHandler = (message, newMessage) => {
  message.setNew(newMessage);
  setTimeout(() => {
    message.setDefault();
  }, 2000);
};
export default autoMessageHandler;
