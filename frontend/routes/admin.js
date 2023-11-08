var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("admin/index");
});

//---COMEÇO DE LINHAS---
router.get("/linha", function (req, res, next) {
  res.render("admin/linha/index");
});

router.get("/linha/cadastrar", function (req, res, next) {
  res.render("admin/linha/cadastrar");
});

router.get("/linha/exibir/:id", function (req, res, next) {
  res.render("admin/linha/exibir");
});

router.get("/linha/editar/:id", function (req, res, next) {
  res.render("admin/linha/editar");
});

router.get("/linha/excluir/:id", function (req, res, next) {
  res.render("admin/linha/excluir");
});
//---FIM DE LINHAS---


//---COMEÇO DE MOTORISTAS---
router.get("/motorista", function (req, res, next) {
  res.render("admin/motorista/index");
});

router.get("/motorista/cadastrar", function (req, res, next) {
  res.render("admin/motorista/cadastrar");
});

router.get("/motorista/exibir/:id", function (req, res, next) {
  res.render("admin/motorista/exibir");
});

router.get("/motorista/editar/:id", function (req, res, next) {
  res.render("admin/motorista/editar");
});

router.get("/motorista/excluir/:id", function (req, res, next) {
  res.render("admin/motorista/excluir");
});
//---FIM DE MOTORISTAS---

//---COMEÇO DE PASSAGEIROS---
router.get("/passageiro", function (req, res, next) {
  res.render("admin/passageiro/index");
});

router.get("/passageiro/cadastrar", function (req, res, next) {
  res.render("admin/passageiro/cadastrar");
});

router.get("/passageiro/exibir/:id", function (req, res, next) {
  res.render("admin/passageiro/exibir");
});

router.get("/passageiro/editar/:id", function (req, res, next) {
  res.render("admin/passageiro/editar");
});

router.get("/passageiro/excluir/:id", function (req, res, next) {
  res.render("admin/passageiro/excluir");
});
//---FIM DE MOTORISTAS---

//---COMEÇO DE ONIBUS---
router.get("/onibus", function (req, res, next) {
  res.render("admin/onibus/index");
});

router.get("/onibus/cadastrar", function (req, res, next) {
  res.render("admin/onibus/cadastrar");
});

router.get("/onibus/exibir/:id", function (req, res, next) {
  res.render("admin/onibus/exibir");
});

router.get("/onibus/editar/:id", function (req, res, next) {
  res.render("admin/onibus/editar");
});

router.get("/onibus/excluir/:id", function (req, res, next) {
  res.render("admin/onibus/excluir");
});

//---FIM DE ONIBUS---

module.exports = router;