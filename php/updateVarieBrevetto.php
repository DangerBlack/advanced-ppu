<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$scout_idscout=$_POST['idScout'];
	$brevetti_idbrevetti=$_POST['idBrev'];
	$varie=$_POST['varie'];
	$res=updateVarieBrevetto($scout_idscout,$brevetti_idbrevetti,$varie);

	echo 202;
?>
