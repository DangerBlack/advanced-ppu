<?php
	include('query.php');
	$id=$_POST['id'];
	$idSpec=$_POST['idS'];
	$maestro=$_POST['maestro'];
	echo addSpecialita($id,$idSpec,$maestro);
?>
