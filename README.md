<h1>Oque é este projeto?</h1>

Catraca Eletrônica de Ônibus - Projeto Integrador IFSP

Este é um projeto de catraca de ônibus desenvolvido no IFSP de Caraguatatuba, dividido em três interfaces:

 Catraca:Nesta interface, ocorre a verificação da validade das carteirinhas dos passageiros antes de permitir a entrada no ônibus.

 Página Online:Uma página pública da empresa onde quem possui a carteirinha pode recarregá-la online, de qualquer lugar, sem esforço, informações sobre linhas, horários, etc...

 Menu Administrativo:Uma página privada onde os usuários autorizados podem cadastrar e editar motoristas, linhas e passageiros.


<h1>Tecnologias utilizadas</h1>

Este projeto utiliza o bootstrap para estilizações das interfaces, node.js para o funcionamento do backend, prisma como nosso ORM, MySQL como o nosso banco de dados,  e javaScript como a linguagem de programação.


<h1>Dependências necessárias</h1>

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
=======
### Autores

 Arthur Cantuario Pereira
 Clemerson dos Santos 
 Luiz Filipi Soares de Sousa
 Matheus Nascimento Cruz

