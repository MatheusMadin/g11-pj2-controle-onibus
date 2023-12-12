var express = require("express");
var router = express.Router();
const moment = require('moment-timezone');
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/exibir", async (req, res) => {
    try {
        const tarifa = await prisma.tarifa.findFirst({
            orderBy: {
                id: "desc"
            }
        });
        res.json(tarifa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao obter os dados de Tarifas." });
    }
});

router.get("/listar", async function (req, res, next) {
    const tarifa = await prisma.tarifa.findMany();
    res.json(tarifa);
});

router.post("/cadastrar", async (req, res, next) => {
    try {
        const { dinheiro, cartao } = req.body;
        const dinheiroFormatado = dinheiro.split(".").join("").split(",").join(".")
        const cartaoFormatado = cartao.split(".").join("").split(",").join(".")
        const data = moment(new Date()).tz('America/Sao_Paulo').format('YYYY-MM-DD')
        const novaTarifa = await prisma.tarifa.create({
            data: {
                data,
                dinheiro: dinheiroFormatado,
                cartao: cartaoFormatado
            },
        });

        res.json(novaTarifa);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar onibus." });
    }
});

module.exports = router;