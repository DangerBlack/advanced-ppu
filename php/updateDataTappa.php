<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idScout=$_POST['idScout'];
	$idtappa=$_POST['idtappa'];
	$data=$_POST['data'];
	updateDataTappa($idScout,$idtappa,$data);
	echo 201;
?>
