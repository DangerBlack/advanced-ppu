-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generato il: Set 06, 2015 alle 17:31
-- Versione del server: 5.5.44-0ubuntu0.14.04.1
-- Versione PHP: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bit_reparto`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `specialita`
--

CREATE TABLE IF NOT EXISTS `specialita` (
  `idspecialita` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `immagine` varchar(45) DEFAULT NULL,
  `esempi` text,
  PRIMARY KEY (`idspecialita`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=151 ;

--
-- Dump dei dati per la tabella `specialita`
--

INSERT INTO `specialita` (`idspecialita`, `nome`, `immagine`, `esempi`) VALUES
(68, 'allevatore', 'spec/allevatore.jpg', NULL),
(69, 'alpinista', 'spec/alpinista.jpg', NULL),
(70, 'amico degli animali', 'spec/amicodeglianimali.jpg', NULL),
(71, 'amico del quartiere', 'spec/amicodelquartiere.jpg', NULL),
(72, 'archeologo', 'spec/archeologo.jpg', NULL),
(73, 'artigiano', 'spec/artigiano.jpg', NULL),
(74, 'artista di strada', 'spec/artistadistrada.jpg', NULL),
(75, 'astronomo', 'spec/astronomo.jpg', NULL),
(76, 'atleta', 'spec/atleta.jpg', NULL),
(78, 'attore', 'spec/attore.jpg', NULL),
(79, 'batteliere', 'spec/batteliere.jpg', NULL),
(80, 'boscaiolo', 'spec/boscaiolo.jpg', NULL),
(81, 'botanico', 'spec/botanico.jpg', NULL),
(83, 'campeggiatore', 'spec/campeggiatore.jpg', NULL),
(85, 'canoista', 'spec/canoista.jpg', NULL),
(86, 'cantante', 'spec/cantante.jpg', NULL),
(87, 'carpentiere navale', 'spec/carpentierenavale.jpg', NULL),
(89, 'ciclista', 'spec/ciclista.jpg', NULL),
(90, 'collezionista', 'spec/collezionista.jpg', NULL),
(91, 'coltivatore', 'spec/coltivatore.jpg', NULL),
(92, 'corrispondente', 'spec/corrispondente.jpg', NULL),
(93, 'corrispondente radio', 'spec/corrispondenteradio.jpg', NULL),
(94, 'cuoco', 'spec/cuoco.jpg', NULL),
(95, 'danzatore', 'spec/danzatore.jpg', NULL),
(97, 'disegnatore', 'spec/disegnatore.jpg', NULL),
(98, 'elettricista', 'spec/elettricista.jpg', NULL),
(99, 'elettronico', 'spec/elettronico.jpg', NULL),
(100, 'esperto del computer', 'spec/espertodelcomputer.jpg', NULL),
(101, 'falegname', 'spec/falegname.jpg', NULL),
(102, 'fa tutto', 'spec/omnia.jpg', NULL),
(104, 'folclorista', 'spec/folclorista.jpg', NULL),
(105, 'fotografo', 'spec/fotografo.jpg', NULL),
(107, 'giardiniere', 'spec/giardiniere.jpg', NULL),
(108, 'giocattolaio', 'spec/giocattolaio', NULL),
(109, 'grafico', 'spec/grafico.jpg', NULL),
(110, 'guida', 'spec/guida.jpg', NULL),
(111, 'guida marina', 'spec/guidamarina.jpg', NULL),
(112, 'hebertista', 'spec/hebertista.jpg', NULL),
(113, 'idraulico', 'spec/idraulico', NULL),
(114, 'infermiere', 'spec/infermiere.jpg', NULL),
(115, 'interprete', 'spec/interprete.jpg', NULL),
(116, 'lavoratore in cuoio', 'spec/lavoratoreincuoio.jpg', NULL),
(117, 'maestro dei giochi', 'spec/maestrodeigiochi.jpg', NULL),
(118, 'maestro dei nodi', 'spec/maestrodeinodi.jpg', NULL),
(120, 'meccanico', 'spec/meccanico.jpg', NULL),
(121, 'modellista', 'spec/modellista.jpg', NULL),
(123, 'muratore', 'spec/muratore.jpg', NULL),
(124, 'musicista', 'spec/musicista.jpg', NULL),
(125, 'naturalista', 'spec/naturalista.jpg', NULL),
(142, 'europeista', 'spec/europeista.jpg', NULL),
(127, 'nuotatore', 'spec/nuotatore.jpg', NULL),
(128, 'osservatore', 'spec/osservatore.jpg', NULL),
(129, 'osservatore meteo', 'spec/osservatoremeteo.jpg', NULL),
(130, 'pescatore', 'spec/pescatore.jpg', NULL),
(131, 'pompiere', 'spec/pompiere.jpg', NULL),
(132, 'redattore', 'spec/redattore.jpg', NULL),
(133, 'regista', 'spec/regista.jpg', NULL),
(134, 'sarto', 'spec/sarto.jpg', NULL),
(135, 'scenografo', 'spec/scenografo.jpg', NULL),
(136, 'segnalatore', 'spec/segnalatore.jpg', NULL),
(137, 'servizio della parola', 'spec/serviziodellaparola.jpg', NULL),
(138, 'servizio liturgico', 'spec/servizioliturgico.jpg', NULL),
(139, 'servizio missionario', 'spec/serviziomissionario.jpg', NULL),
(140, 'topografo', 'spec/topografo.jpg', NULL),
(141, 'velista', 'spec/velista.jpg', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
