use bancooni;

CREATE TABLE usuario (
    idUS INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200)
);
/* primeiro esse*/

  create table onibus (
    idONI int auto_increment primary key,
	modelo varchar(100) NOT NULL,
    placa varchar (7) NOT NULL,
    numeracao varchar(6) NOT NULL
 );
 /* segundo esse*/ 
 
  create table motorista (
    idMT  int    auto_increment,
    cpf    varchar (14) not null,
    codigo_carteira varchar(24),
    nome   varchar(200) not null,
    email  varchar(200),
    telefone varchar(17),
    nascimento date,
	uf 	  varchar(2),
    cep   varchar(12) not null,
    cidade varchar(200),
    bairro varchar(200),
    rua    varchar(200),
    PRIMARY KEY (idMT, cpf, codigo_carteira)
 );
 /* terceiro esse*/
 
  create table linha (
	idLI int auto_increment primary key,
    lin_idMT int,
    lin_idONI int,
	local_inicio varchar(200) NOT NULL,
    local_fim varchar(200) NOT NULL,
    horario_inicio datetime NOT NULL,
    horario_fim  datetime NOT NULL,
    constraint fk_motorista_linha foreign key (lin_idMT) references motorista(idMT),
    constraint fk_onibus_linha foreign key (lin_idONI) references onibus(idONI)
 );
 /* quarto esse*/
 
 create table cliente (
	usr_idUS INT,
    idCL  int    auto_increment,
    cpf    varchar (14) not null,
    nome   varchar(200) not null,
    email  varchar(200),
    telefone varchar(17),
    nascimento date,
    deficiencia varchar(200),
	uf 	  varchar(2),
    cep   varchar(12) not null,
    cidade varchar(200),
    bairro varchar(200),
    rua    varchar(200),
    PRIMARY KEY (idCl, cpf, usr_idU),
    CONSTRAINT fk_usuario_cliente foreign key (usr_idUS) references usuario (idUS),
    constraint fk_nome_cliente foreign key (nome) references usuario(nome)
 );
 /* quinto esse*/
 
 create table cartao (
	idCA int auto_increment primary key,
    crt_idCL int,
    dt_emissao date not null,
    dt_vencimento date not null,
    saldo INT NOT NULL,
    constraint fk_cartao_cliente foreign key (crt_idCL) references cliente (idCL)
 );
 /* sexto esse*/
 

 
 create table acompanhante (
	nome varchar(200) not null,
    acp_idCA int NOT NULL,
    constraint fk_acompanhante_cartao foreign key (acp_idCA) references cartao (idCA)
);
/* setimo esse*/
 
 create table viagem(
	idVI int auto_increment primary key,
	ln_idLI int,
    vg_ln_idMT int,
    vg_ln_idONI int,
    idCA int,
    nome_cliente varchar(200),
    cpf_cliente varchar(14),
	data_entrada  date NOT NULL,
    hora_entrada  time NOT NULL,
    constraint fk_viagem_linha_motorista foreign key(vg_ln_idLI) references linha(idLI),
    constraint fk_viagem_linha_onibus foreign key (vg_ln_idONI) references linha(lin_idONI),
    constraint fk_viagem_linha foreign key (ln_idLI) references linha(idLI),
    constraint fk_viagem_clinte foreign key (idCA) references cartao(idCA)    
 );
 /* oitavo esse*/
 