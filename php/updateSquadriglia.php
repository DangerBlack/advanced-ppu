<?php
	include('query.php');
	if(!isLogged())
		die("Non sei loggato");
	$idsquadriglie=$_POST['idsquadriglie'];
	$nome=$_POST['nome'];
	$sesso=$_POST['sesso'];
	$colore1=$_POST['colore1'];
	$colore2=$_POST['colore2'];
	updateSquadriglia($idsquadriglie,$nome,$sesso,$colore1,$colore2);
	echo 201;
?>
