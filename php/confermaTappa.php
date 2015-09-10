<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$id=$_POST['id'];
	$conferma=$_POST['conferma'];
	var_dump($conferma);
	if($conferma=="true"){
		$conferma=1;
	}else{
		$conferma=0;
	}
	$res=setTappaConquistata($id,$conferma);
	echo 202;
?>
