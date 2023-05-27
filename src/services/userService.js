import axios from "axios";

const token = "token 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";
const inspectUserUrl = "/api/user/";
const duelUsersUrl = "/api/users/";

// Client side stuff

export const inspectUser = async (username = "andrew") => {
  // await response of fetch call
  let response = await fetch(inspectUserUrl + username);
  // only proceed once promise is resolved
  let data = await response.json();
  console.log(data);
  // only proceed once second promise is resolved
  return data;
};

export const duelUsers = async (user1 = "fabpot", user2 = "andrew") => {
  // await response of fetch call
  let response = await fetch(
    duelUsersUrl + `username=${user1}&username=${user2}`
  );
  // only proceed once promise is resolved
  let data = await response.json();
  console.log(data);
  // only proceed once second promise is resolved
  return data;
};

// Server side stuff

export const getUserAndRepos = (username) =>
  Promise.all([
    axios
      .get(`http://api.github.com/users/${username}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        return res.data;
      }),
    axios
      .get(`http://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => res.data),
  ]).then(([user, repos]) => userMapper(user, repos));

const onlyUnique = (array) => [...new Set(array)];

const isForker = (repos) =>
  repos.filter((repo) => repo.fork).length > repos.length / 2 ? "Forker" : "";

const isOneTrickPony = (repos) => {
  console.log(
    onlyUnique(repos.map((repo) => repo.language)).filter(
      (language) => language
    )
  );
  return onlyUnique(
    repos.map((repo) => repo.language).filter((language) => language)
  ).length === 1
    ? "One-Trick Pony"
    : "";
};

const isJackOfAllTrades = (repos) =>
  onlyUnique(repos.map((repo) => repo.language).filter((language) => language))
    .length >= 10
    ? "Jack of all Trades"
    : "";

const isStalker = (user) =>
  user.following > 0 && user.following > user.followers * 2 ? "Stalker" : "";

const isMrPopular = (user) =>
  user.followers > 0 && user.followers > user.following * 2
    ? "Mr. Popular"
    : "";

const languageTotals = (repos) =>
  repos
    .map((repo) => repo.language)
    .filter((language) => language)
    .reduce(
      (languageTotals, language) => ({
        ...languageTotals,
        [language]: languageTotals[language] ? languageTotals[language] + 1 : 1,
      }),
      {}
    );

const favoriteLanguage = (repos) => {
  if (repos.length > 0 && Object.keys(languageTotals(repos)).length > 0) {
    return Object.entries(languageTotals(repos)).sort(
      ([, a], [, b]) => b - a
    )[0][0];
  }
};

const totalStars = (repos) =>
  repos.reduce((total, repo) => total + repo["stargazers_count"], 0);

const highestStarred = (repos) =>
  repos.reduce(
    (highest, repo) =>
      highest > repo["stargazers_count"] ? highest : repo["stargazers_count"],
    0
  );

const perfectRepos = (repos) =>
  repos.reduce(
    (perfect, repo) => (repo["has_issues"] ? perfect + 1 : perfect),
    0
  );

const userMapper = (user, repos) => ({
  username: user.login,
  name: user.name,
  location: user.location,
  bio: user.bio,
  avatar_url: user["avatar_url"],
  titles: [
    isForker(repos),
    isOneTrickPony(repos),
    isJackOfAllTrades(repos),
    isStalker(user),
    isMrPopular(user),
  ].filter((title) => title),
  "favorite-language": favoriteLanguage(repos),
  "public-repos": user["public_repos"],
  "total-stars": totalStars(repos),
  "highest-starred": highestStarred(repos),
  "perfect-repos": perfectRepos(repos),
  followers: user.followers,
  following: user.following,
});

export default userMapper;
