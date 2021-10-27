-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2021 a las 21:44:28
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `docs-lic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patient`
--

CREATE TABLE `PATIENT` (
  `ID` int(11) AUTO_INCREMENT PRIMARY KEY,
  `DNI` int(11) NOT NULL UNIQUE,
  `FIRST_NAME` varchar(100) NOT NULL,
  `LAST_NAME` varchar(100) NOT NULL,
  `DATE_TIME` datetime NOT NULL,
  `RECORD` varchar(250) DEFAULT NULL,
  `BIRTHDAY` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Estructura de tabla para la tabla `session`
--

CREATE TABLE `SESSION` (
  `ID` int(11) AUTO_INCREMENT PRIMARY KEY,
  `PATIENT_ID` int(11) NOT NULL,
  `DATA` varchar(200) DEFAULT NULL,
  `DATE_TIME` datetime NOT NULL,
  `NUM` int(11) NOT NULL,
  FOREIGN KEY (`PATIENT_ID`) REFERENCES `PATIENT`(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `patient`
--

INSERT INTO `PATIENT` (`DNI`, `FIRST_NAME`, `LAST_NAME`, `DATE_TIME`, `BIRTHDAY`) VALUES
(39421223, 'firstName1', 'lastName1', '2021-09-08 01:03:02', '1996-09-01 01:03:02'),
(23499221, 'firstName2', 'lastName2', '2021-01-02 02:02:04', '1992-02-02 01:03:02'),
(39452294, 'firstName3', 'lastName3', '2021-03-04 01:07:02', '1993-04-03 01:03:02'),
(41002341, 'firstName4', 'lastName4', '2021-04-05 05:05:01', '1995-05-04 01:03:02');

--
-- Volcado de datos para la tabla `session`
--

INSERT INTO `SESSION` (`PATIENT_ID`, `DATA`, `DATE_TIME`, `NUM`) VALUES
(1, 'Sin data','2021-09-08 01:03:02',1),
(1, 'Con algo de data','2021-01-02 02:02:04',2),
(2, 'Sin data', '2021-03-04 01:07:02',3);
