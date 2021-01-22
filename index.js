const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/people", (req, res) => {
  res.sendFile(__dirname + "/static/people.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/static/about.html");
});

app.get("/style1.css", (req, res) => {
  res.sendFile(__dirname + "/static/style1.css");
});


app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "/style.css");
});

app.listen(3000);
console.log("Server on port 3000");
