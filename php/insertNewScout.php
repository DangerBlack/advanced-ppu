<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$nome=$_POST['nome'];
	$cognome=$_POST['cognome'];
	$codice=$_POST['codice'];
	$indirizzo=$_POST['indirizzo'];
	$datanascita=$_POST['datanascita'];
	$residenza=$_POST['residenza'];
	$sesso=$_POST['sesso'];
	$luogonascita=$_POST['luogonascita'];
	$cap=$_POST['cap'];
	$provincia=$_POST['provincia'];
	$nazione=$_POST['nazione'];
	$numbabbo=$_POST['numbabbo'];
	$nummamma=$_POST['nummamma'];
	$numcasa=$_POST['numcasa'];
	$numcell=$_POST['numcell'];
	$numnonno=$_POST['numnonno'];
	$mailbabbo=$_POST['mailbabbo'];
	$mailmamma=$_POST['mailmamma'];
	$mail=$_POST['mail'];
	$photo='user.jpg';
	$squadriglie_idsquadriglie=$_POST['idsquadriglie'];
	
	$res=insertScout(
				$nome,
				$cognome,
				$codice,
				$indirizzo,
				$datanascita,
				$residenza,
				$sesso,
				$luogonascita,
				$cap,
				$provincia,
				$nazione,
				$numbabbo,
				$nummamma,
				$numcasa,
				$numcell,
				$numnonno,
				$mailbabbo,
				$mailmamma,
				$mail,
				$photo,
				$squadriglie_idsquadriglie
			);
	
	if($res!=0){
		echo 200;
	}else{
		echo 500;
	}
?>



