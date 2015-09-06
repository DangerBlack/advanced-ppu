<?php
	include('../php/query.php');
	$database=connect();
	$res=$database->select("mete",
		[
			'tappe_idtappe',
			'scout_idscout',
			'capo',
			'data',
			'conquistata',
			'meta1',
			'meta2',
			'meta3',
			'meta4',
			'meta5',
			'meta6',
			'varie'
		]);
	foreach($res as $r){
		$idtappescout=insertTappe($r['tappe_idtappe'],$r['scout_idscout'],$r['conquistata']);
		$today = date('Y-m-d');
		echo "la tappa inserita:".$idtappescout." ".$today."<br />";
		
		for($i=1;$i<=6;$i=$i+1){
			if((isset($r['meta'.$i]))and($r['meta'.$i]!="")){
				echo '- Meta:'.$r['meta'.$i]." <br />";
				$rus=insertMete($idtappescout,$today,$r['meta'.$i],"");
				echo $rus."<br />";
			}
		}
	}
?>
