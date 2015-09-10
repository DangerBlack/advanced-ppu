<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_POST['id'];
	$idSpec=$_POST['idS'];
	$impegno=$_POST['impegno'];
	insertImpegno($id,$idSpec,$impegno);
	echo 201;
?>
