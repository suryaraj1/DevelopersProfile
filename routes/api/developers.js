const express = require("express");
const router = express.Router();
const API_URL = "https://api.github.com/users/";

const developers = [];

router.get("/", (req, res) => {
  return res.status(200).send(developers);
});

module.exports = router;
