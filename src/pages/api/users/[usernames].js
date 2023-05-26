import { getUserAndRepos } from "@/services/userService";

/* /api/users/username=${user1}&username=${user2} */

export default async function handler(req, res) {
  const { usernames } = req.query; // `username=${user1}&username=${user2}`
  const usernamesArray = [];
  const prefix = "username=";
  let startIndex = usernames.indexOf(prefix);

  while (startIndex !== -1) {
    // Get substring after "username="
    const substring = usernames.substring(startIndex + prefix.length);

    // Extract content before "&" and push to array
    const endIndex = substring.indexOf("&");
    const username =
      endIndex !== -1 ? substring.substring(0, endIndex) : substring;
    usernamesArray.push(username);

    // Find next occurrence of "username="
    startIndex = usernames.indexOf(prefix, startIndex + 1);
  }

  if (usernamesArray.length > 1) {
    Promise.all(usernamesArray.map((username) => getUserAndRepos(username)))
      .then((users) => res.json(users))
      .catch((error) => {
        res.status(error.response.status);
        res.json(error.response.data);
      });
  } else if (usernamesArray.length === 1) {
    getUserAndRepos(usernamesArray[0])
      .then((user) => res.json(user))
      .catch((error) => {
        res.status(error.response.status);
        res.json(error.response.data);
      });
  } else {
    console.log("Something went wrong: No usernames found in query");
  }
}
