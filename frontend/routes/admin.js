var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("admin/index");
});

//---COMEÇO ROTAS DE LINHAS---
router.get("/linha", function (req, res, next) {
    res.render("admin/linha/index");
});

router.get("/linha/cadastar", function (req, res, next) {
    res.render("admin/linha/cadastrar");
  });
//---FIM DA ROTAS DE LINHAS---


//---COMEÇO DE MOTORISTAS---
//---FIM DE MOTORISTAS---


//---COMEÇO DE ONIBUS---
router.get("/onibus", function (req, res, next) {
  res.render("admin/onibus/index");
});

router.get("/onibus/cadastrar", function (req, res, next) {
  res.render("admin/onibus/cadastrar");
});
//---FIM DE ONIBUS---

module.exports = router;