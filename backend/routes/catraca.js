var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post('/embarque', async function (req, res, next) {
  try {
    const codigocartao = req.body.codigocartao
    const valorDaPassagem = 5
    // Verifica se passageiro existe
    const passageiro = await prisma.cliente.findFirst({
      where: { codigocartao: codigocartao }
    })
    if (!passageiro) {
      throw new Error('Cliente não encontrado');
    }

    // Verifica o Saldo
    if (passageiro.saldo < valorDaPassagem && passageiro.id !== 0) {
      res.status(402).json({ msg: "Saldo Insuficiente" })
    }
    // Cobra o Passageiro
    if (passageiro.id !== 0) {
      await prisma.cliente.update({
        where: { id: passageiro.id },
        data: { saldo: passageiro.saldo - valorDaPassagem, },
      })
    }
    const cliente_id = passageiro.id
    console.log(cliente_id);
    const embarque = await prisma.cliente_has_viagem.create({
      data: {
        cliente_id,
        viagem_id: 1,
        data: new Date().toDateString(),
        tarifa: valorDaPassagem,
      }
    });
    res.json(embarque)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar passageiro." });
  }
})
module.exports = router;
