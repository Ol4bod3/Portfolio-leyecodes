const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

var port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname + "/views/pages")));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.listen(port, () => {
  console.log(`am running on port  port ${port}`);
});
