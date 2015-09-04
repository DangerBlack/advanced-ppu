<?php
	include('query.php');
	@$mail=$_POST['mail'];
	@$pswd=$_POST['pswd'];
	
	if(isLogged()){
		echo 200;
	}
	else
	if(login($mail,$pswd)){
		$expire=time()+60*60*24*30;
		setcookie("mail", $mail, $expire);
		setcookie("pswd", $pswd, $expire);
		echo 200;
	}
	else
		echo 403;
?>
