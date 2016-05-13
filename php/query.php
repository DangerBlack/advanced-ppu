<?php
	/*
		Copyright 2015 Daniele Baschieri
		version: 1.01

		This file is part of Advanced P.P.U.

		Advanced P.P.U. is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		Advanced P.P.U. is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with Advanced P.P.U.  If not, see <http://www.gnu.org/licenses/>.
	*/
    require  'medoo.min.php';
	function connect(){
		/*
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
		*/
		$database = new medoo([
                // required
                'database_type' => 'sqlite',
                'database_file' => '../archive/test_appu.sqlite'
        ]);
		return $database;
	}
    //GESTIONE UTENTI LOGIN REGISTER ETC
    function login($utente,$pswd){
		$database=connect();
		$result=$database->has("utenti",[
			"AND" => [
				"utente" => $utente,
				"pswd" => $pswd
			]
		]);
		return $result;
	}
    function isLogged(){
		@$utente=$_COOKIE["utente"];
		@$pswd=$_COOKIE["pswd"];
		if(login($utente,$pswd)){
			return true;
		}else{
			return false;
		}
	}
	function getId(){
		$utente=$_COOKIE["utente"];
		return getIdFromUtente($utente)[0]['id'];
	}
    function getIdFromMail($mail){
		$database=connect();
		$datas=$database->select("utenti",[
			"id"
		],[
			"email[=]"=>$mail
		]);
		return $datas;
	}
	function getIdFromUtente($utente){
		$database=connect();
		$datas=$database->select("utenti",[
			"id"
		],[
			"utente[=]"=>$utente
		]);
		return $datas;
	}
	function getUser($id){
		$database=connect();
		$res=$database->select("utenti",[
			"id",
			"email",
			"utente",
            "photo",
			"ruolo",
			"branca"
		],[
			"id[=]"=>$id
		]);
		return $res;
	}

	function getRuolo(){
		$id=getId();
		$user=getUser($id);
		$ruolo=$user['branca'];
		return $ruolo;
	}
	function insertUser($utente,$mail,$pswd){
		$database=connect();
		$res=$database->insert("utenti",[
			"utente"=>$utente,
			"email"=>$mail,
			"pswd"=>$pswd
		]);
		return $res;
	}
	function updateUserInfo($id,$utente,$email){
		$database=connect();
		$res=$database->update("utenti",[
			"utente"=>$utente,
			"email"=>$email
		],[
			"id[=]"=>$id
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
			'nummamma'=>$nummamma,
			'numcasa'=>$numcasa,
			'numcell'=>$numcell,
			'numnonno'=>$numnonno,
			'mailbabbo'=>$mailbabbo,
			'mailmamma'=>$mailmamma,
			'mail'=>$mail,
			'photo'=>$photo,
			'squadriglie_idsquadriglie'=>$squadriglie_idsquadriglie,
			'status'=>getRuolo()
		]);
		if($res!=0)
			insert3Tappe($res);
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
		$res=$database->update("scout",[
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
			'nummamma'=>$nummamma,
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
		$filtro_ruolo=[
			'status[=]'=>getRuolo(),
			"ORDER" => ["squadriglie_idsquadriglie",'datanascita']
		];
		if(getRuolo()==0){
			$filtro_ruolo=[
				'status[<]'=>4,
				"ORDER" => ["squadriglie_idsquadriglie",'datanascita']
			];
		}
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
			'photo',
			'squadriglie_idsquadriglie'
		],
		$filtro_ruolo);
		return $res;
	}
	/*
	* status 1=lupi
	 * status 2=reparto
	 * status 3=clan
	 * status 4=partenza
	 * status -1= abbandonato
	*/
	function getCurrentScouts(){
		return getScoutsList(getRuolo());
	}
	function getPassedScouts(){
		return getScoutsList(1);
	}
	function getCurrentScoutsName(){
		$database=connect();
		$filtro_ruolo=[
			'status[=]'=>getRuolo(),
			"ORDER" => ["cognome","nome"]
		];
		if(getRuolo()==0){
			$filtro_ruolo=[
				'status[<]'=>4,
				"ORDER" => ["cognome","nome"]
			];
		}
		$res=$database->select("scout",[
			'nome',
			'cognome'
		],
			$filtro_ruolo
		);
		return $res;
	}
	function setStatusScout($idscout,$status){
		$database=connect();
		$res=$database->update("scout",[
			'status'=>$status
		],
		[
			'idscout[=]'=>$idscout
		]);
		return $res;
	}
	function getScout($idscout){
		$database=connect();
		$res=$database->select("scout",[
			'[>]squadriglie'=>['squadriglie_idsquadriglie'=>'idsquadriglie']
		],
		[
			'scout.idscout',
			'squadriglie.nome(nomeSq)',
			'squadriglie.colore1',
			'squadriglie.colore2',
			'scout.nome',
			'scout.cognome',
			'scout.codice',
			'scout.indirizzo',
			'scout.datanascita',
			'scout.residenza',
			'scout.sesso',
			'scout.luogonascita',
			'scout.cap',
			'scout.provincia',
			'scout.nazione',
			'scout.numbabbo',
			'scout.nummamma',
			'scout.numcasa',
			'scout.numcell',
			'scout.numnonno',
			'scout.mailbabbo',
			'scout.mailmamma',
			'scout.mail',
			'scout.photo',
			'scout.squadriglie_idsquadriglie(idsquadriglie)',
			'status'
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
			'brevettiscout.varie'
		],
		[
			'scout_idscout[=]'=>$idscout
		]);

		foreach($res[0]['brevetti'] as &$r){
			$r['impegni']=$database->select("brevettiimpegni",
			[
				'id',
				'impegno',
				'data',
				'completato'
			],
			[
				'AND'=>[
					'scout_idscout[=]'=>$idscout,
					'brevetti_idbrevetti[=]'=>$r['idbrevetti'],
				]
			]);
		}


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

		$res[0]['commenti']=selectCommenti($idscout);

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
	function getSpecialitaListFilter($filter){
		$database=connect();
		$res=$database->select("specialita",[
			'idspecialita(id)',
			'nome',
			'immagine',
			'esempi'
		],[
			"idspecialita[=]"=>$filter
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

	function insert3Tappe($scout_idscout){
		for($i=1;$i<=6;$i++){
			insertTappe($i,$scout_idscout,0);
		}
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
	function insertMete($idtappescout,$datainizio,$meta,$impegno,$dataobiettivo){
		$database=connect();
		$res=$database->insert("metescout",[
			'idtappescout'=>$idtappescout,
			'datainizio'=>$datainizio,
			'dataobiettivo'=>$dataobiettivo,
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
	function insertImpegnoBrevetto($scout_idscout,$brevetti_idbrevetti,$impegno){
		$database=connect();
		$res=$database->insert("brevettiimpegni",[
			'scout_idscout'=>$scout_idscout,
			'brevetti_idbrevetti'=>$brevetti_idbrevetti,
			'impegno'=>$impegno
		]);
		return $res;
	}
	function setImpegnoBrevettoCompletato($id,$completato){
		$database=connect();
		$res=$database->update("brevettiimpegni",[
			'completato'=>$completato
		],[
			'id[=]'=>$id
		]);
		return $res;
	}
	function setSpecialitaRaggiunta($scout_idscout,$specialita_idspecialita,$conquistata){
		if($conquistata==1){
			$today = date('Y-m-d');
		}else{
			$today =null;
		}
		$database=connect();
		$res=$database->update("specialitascout",[
			'conquistata'=>$conquistata,
			'data'=>$today
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'specialita_idspecialita[=]'=>$specialita_idspecialita,
			]
		]);
		return $res;
	}
	function setBrevettoRaggiunto($scout_idscout,$brevetti_idbrevetti,$conquistata){
		if($conquistata==1){
			$today = date('Y-m-d');
		}else{
			$today =null;
		}
		$database=connect();
		$res=$database->update("brevettiscout",[
			'conquistata'=>$conquistata,
			'data'=>$today
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'brevetti_idbrevetti[=]'=>$brevetti_idbrevetti,
			]
		]);
		return $res;
	}
	function updateVarieSpecialita($scout_idscout,$specialita_idspecialita,$varie){
		$database=connect();
		$res=$database->update("specialitascout",[
			'varie'=>$varie,
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'specialita_idspecialita[=]'=>$specialita_idspecialita,
			]
		]);
		return $res;
	}
	function updateVarieBrevetto($scout_idscout,$brevetti_idbrevetti,$varie){
		$database=connect();
		$res=$database->update("brevettiscout",[
			'varie'=>$varie,
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'brevetti_idbrevetti[=]'=>$brevetti_idbrevetti,
			]
		]);
		return $res;
	}
	function getSquadriglie(){
		$database=connect();
		$res=$database->select("squadriglie",[
			'idsquadriglie',
			'nome',
			'sesso',
			'guidone',
			'colore1',
			'colore2'
		]);
		return $res;
	}
	function deleteMeta($id){
		$database=connect();
		$res=$database->delete("metescout",[
			'id[=]'=>$id
		]);
		return $res;

	}
	function deleteImpegno($id){
		$database=connect();
		$res=$database->delete("specialitaimpegni",[
			'id[=]'=>$id
		]);
		return $res;

	}
	function deleteImpegnoBrevetto($id){
		$database=connect();
		$res=$database->delete("brevettiimpegni",[
			'id[=]'=>$id
		]);
		return $res;

	}
	function selectCommenti($scout_idscout){
		$database=connect();
		$res=$database->select("commenti",[
			'[>]utenti'=>['idutenti'=>'id']
		],[
			'commenti.id',
			'commenti.idutenti',
			'utenti.utente(username)',
			'utenti.photo',
			'commenti.data',
			'commenti.titolo',
			'commenti.testo'
		],[
			'commenti.scout_idscout[=]'=>$scout_idscout
		]);
		$id=getId();
		foreach($res as &$r){
			if($r['idutenti']==$id)
				$r['owner']=True;
			else
				$r['owner']=False;
		}
		return $res;
	}
	function insertCommento($idutenti,$scout_idscout,$titolo,$testo){
		$database=connect();
		$res=$database->insert("commenti",[
			'idutenti'=>$idutenti,
			'scout_idscout'=>$scout_idscout,
			'titolo'=>$titolo,
			'testo'=>$testo
		]);
	}
	function updateCommento($id,$idutenti,$scout_idscout,$titolo,$testo){
		$database=connect();
		$res=$database->update("commenti",[
			'titolo'=>$titolo,
			'testo'=>$testo
		],[
			'AND'=>[
					'id[=]'=>$id,
					'scout_idscout[=]'=>$scout_idscout,
					'idutenti[=]'=>$idutenti
			]
		]);
		return $res;
	}
	function updateMaestroSpecialita($scout_idscout,$specialita_idspecialita,$maestro){
		$database=connect();
		$res=$database->update("specialitascout",[
			'maestro'=>$maestro,
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'specialita_idspecialita[=]'=>$specialita_idspecialita,
			]
		]);
		return $res;
	}
	function updateMaestroBrevetti($scout_idscout,$brevetti_idbrevetti,$maestro){
		$database=connect();
		$res=$database->update("brevettiscout",[
			'maestro'=>$maestro,
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'brevetti_idbrevetti[=]'=>$brevetti_idbrevetti,
			]
		]);
		return $res;
	}
	function updateDataSpecialita($scout_idscout,$specialita_idspecialita,$data){
		$database=connect();
		$res=$database->update("specialitascout",[
			'data'=>$data,
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'specialita_idspecialita[=]'=>$specialita_idspecialita,
			]
		]);
		return $res;
	}
	function updateDataBrevetti($scout_idscout,$brevetti_idbrevetti,$data){
		$database=connect();
		$res=$database->update("brevettiscout",[
			'data'=>$data,
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'brevetti_idbrevetti[=]'=>$brevetti_idbrevetti,
			]
		]);
		return $res;
	}
	function updateDataTappa($scout_idscout,$tappe_idtappe,$data){
		$database=connect();
		$res=$database->update("tappescout",[
			'dataconquistata'=>$data,
		],[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'tappe_idtappe[=]'=>$tappe_idtappe,
			]
		]);
		return $res;
	}
	function deleteSpecialita($scout_idscout,$specialita_idspecialita){
		$database=connect();
		$res=$database->delete("specialitascout",[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'specialita_idspecialita[=]'=>$specialita_idspecialita,
			]
		]);

		$res=$database->delete("specialitaimpegni",[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'specialita_idspecialita[=]'=>$specialita_idspecialita,
			]
		]);
		return $res;
	}
	function deleteBrevetto($scout_idscout,$brevetto_idbrevetto){
		$database=connect();
		$res=$database->delete("brevettiscout",[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'brevetti_idbrevetti[=]'=>$brevetto_idbrevetto,
			]
		]);

		$res=$database->delete("brevettiimpegni",[
			'AND'=>[
					'scout_idscout[=]'=>$scout_idscout,
					'brevetti_idbrevetti[=]'=>$brevetto_idbrevetto,
			]
		]);
		return $res;
	}
	function getElencoSpecialitaScout(){
		$database=connect();
		$res=$database->select("specialitascout",[
			'[>]scout'=>['scout_idscout'=>'idscout'],
			'[>]specialita'=>['specialita_idspecialita'=>'idspecialita']
		],[
			'scout.nome',
			'scout.cognome',
			'scout.idscout',
			'scout.photo',
			'scout.datanascita',
			'specialita.idspecialita',
			'specialita.nome(sname)',
			'specialita.immagine(sphoto)',
			'specialitascout.maestro',
			'specialitascout.conquistata'
		],[
			'scout.status[=]'=>0,
			'ORDER'=>['sname']
		]);
		return $res;
	}
	function insertSquadriglia($nome,$sesso,$colore1,$colore2){
		$database=connect();
		$res=$database->insert("squadriglie",[
			'nome'=>$nome,
			'sesso'=>$sesso,
			'colore1'=>$colore1,
			'colore2'=>$colore2
		]);
		return $res;
	}
	function updateSquadriglia($idsquadriglie,$nome,$sesso,$colore1,$colore2){
		$database=connect();
		$res=$database->update("squadriglie",[
			'nome'=>$nome,
			'sesso'=>$sesso,
			'colore1'=>$colore1,
			'colore2'=>$colore2
		],[
			'idsquadriglie[=]'=>$idsquadriglie
		]);
		return $res;
	}
	function updatePswd($id,$pswd,$newpswd){
		$database=connect();
		$res=$database->update("utenti",
		[
			'pswd'=>$newpswd
		],[
			'AND'=>[
					'id[=]'=>$id,
					'pswd[=]'=>$pswd,
			]
		]);
		return $res;
	}
	function updateScoutImage($id_scout,$photo){
		$database=connect();
		$res=$database->update("scout",
		[
			'photo'=>$photo
		],[
			'idscout[=]'=>$id_scout
		]);
		return $res;
	}
?>
