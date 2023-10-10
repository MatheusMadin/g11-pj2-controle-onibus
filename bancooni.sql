-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bancooni
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bancooni
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bancooni` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bancooni` ;

-- -----------------------------------------------------
-- Table `bancooni`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`usuario` (
  `idUS` INT NOT NULL AUTO_INCREMENT,
  `token` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`idUS`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bancooni`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`cliente` (
  `usr_idUS` INT NOT NULL,
  `idCL` INT NOT NULL AUTO_INCREMENT,
  `cpf` VARCHAR(14) NOT NULL,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NULL DEFAULT NULL,
  `telefone` VARCHAR(17) NULL DEFAULT NULL,
  `nascimento` DATE NULL DEFAULT NULL,
  `deficiencia` VARCHAR(200) NULL DEFAULT NULL,
  `uf` VARCHAR(2) NULL DEFAULT NULL,
  `cep` VARCHAR(12) NOT NULL,
  `cidade` VARCHAR(200) NULL DEFAULT NULL,
  `bairro` VARCHAR(200) NULL DEFAULT NULL,
  `rua` VARCHAR(200) NULL DEFAULT NULL,
  `usuario_idUS` INT NOT NULL,
  PRIMARY KEY (`idCL`, `cpf`, `usr_idUS`),
  INDEX `fk_cliente_usuario` (`usr_idUS` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_usuario`
    FOREIGN KEY (`usr_idUS`)
    REFERENCES `bancooni`.`usuario` (`idUS`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bancooni`.`cartao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`cartao` (
  `idCA` INT NOT NULL AUTO_INCREMENT,
  `crt_idCL` INT NULL DEFAULT NULL,
  `dt_emissao` DATE NOT NULL,
  `dt_vencimento` DATE NOT NULL,
  `saldo` INT NOT NULL,
  PRIMARY KEY (`idCA`),
  INDEX `fk_cartao_cliente` (`crt_idCL` ASC) VISIBLE,
  CONSTRAINT `fk_cartao_cliente`
    FOREIGN KEY (`crt_idCL`)
    REFERENCES `bancooni`.`cliente` (`idCL`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bancooni`.`acompanhante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`acompanhante` (
  `nome` VARCHAR(200) NOT NULL,
  `acp_idCA` INT NOT NULL,
  `cliente_idCL` INT NOT NULL,
  `cliente_cpf` VARCHAR(14) NOT NULL,
  `cliente_usr_idUS` INT NOT NULL,
  INDEX `fk_acompanhante_cartao` (`acp_idCA` ASC) VISIBLE,
  INDEX `fk_acompanhante_cliente1_idx` (`cliente_idCL` ASC, `cliente_cpf` ASC, `cliente_usr_idUS` ASC) VISIBLE,
  CONSTRAINT `fk_acompanhante_cartao`
    FOREIGN KEY (`acp_idCA`)
    REFERENCES `bancooni`.`cartao` (`idCA`),
  CONSTRAINT `fk_acompanhante_cliente`
    FOREIGN KEY (`cliente_idCL` , `cliente_cpf` , `cliente_usr_idUS`)
    REFERENCES `bancooni`.`cliente` (`idCL` , `cpf` , `usr_idUS`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bancooni`.`motorista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`motorista` (
  `idMT` INT NOT NULL AUTO_INCREMENT,
  `cpf` VARCHAR(14) NOT NULL,
  `codigo_carteira` VARCHAR(24) NOT NULL,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NULL DEFAULT NULL,
  `telefone` VARCHAR(17) NULL DEFAULT NULL,
  `nascimento` DATE NULL DEFAULT NULL,
  `uf` VARCHAR(2) NULL DEFAULT NULL,
  `cep` VARCHAR(12) NOT NULL,
  `cidade` VARCHAR(200) NULL DEFAULT NULL,
  `bairro` VARCHAR(200) NULL DEFAULT NULL,
  `rua` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`idMT`, `cpf`, `codigo_carteira`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bancooni`.`onibus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`onibus` (
  `idONI` INT NOT NULL AUTO_INCREMENT,
  `oni_idMT` INT NOT NULL,
  `modelo` VARCHAR(100) NOT NULL,
  `placa` VARCHAR(7) NOT NULL,
  `numeracao` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`idONI`),
  INDEX `fk_motorista_onibus` (`oni_idMT` ASC) VISIBLE,
  CONSTRAINT `fk_motorista_onibus`
    FOREIGN KEY (`oni_idMT`)
    REFERENCES `bancooni`.`motorista` (`idMT`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bancooni`.`linha`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`linha` (
  `idLI` INT NOT NULL AUTO_INCREMENT,
  `lin_idMT` INT NULL DEFAULT NULL,
  `lin_idONI` INT NULL DEFAULT NULL,
  `local_inicio` VARCHAR(200) NOT NULL,
  `local_fim` VARCHAR(200) NOT NULL,
  `horario_inicio` DATETIME NOT NULL,
  `horario_fim` DATETIME NOT NULL,
  PRIMARY KEY (`idLI`),
  INDEX `fk_motorista_linha` (`lin_idMT` ASC) VISIBLE,
  INDEX `fk_onibus_linha` (`lin_idONI` ASC) VISIBLE,
  CONSTRAINT `fk_motorista_linha`
    FOREIGN KEY (`lin_idMT`)
    REFERENCES `bancooni`.`onibus` (`oni_idMT`),
  CONSTRAINT `fk_onibus_linha`
    FOREIGN KEY (`lin_idONI`)
    REFERENCES `bancooni`.`onibus` (`idONI`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bancooni`.`recarga`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`recarga` (
  `idrecarga` INT NOT NULL AUTO_INCREMENT,
  `data` DATETIME(2) NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  `cartao_idCA` INT NOT NULL,
  PRIMARY KEY (`idrecarga`),
  INDEX `fk_recarga_cartao` (`cartao_idCA` ASC) VISIBLE,
  CONSTRAINT `fk_recarga_cartao`
    FOREIGN KEY (`cartao_idCA`)
    REFERENCES `bancooni`.`cartao` (`idCA`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bancooni`.`viagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bancooni`.`viagem` (
  `idVI` INT NOT NULL AUTO_INCREMENT,
  `ln_idLI` INT NULL DEFAULT NULL,
  `vg_ln_idMT` INT NULL DEFAULT NULL,
  `vg_ln_idONI` INT NULL DEFAULT NULL,
  `idCA` INT NULL DEFAULT NULL,
  `nome_cliente` VARCHAR(200) NULL DEFAULT NULL,
  `cpf_cliente` VARCHAR(14) NULL DEFAULT NULL,
  `data_entrada` DATE NOT NULL,
  `hora_entrada` TIME NOT NULL,
  PRIMARY KEY (`idVI`),
  INDEX `fk_viagem_clinte` (`idCA` ASC) VISIBLE,
  INDEX `fk_viagem_linha` (`ln_idLI` ASC) VISIBLE,
  INDEX `fk_viagem_linha_motorista` (`vg_ln_idMT` ASC) VISIBLE,
  INDEX `fk_viagem_linha_onibus` (`vg_ln_idONI` ASC) VISIBLE,
  CONSTRAINT `fk_viagem_clinte`
    FOREIGN KEY (`idCA`)
    REFERENCES `bancooni`.`cartao` (`idCA`),
  CONSTRAINT `fk_viagem_linha`
    FOREIGN KEY (`ln_idLI`)
    REFERENCES `bancooni`.`linha` (`idLI`),
  CONSTRAINT `fk_viagem_linha_motorista`
    FOREIGN KEY (`vg_ln_idMT`)
    REFERENCES `bancooni`.`linha` (`lin_idMT`),
  CONSTRAINT `fk_viagem_linha_onibus`
    FOREIGN KEY (`vg_ln_idONI`)
    REFERENCES `bancooni`.`linha` (`lin_idONI`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
