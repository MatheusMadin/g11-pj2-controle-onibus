CREATE TABLE usuario(
  idUS INT NOT NULL AUTO_INCREMENT,
  token VARCHAR(45) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY ( idUS ))
;
CREATE TABLE cliente (
  usr_idUS INT NOT NULL,
  idCL INT NOT NULL AUTO_INCREMENT,
  cpf VARCHAR(14) NOT NULL,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(200) NULL DEFAULT NULL,
  telefone VARCHAR(17) NULL DEFAULT NULL,
  nascimento DATE NULL DEFAULT NULL,
  deficiencia VARCHAR(200) NULL DEFAULT NULL,
  uf VARCHAR(2) NULL DEFAULT NULL,
  cep VARCHAR(12) NOT NULL,
  cidade VARCHAR(200) NULL DEFAULT NULL,
  bairro VARCHAR(200) NULL DEFAULT NULL,
  rua VARCHAR(200) NULL DEFAULT NULL,
  usuario_idUS INT NOT NULL,
  PRIMARY KEY (idCL, cpf, usr_idUS),
  CONSTRAINT fk_cliente_usuario FOREIGN KEY (usr_idUS) REFERENCES usuario (idUS)
  );
  
  
  CREATE TABLE IF NOT EXISTS cartao (
  idCA INT NOT NULL AUTO_INCREMENT,
  crt_idCL INT NULL DEFAULT NULL,
  dt_emissao DATE NOT NULL,
  dt_vencimento DATE NOT NULL,
  saldo INT NOT NULL,
  PRIMARY KEY (idCA, crt_idCL),
  CONSTRAINT fk_cartao_cliente FOREIGN KEY (crt_idCL) REFERENCES cliente (idCL)
  );
  
  CREATE TABLE acompanhante (
  nome VARCHAR(200) NOT NULL,
  acp_idCA INT NOT NULL,
  cliente_idCL INT NOT NULL,
  acompanha_cpf VARCHAR(14) NOT NULL,
  PRIMARY KEY (cliente_idCL, acompanha_cpf),
  CONSTRAINT fk_acompanhante_cartao FOREIGN KEY (acp_idCA) REFERENCES cartao (idCA),
  CONSTRAINT fk_acompanhante_cliente FOREIGN KEY (cliente_idCL , acompanha_cpf ) REFERENCES cliente (idCL , cpf )
  );
  
  CREATE TABLE motorista (
  idMT INT NOT NULL AUTO_INCREMENT,
  cpf VARCHAR(14) NOT NULL,
  codigo_carteira VARCHAR(12) NOT NULL,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(200) NULL DEFAULT NULL,
  telefone VARCHAR(17) NULL DEFAULT NULL,
  nascimento DATE NULL DEFAULT NULL,
  uf VARCHAR(2) NULL DEFAULT NULL,
  cep VARCHAR(12) NOT NULL,
  cidade VARCHAR(200) NULL DEFAULT NULL,
  bairro VARCHAR(200) NULL DEFAULT NULL,
  rua VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (idMT, cpf, codigo_carteira)
  );
  
  CREATE TABLE onibus (
  idONI INT NOT NULL AUTO_INCREMENT,
  oni_idMT INT NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  placa VARCHAR(7) NOT NULL,
  numeracao VARCHAR(6) NOT NULL,
  PRIMARY KEY ( idONI ),
  CONSTRAINT fk_motorista_onibus FOREIGN KEY (oni_idMT) REFERENCES motorista (idMT)
  );
  
CREATE TABLE linha (
  idLI INT NOT NULL AUTO_INCREMENT,
  lin_idMT INT NULL DEFAULT NULL,
  lin_idONI INT NULL DEFAULT NULL,
  local_inicio VARCHAR(200) NOT NULL,
  local_fim VARCHAR(200) NOT NULL,
  horario_inicio DATETIME NOT NULL,
  horario_fim DATETIME NOT NULL,
  PRIMARY KEY (idLI, lin_ONI, id_MT),
  CONSTRAINT fk_motorista_linha FOREIGN KEY (lin_idMT) REFERENCES onibus (oni_idMT),
  CONSTRAINT fk_onibus_linha FOREIGN KEY (lin_idONI) REFERENCES onibus (idONI)
  );
  
  
  CREATE TABLE viagem (
  idVI INT NOT NULL AUTO_INCREMENT,
  ln_idLI INT NULL DEFAULT NULL,
  vg_ln_idMT INT NULL DEFAULT NULL,
  vg_ln_idONI INT NULL DEFAULT NULL,
  idCA INT NULL DEFAULT NULL,
  nome_cliente VARCHAR(200) NULL DEFAULT NULL,
  cpf_cliente VARCHAR(14) NULL DEFAULT NULL,
  data_entrada DATE NOT NULL,
  hora_entrada TIME NOT NULL,
  PRIMARY KEY (idVI),
  CONSTRAINT fk_viagem_clinte FOREIGN KEY (idCA) REFERENCES cartao (idCA),
  CONSTRAINT fk_viagem_linha FOREIGN KEY (ln_idLI) REFERENCES linha (idLI),
  CONSTRAINT fk_viagem_linha_motorista FOREIGN KEY (vg_ln_idMT) REFERENCES linha (lin_idMT),
  CONSTRAINT fk_viagem_linha_onibus FOREIGN KEY (vg_ln_idONI) REFERENCES linha (lin_idONI)
  );
  
  
  CREATE TABLE recarga  (
   idrecarga  INT NOT NULL AUTO_INCREMENT,
   data  DATETIME(2) NOT NULL,
   valor  DECIMAL(10,2) NOT NULL,
   cartao_idCA  INT NOT NULL,
  PRIMARY KEY ( idrecarga ),
  CONSTRAINT  fk_recarga_cartao FOREIGN KEY ( cartao_idCA ) REFERENCES cartao  ( idCA )
  );