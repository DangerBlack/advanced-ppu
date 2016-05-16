<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$utente=$_POST['utente'];
	$email=$_POST['email'];
	$pswd=$_POST['pswd'];
	$ruolo=$_POST['ruolo'];/*check privilege escalation*/
	$branca=$_POST['branca'];
	if(getRuolo()<=$ruolo){
		if(insertUser($utente,$email,$pswd,$ruolo,$branca)!=0)
			echo 201;
		else
			echo 500;
	}else{
		echo 403;
	}
?>
