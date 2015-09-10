<?php
	include('query.php');
	$idScout=$_POST['idScout'];
	$idSpec=$_POST['idSpec'];
	deleteSpecialita($idScout,$idSpec);
	echo 410;
?>
