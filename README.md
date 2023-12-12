<h1>Oque é este projeto?</h1>

Catraca Eletrônica de Ônibus - Projeto Integrador IFSP

Este é um projeto que contem um script de catraca ônibus, um sistema administrativo, e um site publico, que tem como objetivo, atender as nescessidades de uma empresa do ramo de transportes publicos. Portanto este projeto foi dividido em três interfaces:

 Catraca: Nesta interface, ocorre a verificação da validade das carteirinhas, se o saldo é suficiente, verifica o tipo do cartão dos passageiros antes de permitir a entrada no ônibus.

 Por exemplo: Se o cartão é do tipo "IDOSO", nada será cobrado.<br>
              Se o cartão é do tipo "PCD" nada será cobrado.<br>
              Se o cartão é do tipo "ESTUDANTE", o valor do passe não será cobrado, porem só será possivel realizar duas passegens por dia.<br>
              Se o cartão é do tipo "COMUM", o valor do passe será cobrado.<br>

 <h3>Página Online: Uma página pública da empresa onde quem possui a carteirinha da empresa, pode consultar o saldo da carteirinha e recarregá-la online, o site tambem contem, informações sobre linhas, horários, etc...</h3><br>

 ![imagem_2023-12-12_090610052](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/5f0c818c-c343-487e-8611-d1a1d21d8759)

 <h3>Menu Administrativo: Uma página privada onde os usuários autorizados podem cadastrar e editar motoristas, linhas e passageiros.</h3><br>

 ![imagem_2023-12-12_091007907](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/f7e839f1-59f6-4e80-aa6f-98f837a80e7a)


<h1>Tecnologias utilizadas</h1>

Este projeto utiliza o bootstrap para estilizações das interfaces, node.js para o funcionamento do backend, prisma como nosso ORM, MySQL como o nosso banco de dados, e javaScript como a linguagem de programação.

<h1>Dependências necessárias</h1>

Para o backend as dependências utilizadas foram, @prisma/client, axios, cors, express, morgan, multer, debug, e cookie-parser.

E as devdependencies são o nodemon e prisma

<h2>Como rodar aplicação</h2>

Primeiro verifique se você possui um "aplicativo de programação" instalada na sua maquina (recomendamos o <a href='https://code.visualstudio.com/download'>visual estudio code</a>), e as tecnologias sitadas anteriormente.

Baixar os arquivos do repositorio do github: https://github.com/MatheusMadin/g11-pj2-controle-onibus.git

Você pode obter este arquivo por meio de download da pasta compactada via navegador, ou clonar os arquivos com o link do repositorio no seu editor (se o seu editor conter este tipo de serviço).

Verifique se você tem o aplicativo <a  href='https://www.apachefriends.org/pt_br/index.html'>xampp</a> instalado na sua maquina. Então abra o app e clique em start na opçâo do mysql.

Com os arquivos no seu editor, abra o terminal do editor (ctrl + '), clique no icone de uma seta para baixo, e clique em command prompt, Isto criara um novo terminal.<br>

![Captura de tela 2023-12-12 092828](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/d3be09b0-e753-4f61-b14c-04b024b33fc1)

Neste novo terminal, execute o comando cd backend e aperte ENTER<br>
![Captura de tela 2023-12-12 092746](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/b575bcbb-1513-4e68-b0f5-ba69f8ea0dd6)

depois npm i e aperte ENTER<br>
![Captura de tela 2023-12-12 092728](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/0b612285-0e92-4fb6-be30-571dc70e268b)

depois npm run dev e aperte ENTER.
![Captura de tela 2023-12-12 092627](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/013c1336-575a-4a25-b2fc-472c294781df)


Em seguida crie um novo terminal mas mantenha o anterior, porem, desta vez escreva cd frontend e aperte ENTER<br>
![Captura de tela 2023-12-12 092626](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/ef73928e-ee3e-45c6-bc60-27b7d6449dbb)

depois npm i e aperte ENTER<br>
![Captura de tela 2023-12-12 092600](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/1d7dc2b1-f2cf-4fdc-b924-93821d09baec)

depois npm run dev e aperte ENTER.
![Captura de tela 2023-12-12 092526](https://github.com/MatheusMadin/g11-pj2-controle-onibus/assets/141776167/f36a0884-a466-45b4-9a3d-8da0f3ea6901)

Depois de concluir este passo a passo, abra o navegador e escreva <a  href='http://127.0.0.1:3001/litoraltransporte'>http://127.0.0.1:3001/litoraltransporte</a> (ou clique), para acessar o site publico.

E tambem no navegador, mas em uma nova guia se preferir, escreva <a  href='http://localhost:3001/admin/'>http://localhost:3001/admin/</a> (ou clique), para acessar o site administrativo.

 <h1>Desenvolvedores do projeto</h1>

 Arthur Cantuario Pereira<hr>
 Clemerson dos Santos <hr>
 Luiz Filipi Soares de Sousa<hr>
 Matheus Nascimento Cruz<hr>

