var express = require("express");
var router = express.Router();
const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const motoristas = await prisma.motorista.findMany();
    res.json(motoristas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao obter os dados dos motoristas." });
  }
});

router.get("/count", async function (req, res, next) {
  const motorista = await prisma.motorista.count()
  res.json(motorista);
});

module.exports = router;
