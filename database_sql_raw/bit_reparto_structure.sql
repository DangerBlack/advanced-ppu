-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generato il: Set 11, 2015 alle 15:29
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
-- Struttura della tabella `brevetti`
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
-- Struttura della tabella `brevettiimpegni`
--

CREATE TABLE IF NOT EXISTS `brevettiimpegni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scout_idscout` int(11) NOT NULL,
  `brevetti_idbrevetti` int(11) NOT NULL,
  `impegno` varchar(500) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `completato` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `brevettiscout`
--

CREATE TABLE IF NOT EXISTS `brevettiscout` (
  `brevetti_idbrevetti` int(11) NOT NULL,
  `scout_idscout` int(11) NOT NULL,
  `maestro` varchar(45) DEFAULT NULL,
  `datainizio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` date DEFAULT NULL,
  `conquistata` tinyint(1) NOT NULL DEFAULT '0',
  `prova1` varchar(200) DEFAULT NULL,
  `prova2` varchar(200) DEFAULT NULL,
  `prova3` varchar(200) DEFAULT NULL,
  `prova4` varchar(200) DEFAULT NULL,
  `prova5` varchar(200) DEFAULT NULL,
  `prova6` varchar(200) DEFAULT NULL,
  `varie` longtext,
  PRIMARY KEY (`brevetti_idbrevetti`,`scout_idscout`),
  KEY `fk_brevetti_has_scout_scout1_idx` (`scout_idscout`),
  KEY `fk_brevetti_has_scout_brevetti1_idx` (`brevetti_idbrevetti`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `commenti`
--

CREATE TABLE IF NOT EXISTS `commenti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scout_idscout` int(11) NOT NULL,
  `idutenti` int(11) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `titolo` varchar(100) NOT NULL,
  `testo` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `log`
--

CREATE TABLE IF NOT EXISTS `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` date NOT NULL,
  `user` varchar(20) NOT NULL,
  `query` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1560 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `maestridispecialita`
--

CREATE TABLE IF NOT EXISTS `maestridispecialita` (
  `nome` varchar(10) DEFAULT NULL,
  `cognome` varchar(10) DEFAULT NULL,
  `idspec` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `mete`
--

CREATE TABLE IF NOT EXISTS `mete` (
  `tappe_idtappe` int(11) NOT NULL,
  `scout_idscout` int(11) NOT NULL,
  `capo` varchar(10) NOT NULL DEFAULT 'Nicola',
  `data` date DEFAULT NULL,
  `conquistata` tinyint(1) NOT NULL DEFAULT '0',
  `meta1` varchar(200) DEFAULT NULL,
  `meta2` varchar(200) DEFAULT NULL,
  `meta3` varchar(200) DEFAULT NULL,
  `meta4` varchar(200) DEFAULT NULL,
  `meta5` varchar(200) DEFAULT NULL,
  `meta6` varchar(200) DEFAULT NULL,
  `varie` int(11) DEFAULT NULL,
  PRIMARY KEY (`tappe_idtappe`,`scout_idscout`),
  KEY `fk_tappe_has_scout_scout1_idx` (`scout_idscout`),
  KEY `fk_tappe_has_scout_tappe1_idx` (`tappe_idtappe`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `metescout`
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `scout`
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
  `varie` longtext,
  `photo` varchar(40) DEFAULT 'user.jpg',
  `squadriglie_idsquadriglie` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idscout`),
  KEY `fk_scout_squadriglie_idx` (`squadriglie_idsquadriglie`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=76 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `scoutStorico`
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
-- Struttura della tabella `specialita`
--

CREATE TABLE IF NOT EXISTS `specialita` (
  `idspecialita` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `immagine` varchar(45) DEFAULT NULL,
  `esempi` text,
  PRIMARY KEY (`idspecialita`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=151 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `specialitaimpegni`
--

CREATE TABLE IF NOT EXISTS `specialitaimpegni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `scout_idscout` int(11) NOT NULL,
  `specialita_idspecialita` int(11) NOT NULL,
  `impegno` varchar(200) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `completato` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=84 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `specialitascout`
--

CREATE TABLE IF NOT EXISTS `specialitascout` (
  `specialita_idspecialita` int(11) NOT NULL,
  `scout_idscout` int(11) NOT NULL,
  `maestro` varchar(45) DEFAULT NULL,
  `datainizio` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` date DEFAULT NULL,
  `conquistata` tinyint(1) NOT NULL DEFAULT '0',
  `prova1` varchar(200) DEFAULT NULL,
  `prova2` varchar(200) DEFAULT NULL,
  `prova3` varchar(200) DEFAULT NULL,
  `prova4` varchar(200) DEFAULT NULL,
  `prova5` varchar(200) DEFAULT NULL,
  `prova6` varchar(200) DEFAULT NULL,
  `varie` longtext,
  PRIMARY KEY (`specialita_idspecialita`,`scout_idscout`),
  KEY `fk_specialita_has_scout_scout1_idx` (`scout_idscout`),
  KEY `fk_specialita_has_scout_specialita1_idx` (`specialita_idspecialita`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struttura della tabella `squadriglie`
--

CREATE TABLE IF NOT EXISTS `squadriglie` (
  `idsquadriglie` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `sesso` char(1) NOT NULL,
  `guidone` varchar(45) DEFAULT NULL,
  `colore1` varchar(6) NOT NULL DEFAULT 'FFFFFF',
  `colore2` varchar(6) NOT NULL DEFAULT 'FFFFFF',
  PRIMARY KEY (`idsquadriglie`),
  UNIQUE KEY `nome_UNIQUE` (`nome`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `tappe`
--

CREATE TABLE IF NOT EXISTS `tappe` (
  `idtappe` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `immagine` varchar(45) DEFAULT NULL,
  `metodo` text,
  PRIMARY KEY (`idtappe`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `tappescout`
--

CREATE TABLE IF NOT EXISTS `tappescout` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tappe_idtappe` int(11) NOT NULL,
  `scout_idscout` int(11) NOT NULL,
  `dataconquistata` date DEFAULT NULL,
  `conquistata` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=100 ;

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE IF NOT EXISTS `utenti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `utente` text NOT NULL,
  `email` varchar(300) DEFAULT NULL,
  `pswd` text NOT NULL,
  `photo` varchar(200) NOT NULL DEFAULT 'user.jpg',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
