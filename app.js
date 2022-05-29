const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const htmlFolder = "html-pages";

app.use(express.static(__dirname));

app.route("/").get(function (req, res) {
  let options = {
    root: path.join(__dirname, htmlFolder),
  };
  res.sendFile("/index.html", options);
});

app.route("/palitra/").get(function (req, res) {
  let options = {
    root: path.join(__dirname, htmlFolder),
  };
  res.sendFile("/palitra.html", options);
});

app.route("/products/").get(function (req, res) {
  let options = {
    root: path.join(__dirname, htmlFolder),
  };
  res.sendFile("/productions.html", options);
});

app.route("/contacts/").get(function (req, res) {
  let options = {
    root: path.join(__dirname, htmlFolder),
  };
  res.sendFile("/contacts.html", options);
});

app.route("/calculator/").get(function (req, res) {
  let options = {
    root: path.join(__dirname, htmlFolder),
  };
  res.sendFile("/calculator.html", options);
});

app.route("/products/:product/").get(function (req, res) {
  let options = {
    root: path.join(__dirname, htmlFolder),
  };
  res.sendFile("/" + req.params.product + ".html", options);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
