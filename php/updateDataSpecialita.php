<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$idSpec=$_POST['idSpec'];
	$data=$_POST['data'];
	updateDataSpecialita($idScout,$idSpec,$data);
	echo 201;
?>
