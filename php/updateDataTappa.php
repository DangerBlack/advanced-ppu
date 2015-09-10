<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$idtappa=$_POST['idtappa'];
	$data=$_POST['data'];
	updateDataTappa($idScout,$idtappa,$data);
	echo 201;
?>
