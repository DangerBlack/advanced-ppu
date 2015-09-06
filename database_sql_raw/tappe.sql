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
-- Struttura della tabella `tappe`
--

CREATE TABLE IF NOT EXISTS `tappe` (
  `idtappe` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `immagine` varchar(45) DEFAULT NULL,
  `metodo` text,
  PRIMARY KEY (`idtappe`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dump dei dati per la tabella `tappe`
--

INSERT INTO `tappe` (`idtappe`, `nome`, `immagine`, `metodo`) VALUES
(1, 'Scoperta', 'tappe/scoperta.jpg', '<article>  <p> La prima TAPPA del Sentiero ha un primo momento che costituisce un <i>unicum</i> della vita: quello che porta alla PROMESSA.</p>  <p>  Questo e'' lo spazio/ tempo per la scoperta delle nuove regole del gioco, la scoperta del Reparto e della Squadriglia;   per rimettere in gioco, senza buttare via niente, ma riconoscendo quello che si e'' per incamminarsi verso quello che   si vuole diventare, quanto acquisito in COMPETENZA in L/C e negli altri mondi vitali; per accettare la regole-la Legge   del Reparto entrando in una nuova comunita'', per assumere la RESPONSABILITA'' della PROMESSA.</p>  <p> Questo <i>unicum</i> costituisce anche il ponte tra la Progressione Personale del Branco e il Sentiero del Reparto,  senza che ci siano cesure nella Progressione Personale. </p>  <b>Strumenti metodologici</b> <br />  <p> per questo primo momento del Sentiero sono: la Legge Scout, la Promessa, il Motto, la Squadriglia, la Comunita'' mondiale dello scoutismo.</p>  <p> il 2 momento verso la CONQUISTA DELLA TAPPA sara'' quello della SCOPERTA dell''avventura del Reparto come spazio vitale dell''E/G ;  della acquisizione delle COMPETENZE che sono necessarie per giocare il gioco del Reparto, del cammino verso le specialita'',  della rivalutazione di quelle conquistate in Branco/Cerchio e di quelle acquisite negli altri mondi vitali. La RESPONSABILITA''  sara'' verificata nella capacita'' di portare a termine i propri impegni</p>  <b>Strumenti metodologici</b>  <p>  per questo secondo memento potranno essere: la vita di Squadriglia, l''incarico di Squadriglia, le Specialita'' e la Carta di Specialita'', i Campi di Specialita'', le specialita'' di Squadriglia</p>  </article>'),
(2, 'Competenza', 'tappe/competenza.jpg', '<article>\r\n<p>La seconda TAPPA si caratterizza come quella della <b>COMPETENZA</b>\r\nattraverso un percorso che dalla SCOPERTA dei propri talenti porti al loro\r\norientamento e al loro fruttificare (dal mi piace fare questo al so fare bene questo) \r\ncon l''acquisizione della proprie COMPETENZE.<br />\r\nQuesto e'' lo spazio /tempo per la scoperta dei propri talenti, per acquisire COMPETENZA\r\ne per dimostrare la propria RESPONSABILITA'' nel saper fare\r\nbene insieme con gli altri cio'' che si e'' imparato a fare.<br />\r\nAnche in questa tappa sara'' bene individuare la scansione di 2 momenti.</p>\r\n<p>\r\nIl 1 momento sara'' quello del\r\n<b>TEMPO DELLA SPECIALITA''</b>.\r\nLa conquista delle Specialita'', individuate anche prendendo coscienza dei\r\npropri confini/limiti riscontrabili dalla\r\npartecipazione al gioco del Reparto; la\r\npartecipazione ai Campi di Specialita'';\r\nl''individuazione dei Posti d''Azione nella <b>Imprese</b>; la Specialita'' di Squadriglia saranno\r\ngli strumenti metodologici che funzioneranno da esca in questo primo momento</p>\r\n<p>\r\nUna cerimonia opportuna un simbolismo\r\nadeguato segneranno il passaggio tra il\r\ntempo della Specialita'' e quello del Brevetto\r\ndi Competenza che costituisce il 2\r\nmomento di questa tappa. Questo per ovviare al rischio che una tappa che\r\npuo'' durare due anni diventi un orizzonte troppo lungo per un ragazzo. La\r\ndivisione in due tempi aiuta il passaggio tra il momento pedagogico della\r\nSpecialita'' e quello del Brevetto di Competenza\r\n</p>\r\n<p>\r\nIl 2 momento sara'' quello del <b>TEMPO DELLA COMPETENZA</b>.\r\nGli strumenti metodologici saranno quelli\r\nlegati alla conquista del Brevetto di\r\nCompetenza: la Carta di Competenza, il Campi\r\nverso la Competenza, oltre naturalmente al Consiglio d''Impresa, alla\r\nSpecialita'' di Squadriglia e quando verra'' il tempo opportuno all''Alta Squadriglia\r\n</p>\r\n</article>'),
(3, 'responsabilita', 'tappe/responsabilita.jpg', '<article>\r\n<p>La <b>TAPPA DELLA RESPONSABILITA''</b> e'' lo spazio /tempo per la SCOPERTA\r\n(come ri-scoperta) della propria fedelta'' alla Legge e alla appartenenza al\r\nReparto; del mettere la propria COMPETENZA al servizio delle comunita'' di appartenenza; della\r\n<b>RESPONSABILITA''</b> oltre che verso le cose anche verso i processi, le\r\nrelazioni, le persone</p>\r\n<p>Gli strumenti metodologici da valorizzare saranno quelli nei quali gli\r\nE/G sono chiamati a giocare un ruolo di <b>RESPONSABILITA''</b> : il Consiglio\r\nCapi, il Consiglio d''Impresa, il ruolo di Capo Squadriglia (e Vice Capo\r\nSquadriglia), la partecipazione all''Alta Squadriglia, oltre naturalmente alla\r\nLegge, alla Promessa, al Motto, vissute come testimonianza nei\r\nconfronti dei piu'' piccoli del Reparto</p>\r\n</article>');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
