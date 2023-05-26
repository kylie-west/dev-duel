export const getErrorMsg = (err) => {
  if (
    err === "You forgot to enter a username!" ||
    err === "You have to enter both usernames to duel."
  ) {
    return err;
  } else if (err === "Not Found") {
    return "User(s) not found :(";
  } else {
    return "Username is invalid. Try something else.";
  }
};
