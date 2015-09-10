<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idScout=$_POST['idScout'];
	$idSpec=$_POST['idSpec'];
	deleteSpecialita($idScout,$idSpec);
	echo 410;
?>
