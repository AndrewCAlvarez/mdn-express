const express = require("express");
const logger = require("morgan");
const testModule = require("./testModule");
const wiki = require("./wiki.js");

const app = express();
const port = 3000;

app.use(logger("dev"));
app.use("/wiki", wiki);

app.get("/", function (req, res) {
  testModule.test();
  res.send("TEST.");
});

app.listen(port, function () {
  console.log("Listening on port " + port);
});
