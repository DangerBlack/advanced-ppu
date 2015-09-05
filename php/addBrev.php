<?php
	include('query.php');
	$id=$_POST['id'];
	$idBrev=$_POST['idB'];
	$maestro=$_POST['maestro'];
	echo addBrevetti($id,$idBrev,$maestro);
?>
