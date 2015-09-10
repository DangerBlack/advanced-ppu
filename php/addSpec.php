<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_POST['id'];
	$idSpec=$_POST['idS'];
	$maestro=$_POST['maestro'];
	addSpecialita($id,$idSpec,$maestro);
	echo 201;
?>
