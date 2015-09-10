<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idScout=$_POST['idScout'];
	$idSpec=$_POST['idSpec'];
	$impegno=$_POST['impegno'];
	updateMaestroSpecialita($idScout,$idSpec,$maestro);
	echo 202;
?>
