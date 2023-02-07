const express = require("express");
const logger = require("morgan");
const testModule = require("./testModule");
const wiki = require("./wiki.js");

const app = express();
const port = 3000;

const a_middleware_function = function (req, res, next) {
  console.log("Perform some middleware actions on every route...");
  next();
};

app.use(a_middleware_function);
app.use(logger("dev"));
app.use("/wiki", wiki);
app.use(express.static("public"));
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.static(500).send("Something broke!");
});

app.get("/", function (req, res) {
  testModule.test();
  res.send("TEST.");
});

app.all("/secret", function (req, res) {
  console.log("Do something for every route in /secret...");
});

app.use("/someroute", a_middleware_function);

app.listen(port, function () {
  console.log("Listening on port " + port);
});
