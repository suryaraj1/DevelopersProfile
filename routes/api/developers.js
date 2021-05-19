const express = require("express");
const router = express.Router();
const axios = require("axios");
const chalk = require("chalk");
const API_URL = "https://api.github.com/users/";

// keep storage as a map
const developers = {};

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {
  const isPresent = developers[req.params.id];
  if (isPresent)
    return res.status(200).send({
      user: developers[req.params.id],
    });
  else
    return res.status(404).send({
      msg: "User does not exist",
    });
});

router.post("/", (req, res) => {
  const { github_id } = req.body;
  const user = req.body;
  user.id = github_id;
  const githubURL = API_URL + github_id;
  axios
    .get(githubURL)
    .then(response => {
      if (response.status === 404) {
        return res.status(404).send({
          msg: "Github username is invalid",
        });
      }
      const { avatar_url, name, company, blog, location, email, bio } =
        response.data;
      user.avatar_url = avatar_url;
      user.name = name;
      user.company = company;
      user.blog = blog;
      user.location = location;
      user.email = email;
      user.bio = bio;
      return response.data.repos_url;
    })
    .then(repos => {
      axios
        .get(repos)
        .then(response => {
          const reposList = response.data.map(repo => {
            const { name, html_url, description, updated_at } = repo;
            return {
              name,
              html_url,
              description,
              updated_at,
            };
          });
          user.repos = reposList;
          developers[user.id] = user;
          return res.status(201).send({
            id: user.github_id,
          });
        })
        .catch(err => console.log(chalk.red(err)));
    })
    .catch(err => console.log(chalk.red(err)));
});

module.exports = router;
