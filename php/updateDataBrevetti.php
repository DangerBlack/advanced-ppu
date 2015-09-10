<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$idBrev=$_POST['idBrev'];
	$data=$_POST['data'];
	updateDataBrevetti($idScout,$idBrev,$data);
	echo 201;
?>
