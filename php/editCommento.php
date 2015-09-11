<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idUser=getId();
	$id=$_POST['id'];
	$idScout=$_POST['idScout'];
	$titolo=$_POST['titolo'];
	$commento=$_POST['commento'];
	updateCommento($id,$idUser,$idScout,$titolo,$commento);
	echo 202;
?>
