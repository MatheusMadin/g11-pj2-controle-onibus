-- CreateTable
CREATE TABLE `cartão` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `saldo` DECIMAL(2, 0) NULL,
    `cartãocol` VARCHAR(45) NULL,
    `cliente_id` INTEGER NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_cartão_cliente1_idx`(`cliente_id`),
    PRIMARY KEY (`id`, `cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(200) NULL,
    `saldo` DECIMAL(2, 0) NULL,
    `cpf` VARCHAR(14) NULL,
    `usuario_id` INTEGER NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_cliente_usuario_idx`(`usuario_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente_has_viagem` (
    `viagem_id` INTEGER NOT NULL,
    `tarifa` DECIMAL(2, 0) NULL,
    `data` VARCHAR(45) NULL,
    `cartão_id` INTEGER NOT NULL,

    INDEX `fk_cliente_has_viagem_cartão1_idx`(`cartão_id`),
    INDEX `fk_cliente_has_viagem_viagem1_idx`(`viagem_id`),
    PRIMARY KEY (`viagem_id`, `cartão_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `linha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `inicio` DATETIME(2) NULL,
    `fim` DATETIME(2) NULL,
    `localinicio` VARCHAR(45) NULL,
    `localfim` VARCHAR(45) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(200) NULL,
    `foto` VARCHAR(200) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `onibus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(8) NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(200) NULL,
    `email` VARCHAR(200) NULL,
    `senha` VARCHAR(45) NULL,
    `token` VARCHAR(45) NULL,

    UNIQUE INDEX `idtable1_UNIQUE`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `viagem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` VARCHAR(45) NULL,
    `linha_id` INTEGER NOT NULL,
    `onibus_id` INTEGER NOT NULL,
    `motorista_id` INTEGER NOT NULL,

    UNIQUE INDEX `id_UNIQUE`(`id`),
    INDEX `fk_viagem_linha1_idx`(`linha_id`),
    INDEX `fk_viagem_motorista1_idx`(`motorista_id`),
    INDEX `fk_viagem_onibus1_idx`(`onibus_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cartão` ADD CONSTRAINT `fk_cartão_cliente1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cliente` ADD CONSTRAINT `fk_cliente_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cliente_has_viagem` ADD CONSTRAINT `fk_cliente_has_viagem_cartão1` FOREIGN KEY (`cartão_id`) REFERENCES `cartão`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cliente_has_viagem` ADD CONSTRAINT `fk_cliente_has_viagem_viagem1` FOREIGN KEY (`viagem_id`) REFERENCES `viagem`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_linha1` FOREIGN KEY (`linha_id`) REFERENCES `linha`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_motorista1` FOREIGN KEY (`motorista_id`) REFERENCES `motorista`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `viagem` ADD CONSTRAINT `fk_viagem_onibus1` FOREIGN KEY (`onibus_id`) REFERENCES `onibus`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
