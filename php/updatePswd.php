<?php
	include("query.php");
		if(!isLogged())
		die("Non sei loggato");
	$id=getId();
	$pswd=$_POST['pswd'];
	$newpswd=$_POST['newpswd'];
	if(updatePswd($id,$pswd,$newpswd)!=0){
		echo 202;
	}else{
		echo 304;
	}
?>
