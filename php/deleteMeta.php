<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_POST['id'];
	deleteMeta($id);
	echo 403;
?>
