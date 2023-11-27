var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("catraca/index");
});

router.get("/confirma", function (req, res, next) {
  res.render("catraca/confirma");
});

router.get("/negado", function (req, res, next) {
  res.render("catraca/negado");
});


module.exports = router;