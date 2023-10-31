-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema onidb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema onidb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `onidb` DEFAULT CHARACTER SET utf8mb3 ;
USE `onidb` ;

-- -----------------------------------------------------
-- Table `onidb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `token` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idtable1_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `onidb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`cliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `cpf` VARCHAR(14) NOT NULL,
  `usuario_id` INT NOT NULL,
  `acompanha` VARCHAR(14) NULL,
  `aompanhado` VARCHAR(14) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_cliente_usuario_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_cliente_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `onidb`.`usuario` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `onidb`.`cartão`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`cartão` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `saldo` DECIMAL(2,0) NOT NULL,
  `cliente_id` INT NOT NULL,
  PRIMARY KEY (`id`, `cliente_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_cartão_cliente1_idx` (`cliente_id` ASC),
  CONSTRAINT `fk_cartão_cliente1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `onidb`.`cliente` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `onidb`.`linha`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`linha` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `inicio` DATETIME(2) NOT NULL,
  `fim` DATETIME(2) NOT NULL,
  `localinicio` VARCHAR(45) NOT NULL,
  `localfim` VARCHAR(45) NOT NULL,
  `linhacol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `onidb`.`motorista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`motorista` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NOT NULL,
  `foto` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `onidb`.`onibus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`onibus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `placa` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `onidb`.`viagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`viagem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` DATETIME NOT NULL,
  `linha_id` INT NOT NULL,
  `onibus_id` INT NOT NULL,
  `motorista_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_viagem_linha1_idx` (`linha_id` ASC),
  INDEX `fk_viagem_onibus1_idx` (`onibus_id` ASC),
  INDEX `fk_viagem_motorista1_idx` (`motorista_id` ASC),
  CONSTRAINT `fk_viagem_linha1`
    FOREIGN KEY (`linha_id`)
    REFERENCES `onidb`.`linha` (`id`),
  CONSTRAINT `fk_viagem_motorista1`
    FOREIGN KEY (`motorista_id`)
    REFERENCES `onidb`.`motorista` (`id`),
  CONSTRAINT `fk_viagem_onibus1`
    FOREIGN KEY (`onibus_id`)
    REFERENCES `onidb`.`onibus` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `onidb`.`cliente_has_viagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`cliente_has_viagem` (
  `viagem_id` INT NOT NULL,
  `tarifa` DECIMAL(2,0) NOT NULL,
  `data` VARCHAR(45) NOT NULL,
  `cartão_id` INT NOT NULL,
  PRIMARY KEY (`viagem_id`, `cartão_id`),
  INDEX `fk_cliente_has_viagem_viagem1_idx` (`viagem_id` ASC),
  INDEX `fk_cliente_has_viagem_cartão1_idx` (`cartão_id` ASC),
  CONSTRAINT `fk_cliente_has_viagem_cartão1`
    FOREIGN KEY (`cartão_id`)
    REFERENCES `onidb`.`cartão` (`id`),
  CONSTRAINT `fk_cliente_has_viagem_viagem1`
    FOREIGN KEY (`viagem_id`)
    REFERENCES `onidb`.`viagem` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
