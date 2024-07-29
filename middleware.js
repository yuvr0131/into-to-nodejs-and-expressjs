const express = require("express");
const app = express();

//middleware
app.use(function (req, res, next) {
  console.log("middleware chala");
  next();
});
app.use(function (req, res, next) {
  console.log("middleware chala ek aur baar");
  next();
});
//route
app.get("/", function (req, res) {
  res.send("mere pyaare anuj");
});
app.get("/about", function (req, res, next) {
  return next(new Error("something went wrong"));
});

//error handling everytime put it in last
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.listen(3000);
