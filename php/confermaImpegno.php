<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_POST['id'];
	$completato=$_POST['completato'];
	if($completato=="true"){
		$completato=1;
	}else{
		$completato=0;
	}
	$res=setImpegnoCompletato($id,$completato);

	echo 202;
?>
