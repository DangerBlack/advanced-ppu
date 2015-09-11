<?php
	include("query.php");
	if(!isLogged())
		die("Non siete loggato");
	$id=getId();
	echo json_encode(getUser($id));
	
?>
