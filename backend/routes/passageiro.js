var express = require("express");
var router = express.Router();
const auth = require("../middlewares/authorization.js");
const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    try {
        const passageiro = await prisma.cliente.findMany();
        res.json(passageiro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao obter os dados dos Passageiro." });
    }
});

router.get("/listar", async function (req, res, next) {
    const passageiro = await prisma.cliente.findMany();
    res.json(passageiro);
});

router.get("/count", async function (req, res, next) {
    const passageiro = await prisma.cliente.count()
    res.json(passageiro);
});

router.get("/buscar/:id", async function (req, res, next) {
    const passageiroId = parseInt(req.params.id);
    try {
        const passageiro = await prisma.cliente.findUnique({
            where: {
                id: passageiroId,
            },
        });
        if (passageiro) {
            res.json(passageiro);
        } else {
            res.status(404).json({ error: 'Passageiro não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao buscar passageiro por ID:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.post("/cadastrar", auth, async (req, res, next) => {
    try {
        const { nome, cpf, saldo, codigocartao } = req.body;

        const saldoFormatado = saldo.split(".").join("").split(",").join(".")
        const novoPassageiro = await prisma.cliente.create({
            data: {
                nome,
                cpf,
                saldo: saldoFormatado,
                codigocartao,
                usuario_id: req.usuario.id
            },
        });

        res.json(novoPassageiro);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar passageiro." });
    }
});

router.put('/editar/:id', async function (req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const { nome, cpf, saldo, codigocartao } = req.body;
        const saldoFormatado = saldo.split(".").join("").split(",").join(".")
        const passageiroAtualizado = await prisma.cliente.update({
            where: {
                id: id,
            },
            data: {
                nome,
                saldo: saldoFormatado,
                cpf,
                codigocartao
            },
        });

        res.json(passageiroAtualizado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a passageiro.' });
    }
});

router.delete("/excluir/:id", async function (req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const passageiroExcluido = await prisma.cliente.delete({
            where: {
                id: id,
            },
        });

        if (passageiroExcluido) {
            res.json({ message: "Passageiro excluída com sucesso." });
        } else {
            res.status(404).json({ error: "Passageiro não encontrada." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao excluir a Passageiro." });
    }
});

// --- Recarga
router.put('/recarga', async function (req, res, next) {
    try {

        const { cpf, valor } = req.body;
        const valorFormatado = valor.split(".").join("").split(",").join(".")
        const passageiro = await prisma.cliente.findFirst({
            where: {
                cpf: cpf
            }
        })

        const passageiroRecarga = await prisma.cliente.update({
            where: {
                id: passageiro.id
            },
            data: {
                saldo: parseFloat(passageiro.saldo) + parseFloat(valorFormatado),
            }
        })

        res.json(passageiroRecarga);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a passageiro.' });
    }
});

module.exports = router;
