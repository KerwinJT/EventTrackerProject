-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventtracker
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventtracker` ;

-- -----------------------------------------------------
-- Schema eventtracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventtracker` DEFAULT CHARACTER SET utf8 ;
USE `eventtracker` ;

-- -----------------------------------------------------
-- Table `photoshoot`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `photoshoot` ;

CREATE TABLE IF NOT EXISTS `photoshoot` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(150) NOT NULL,
  `location` VARCHAR(250) NOT NULL,
  `date` DATE NOT NULL,
  `latitude` DECIMAL(10,8) NULL,
  `longitude` DECIMAL(11,8) NULL,
  `shots_taken` INT NULL,
  `comment_location` VARCHAR(1500) NULL,
  `comment_performance` VARCHAR(1500) NULL,
  `lenses_used` VARCHAR(1500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS event@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'event'@'localhost' IDENTIFIED BY 'event';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'event'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `photoshoot`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventtracker`;
INSERT INTO `photoshoot` (`id`, `name`, `location`, `date`, `latitude`, `longitude`, `shots_taken`, `comment_location`, `comment_performance`, `lenses_used`) VALUES (1, 'Photo', 'Argo Mills, Idaho Springs', '2020-01-01', 39.743722, -105.506749, 243, 'Beautiful location. Old Mine', 'Come back earlier in the day.', 'Sony 85 f1.8');

COMMIT;

