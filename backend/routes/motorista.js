var express = require("express");
var router = express.Router();
const upload = require("../middlewares/fileUpload.js");
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

router.get("/listar", async function (req, res, next) {
  const motorista = await prisma.motorista.findMany();
  res.json(motorista);
});

router.get("/count", async function (req, res, next) {
  const motorista = await prisma.motorista.count()
  res.json(motorista);
});

router.get("/buscar/:id", async function (req, res, next) {
  const motoristaId = parseInt(req.params.id);

  try {
    const motorista = await prisma.motorista.findUnique({
      where: {
        id: motoristaId,
      },
    });

    if (motorista) {
      res.json(motorista);
    } else {
      res.status(404).json({ error: 'Motorista não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar motorista por ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.post("/cadastrar", upload.single("foto"), async (req, res, next) => {
  try {
    const nome = req.body.nome;
    const foto = req.file?.path;

    const data = { nome, foto };
    const motorista = await prisma.motorista.create({ data });

    res.json(motorista);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar onibus." });
  }
});

router.put("/editar/:id", upload.single("foto"), async (req, res) => {
  try {
    const { id } = req.params;
    const nome = req.body.nome || null;
    const foto = req.file?.path;

    const data = { nome, foto };

    const motorista = await prisma.motorista.update({
      where: { id: parseInt(id) },
      data
    });

    res.json({ motorista });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao editar o motorista." });
  }
});

router.delete("/excluir/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.motorista.delete({
      where: { id: parseInt(id) }
    });

    res.json({ mensagem: "Motorista deletado com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao deletar o motorista." });
  }
});

module.exports = router;
