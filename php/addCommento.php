<?php
	include('query.php');
	$idUser=getId();
	$idScout=$_POST['id'];
	$titolo=$_POST['titolo'];
	$commento=$_POST['commento'];
	$pattern = '/(http:\/\/[a-z0-9\.\/]+)/i';
	$replacement = '<a href="$1" target="_blank">$1</a>';

	$commento = preg_replace($pattern, $replacement, $commento); 
	
	insertCommento($idUser,$idScout,$titolo,$commento);
	echo 201;
?>
