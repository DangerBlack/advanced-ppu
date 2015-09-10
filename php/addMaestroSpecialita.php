<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$idSpec=$_POST['idSpec'];
	$impegno=$_POST['impegno'];
	updateMaestroSpecialita($idScout,$idSpec,$maestro);
	echo 202;
?>
