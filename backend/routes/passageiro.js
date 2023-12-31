var express = require("express");
var router = express.Router();
const auth = require("../middlewares/authorization.js");
const bcrypt = require('bcrypt');
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
            console.log(passageiro);
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
        const { nome, cpf, saldo, tipo, senha, codigocartao } = req.body;
        const senhaCrypt = await bcrypt.hash(senha, 10)
        const saldoFormatado = saldo.split(".").join("").split(",").join(".")
        const novoPassageiro = await prisma.cliente.create({
            data: {
                nome,
                cpf,
                saldo: saldoFormatado,
                codigocartao,
                tipo,
                usuario_id: req.usuario.id,
                senha: senhaCrypt
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
        const { nome, cpf, saldo, tipo, senha, codigocartao } = req.body;
        const senhaCrypt = await bcrypt.hash(senha, 10)
        const saldoFormatado = saldo.split(".").join("").split(",").join(".")
        const passageiroAtualizado = await prisma.cliente.update({
            where: {
                id: id,
            },
            data: {
                nome,
                saldo: saldoFormatado,
                cpf,
                tipo,
                codigocartao,
                senha: senhaCrypt
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

router.put('/login', async function (req, res, next) {
    try {
        const { cpf, senha } = req.body;
        const passageiro = await prisma.cliente.findFirst({
            where: {
                cpf: cpf,
            }
        })
        console.log(senha);
        if (!passageiro) {
            return res.status(401).json({ success: false, msg: 'Credenciais inválidasa.' })
        }
        const validaSenha = await bcrypt.compare(senha, passageiro.senha)
        if (!validaSenha) {
            return res.status(401).json({ success: false, msg: 'Credenciais inválidas.' })
        }
        res.json(passageiro)
    } catch (error) {
        console.error(error);
    }
})
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
