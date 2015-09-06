<?php
	include('../php/query.php');
	$database=connect();
	$res=$database->select("specialitascout",
		[
			'specialita_idspecialita',
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
				echo '- Prova:'.$r['prova'.$i]." <br />";
				$rus=insertImpegno($r['scout_idscout'],$r['specialita_idspecialita'],$r['prova'.$i]);
				echo $rus."<br />";
			}
		}
	}
?>
