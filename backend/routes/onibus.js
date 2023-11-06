var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const onibus = await prisma.onibus.findMany();
    res.json(onibus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao obter os dados dos ônibus." });
  }
});

router.get("/listar", async function (req, res, next) {
  const onibus = await prisma.onibus.findMany();
  res.json(onibus);
});

router.post("/cadastrar", async (req, res, next) => {
  try {
    const { placa } = req.body;

    const novoOnibus = await prisma.onibus.create({
      data: {
        placa
      },
    });

    res.json(novoOnibus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar onibus." });
  }
});


module.exports = router;
