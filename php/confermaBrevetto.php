<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$scout_idscout=$_POST['idScout'];
	$brevetti_idbrevetti=$_POST['idBrev'];
	$conquistata=$_POST['conquistata'];
	if($conquistata=="true"){
		$conquistata=1;
	}else{
		$conquistata=0;
	}
	$res=setBrevettoRaggiunto($scout_idscout,$brevetti_idbrevetti,$conquistata);

	echo 202;
?>
