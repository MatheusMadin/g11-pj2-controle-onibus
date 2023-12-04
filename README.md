<h1>Oque é este projeto?</h1>

Catraca Eletrônica de Ônibus - Projeto Integrador IFSP

Este é um projeto de catraca de ônibus desenvolvido no IFSP de Caraguatatuba, dividido em três interfaces:

 Catraca: Nesta interface, ocorre a verificação da validade das carteirinhas dos passageiros antes de permitir a entrada no ônibus.

 Página Online: Uma página pública da empresa onde quem possui a carteirinha pode recarregá-la online, de qualquer lugar, sem esforço, informações sobre linhas, horários, etc...

 Menu Administrativo: Uma página privada onde os usuários autorizados podem cadastrar e editar motoristas, linhas e passageiros.


<h1>Tecnologias utilizadas</h1>

Este projeto utiliza o bootstrap para estilizações das interfaces, node.js para o funcionamento do backend, prisma como nosso ORM, MySQL como o nosso banco de dados,  e javaScript como a linguagem de programação.


<h1>Dependências necessárias</h1>

Para o backend as dependências utilizadas foram, @prisma/client, axios, cors, express, morgan, multer, debug, e cookie-parser.

E as devdependencies são o nodemon e prisma

<h2>Em nossa interface administrativa, fizemos uso da Template de Administração PurpleAdmin.

<h2>Como rodar aplicação</h2>

Primeiro verifique se você possui um "aplicativo de programação" instalada na sua maquina, e as tecnologias sitadas anteriormente.

Baixar os arquivos do repositorio do github: https://github.com/MatheusMadin/g11-pj2-controle-onibus.git

Você pode obter este arquivo por meio de download da pasta compactada via navegador, ou clonar os arquivos com o link do repositorio no seu editor (se o seu editor conter este tipo de serviço).

Verifique se você tem o aplicativo xampp instalado na sua maquina. Então abra o app e clique em start na opçâo do mysql.

Com os arquivos no seu editor, abra o terminal do editor, clique no icone de uma seta para baixo, e clique em command prompt, Isto criara um novo terminal. Neste novo terminal, execute o comando cd backend e aperte ENTER, depois npm i e aperte ENTER, depois npm run dev e aperte ENTER.

Em seguida crie novamente um novo terminal, porem, desta vez escreva cd frontend e aperte ENTER, depois npm i e aperte ENTER, depois npm run dev e aperte ENTER.

Depois de concluir este passo a passo, abra o navegador e escreva http://127.0.0.1:3001/litoraltransporte (ou clique), para acessar o site publico.

E tambem no navegador, mas em uma nova guia se preferir, escreva http://localhost:3001/admin/ (ou clique), para acessar o site administrativo.

 <h1>Desenvolvedores do projeto</h1>

 Arthur Cantuario Pereira
 Clemerson dos Santos 
 Luiz Filipi Soares de Sousa
 Matheus Nascimento Cruz

