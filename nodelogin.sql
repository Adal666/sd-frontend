-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2022 a las 02:24:45
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nodelogin`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`email`, `name`, `password`) VALUES
('araceus@hotmail.com', 'Ricardo', '$2b$12$FRjvfF07ANI/8Lb.hJ49v.Y.VqN4qaT/YS2aARlDKkEdq217acdo2'),
('rociocrochetgdl@gmail.com', 'ricardo adalberto', '$2b$12$1/oPcaOQOmx5gz8hiHJpke1EKVhR7Kh./qKLHuJsSq8jovI5I8Twe'),
('romeromedinar612@gmail.com', 'RICARDOADALBERTO ROMERO M', '$2b$12$2MjgH5wVMazOTPf11LcmDepSc8SySHbKl6eehnrPNg53OET7WTbSq'),
('za210120103@zapopan.tecmm.edu.mx', 'Potta', '$2b$12$Y6bqbDFvc10KnxE1Q0PAmepOACUnRaurUezg.KRBOWIF.BBlxGbZO');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
