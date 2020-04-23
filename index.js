var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");

var bodyParser = require("body-parser");

var userRoute = require("./routes/user.route");
var authRoute = require("./routes/login.route");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser("12312314asdasdasdasdas"));

app.get("/", function (req, res) {
  res.render("index");
});

app.use("/users", userRoute);
app.use("/auth", authRoute);

app.listen(3000, function () {
  console.log("Hey men, server listening on port 3000");
});
