<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idScout=$_POST['idScout'];
	$idBrev=$_POST['idBrev'];
	deleteBrevetto($idScout,$idBrev);
	echo 410;
?>
