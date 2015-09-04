<?php
	include('query.php');
	$id=$_POST['id'];
	echo json_encode(getScout($id));
?>
