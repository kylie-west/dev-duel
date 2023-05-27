const token = "token" + " " + process.env.TOKEN;

export default async function handler(req, res) {
  fetch("http://api.github.com/rate_limit", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}
