<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$idSpec=$_POST['idSpec'];
	$maestro=$_POST['maestro'];
	updateMaestroSpecialita($idScout,$idSpec,$maestro);
	echo 201;
?>
