<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idScout=$_POST['idScout'];
	$idBrev=$_POST['idBrev'];
	$maestro=$_POST['maestro'];
	updateMaestroBrevetti($idScout,$idBrev,$maestro);
	echo 201;
?>
