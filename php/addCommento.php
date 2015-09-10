<?php
	include('query.php');
	$idUser=getId();
	$idScout=$_POST['id'];
	$titolo=$_POST['titolo'];
	$commento=$_POST['commento'];
	insertCommento($idUser,$idScout,$titolo,$commento);
	echo 201;
?>
