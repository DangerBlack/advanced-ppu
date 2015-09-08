<?php
	include('query.php');
	$id=$_POST['id'];
	deleteMeta($id);
	echo 403;
?>
