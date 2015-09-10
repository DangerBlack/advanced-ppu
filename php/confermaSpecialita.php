<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$scout_idscout=$_POST['idScout'];
	$specialita_idspecialita=$_POST['idSpec'];
	$conquistata=$_POST['conquistata'];
	if($conquistata=="true"){
		$conquistata=1;
	}else{
		$conquistata=0;
	}
	$res=setSpecialitaRaggiunta($scout_idscout,$specialita_idspecialita,$conquistata);

	echo 202;
?>
