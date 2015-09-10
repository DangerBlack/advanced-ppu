<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$status=$_POST['status'];
	setStatusScout($idScout,$status);
	echo 201;
?>
