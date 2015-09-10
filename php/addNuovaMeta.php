<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	//{'idtappa':idTappa,"meta":meta,"impegno":impegno,"datainizio":datainizio,"datafine":datafine}
	$idTappa=$_POST['idtappa'];
	$meta=$_POST['meta'];
	$impegno=$_POST['impegno'];
	$datainizio=$_POST['datainizio'];
	$dataobiettivo=$_POST['datafine'];
	insertMete($idTappa,$datainizio,$meta,$impegno,$dataobiettivo);
	echo 201;
?>
