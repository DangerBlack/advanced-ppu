<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idScout=$_POST['idScout'];
	$idBrev=$_POST['idBrev'];
	$data=$_POST['data'];
	updateDataBrevetti($idScout,$idBrev,$data);
	echo 201;
?>
