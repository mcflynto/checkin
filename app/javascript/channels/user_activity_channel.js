import consumer from "./consumer";

consumer.subscriptions.create("UserActivityChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const selectedUser = document.getElementById(
      `user-id=${data.message[0].id}`
    );
    console.log(selectedUser);
    if (selectedUser) {
      selectedUser.innerHTML = data.message[0].status;
    }
  },
});
