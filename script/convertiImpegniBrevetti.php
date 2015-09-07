<?php
	include('../php/query.php');
	$database=connect();
	$res=$database->select("brevettiscout",
		[
			'brevetti_idbrevetti',
			'scout_idscout',
			'prova1',
			'prova2',
			'prova3',
			'prova4',
			'prova5',
			'prova6'
		]);
	var_dump($database->error());
	foreach($res as $r){		
		for($i=1;$i<=6;$i=$i+1){
			if((isset($r['prova'.$i]))and($r['prova'.$i]!="")){
				echo '- prova:'.$r['prova'.$i]." <br />";
				$rus=insertImpegnoBrevetto($r['scout_idscout'],$r['brevetti_idbrevetti'],$r['prova'.$i]);
				echo $rus."<br />";
			}
		}
	}
?>
