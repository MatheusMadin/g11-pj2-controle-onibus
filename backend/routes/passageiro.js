var express = require("express");
var router = express.Router();
const { PrismaClient } = require("@prisma/client");

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

router.post("/cadastrar", async (req, res, next) => {
    try {
        const { nome, cpf, saldo, usuarioId } = req.body;

        const novoPassageiro = await prisma.cliente.create({
            data: {
                nome,
                saldo,
                cpf,
                usuario_id: Number(usuarioId)   
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
        const { nome, cpf, saldo, usuarioid } = req.body;

        const passageiroAtualizada = await prisma.cliente.update({
            where: {
                id: id,
            },
            data: {
                nome,
                saldo,
                cpf,
                usuario_id: usuarioid
            },
        });

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
