<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$utente=$_POST['utente'];
	$email=$_POST['email'];
	$pswd=$_POST['pswd'];
	if(insertUser($utente,$email,$pswd)!=0)
		echo 201;
	else
		503:
?>
