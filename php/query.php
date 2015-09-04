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
			'status[=]'=>$status
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
			'specialita.nome',
			'specialita.immagine',
			'specialitascout.maestro',
			'specialitascout.data',
			'specialitascout.conquistata',
			'specialitascout.prova1',
			'specialitascout.prova2',
			'specialitascout.prova3',
			'specialitascout.prova4',
			'specialitascout.prova5',
			'specialitascout.prova6',
			'specialitascout.varie'
		],
		[
			'scout_idscout[=]'=>$idscout
		]);
		$res[0]['brevetti']=$database->select("brevettiscout",
		[
			"[>]brevetti" => ["brevetti_idbrevetti" => "idbrevetti"],
		],
		[
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
		$res[0]['mete']=$database->select("mete",
		[
			"[>]tappe" => ["tappe_idtappe" => "idtappe"],
		],
		[
			'tappe.idtappe(id)',
			'tappe.nome',
			'tappe.immagine',
			'tappe.metodo',
			'mete.capo',
			'mete.data',
			'mete.conquistata',
			'mete.meta1',
			'mete.meta2',
			'mete.meta3',
			'mete.meta4',
			'mete.meta5',
			'mete.meta6',
			'mete.varie'
		],
		[
			'scout_idscout[=]'=>$idscout
		]);
		return $res;
	}
?>
