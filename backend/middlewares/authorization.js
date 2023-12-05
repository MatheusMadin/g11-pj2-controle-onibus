const jwt = require("jsonwebtoken")
const verificarToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensagem: 'Token inválido' });
        }

        req.usuario = decoded; // Adiciona informações do usuário ao objeto de solicitação
        next();
    });
};

module.exports = verificarToken;