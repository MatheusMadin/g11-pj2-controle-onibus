//importacao de pacotes => dependencias do projeto
const express = require('express');
const { v4: uuidv4 } = require('uuid');

//configuracao inicial
const app = express(); //cria a instancia do express js
app.use(express.json())

//estruturas de dados => para salvar os "produtos" na memoria "ram"
const produtos = [];

//criar as rotas / ENDPOITS DA API
app.get('/', (req, res) => {
    res.json({msg: 'API de produtos.'});
});

//grt produtos
app.get('/produtos', (req, res) =>{
    res.json({produtos: Object.values(produtos)});
});

//post /produtos
app.post('/produtos', (req, res) =>{
    const produto = req.body;
    const idProduto = uuidv4();
    produto.id = uuidv4();
    produto.id = idProduto;
    produtos[idProduto] = produto;
    console.log(produto)
    res.json({msg: 'Produto adicionado!'});
});


app.listen(8000, '127.0.0.1', () => {
    console.log('Servidor escutando na porta 8000');
});