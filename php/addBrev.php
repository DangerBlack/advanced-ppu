<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_POST['id'];
	$idBrev=$_POST['idB'];
	$maestro=$_POST['maestro'];
	addBrevetti($id,$idBrev,$maestro);
	echo 201;
?>
