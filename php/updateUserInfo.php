<?php
	include("query.php");
	
	if(!isLogged())
		die("Non siete loggati");
		
	$id=getId();
	$utente=$_POST['utente'];
	$email=$_POST['email'];
	if(updateUserInfo($id,$utente,$email)!=0)
		echo 202;
	else
		echo 403;
?>
