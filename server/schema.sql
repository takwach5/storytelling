-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `story` DEFAULT CHARACTER SET utf8 ;
USE `story` ;

-- -----------------------------------------------------
-- Table `story`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `story`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `role` ENUM("user", "admin") NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `story`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `story`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `story`.`stories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `story`.`stories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `story` LONGTEXT NOT NULL,
  `image` VARCHAR(500) NULL,
  `users_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_stories_users_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_stories_category1_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `fk_stories_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `story`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_stories_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `story`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `story`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `story`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `describe` LONGTEXT NOT NULL,
  `users_id` INT NOT NULL,
  `stories_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_comments_users1_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_comments_stories1_idx` (`stories_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `story`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_stories1`
    FOREIGN KEY (`stories_id`)
    REFERENCES `story`.`stories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `story` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
