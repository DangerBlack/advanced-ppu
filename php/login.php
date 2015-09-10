<?php
	include('query.php');
	@$utente=$_POST['utente'];
	@$pswd=$_POST['pswd'];
	if(isLogged()){
		echo 200;
	}
	else
	if(login($utente,$pswd)){
		$expire=time()+60*60*24*30;
		setcookie("utente", $utente, $expire);
		setcookie("pswd", $pswd, $expire);
		echo 200;
	}
	else
		echo 403;
?>
