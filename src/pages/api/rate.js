import axios from "axios";

const token = "token" + " " + process.env.TOKEN;

export default async function handler(req, res) {
  if (!token) {
    res.send("No token found");
    return;
  }
  axios
    .get(`http://api.github.com/rate_limit`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
    .then(({ data }) => res.json(data));
}
