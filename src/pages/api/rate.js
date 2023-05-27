import axios from "axios";

const token = process.env.TOKEN;

export default async function handler(req, res) {
  if (!token) {
    res.send("No token found");
    return;
  }
  axios
    .get(`http://api.github.com/rate_limit`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => res.json(data));
}
