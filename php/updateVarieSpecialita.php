<?php
	include('query.php');
	$scout_idscout=$_POST['idScout'];
	$specialita_idspecialita=$_POST['idSpec'];
	$varie=$_POST['varie'];
	$res=updateVarieSpecialita($scout_idscout,$specialita_idspecialita,$varie);

	echo 202;
?>
