const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
//   res.send('Bem-vindo ao meu backend!');
   res.sendFile(__dirname + '/../../frontend/cliente/index.html');
});

app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});