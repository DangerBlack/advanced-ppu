-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generato il: Set 06, 2015 alle 17:30
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

--
-- Dump dei dati per la tabella `brevetti`
--

INSERT INTO `brevetti` (`idbrevetti`, `nome`, `immagine`, `esempi`) VALUES
(17, 'Guida Alpina', 'brev/alpina.jpg', '<h2>Guida alpina (Brevetto E/G)</h2>\n<p>Un repartista per ottenere il brevetto di guida alpina deve:</p>\n<ul>\n<li>aver compiuto escursioni con lâ€™aiuto di persone competenti e aver sperimentato la progressione su vie ferrate e le tecniche di arrampicata;</li>\n<li>aver imparato lâ€™uso dei vari tipi di attrezzatura personale alpinistica, le principali manovre di corda e i nodi utili;</li>\n<li>saper costruire un riparo di fortuna, e conoscere le precauzioni da prendere in caso di brutto tempo o temporale;</li>\n<li>la capacitÃ  di riconoscere i cambiamenti del tempo dai segnali che offre la natura;</li>\n<li>saper equipaggiare in modo adatto alle diverse occasioni di escursione e conoscere i materiali usati;</li>\n<li>conoscere il potere alimentare dei vari cibi.</li>\n</ul> \n\n<b>SpecialitÃ </b>:    \nAlpinista,\n    Amico degli animali,\n    Astronomo,\n    Botanico,\n    Fotografo,\n    Geologo,\n    Guida,\n    Hebertista,\n    Infermiere,\n    Naturalista,\n    Nuotatore,\n    Osservatore,\n    Osservatore meteo,\n    Pompiere,\n    Segnalatore,\n    Topografo.'),
(18, 'Amico della Natura', 'brev/amico.jpg', NULL),
(19, 'Animazione Espressiva', 'brev/espressiva.jpg', '<h2>Animazione espressiva (Brevetto E/G)</h2>\n<p>Per ottenere questa competenza l''E/G deve: </p>\n<ul>\n<li>avere una buona conoscenza di svariate tecniche espressive,</li>\n<li>essere in grado:\n<ul><li>di gestire, di coordinare e animare fuochi di bivacco, spettacoli e veglie;</li>\n<li>di comporre un copione e gestire la regia di attivitÃ  espressive.</li>\n</ul>\n<li>comprendere lâ€™importanza della comunicazione espressiva, del messaggio da comunicare, dellâ€™organizzazione e della pianificazione di ogni attivitÃ  espressiva complessa.</li>\n</ul>\n<b>SpecialitÃ  collegate</b>:\nAttore,\n    Cantante,\n    Disegnatore,\n    Elettricista,\n    Falegname,\n    Fa tutto,\n    Fotografo,\n    Maestro dei giochi,\n    Musicista,\n    Redattore,\n    Sarto,\n    Servizio della Parola,\n    Servizio liturgico.'),
(20, 'Animazione Giornalistica', 'brev/giornalistica.jpg', '<h2>Animazione giornalistica (Brevetto E/G)</h2>\n<p>Per ottenere questa competenza l''E/G deve: </p>\n<ul>\n<li>aver sviluppato senso critico rispetto allâ€™obbiettivitÃ  della comunicazione giornalistica,\n</li>\n<li>saper utilizzare in modo approfondito i linguaggi giornalistici come la scrittura, la fotografia e le riprese televisive, saper scrivere correttamente e in buon italiano,\n</li>\n<li>conoscere e aver sperimentato lâ€™organizzazione di un giornale, sapendo preparare un timone, un menabÃ², reperire le immagini a corredo di un articolo,\n</li>\n<li>conoscere almeno un programma di videoscrittura o di impaginazione elettronica,\n</li>\n<li>aver organizzato un lavoro di inchiesta o un reportage su argomenti di interesse generale,\n</li>\n<li>aver coordinato e gestito un giornalino,\n</li>\n<li>aver impostato i testi e le immagini per un sito web di informazione.\n</li>\n</ul>\n\n<b>SpecialitÃ </b>:\nAmico del quartiere,\n    Corrispondente,\n    Corrispondente radio,\n    Esperantista,\n    Europeista,\n    Folclorista,\n    Fotografo,\n    Guida,\n    Informatico,\n    Interprete,\n    Osservatore,\n    Redattore,\n    Stenografo.'),
(21, 'Animazione Grafica e Multimediale', 'brev/grafica.jpg', '<h2>Animazione grafica (Brevetto E/G)</h2>\n<p>Per ottenere la competenza l''E/G deve: </p>\n<ul>\n<li>saper disegnare, fotografare e illustrare,\n</li>\n<li>conoscere i principi di illustrazione e impaginazione,\n</li>\n<li>saper utilizzare programmi di elaborazione grafica elettronica e comprendere lâ€™importanza della composizione dellâ€™immagine e dellâ€™uso dei colori,\n</li>\n<li>aver collaborato allâ€™illustrazione di una pubblicazione,\n</li>\n<li>aver preparato una mostra fotografica o di disegno,\n</li>\n<li>aver organizzato le immagini o gestito lâ€™allestimento di un sito web,\n</li>\n<li>aver organizzato un manifesto o un volantino complesso.\n</li>\n</ul>\n<b>SpecialitÃ </b>:\nCanestraio,\n    Ceramista,\n    Dattilografo,\n    Disegnatore,\n    Elettricista,\n    Falegname,\n    Fa tutto,\n    Folclorista,\n    Fotografo,\n    Informatico,\n    Lavoratore in cuoio,\n    Osservatore,\n    Redattore,\n    Sarto,\n    Stenografo.'),
(22, 'Animazione Internazionale', 'brev/internazionale.jpg', NULL),
(23, 'Mani Abili', 'brev/maniabili.jpg', '<h2>Mani abili (Brevetto E/G)</h2>\n<p>Il repartista che vuole ottenere il brevetto di <i>mani abili</i> deve:\n</p>\n<ul>\n<li>saper:\n<ul>\n<li>risolvere con abilitÃ , fantasia e competenza i piccoli problemi relativi a elettricitÃ , acqua, falegnameria;\n</li>\n<li>portare a compimento una propria idea dal progetto alla realizzazione da solo o con la squadriglia o con il reparto;\n</li>\n<li>esercitare con discreto risultato almeno qualche abilitÃ  artigiana per fabbricare oggetti utili e svolgere lavori di manutenzione e piccole riparazioni;\n</li>\n<li>creare oggetti artistici unendo la fantasia alla manualitÃ ;\n</li>\n<li>usare correttamente attrezzi e strumenti, e curarne fedelmente la manutenzione e la riparazione. Sa distingue i vari tipi di materiali, la loro origine, la composizione, la lavorazione, sapendo come reperirli in natura, dove acquistarli, come riciclarli;\n</li>\n</ul>\n</li>\n<li>conoscere e attenersi alle norme di sicurezza, specialmente nellâ€™utilizzo di attrezzature elettriche e da taglio;\n</li>\n<li>possedere e trasmettere agli altri il gusto per le cose rifinite bene e la cura dei particolari.\n</li>\n</ul>\n<a href="http://it.scoutwiki.org/Mani_abili_%28Brevetto_E/G%29">http://it.scoutwiki.org/Mani_abili_%28Brevetto_E/G%29</a>'),
(24, 'Nocchiere', 'brev/nocchiere.jpg', NULL),
(25, 'Pioniere', 'brev/pioniere.jpg', '<h2>Pioniere (Brevetto E/G)</h2>\n<p>L''E/G che vuole ottenere il brevetto di <b>pioniere</b> deve:\n</p>\n<ul>\n<li>conoscere i diversi tipi di albero da cui trarre la materia prima, ed essere in grado di utilizzare il legname piÃ¹ indicato per le diverse costruzioni;\n</li>\n<li>aver dimostrato in piÃ¹ occasioni di saper costruire con misure esatte ciÃ² che gli serve;\n</li>\n<li>conoscere alla perfezione tutti i nodi necessari per le ordinarie attivitÃ  scout allâ€™aperto, oltre alle impiombature di giunzione edi fine per le funi;\n</li>\n<li>saper:\n<ul>\n<li>realizzare da sÃ¨ quanto gli occorre per vivere piÃ¹ comodamente allâ€™aperto;\n</li>\n<li>usare correttamente e in sicurezza gli attrezzi classici e aver provveduto con regolaritÃ  alla loro manutenzione;\n</li>\n<li>eseguire correttamente incastri e legature, sapendole utilizzare correttamente per tutte le costruzioni di squadriglia, reparto;\n</li>\n<li>la tecnica per abbattere un tronco in sicurezza, utilizzando sega, accetta, cunei e funi;\n</li>\n<li>realizzare le costruzioni da campo.\n</li>\n</ul>\n</li>\n</ul>\n\n<b>SpecialitÃ </b>:\nBoscaiolo,\n    Campeggiatore,\n    Carpentiere navale,\n    Cuciniere,\n    Disegnatore,\n    Falegname,\n    Fa tutto,\n    Geologo,\n    Hebertista,\n    Infermiere,\n    Lavoratore in cuoio,\n    Maestro dei nodi,\n    Nuotatore,\n    Osservatore,\n    Osservatore meteo,\n    Pompiere,\n    Sarto,\n    Topografo.'),
(26, 'Animazione Religiosa', 'brev/religiosa.jpg', NULL),
(27, 'Sherpa', 'brev/sherpa.jpg', '<h2>Sherpa (Brevetto E/G)</h2>\n<p>Il repartista che vuole ottenere il brevetto di <b>sherpa</b> deve:\n</p>\n<ul>\n<li>aver capacitÃ  di osservazione e orientamento, conoscere i diversi ambienti naturali e saper prevenire ed intervenire nei problemi che potrebbero verificarsi lontano dal campo o dalla base di partenza;\n</li>\n<li>aver organizzato piÃ¹ volte un''uscita, un''escursione in montagna o un percorso partendo dallo studio sulla carta prevedendo i tempi, le soste, i rifornimenti, lâ€™equipaggiamento, la fatica e i luoghi di accantonamento o di attendamento;\n</li>\n<li>aver dimostrato in piÃ¹ occasioni di avere lâ€™abitudine di osservare lâ€™ambiente attraversato e di saper riconoscere le piante, gli animali o i punti di maggior interesse naturale, storico e artistico;\n</li>\n<li>saper distinguere le tracce, saperle lasciare e seguire, conoscere i simboli e i segnali relativi a sentieri e piste;\n</li>\n<li>saper interviene in caso dâ€™incidenti di marcia (insolazione, distorsioni, affaticamento ecc.), segnalare le richieste di soccorso e individuare i punti di soccorso sul proprio itinerario;\n</li>\n<li>aver cucinato in piÃ¹ occasioni anche senza utensili e aver improvvisato un pasto con le provviste a disposizione;\n</li>\n<li>saper organizzare un menÃ¹ base (correttamente bilanciato) per un campo di reparto.\n</li>\n</ul>\n<b>SpecialitÃ </b>:\nAlpinista,\n    Amico degli animali,\n    Astronomo,\n    Boscaiolo,\n    Botanico,\n    Campeggiatore,\n    Ciclista,\n    Cuciniere,\n    Geologo,\n    Guida marina,\n    Hebertista,\n    Infermiere,\n    Naturalista,\n    Nuotatore,\n    Osservatore,\n    Osservatore meteo,\n    Segnalatore,\n    Topografo.'),
(28, 'Skipper', 'brev/skipper.jpg', NULL),
(29, 'Timoniere', 'brev/timoniere.jpg', NULL),
(30, 'Trappeur', 'brev/trappeur.jpg', '<h1>Trappeur (Brevetto E/G)</h1>\n<p>L''E/G che vuole conquistare il brevetto di trappeur deve:\n</p>\n<ul>\n<li>avere esperienza di diversi tipi di uscite in vari ambienti;\n</li>\n<li>sapere:\n<ul>\n<li>progettare le principali <a href="/Categoria:Costruzioni" title="Categoria:Costruzioni">costruzioni</a> del campo estivo e una serie di piccole costruzioni utili alla squadriglia;\n</li>\n<li>cucinare senza utensili utilizzando materiale naturale;\n</li>\n<li>preparare un pranzo completo per sÃ¨ e per la squadriglia e mantenere il fuoco sotto la brace per unâ€™intera giornata;\n</li>\n<li>organizzare e realizzare unâ€™uscita di squadriglia, procurandosi il cibo dalla <a href="/Categoria:Natura" title="Categoria:Natura">natura</a>;\n</li>\n<li>costruire un rifugio con elementi naturali, con il solo aiuto di un''<a href="/Accetta" title="Accetta">accetta</a> e del <a href="/Cordino" title="Cordino">cordino</a>.\n</li>\n</ul>\n</li>\n</ul>\n\n<b>SpecialitÃ </b>:\nAstronomo,\n    Battelliere,\n    Boscaiolo,\n    Botanico,\n    Calzolaio,\n    Campeggiatore,\n    Cuciniere,\n    Falegname,\n    Fa tutto,\n    Geologo,\n    Hebertista,\n    Infermiere,\n    Lavoratore in cuoio,\n    Naturalista,\n    Nuotatore,\n    Osservatore,\n    Osservatore meteo,\n    Pescatore,\n    Pompiere,\n    Sarto,\n    Segnalatore\n    Topografo.'),
(31, 'Soccorso', 'brev/soccorso.jpg', NULL),
(32, 'Animazione Sportiva', 'brev/sportiva.jpg', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
