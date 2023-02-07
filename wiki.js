const express = require("express");
const router = express.Router();

// Home page route
router.get("/", function (req, res) {
  res.send("Welcome to the wiki homepage.");
});

// About page route
router.get("/about", function (req, res) {
  res.send("This is the wiki about page.");
});

module.exports = router;
