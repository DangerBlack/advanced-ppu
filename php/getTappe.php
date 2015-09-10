<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_GET['id'];
	$html=$_GET['html'];
	$res=getTappe($id);
	if($html=="true"){
		echo $res[0]['metodo'];
	}else{
		echo json_encode($res);
	}
?>
