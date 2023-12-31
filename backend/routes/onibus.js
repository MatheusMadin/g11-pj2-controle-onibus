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

router.get("/count", async function (req, res, next) {
  const onibus = await prisma.onibus.count()
  res.json(onibus);
});

router.get("/buscar/:id", async function (req, res, next) {
  const onibusId = parseInt(req.params.id);

  try {
    const onibus = await prisma.onibus.findUnique({
      where: {
        id: onibusId,
      },
    });

    if (onibus) {
      res.json(onibus);
    } else {
      res.status(404).json({ error: 'Onibus não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao buscar onibus por ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
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

router.put('/editar/:id', async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const { placa } = req.body;

    const onibusAtualizada = await prisma.onibus.update({
      where: {
        id: id,
      },
      data: {
        placa: placa,
      },
    });

    res.json(onibusAtualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a onibus.' });
  }
});

router.delete("/excluir/:id", async function (req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const onibusExcluida = await prisma.onibus.delete({
      where: {
        id: id,
      },
    });

    if (onibusExcluida) {
      res.json({ message: "Onibus excluída com sucesso." });
    } else {
      res.status(404).json({ error: "Onibus não encontrada." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir a onibus." });
  }
});

module.exports = router;
