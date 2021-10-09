const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/list", function (req, res) {
  res.render("list");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(3000, function (req, res) {
  console.log("Server running");
});
