var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post('/validar', async function (req, res, next) {
  try {
    const codigocartao = req.body.codigocartao
    const passageiro = await prisma.cliente.findFirst({
      where: { codigocartao: codigocartao }
    })
    if (!passageiro) {
      return res.status(404).json({ error: 'Passageiro não Encontrado' })
    }
    res.json(passageiro)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno.' });
  }
})

router.post('/embarque', async function (req, res, next) {
  try {
    const codigocartao = req.body.codigocartao
    const viagemId = req.body.viagemId
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
      res.status(402).json({ msg: "Seu pobre" })
    }

    // Cobra o Passageiro
    if (passageiro.id !== 0) {
      await prisma.cliente.update({
        where: { id: passageiro.id },
        data: { saldo: passageiro.saldo - valorDaPassagem, },
      })
    }
    console.log(new Date().toString())
    const embarque = await prisma.cliente_has_viagem.create({
      data: {
        cliente_id: passageiro.id,
        viagem_id: viagemId,
        tarifa: valorDaPassagem,
        data: new Date().toString(),
      },
    })
    res.json(embarque)
  } catch (error) {

  }
})
module.exports = router;
