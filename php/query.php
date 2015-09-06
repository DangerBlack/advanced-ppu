<?php
    require  'medoo.min.php';
	function connect(){
		$database = new medoo([
				// required
				'database_type' => 'mysql',
				'database_name' => 'bit_reparto',//DB_NAME
				'server' => 'localhost',
				'username' => 'gest_rep',//DB_USERNAME
				'password' => 'gest_rep',//PASSWORD
				 
				// optional
				'port' => 3306,
				//'charset' => 'utf8',
				// driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
				'option' => [
				PDO::ATTR_CASE => PDO::CASE_NATURAL
			]
		]);
		return $database;
	}
    //GESTIONE UTENTI LOGIN REGISTER ETC
    function login($mail,$pswd){
		$database=connect();
		$result=$database->has("user",[
			"AND" => [
				"mail" => $mail,
				"pswd" => $pswd
			]
		]);
		return $result;
	}
    function isLogged(){		
		$mail=$_COOKIE["mail"];
		$pswd=$_COOKIE["pswd"];
		if(login($mail,$pswd)){
			return true;
		}else{
			return false;
		}		
	}
	function getId(){
		$mail=$_COOKIE["mail"];
		return getIdFromMail($mail)[0]['id'];
	}
    function getIdFromMail($mail){
		$database=connect();
		$datas=$database->select("user",[
			"id"
		],[
			"mail[=]"=>$mail
		]);
		return $datas;
	}
	function getUser($id){
		$database=connect();
		$res=$database->select("user",[
			"id",
			"mail",
			"name",
            "picture"
		],[
			"id[=]"=>$id
		]);
		return $res;
	}
	function insertUser($name,$mail,$pswd){
		$database=connect();
		$res=$database->insert("user",[
			"name"=>$name,
			"mail"=>$mail,
			"pswd"=>$pswd
		]);
		return $res;
	}
	
	function insertScout(
							$nome,
							$cognome,
							$codice,
							$indirizzo,
							$datanascita,
							$residenza,
							$sesso,
							$luogonascita,
							$cap,
							$provincia,
							$nazione,
							$numbabbo,
							$nummamma,
							$numcasa,
							$numcell,
							$numnonno,
							$mailbabbo,
							$mailmamma,
							$mail,
							$varie,
							$photo,
							$squadriglie_idsquadriglie
						){
		$database=connect();
		$res=$database->insert("scout",[
			'nome'=>$nome,
			'cognome'=>$cognome,
			'codice'=>$codice,
			'indirizzo'=>$indirizzo,
			'datanascita'=>$datanascita,
			'residenza'=>$residenza,
			'sesso'=>$sesso,
			'luogonascita'=>$luogonascita,
			'cap'=>$cap,
			'provincia'=>$provincia,
			'nazione'=>$nazione,
			'numbabbo'=>$numbabbo,
			'nummamma'=>$numamma,
			'numcasa'=>$numcasa,
			'numcell'=>$numcell,
			'numnonno'=>$numnonno,
			'mailbabbo'=>$mailbabbo,
			'mailmamma'=>$mailmamma,
			'mail'=>$mail,
			'varie'=>$varie,
			'photo'=>$photo,
			'squadriglie_idsquadriglie'=>$squadriglie_idsquadriglie
		]);
		return $res;
	}
	function updateScout(
							$id,
							$nome,
							$cognome,
							$codice,
							$indirizzo,
							$datanascita,
							$residenza,
							$sesso,
							$luogonascita,
							$cap,
							$provincia,
							$nazione,
							$numbabbo,
							$nummamma,
							$numcasa,
							$numcell,
							$numnonno,
							$mailbabbo,
							$mailmamma,
							$mail,
							$squadriglie_idsquadriglie
						){
		$database=connect();
		$res=$database->insert("scout",[
			'nome'=>$nome,
			'cognome'=>$cognome,
			'codice'=>$codice,
			'indirizzo'=>$indirizzo,
			'datanascita'=>$datanascita,
			'residenza'=>$residenza,
			'sesso'=>$sesso,
			'luogonascita'=>$luogonascita,
			'cap'=>$cap,
			'provincia'=>$provincia,
			'nazione'=>$nazione,
			'numbabbo'=>$numbabbo,
			'nummamma'=>$numamma,
			'numcasa'=>$numcasa,
			'numcell'=>$numcell,
			'numnonno'=>$numnonno,
			'mailbabbo'=>$mailbabbo,
			'mailmamma'=>$mailmamma,
			'mail'=>$mail,
			'squadriglie_idsquadriglie'=>$squadriglie_idsquadriglie
		],
		[
			'idscout[=]'=>$id
		]);
		return $res;
	}
	
	function getScoutsList($status){
		$database=connect();
		$res=$database->select("scout",[
			'idscout',
			'nome',
			'cognome',
			'codice',
			'indirizzo',
			'datanascita',
			'residenza',
			'sesso',
			'luogonascita',
			'cap',
			'provincia',
			'nazione',
			'numbabbo',
			'nummamma',
			'numcasa',
			'numcell',
			'numnonno',
			'mailbabbo',
			'mailmamma',
			'mail',
			'varie',
			'photo',
			'squadriglie_idsquadriglie'
		],
		[
			'status[=]'=>$status,
			"ORDER" => ["squadriglie_idsquadriglie",'datanascita']
		]);
		return $res;
	}
	/*
	* status 1=passato
	 * status 2=abbandonato
	 * status 3=morto
	*/
	function getCurrentScouts(){
		return getScoutsList(0);
	}
	function getPassedScouts(){
		return getScoutsList(1);
	}
	
	function getScout($idscout){
		$database=connect();
		$res=$database->select("scout",
		[
			'idscout',
			'nome',
			'cognome',
			'codice',
			'indirizzo',
			'datanascita',
			'residenza',
			'sesso',
			'luogonascita',
			'cap',
			'provincia',
			'nazione',
			'numbabbo',
			'nummamma',
			'numcasa',
			'numcell',
			'numnonno',
			'mailbabbo',
			'mailmamma',
			'mail',
			'varie',
			'photo',
			'squadriglie_idsquadriglie(idsquadriglie)'
		],
		[
			'idscout[=]'=>$idscout
		]);
		$res[0]['specialita']=$database->select("specialitascout",
		[
			"[>]specialita" => ["specialita_idspecialita" => "idspecialita"],
		],
		[
			'specialita.idspecialita',
			'specialita.nome',
			'specialita.immagine',
			'specialitascout.maestro',
			'specialitascout.data',
			'specialitascout.conquistata',
			'specialitascout.varie'
		],
		[
			'scout_idscout[=]'=>$idscout
		]);
		foreach($res[0]['specialita'] as &$r){
			$r['impegni']=$database->select("specialitaimpegni",
			[
				'id',
				'impegno',
				'data',
				'completato'
			],
			[
				'AND'=>[
					'scout_idscout[=]'=>$idscout,
					'specialita_idspecialita[=]'=>$r['idspecialita'],
				]
			]);
		}
		
		$res[0]['brevetti']=$database->select("brevettiscout",
		[
			"[>]brevetti" => ["brevetti_idbrevetti" => "idbrevetti"],
		],
		[
			'brevetti.idbrevetti',
			'brevetti.nome',
			'brevetti.immagine',
			'brevetti.esempi',
			'brevettiscout.maestro',
			'brevettiscout.data',
			'brevettiscout.conquistata',
			'brevettiscout.prova1',
			'brevettiscout.prova2',
			'brevettiscout.prova3',
			'brevettiscout.prova4',
			'brevettiscout.prova5',
			'brevettiscout.prova6',
			'brevettiscout.varie'
		],
		[
			'scout_idscout[=]'=>$idscout
		]);
		$res[0]['tappe']=$database->select("tappescout",
		[
			"[>]tappe" => ["tappe_idtappe" => "idtappe"],
		],
		[
			'tappe.idtappe',
			'tappe.nome',
			'tappe.immagine',
			//'tappe.metodo',
			'tappescout.id',
			'tappescout.dataconquistata',
			'tappescout.conquistata'
		],
		[
			'scout_idscout[=]'=>$idscout
		]);
		foreach($res[0]['tappe'] as &$r){
			$r['mete']=$database->select("metescout",
			[
				'id',
				'idtappescout',
				'datainizio',
				'dataobiettivo',
				'raggiunta',
				'meta',
				'impegno'
			],
			[
				'idtappescout[=]'=>$r['id']
			]);
		}
		return $res;
	}
	
	function getSpecialitaList(){
		$database=connect();
		$res=$database->select("specialita",[
			'idspecialita(id)',
			'nome',
			'immagine',
			'esempi'
		]);
		return $res;
	}
	function getBrevettiList(){
		$database=connect();
		$res=$database->select("brevetti",[
			'idbrevetti(id)',
			'nome',
			'immagine',
			'esempi'
		]);
		return $res;
	}
	function addSpecialita($id,$idSpec,$maestro){
		$database=connect();
		$res=$database->insert("specialitascout",[
			'specialita_idspecialita'=>$idSpec,
			'scout_idscout'=>$id,
			'maestro'=>$maestro
		]);
		return $res;
	}
	function addBrevetti($id,$idBrev,$maestro){
		$database=connect();
		$res=$database->insert("brevettiscout",[
			'brevetti_idbrevetti'=>$idBrev,
			'scout_idscout'=>$id,
			'maestro'=>$maestro
		]);
		return $res;
	}
	/*Ottieni le info sulle tre tappe generiche*/
	function getTappe($id){
		$database=connect();
		$res=$database->select("tappe",[
			'idtappe(id)',
			'nome',
			'immagine',
			'metodo'
		],[
			'idtappe[=]'=>$id
		]);
		return $res;
	}
	/*Inset 3 tappe per ogni esploratore */
	function insertTappe($tappe_idtappe,$scout_idscout,$conquistata){
		$database=connect();
		$res=$database->insert("tappescout",[
			'tappe_idtappe'=>$tappe_idtappe,
			'scout_idscout'=>$scout_idscout,
			'conquistata'=>$conquistata
		]);
		return $res;
	}
	/*insert meta per una specifica tappa */
	function insertMete($idtappescout,$datainizio,$meta,$impegno){
		$database=connect();
		$res=$database->insert("metescout",[
			'idtappescout'=>$idtappescout,
			'datainizio'=>$datainizio,
			'meta'=>$meta,
			'impegno'=>$impegno
		]);
		return $res;
	}
	function setTappaConquistata($id,$conquistata){
		if($conquistata==1){
			$today = date('Y-m-d');
		}else{
			$today =null;
		}
		$database=connect();
		$res=$database->update("tappescout",[
			'conquistata'=>$conquistata,
			'dataconquistata'=>$today
		],[
			'id[=]'=>$id
		]);
		return $res;		
	}
	function setTappaData($id,$data){
		$database=connect();
		$res=$database->update("tappescout",[
			'dataconquistata'=>$data
		],[
			'id[=]'=>$id
		]);
		return $res;
	}
	function setMetaRaggiunta($id,$raggiunta){
		$database=connect();
		$res=$database->update("metescout",[
			'raggiunta'=>$raggiunta
		],[
			'id[=]'=>$id
		]);
		return $res;
	}
	
	function insertImpegno($scout_idscout,$specialita_idspecialita,$impegno){
		$database=connect();
		$res=$database->insert("specialitaimpegni",[
			'scout_idscout'=>$scout_idscout,
			'specialita_idspecialita'=>$specialita_idspecialita,
			'impegno'=>$impegno
		]);
		return $res;
	}
	function setImpegnoCompletato($id,$completato){
		$database=connect();
		$res=$database->update("specialitaimpegni",[
			'completato'=>$completato
		],[
			'id[=]'=>$id
		]);
		return $res;
	}
?>
