<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_POST['id'];
	deleteImpegnoBrevetto($id);
	echo 410;
?>
