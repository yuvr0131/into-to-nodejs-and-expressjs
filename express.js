const express = require("express");
const app = express();

//creating routes
// syntax
//app.get(route,requestHandler)//requestHandler is a middleware
app.get("/", function (req, res) {
  res.send("mereee pyareeee anuuuuj");
});

app.get("/profile", function (req, res) {
  res.send("mera coach ");
});

app.listen(3000);
