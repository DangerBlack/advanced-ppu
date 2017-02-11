-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 11, 2017 at 05:18 PM
-- Server version: 5.5.54-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.20

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
-- Table structure for table `specialita`
--

CREATE TABLE IF NOT EXISTS `specialita` (
  `idspecialita` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `immagine` varchar(45) DEFAULT NULL,
  `esempi` text,
  `status` int(11) NOT NULL DEFAULT '2',
  PRIMARY KEY (`idspecialita`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=144 ;

--
-- Dumping data for table `specialita`
--

INSERT INTO `specialita` (`idspecialita`, `nome`, `immagine`, `esempi`, `status`) VALUES
(1, 'amico degli animali', 'spec/lc/amicodeglianimali.jpg', NULL, 1),
(2, 'amico del mare', 'spec/lc/amicodelmare.jpg', NULL, 1),
(3, 'amico della natura', 'spec/lc/amicodellanatura.jpg', NULL, 1),
(4, 'amico di aronne', 'spec/lc/amicodiaronne.jpg', NULL, 1),
(5, 'amico di samuele', 'spec/lc/amicodisamuele.jpg', NULL, 1),
(6, 'amico di san francesco', 'spec/lc/amicodisanfrancesco.jpg', NULL, 1),
(7, 'artigiano', 'spec/lc/artigiano.jpg', NULL, 1),
(8, 'astronomo', 'spec/lc/astronomo.jpg', NULL, 1),
(9, 'atleta', 'spec/lc/atleta.jpg', NULL, 1),
(10, 'attore', 'spec/lc/attore.jpg', NULL, 1),
(11, 'botanico', 'spec/lc/botanico.jpg', NULL, 1),
(12, 'canterino', 'spec/lc/canterino.jpg', NULL, 1),
(13, 'cercatore di tracce', 'spec/lc/cercatoreditracce.jpg', NULL, 1),
(14, 'cittadino del mondo', 'spec/lc/cittadinodelmondo.jpg', NULL, 1),
(15, 'collezionista', 'spec/lc/collezionista.jpg', NULL, 1),
(16, 'cuoco', 'spec/lc/cuoco.jpg', NULL, 1),
(17, 'disegnatore', 'spec/lc/disegnatore.jpg', NULL, 1),
(18, 'folclorista', 'spec/lc/folclorista.jpg', NULL, 1),
(19, 'fotografo', 'spec/lc/fotografo.jpg', NULL, 1),
(20, 'giardiniere', 'spec/lc/giardiniere.jpg', NULL, 1),
(21, 'giocatore di squadra', 'spec/lc/giocatoredisquadra.jpg', NULL, 1),
(22, 'giocattolaio', 'spec/lc/giocattolaio.jpg', NULL, 1),
(23, 'giornalista', 'spec/lc/giornalista.jpg', NULL, 1),
(24, 'guida', 'spec/lc/guida.jpg', NULL, 1),
(25, 'infermiere', 'spec/lc/infermiere.jpg', NULL, 1),
(26, 'kim', 'spec/lc/kim.jpg', NULL, 1),
(27, 'maestro dei giochi', 'spec/lc/maestrodeigiochi.jpg', NULL, 1),
(28, 'maestro dei boschi', 'spec/lc/maestrodeiboschi.jpg', NULL, 1),
(29, 'maestro della salute', 'spec/lc/maestrodellasalute.jpg', NULL, 1),
(30, 'mani abili', 'spec/lc/maniabili.jpg', NULL, 1),
(31, 'massaio', 'spec/lc/massaio.jpg', NULL, 1),
(32, 'meteorologo', 'spec/lc/meteorologo.jpg', NULL, 1),
(33, 'musicista', 'spec/lc/musicista.jpg', NULL, 1),
(34, 'ripara-ricicla', 'spec/lc/ripara-ricicla.jpg', NULL, 1),
(35, 'sarto', 'spec/lc/sarto.jpg', NULL, 1),
(36, 'scaccia pericoli', 'spec/lc/scacciapericoli.jpg', NULL, 1),
(37, 'scrittore', 'spec/lc/scrittore.jpg', NULL, 1),
(68, 'allevatore', 'spec/allevatore.jpg', NULL, 2),
(69, 'alpinista', 'spec/alpinista.jpg', NULL, 2),
(70, 'amico degli animali', 'spec/amicodeglianimali.jpg', NULL, 2),
(71, 'amico del quartiere', 'spec/amicodelquartiere.jpg', NULL, 2),
(72, 'archeologo', 'spec/archeologo.jpg', NULL, 2),
(73, 'artigiano', 'spec/artigiano.jpg', NULL, 2),
(74, 'artista di strada', 'spec/artistadistrada.jpg', NULL, 2),
(75, 'astronomo', 'spec/astronomo.jpg', NULL, 2),
(76, 'atleta', 'spec/atleta.jpg', NULL, 2),
(78, 'attore', 'spec/attore.jpg', NULL, 2),
(79, 'batteliere', 'spec/batteliere.jpg', NULL, 2),
(80, 'boscaiolo', 'spec/boscaiolo.jpg', NULL, 2),
(81, 'botanico', 'spec/botanico.jpg', NULL, 2),
(83, 'campeggiatore', 'spec/campeggiatore.jpg', NULL, 2),
(85, 'canoista', 'spec/canoista.jpg', NULL, 2),
(86, 'cantante', 'spec/cantante.jpg', NULL, 2),
(87, 'carpentiere navale', 'spec/carpentierenavale.jpg', NULL, 2),
(89, 'ciclista', 'spec/ciclista.jpg', NULL, 2),
(90, 'collezionista', 'spec/collezionista.jpg', NULL, 2),
(91, 'coltivatore', 'spec/coltivatore.jpg', NULL, 2),
(92, 'corrispondente', 'spec/corrispondente.jpg', NULL, 2),
(93, 'corrispondente radio', 'spec/corrispondenteradio.jpg', NULL, 2),
(94, 'cuoco', 'spec/cuoco.jpg', NULL, 2),
(95, 'danzatore', 'spec/danzatore.jpg', NULL, 2),
(97, 'disegnatore', 'spec/disegnatore.jpg', NULL, 2),
(98, 'elettricista', 'spec/elettricista.jpg', NULL, 2),
(99, 'elettronico', 'spec/elettronico.jpg', NULL, 2),
(100, 'esperto del computer', 'spec/espertodelcomputer.jpg', NULL, 2),
(101, 'falegname', 'spec/falegname.jpg', NULL, 2),
(102, 'fa tutto', 'spec/omnia.jpg', NULL, 2),
(104, 'folclorista', 'spec/folclorista.jpg', NULL, 2),
(105, 'fotografo', 'spec/fotografo.jpg', NULL, 2),
(107, 'giardiniere', 'spec/giardiniere.jpg', NULL, 2),
(108, 'giocattolaio', 'spec/giocattolaio', NULL, 2),
(109, 'grafico', 'spec/grafico.jpg', NULL, 2),
(110, 'guida', 'spec/guida.jpg', NULL, 2),
(111, 'guida marina', 'spec/guidamarina.jpg', NULL, 2),
(112, 'hebertista', 'spec/hebertista.jpg', NULL, 2),
(113, 'idraulico', 'spec/idraulico', NULL, 2),
(114, 'infermiere', 'spec/infermiere.jpg', NULL, 2),
(115, 'interprete', 'spec/interprete.jpg', NULL, 2),
(116, 'lavoratore in cuoio', 'spec/lavoratoreincuoio.jpg', NULL, 2),
(117, 'maestro dei giochi', 'spec/maestrodeigiochi.jpg', NULL, 2),
(118, 'maestro dei nodi', 'spec/maestrodeinodi.jpg', NULL, 2),
(120, 'meccanico', 'spec/meccanico.jpg', NULL, 2),
(121, 'modellista', 'spec/modellista.jpg', NULL, 2),
(123, 'muratore', 'spec/muratore.jpg', NULL, 2),
(124, 'musicista', 'spec/musicista.jpg', NULL, 2),
(125, 'naturalista', 'spec/naturalista.jpg', NULL, 2),
(127, 'nuotatore', 'spec/nuotatore.jpg', NULL, 2),
(128, 'osservatore', 'spec/osservatore.jpg', NULL, 2),
(129, 'osservatore meteo', 'spec/osservatoremeteo.jpg', NULL, 2),
(130, 'pescatore', 'spec/pescatore.jpg', NULL, 2),
(131, 'pompiere', 'spec/pompiere.jpg', NULL, 2),
(132, 'redattore', 'spec/redattore.jpg', NULL, 2),
(133, 'regista', 'spec/regista.jpg', NULL, 2),
(134, 'sarto', 'spec/sarto.jpg', NULL, 2),
(135, 'scenografo', 'spec/scenografo.jpg', NULL, 2),
(136, 'segnalatore', 'spec/segnalatore.jpg', NULL, 2),
(137, 'servizio della parola', 'spec/serviziodellaparola.jpg', NULL, 2),
(138, 'servizio liturgico', 'spec/servizioliturgico.jpg', NULL, 2),
(139, 'servizio missionario', 'spec/serviziomissionario.jpg', NULL, 2),
(142, 'europeista', 'spec/europeista.jpg', NULL, 2),
(140, 'topografo', 'spec/topografo.jpg', NULL, 2),
(141, 'velista', 'spec/velista.jpg', NULL, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
