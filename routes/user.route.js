var express = require("express");
var router = express.Router();

var controller = require("../controllers/user.controller");
var authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware.requireAuth, controller.index);

router.get("/cookie", function (req, res, next) {
  res.cookie("user-id", 12345);
  res.send("hello");
});

router.get("/search", controller.search);

router.get("/create", controller.create);

router.get("/:id", controller.view);

router.post("/create", controller.postCreate);

module.exports = router;
