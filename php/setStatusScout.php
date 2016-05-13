<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idScout=$_POST['idScout'];
	$status=$_POST['status'];
	if($status==-1){
		setStatusScout($idScout,$status);
	}else{
		$scout=getScout($idScout);
		$status=$scout["status"]+1;
		setStatusScout($idScout,$status);
	}
	echo 201;
?>
