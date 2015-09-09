<?php
	include('../php/query.php');
	$database=connect();
	$res=$database->select("scout",
		[
			'idscout',
			'varie'
		]);
	var_dump($database->error());
	foreach($res as $r){
		if((isset($r['varie']))and($r['varie']!=""))
			insertCommento(7,$r['idscout'],'Vecchi commenti',$r['varie']);
	}
?>
