//fs module

/*const fs = require("fs");
fs.appendFile("hey.txt", "i am good what about u", function (err) {
  if (err) console.log(err);
  else console.log("done");
});*/

/*const fs = require("fs");
fs.rename("hey.txt", "hello.txt", function (err) {
  if (err) console.log(err);
  else console.log("done");
});*/

/*const fs = require("fs");
fs.copyFile("hello.txt", "./copy/chacha.txt", function (err) {
  if (err) console.log(err);
  else console.log("done");
});*/

/*const fs = require("fs");
fs.unlink("hello.txt", function (err) {
  if (err) console.err(err);
  else console.log("removed");
});*/

const fs = require("fs");
fs.rmdir("./copy", { recursive: true }, function (err) {
  if (err) console.error(err);
  else console.log("removed");
});
