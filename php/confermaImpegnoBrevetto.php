<?php
	include('query.php');
	$id=$_POST['id'];
	$completato=$_POST['completato'];
	if($completato=="true"){
		$completato=1;
	}else{
		$completato=0;
	}
	$res=setImpegnoBrevettoCompletato($id,$completato);

	echo 202;
?>
