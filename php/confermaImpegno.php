<?php
	include('query.php');
	$id=$_POST['id'];
	$completato=$_POST['completato'];
	if($completato){
		$completato=1;
	}else{
		$completato=0;
	}
	$res=setImpegnoCompletato($id,$completato);

	echo 202;
?>
