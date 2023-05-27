import { getUserAndRepos } from "@/services/userService";

export default async function handler(req, res) {
  const { username } = req.query;
  getUserAndRepos(username)
    .then((user) => res.json(user))
    .catch((error) => {
      res.status(error.response.status);
      res.json(error.response.data);
    });
}
