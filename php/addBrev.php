<?php
	include('query.php');
	$id=$_POST['id'];
	$idBrev=$_POST['idB'];
	$maestro=$_POST['maestro'];
	addBrevetti($id,$idBrev,$maestro);
	echo 200;
?>
