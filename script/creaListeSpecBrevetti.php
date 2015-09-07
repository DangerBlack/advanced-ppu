<?php
	$competenze=array();
	$competenze[17]="Alpinista, Amico degli animali, Astronomo, Botanico, Fotografo, Geologo, Guida, Hebertista, Infermiere, Naturalista, Nuotatore, Osservatore, Osservatore meteo, Pompiere, Segnalatore, Topografo.";
	$competenze[18]="Allevatore, Alpinista, Amico degli Animali, Astronomo, Boscaiolo, Botanico, Campeggiatore, Coltivaltore, Disegnatore, Fotografo, Giardiniere, Guida marina, Hebertista, Naturalista, Osservatore, Osservatore meteo, Pescatore, Topografo.";
	$competenze[19]="Attore, Cantante, Disegnatore, Elettricista, Falegname, Fa tutto, Fotografo, Maestro dei giochi, Musicista, Redattore, Sarto, Servizio della Parola, Servizio liturgico.";
	$competenze[20]="Amico del quartiere, Corrispondente, Corrispondente radio, Esperantista, Europeista, Folclorista, Fotografo, Guida, esperto del computer, Interprete, Osservatore, Redattore, Stenografo.";
	$competenze[21]="Artigiano, Artigiano, Dattilografo, Disegnatore, Elettricista, Falegname, Fa tutto, Folclorista, Fotografo, esperto del computer, Lavoratore in cuoio, Osservatore, Redattore, Sarto, Stenografo.";
	$competenze[22]="Archeologo, Attore, Corrispondente, Corrispondente radio, Dattilografo, Disegnatore, Esperantista, Europeista, Filatelista, Folclorista, Fotografo, esperto del computer, Interprete, Maestro dei giochi, Musicista, Numismatico, Osservatore, Redattore, Servizio missionario.";
	$competenze[23]="Aereomodellista, Boscaiolo, Artigiano, Campeggiatore, Artigiano, Carpentiere navale, Artigiano, Disegnatore, Elettricista, Falegname, Fa tutto, Giocattolaio, Lavoratore in cuoio, Maestro dei nodi, Artigiano, Meccanico, Modellista navale, Muratore, Sarto.";
	$competenze[24]="";
	$competenze[25]="Boscaiolo, Campeggiatore, Carpentiere navale, Cuoco, Disegnatore, Falegname, Fa tutto, Geologo, Hebertista, Infermiere, Lavoratore in cuoio, Maestro dei nodi, Nuotatore, Osservatore, Osservatore meteo, Pompiere, Sarto, Topografo.";
	$competenze[26]="Attore, Cantante, Corrispondente, Dattilografo, Disegnatore, Esperantista, Falegname, Folclorista, Fotografo, esperto del computer, Interprete, Lavoratore in cuoio, Musicista, Redattore, Sarto, Servizio della Parola, Servizio liturgico, Servizio missionario.";
	$competenze[27]="Alpinista, Amico degli animali, Astronomo, Boscaiolo, Botanico, Campeggiatore, Ciclista, Cuoco, Geologo, Guida marina, Hebertista, Infermiere, Naturalista, Nuotatore, Osservatore, Osservatore meteo, Segnalatore, Topografo.";
	$competenze[28]="";
	$competenze[29]="";
	$competenze[30]="Astronomo, Battelliere, Boscaiolo, Botanico, Artigiano, Campeggiatore, Cuoco, Falegname, Fa tutto, Geologo, Hebertista, Infermiere, Lavoratore in cuoio, Naturalista, Nuotatore, Osservatore, Osservatore meteo, Pescatore, Pompiere, Sarto, Segnalatore.";
	$competenze[31]="Alpinista, Botanico, Campeggiatore, Corrispondente radio, Fa tutto, Hebertista, Infermiere, esperto del computer, Naturalista, Nuotatore, Pompiere, Segnalatore, Topografo.";
	$competenze[32]="Alpinista, Atletica leggera, Ciclista, Hebertista, Infermiere, Maestro dei giochi, Nuotatore, Scout e Guida di Olimpia.";
	include("../php/query.php");
	
	$database=connect();
	$res=$database->select("brevetti",
		[
			'idbrevetti',
			'nome'
		]);
		
	foreach($res as $b){
		$problem="";
		$temp=explode(",",$competenze[$b['idbrevetti']]);
		echo "temp[".$b['idbrevetti']."]=[";
		foreach($temp as $nome){
			$def=str_replace(".","",$nome);
			if(strlen($def)>1 and $def[0]==" "){
				$def=substr($def,1,strlen($def));
			}
			$def=lcfirst($def);
			@$id=cercaNome($def)[0]['idspecialita'];
			if($id!=0){
				echo $id.",";
			}else{
				$problem=$problem."<p>PROBLEMI CON *".$def."*</p>";
			}
			
		}
		echo "x];<br />";
		//echo "<br />".$problem."<br />";
	}
	
	function cercaNome($nome){
		$database=connect();
		$res=$database->select("specialita",
		[
			'idspecialita',
			'nome'
		],[
			'nome[=]'=>$nome
		]);
		return $res;
	}
?>
