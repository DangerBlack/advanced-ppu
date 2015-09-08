<?php
	include('query.php');
	$id=$_POST['id'];
	$idSpec=$_POST['idS'];
	$maestro=$_POST['maestro'];
	addSpecialita($id,$idSpec,$maestro);
	echo 201;
?>
