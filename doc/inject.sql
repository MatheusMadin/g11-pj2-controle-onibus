USE onidb;
-- Usuarios --
INSERT INTO usuario (nome, email, senha, foto)
VALUES ("Rita Jéssica Assis", "ritajessicaassis@yahoo.com","$2b$10$mcLXOFfJMNeujCt2p5OrxukSm28qL3AMdNcLD5hANULOqhLdAboga", "uploads\\usuario\\1702335444328-foto-usuario2.jpg");
INSERT INTO usuario (nome, email, senha, foto)
VALUES ("Sara Silvana Daiane dos Santos", "sara.silvana.dossantos@live.se", "$2b$10$Zy.cIiEj09Z4QAviuZKyQuothe96tWsqjrmh5cK7sfB/0ROC7a6nW", "uploads\\usuario\\1702335492293-foto-usuario1.jpg");
INSERT INTO usuario (nome, email, senha, foto)
VALUES ("James Morgan McGill", "saul@goodman.com", "$2b$10$6b7XvI0EWMS2btKGkA6pVuSbSCn4zibkd5ZUIBwex.xI.zyc1Om02", "uploads\\usuario\\1702335689477-foto-usuario3.jpg");
INSERT INTO usuario (nome, email, senha, foto)
VALUES ("Igor Vitor Fábio Campos", "igor.vitor.campos@limao.com.br", "$2b$10$Ji9T9Lb.bXWX7VEaDPGMNeg0ZLo0ar6fVV1TnA9p/7VFNKPgmR7Wi", "uploads\\usuario\\1702335769855-foto-usuario5.jpg");
INSERT INTO usuario (nome, email, senha, foto)
VALUES ("Calebe Sérgio Eduardo Souza","calebe.sergio.souza@way2goidiomas.com.br", "$2b$10$R/CxpEilJ.160xQfAMCpFOhC9PQMsHWAqSLnCJfUlzElbFlQChDfS", "uploads\\usuario\\1702335808703-foto-usuario4.jpg");


-- Cliente --
INSERT INTO cliente (id, nome, saldo, usuario_id, codigocartao)
VALUES (0, "Dinheiro", 0, 1, 0);
INSERT INTO cliente (nome, saldo, cpf, usuario_id, codigocartao, tipo, senha)
VALUES ("Clemerson dos Santos", 25.00, "111.111.111-11", 1, "0009372771", "Comum", "$2b$10$l7iFtRlUtuXmw4Z83Oxn5uuamhBLxiyO.ovCV6rKK6tY9q9HsN7PW");
INSERT INTO cliente (nome, saldo, cpf, usuario_id, codigocartao, tipo, senha)
VALUES ("Luiz Filipi", 0, "222.222.222-22", 2, "0009833520", "Estudante", "$2b$10$iAaDll5kDKc4mBKVy5gIDeR33C6nxAcZHRsnohbS5EmFufaOMmeBi");
INSERT INTO cliente (nome, saldo, cpf, usuario_id, codigocartao, tipo, senha)
VALUES ("Matheus Nascimento", 0, "333.333.333-33", 3, "0001163317", "Idoso", "$2b$10$gsVDqichgKpjABxGkPCcjedJ3AvAMaQ8mndNUg7q4TyIDp/eT7Qjq");
INSERT INTO cliente (nome, saldo, cpf, usuario_id, codigocartao, tipo, senha)
VALUES ("Arthur Cantuario", 0, "444.444.444-44", 4, "0001162642", "Pcd", "$2b$10$KNRVOZMJNU/UCUUwdNEZa.871dbMuYISv12LdZZvmqJfdOkjBYLSe");


-- Onibus --
INSERT INTO onibus (placa)
VALUES ("ABC-1234");
INSERT INTO onibus (placa)
VALUES ("DFG-5678");
INSERT INTO onibus (placa)
VALUES ("HIJ-9012");
INSERT INTO onibus (placa)
VALUES ("ABC-1D23");
INSERT INTO onibus (placa)
VALUES ("EFG-4H56");


-- Motorista --
INSERT INTO motorista (nome, cnh, foto)
VALUES ("Martin Pietro Bernardo Peixoto", 12345678901, "uploads\\motorista\\1702389731429-foto-motorista1.jpg");
INSERT INTO motorista (nome, cnh, foto)
VALUES ("Carlos Igor da Luz", 98765432102, "uploads\\motorista\\1702389778394-foto-motorista2.jpg");
INSERT INTO motorista (nome, cnh, foto)
VALUES ("Ricardo Vicente Vitor Nascimento", 45612378903, "uploads\\motorista\\1702389801289-foto-motorista3.jpg");
INSERT INTO motorista (nome, cnh, foto)
VALUES ("Luiza Sandra da Costa", 78901234504, "uploads\\motorista\\1702389827242-foto-motorista5.png");
INSERT INTO motorista (nome, cnh, foto)
VALUES ("Pietro Nelson Fernandes", 32165498705, "uploads\\motorista\\1702389866865-foto-motorista4.jpg");


-- Linha --
INSERT INTO linha (inicio, fim, localinicio, localfim)
VALUES ("1970-01-01 06:00:00.00", "1970-01-01 09:00:00.00", "Jaragua", "Centro");
INSERT INTO linha (inicio, fim, localinicio, localfim)
VALUES ("1970-01-01 09:00:00.00", "1970-01-01 12:00:00.00", "Townsville", "Villagetown");
INSERT INTO linha (inicio, fim, localinicio, localfim)
VALUES ("1970-01-01 12:00:00.00", "1970-01-01 15:00:00.00", "Sunnydale", "Moonville");
INSERT INTO linha (inicio, fim, localinicio, localfim)
VALUES ("1970-01-01 15:00:00.00", "1970-01-01 18:00:00.00", "Pegorelli", "Praça do Pereque");
INSERT INTO linha (inicio, fim, localinicio, localfim)
VALUES ("1970-01-01 18:00:00.00", "1970-01-01 21:00:00.00", "Golfinho", "Morro do Algodão");

-- Viagem -- 
INSERT INTO viagem (data, linha_id, onibus_id, motorista_id)
VALUES ("2023-12-12", 1, 1, 1);