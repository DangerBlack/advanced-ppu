-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 11, 2017 at 05:24 PM
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
-- Table structure for table `brevetti`
--

CREATE TABLE IF NOT EXISTS `brevetti` (
  `idbrevetti` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `immagine` varchar(45) DEFAULT NULL,
  `esempi` text,
  PRIMARY KEY (`idbrevetti`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

-- --------------------------------------------------------

--
-- Table structure for table `brevettiimpegni`
--

CREATE TABLE IF NOT EXISTS `brevettiimpegni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scout_idscout` int(11) NOT NULL,
  `brevetti_idbrevetti` int(11) NOT NULL,
  `impegno` varchar(500) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `completato` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=54 ;

-- --------------------------------------------------------

--
-- Table structure for table `brevettiscout`
--

CREATE TABLE IF NOT EXISTS `brevettiscout` (
  `brevetti_idbrevetti` int(11) NOT NULL,
  `scout_idscout` int(11) NOT NULL,
  `maestro` varchar(45) DEFAULT NULL,
  `datainizio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` date DEFAULT NULL,
  `conquistata` tinyint(1) NOT NULL DEFAULT '0',
  `varie` longtext,
  PRIMARY KEY (`brevetti_idbrevetti`,`scout_idscout`),
  KEY `fk_brevetti_has_scout_scout1_idx` (`scout_idscout`),
  KEY `fk_brevetti_has_scout_brevetti1_idx` (`brevetti_idbrevetti`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `commenti`
--

CREATE TABLE IF NOT EXISTS `commenti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scout_idscout` int(11) NOT NULL,
  `idutenti` int(11) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `titolo` varchar(100) NOT NULL,
  `testo` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=34 ;

-- --------------------------------------------------------

--
-- Table structure for table `metescout`
--

CREATE TABLE IF NOT EXISTS `metescout` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idtappescout` int(11) NOT NULL,
  `datainizio` date NOT NULL,
  `dataobiettivo` date DEFAULT NULL,
  `raggiunta` int(11) NOT NULL DEFAULT '0',
  `meta` varchar(250) DEFAULT NULL,
  `impegno` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=40 ;

-- --------------------------------------------------------

--
-- Table structure for table `scout`
--

CREATE TABLE IF NOT EXISTS `scout` (
  `idscout` int(11) NOT NULL AUTO_INCREMENT,
  `cognome` varchar(45) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `codice` int(11) DEFAULT NULL,
  `indirizzo` varchar(150) DEFAULT NULL,
  `datanascita` date DEFAULT NULL,
  `residenza` varchar(45) DEFAULT NULL,
  `sesso` char(1) NOT NULL,
  `luogonascita` varchar(45) DEFAULT NULL,
  `cap` varchar(5) DEFAULT NULL,
  `provincia` varchar(2) DEFAULT 'PI',
  `nazione` varchar(3) DEFAULT 'ITA',
  `numbabbo` varchar(30) DEFAULT NULL,
  `nummamma` varchar(30) DEFAULT NULL,
  `numcasa` varchar(30) DEFAULT NULL,
  `numcell` varchar(30) DEFAULT NULL,
  `numnonno` varchar(30) DEFAULT NULL,
  `mailbabbo` varchar(30) DEFAULT NULL,
  `mailmamma` varchar(30) DEFAULT NULL,
  `mail` varchar(30) DEFAULT NULL,
  `photo` varchar(40) DEFAULT 'user.jpg',
  `squadriglie_idsquadriglie` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idscout`),
  KEY `fk_scout_squadriglie_idx` (`squadriglie_idsquadriglie`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=100 ;

-- --------------------------------------------------------

--
-- Table structure for table `scoutStorico`
--

CREATE TABLE IF NOT EXISTS `scoutStorico` (
  `idscout` int(11) NOT NULL AUTO_INCREMENT,
  `cognome` varchar(45) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `codice` int(11) DEFAULT NULL,
  `indirizzo` varchar(150) DEFAULT NULL,
  `datanascita` date DEFAULT NULL,
  `residenza` varchar(45) DEFAULT NULL,
  `sesso` char(1) NOT NULL,
  `luogonascita` varchar(45) DEFAULT NULL,
  `cap` varchar(5) DEFAULT NULL,
  `provincia` varchar(2) DEFAULT 'PI',
  `nazione` varchar(3) DEFAULT 'ITA',
  `numbabbo` varchar(30) DEFAULT NULL,
  `nummamma` varchar(30) DEFAULT NULL,
  `numcasa` varchar(30) DEFAULT NULL,
  `numcell` varchar(30) DEFAULT NULL,
  `numnonno` varchar(30) DEFAULT NULL,
  `mailbabbo` varchar(30) DEFAULT NULL,
  `mailmamma` varchar(30) DEFAULT NULL,
  `mail` varchar(30) DEFAULT NULL,
  `varie` longtext,
  `photo` varchar(40) DEFAULT 'user.jpg',
  `squadriglie_idsquadriglie` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idscout`),
  KEY `fk_scout_squadriglie_idx` (`squadriglie_idsquadriglie`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=64 ;

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

-- --------------------------------------------------------

--
-- Table structure for table `specialitaimpegni`
--

CREATE TABLE IF NOT EXISTS `specialitaimpegni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scout_idscout` int(11) NOT NULL,
  `specialita_idspecialita` int(11) NOT NULL,
  `impegno` varchar(200) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `completato` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=200 ;

-- --------------------------------------------------------

--
-- Table structure for table `specialitascout`
--

CREATE TABLE IF NOT EXISTS `specialitascout` (
  `specialita_idspecialita` int(11) NOT NULL,
  `scout_idscout` int(11) NOT NULL,
  `maestro` varchar(45) DEFAULT NULL,
  `datainizio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` date DEFAULT NULL,
  `conquistata` tinyint(1) NOT NULL DEFAULT '0',
  `varie` longtext,
  PRIMARY KEY (`specialita_idspecialita`,`scout_idscout`),
  KEY `fk_specialita_has_scout_scout1_idx` (`scout_idscout`),
  KEY `fk_specialita_has_scout_specialita1_idx` (`specialita_idspecialita`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `squadriglie`
--

CREATE TABLE IF NOT EXISTS `squadriglie` (
  `idsquadriglie` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sesso` char(1) NOT NULL,
  `guidone` varchar(45) DEFAULT NULL,
  `colore1` varchar(6) NOT NULL DEFAULT 'FFFFFF',
  `colore2` varchar(6) NOT NULL DEFAULT 'FFFFFF',
  `status` int(11) NOT NULL DEFAULT '2',
  PRIMARY KEY (`idsquadriglie`),
  UNIQUE KEY `nome_UNIQUE` (`nome`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

-- --------------------------------------------------------

--
-- Table structure for table `tappe`
--

CREATE TABLE IF NOT EXISTS `tappe` (
  `idtappe` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `immagine` varchar(45) DEFAULT NULL,
  `metodo` text,
  PRIMARY KEY (`idtappe`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

-- --------------------------------------------------------

--
-- Table structure for table `tappescout`
--

CREATE TABLE IF NOT EXISTS `tappescout` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tappe_idtappe` int(11) NOT NULL,
  `scout_idscout` int(11) NOT NULL,
  `dataconquistata` date DEFAULT NULL,
  `conquistata` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=172 ;

-- --------------------------------------------------------

--
-- Table structure for table `utenti`
--

CREATE TABLE IF NOT EXISTS `utenti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `utente` text NOT NULL,
  `email` varchar(300) DEFAULT NULL,
  `pswd` text NOT NULL,
  `photo` varchar(200) NOT NULL DEFAULT 'user.jpg',
  `ruolo` int(11) NOT NULL DEFAULT '2',
  `branca` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
