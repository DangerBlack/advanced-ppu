<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idScout=$_POST['idScout'];
	$status=$_POST['status'];
	setStatusScout($idScout,$status);
	echo 201;
?>
