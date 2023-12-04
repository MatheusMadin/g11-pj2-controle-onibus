var express = require("express");
var router = express.Router();
const upload = require("../middlewares/fileUpload.js");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const fs = require('fs');
const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const usuario = await prisma.usuario.findMany();
    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao obter os dados dos motoristas." });
  }
});

router.get("/listar", async function (req, res, next) {
  const usuario = await prisma.usuario.findMany();
  res.json(usuario);
});

router.get("/buscar/:id", async function (req, res, next) {
  const usuarioId = parseInt(req.params.id);

  try {
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: usuarioId,
      },
    });

    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao buscar usuario por ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

router.post("/cadastrar", upload.single("foto"), async (req, res, next) => {
  try {
    console.log(req.body.senha)
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = await bcrypt.hash(req.body.senha, 10)
    const foto = req.file?.path;

    const data = { nome, email, senha, foto };
    const usuario = await prisma.usuario.create({ data });

    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuario." });
  }
});

router.post("/editar", upload.single("foto"), async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const nome = req.body.nome;
    const email = req.body.email;
    const foto = req.file?.path;

    const data = { nome, email, senha, foto };
    const usuario = await prisma.usuario.update({
      where: { id: id },
      data
    });

    res.json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar usuario." });
  }
});

router.delete("/excluir/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const usuario = await prisma.usuario.findUnique({
      where: { id: id }
    });

    fs.unlinkSync(usuario.foto)

    await prisma.usuario.delete({
      where: { id: id }
    });

    res.json({ mensagem: "Usuario deletado com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao deletar o usuario." });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const email = req.body.email;
    const senha = req.body.senha;
    const usuario = await prisma.usuario.findFirst({
      where: {
        email: email
      }
    });

    if (!usuario) {
      return res.status(401).json({ success: false, msg: 'Credenciais inválidasa.' })
    }
    console.log(senha)
    
    const validaSenha = await bcrypt.compare(senha, usuario.senha)
    if (!validaSenha) {
      return res.status(401).json({ success: false, msg: 'Credenciais inválidas.' })
    }

    const token = jwt.sign({ id: usuario.id }, process.env.SECRET, { expiresIn: '8h' });
    return res.json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao logar no usuario." });
  }
});

module.exports = router;