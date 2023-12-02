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
CREATE SCHEMA IF NOT EXISTS `onidb` DEFAULT CHARACTER SET utf8 ;
USE `onidb` ;

-- -----------------------------------------------------
-- Table `onidb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`usuario` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NULL DEFAULT NULL,
  `email` VARCHAR(200) NULL DEFAULT NULL,
  `senha` VARCHAR(45) NULL DEFAULT NULL,
  `token` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idtable1_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `onidb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`cliente` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NULL DEFAULT NULL,
  `saldo` DECIMAL(2,0) NULL DEFAULT NULL,
  `cpf` VARCHAR(14) NULL DEFAULT NULL,
  `usuario_id` INT(11) NOT NULL,
  `codigocartao` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_cliente_usuario_idx` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_usuario`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `onidb`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `onidb`.`linha`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`linha` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `inicio` DATETIME(2) NULL DEFAULT NULL,
  `fim` DATETIME(2) NULL DEFAULT NULL,
  `localinicio` VARCHAR(45) NULL DEFAULT NULL,
  `localfim` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `onidb`.`motorista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`motorista` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(200) NULL DEFAULT NULL,
  `foto` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `onidb`.`onibus`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`onibus` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `placa` VARCHAR(8) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `onidb`.`viagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`viagem` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `data` VARCHAR(45) NULL DEFAULT NULL,
  `linha_id` INT(11) NOT NULL,
  `onibus_id` INT(11) NOT NULL,
  `motorista_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_viagem_linha1_idx` (`linha_id` ASC) VISIBLE,
  INDEX `fk_viagem_onibus1_idx` (`onibus_id` ASC) VISIBLE,
  INDEX `fk_viagem_motorista1_idx` (`motorista_id` ASC) VISIBLE,
  CONSTRAINT `fk_viagem_linha1`
    FOREIGN KEY (`linha_id`)
    REFERENCES `onidb`.`linha` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_viagem_motorista1`
    FOREIGN KEY (`motorista_id`)
    REFERENCES `onidb`.`motorista` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_viagem_onibus1`
    FOREIGN KEY (`onibus_id`)
    REFERENCES `onidb`.`onibus` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `onidb`.`cliente_has_viagem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `onidb`.`cliente_has_viagem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `viagem_id` INT(11) NOT NULL,
  `tarifa` DECIMAL(2,0) NULL DEFAULT NULL,
  `data` VARCHAR(45) NULL DEFAULT NULL,
  `cliente_id` INT(11) NOT NULL,
  INDEX `fk_cliente_has_viagem_viagem1_idx` (`viagem_id` ASC) VISIBLE,
  PRIMARY KEY (`id`, `viagem_id`, `cliente_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_cliente_has_viagem_cliente1_idx` (`cliente_id` ASC) VISIBLE,
  CONSTRAINT `fk_cliente_has_viagem_viagem1`
    FOREIGN KEY (`viagem_id`)
    REFERENCES `onidb`.`viagem` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cliente_has_viagem_cliente1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `onidb`.`cliente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
