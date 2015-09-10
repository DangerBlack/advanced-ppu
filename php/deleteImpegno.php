<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_POST['id'];
	deleteImpegno($id);
	echo 410;
?>
