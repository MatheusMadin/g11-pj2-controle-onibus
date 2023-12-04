<h1>Oque é este projeto?</h1>

Este projeto carrega consigo, uma interface publica de um site para uma empresa de transportes publicos, uma interface administrativa da empresa, e um script de controle de catraca.

<h1>Tecnologias utilizadas</h1>

Este projeto utiliza o bootstrap para estilizações das interfaces, node.js para o funcionamento do backend, prisma como nosso ORM.

<h1>Dependências</h1>

Para o backend as dependências utilizadas foram, @prisma/client, axios, cors, express, morgan, multer, debug, e cookie-parser.

E as devdependencies são o nodemon e prisma

Segue abaixo os codigos:

{
  "name": "backend",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "@prisma/client": "^5.4.2",
    "axios": "^1.5.1",
    "cookie-parser": "~1.4.4",
    "cors": "^2.8.5",
    "debug": "~2.6.9",
    "express": "^4.18.2",
    "morgan": "~1.9.1",
    "multer": "^1.4.5-lts.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "prisma": "^5.4.2"
  }
}

<h2>Em nossa interface administrativa, fizemos uso da Template de Administração PurpleAdmin. Segue abaixo uma pequena parte da documentação do mesmo, para que seja possivel (se nescessario) um melhor entendimentlo sobre o template.</h2>

<h1>Template de Administração Gratuito PurpleAdmin</h1>
Purple Admin é um template gratuito e responsivo de administração construído com o Bootstrap 5. O template possui um design colorido, atrativo, mas ao mesmo tempo simples e elegante. Ele foi cuidadosamente desenvolvido, com todos os componentes organizados de forma ordenada e precisa.
O Purple Admin está repleto de recursos que atendem às suas necessidades, sem ser sobrecarregado com componentes que você nem usaria. É uma excelente opção para criar painéis de administração, sistemas de comércio eletrônico, sistemas de gerenciamento de projetos, CMS ou CRM.

Apesar de ter um design único, o template é facilmente personalizável para atender aos seus requisitos. O Purple Admin vem com um código limpo e bem comentado, facilitando o trabalho com o template, tornando-o uma escolha ideal para iniciar o seu projeto.

<h1>Créditos:</h1>
Bootstrap 5
Ícones de Material Design
jQuery
Gulp
Chart.js
<h1>Suporte do Navegador:</h1>
O Purple Admin foi projetado para funcionar perfeitamente com todos os navegadores web modernos e mais recentes.

Chrome (mais recente)
FireFox (mais recente)
Safari (mais recente)
Opera (mais recente)
IE10+
<h1>Informações de Licença:</h1>
Purple Admin é lançado sob a licença MIT. Purple Admin é um template de administração gratuito desenvolvido a partir do BootstrapDash. Sinta-se à vontade para baixá-lo, usá-lo, compartilhá-lo e ser criativo com ele.

