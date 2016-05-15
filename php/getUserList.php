<?php
	include("query.php");
	if(!isLogged())
		die("Non sei loggato");
	echo json_encode(getUserList());
?>
