var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post('/embarque', async function (req, res, next) {
  try {
    const codigocartao = req.body.codigocartao
    const valorDaPassagem = 5
    const novoEmbarque = await prisma.$transaction(async (prisma) => {
      // Verifica se passageiro existe
      const passageiro = await prisma.cliente.findFirst({
        where: { codigocartao: codigocartao }
      })
      if (!passageiro) {
         throw new Error("PASSAGEIRO NÃO ENCONTRADO")
      }

      // Verifica o Saldo
      if (passageiro.saldo < valorDaPassagem && passageiro.id !== 0) {
        throw new Error("SALDO INSUFICIENTE")
      }
      // Cobra o Passageiro
      if (passageiro.id !== 0) {
        await prisma.cliente.update({
          where: { id: passageiro.id },
          data: { saldo: { decrement: valorDaPassagem } },
        })
      }
      const cliente_id = passageiro.id
      const embarque = await prisma.cliente_has_viagem.create({
        data: {
          cliente_id,
          viagem_id: 1,
          data: new Date().toDateString(),
          tarifa: valorDaPassagem,
        }
      });
      return embarque
    })

    res.json(novoEmbarque)
  } catch (error) {
    console.error(error);
    if (error.message === 'PASSAGEIRO NÃO ENCONTRADO') {
      res.status(404).json({ error: 'PASSAGEIRO NÃO ENCONTRADO' });
    } else if (error.message === 'SALDO INSUFICIENTE') {
      res.status(402).json({ error: 'SALDO INSUFICIENTE' }); // 402 Payment Required
    } else {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
})


module.exports = router;
