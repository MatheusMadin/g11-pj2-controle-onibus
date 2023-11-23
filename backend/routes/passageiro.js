var express = require("express");
var router = express.Router();
const { PrismaClient , Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    try {
        const passageiro = await prisma.cliente.findMany();
        const codigocartao = await prisma.cart_o.findMany();
        res.json(passageiro, codigocartao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao obter os dados dos Passageiro." });
    }
});

router.get("/listar", async function (req, res, next) {
    const passageiro = await prisma.cliente.findMany();
    const codigocartao = await prisma.cart_o.findMany();
    res.json(passageiro, codigocartao);
});

router.get("/count", async function (req, res, next) {
    const passageiro = await prisma.cliente.count()
    const codigocartao = await prisma.cart_o.count()
    res.json(passageiro, codigocartao);
});

router.get("/buscar/:id", async function (req, res, next) {
    const passageiroId = parseInt(req.params.id);

    try {
        const passageiro = await prisma.cliente.findUnique({
            where: {
                id: passageiroId,
            },
        });
        const cartao = await prisma.cart_o.findUnique({
            where: { 
                cliente_id: passageiroId
            }
        })

        if (passageiro && cartao) {
            res.json(passageiro, cartao);
        } else {
            res.status(404).json({ error: 'Passageiro não encontrada' });
        }
    } catch (error) {
        console.error('Erro ao buscar passageiro por ID:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.post("/cadastrar", async (req, res, next) => {
    try {
        const { nome, cpf, saldo, codigocartao } = req.body;

        const novoPassageiro = await prisma.cliente.create({
            data: {
                nome,
                cpf
            },
        });
        const novocartao =await prisma.cart_o.create({
            data: {
                cliente_id: novoPassageiro.id,
                saldo: saldo,
                codigocartao: Number(codigocartao)
            }
        })

        res.json(novoPassageiro, novocartao);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar passageiro." });
    }
});

router.put('/editar/:id', async function (req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const { nome, cpf, saldo,codigocartao } = req.body;

        const passageiroAtualizada = await prisma.cliente.update({
            where: {
                id: id,
            },
            data: {
                nome,
                saldo,
                cpf
            },
        });
        const cartaoAtualizada = await prisma.cart_o.update({
            where:{
                codigocartao: codigocartao,
                cliente_id: passageiroAtualizada.id

            }
        })

        res.json(passageiroAtualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a passageiro.' });
    }
});

router.delete("/excluir/:id", async function (req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const passageiroExcluida = await prisma.cliente.delete({
            where: {
                id: id,
            },
        });

        if (passageiroExcluida) {
            res.json({ message: "Passageiro excluída com sucesso." });
        } else {
            res.status(404).json({ error: "Passageiro não encontrada." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao excluir a Passageiro." });
    }
});

module.exports = router;
