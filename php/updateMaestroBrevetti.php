<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$idBrev=$_POST['idBrev'];
	$maestro=$_POST['maestro'];
	updateMaestroBrevetti($idScout,$idBrev,$maestro);
	echo 201;
?>
