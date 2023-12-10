var express = require("express");
const moment = require('moment-timezone');
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post('/embarque', async function (req, res, next) {
  const valorDaPassagem = 5
  const codigocartao = req.body.codigocartao
  try {
    const novoEmbarque = await prisma.$transaction(async (prisma) => {
      // Verifica se passageiro existe
      const passageiro = await prisma.cliente.findFirst({
        where: { codigocartao: codigocartao }
      })
      if (!passageiro) {
        throw new Error("PASSAGEIRO NÃO ENCONTRADO")
      }
      //
      const tipos = ["Estudante", "Idoso", "Pcd"];
      // Verifica o Saldo
      if (passageiro.saldo < valorDaPassagem && passageiro.id !== 0 && !tipos.includes(passageiro.tipo)) {
        throw new Error("SALDO INSUFICIENTE")
      }
      // Cobra o Passageiro
      if (passageiro.id !== 0 && passageiro.id !== 0 && !tipos.includes(passageiro.tipo)) {
        await prisma.cliente.update({
          where: { id: passageiro.id },
          data: { saldo: { decrement: valorDaPassagem } },
        })
      }
      // Formata a data
      const data = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD HH:mm:ss');
      
      // Verifica se estudante fez duas viagens
      if (passageiro.tipo == "Estudante") {
        const embarquesHoje = await prisma.cliente_has_viagem.count({
          where: { data: { contains: data.split(" ")[0] }, cliente_id: passageiro.id  }
        })
        if (embarquesHoje >= 2) {
          throw new Error("LIMITE DIARIO EXECIDO")
        }
      }
      const embarque = await prisma.cliente_has_viagem.create({
        data: {
          cliente_id: passageiro.id,
          viagem_id: 1,
          data,
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
      const passageiro = await prisma.cliente.findFirst({
        where: { codigocartao: codigocartao }
      })
      res.status(402).json({ error: 'SALDO INSUFICIENTE', tarifa: valorDaPassagem, id: passageiro.id }); // 402 Payment Required
    } else if (error.message === 'LIMITE DIARIO EXECIDO') {
      res.status(403).json({ error: 'LIMITE DIARIO EXECIDO'})
    } else {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
})


module.exports = router;
